import { NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const bunnyGuid = (body.bunnyGuid as string) || (body.videoId as string);

  if (!bunnyGuid) {
    return NextResponse.json({ error: 'Missing bunnyGuid' }, { status: 400 });
  }

  // Get user from auth header
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Verify the user's token
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const {
      data: { user },
      error: authError,
    } = await userClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
    }

    const adminSupabase = createAdminSupabaseClient();

    // Insert purchase record using bunny_guid
    const { error: insertError } = await adminSupabase
      .from('purchases')
      .insert({ user_id: user.id, bunny_guid: bunnyGuid });

    if (insertError) {
      // Might be duplicate
      if (insertError.code === '23505') {
        return NextResponse.json(
          { success: true, message: 'Already purchased' },
          { status: 200 }
        );
      }
      console.error('Purchase insert error:', insertError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Also update has_paid on profiles for backward compatibility
    await adminSupabase
      .from('profiles')
      .update({ has_paid: true })
      .eq('id', user.id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Purchase error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
