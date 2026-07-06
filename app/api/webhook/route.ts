import { NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';

export async function POST(req: Request) {
  let body: Record<string, unknown>;

  // Defensive JSON parsing
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid Payload Parsing' },
      { status: 400 }
    );
  }

  try {
    // Extract event type from the payload
    const event = (body.event as string) || (body.type as string) || '';

    // Check for valid payment confirmation events
    const validEvents = ['payment.captured', 'checkout.session.completed'];
    if (!validEvents.includes(event)) {
      return NextResponse.json(
        { received: true, processed: false, reason: 'Event type not handled' },
        { status: 200 }
      );
    }

    // Extract user identity from payload
    // Supports multiple payment provider payload structures
    const payload = (body.payload as Record<string, unknown>) || body;
    const entity = (payload.entity as Record<string, unknown>) ||
      (payload.data as Record<string, unknown>) ||
      payload;

    const extractedEmail =
      (entity.email as string) ||
      (entity.customer_email as string) ||
      ((entity.customer as Record<string, unknown>)?.email as string) ||
      '';

    if (!extractedEmail) {
      return NextResponse.json(
        { error: 'No email found in payload' },
        { status: 400 }
      );
    }

    // Supabase admin client for service-role mutation
    const adminSupabase = createAdminSupabaseClient();

    // Update the profiles table to mark user as paid
    const { error: updateError } = await adminSupabase
      .from('profiles')
      .update({ has_paid: true })
      .eq('email', extractedEmail);

    if (updateError) {
      console.error('Supabase update error:', updateError);
      return NextResponse.json(
        { error: 'Database update failed', details: updateError.message },
        { status: 500 }
      );
    }

    // Success confirmation
    return NextResponse.json(
      { received: true, updated: true },
      { status: 200 }
    );
  } catch (err) {
    console.error('Webhook processing error:', err);
    return NextResponse.json(
      { error: 'Internal webhook processing error' },
      { status: 500 }
    );
  }
}
