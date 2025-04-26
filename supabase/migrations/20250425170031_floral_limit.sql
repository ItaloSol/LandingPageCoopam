/*
  # CMS Tables Creation

  1. New Tables
    - `pages` - Stores static page content
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `content` (jsonb)
      - `updated_at` (timestamp)
    - `news` - Stores news articles
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `image_url` (text)
      - `published_at` (timestamp)
      - `created_at` (timestamp)
    - `sections` - Stores homepage section content
      - `id` (uuid, primary key)
      - `name` (text)
      - `content` (jsonb)
      - `order` (integer)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to pages"
  ON pages
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to update pages"
  ON pages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- News table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to news"
  ON news
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage news"
  ON news
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Sections table
CREATE TABLE IF NOT EXISTS sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  "order" integer NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to sections"
  ON sections
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage sections"
  ON sections
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);