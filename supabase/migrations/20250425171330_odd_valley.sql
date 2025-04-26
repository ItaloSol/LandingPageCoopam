/*
  # Add News Fields and Featured Flag

  1. Changes
    - Add featured flag to news table
    - Add summary field to news table
    - Add category field to news table

  2. Security
    - Maintain existing RLS policies
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'news' AND column_name = 'featured'
  ) THEN
    ALTER TABLE news ADD COLUMN featured boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'news' AND column_name = 'summary'
  ) THEN
    ALTER TABLE news ADD COLUMN summary text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'news' AND column_name = 'category'
  ) THEN
    ALTER TABLE news ADD COLUMN category text;
  END IF;
END $$;