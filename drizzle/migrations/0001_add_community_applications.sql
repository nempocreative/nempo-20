CREATE TABLE public.community_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  interest text NOT NULL,
  reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.community_applications TO anon;
GRANT SELECT, INSERT ON public.community_applications TO authenticated;
GRANT ALL ON public.community_applications TO service_role;

ALTER TABLE public.community_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can apply" ON public.community_applications
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read applications" ON public.community_applications
  FOR SELECT TO authenticated
  USING (true);