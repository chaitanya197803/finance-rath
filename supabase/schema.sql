-- Finance Rath Supabase Database Schema for Leads Management (Idempotent SQL)

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  whatsapp TEXT,
  city TEXT NOT NULL,
  loan_type TEXT NOT NULL DEFAULT 'personal-loan',
  loan_amount TEXT DEFAULT '0',
  employment_type TEXT DEFAULT 'Salaried',
  monthly_income TEXT DEFAULT '0',
  existing_emi TEXT DEFAULT '0',
  preferred_contact TEXT DEFAULT 'Call',
  message TEXT,
  source TEXT DEFAULT 'Website Lead Form',
  status TEXT NOT NULL DEFAULT 'NEW',
  assigned_advisor TEXT DEFAULT 'Unassigned',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_follow_up TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop policy if it already exists to prevent Postgres error 42710
DROP POLICY IF EXISTS "Allow public access on leads" ON public.leads;

-- Create policy for full public access (inserts, reads, updates, deletes)
CREATE POLICY "Allow public access on leads" 
  ON public.leads FOR ALL TO public USING (true) WITH CHECK (true);

-- Create indexes if not exists
CREATE INDEX IF NOT EXISTS idx_leads_lead_id ON public.leads(lead_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_mobile ON public.leads(mobile);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
