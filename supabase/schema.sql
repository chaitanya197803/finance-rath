-- Finance Rath Supabase Database Schema for Leads Management

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

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for website lead forms
CREATE POLICY "Allow public inserts on leads" 
  ON public.leads 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Allow public/authenticated read and manage operations
CREATE POLICY "Allow full access on leads for management" 
  ON public.leads 
  FOR ALL 
  TO public 
  USING (true)
  WITH CHECK (true);

-- Create index for fast searching
CREATE INDEX IF NOT EXISTS idx_leads_lead_id ON public.leads(lead_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_mobile ON public.leads(mobile);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
