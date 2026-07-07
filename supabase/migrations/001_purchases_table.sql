-- ============================================================
-- Hobbies of Shubha — Per-Video Purchases Table
-- Run this in your Supabase SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  bunny_guid TEXT NOT NULL,
  purchased_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(user_id, bunny_guid)
);

-- Enable Row Level Security
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Users can only view their own purchases
CREATE POLICY "Users can view own purchases"
  ON purchases FOR SELECT
  USING (auth.uid() = user_id);

-- Only service role (server-side) can insert purchases
CREATE POLICY "Service role can insert purchases"
  ON purchases FOR INSERT
  WITH CHECK (true);
