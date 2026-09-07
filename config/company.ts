export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  subheadline: string;
  phone: string;
  whatsapp: string;
  email: string;
  officeAddress: string;
  cityArea: string;
  domain: string;
  lenderPartners: string;
  disclaimerText: string;
  placeholdersChecklist: Array<{
    field: string;
    value: string;
    notes: string;
  }>;
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "Finance Rath",
  legalName: "Finance Rath Advisory Services",
  tagline: "Your Loan. Compared. Simplified.",
  subheadline: "Tell us what you need. We compare suitable loan options from multiple lending partners and help you choose the right option.",
  phone: "88888 99999",
  whatsapp: "918888899999",
  email: "info@financerath.com",
  officeAddress: "City Center Mall, Station Road, Durg, Chhattisgarh - 491001",
  cityArea: "All Over Chhattisgarh & Pan-India Network",
  domain: "financerath.com",
  lenderPartners: "Multiple Banks & RBI-Regulated NBFC Partners",
  disclaimerText:
    "Loan approval, interest rates, processing fees, tenure and other terms are subject to the policies, eligibility criteria and final approval of the respective lender. We do not guarantee loan approval or a specific interest rate for any applicant.",
  placeholdersChecklist: [
    { field: "COMPANY NAME", value: "Finance Rath", notes: "Verified" },
    { field: "LOGO", value: "Uploaded Logo Active", notes: "Integrated with Gold & Maroon styling" },
    { field: "PHONE NUMBER", value: "88888 99999", notes: "Replace with primary business helpline" },
    { field: "WHATSAPP NUMBER", value: "88888 99999", notes: "Replace with business WhatsApp line" },
    { field: "EMAIL", value: "info@financerath.com", notes: "Replace with official support email" },
    { field: "OFFICE ADDRESS", value: "City Center Mall Station Road Durg", notes: "Update floor/office suite number if needed" },
    { field: "CITY / SERVICE AREA", value: "All Over Chhattisgarh", notes: "Configured" },
    { field: "WEBSITE DOMAIN", value: "financerath.com", notes: "Configured" },
    { field: "ACTUAL LENDER / PARTNER DETAILS", value: "all banks & NBFCs", notes: "Replace with official empaneled list" }
  ]
};
