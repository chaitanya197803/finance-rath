export interface FAQItem {
  id: string;
  category: "General" | "Eligibility" | "Process" | "Documents";
  question: string;
  answer: string;
}

export const GLOBAL_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What types of loans do you help with?",
    answer: "We assist with a wide range of loan categories including Personal Loans, Business Loans, Home Loans, Loan Against Property (LAP), Car Loans, Two-Wheeler Loans, Education Loans, Gold Loans, MSME/Working Capital Credit, and Debt Consolidation solutions."
  },
  {
    id: "faq-2",
    category: "Process",
    question: "How do you compare loan options?",
    answer: "Our loan experts evaluate your specific financial profile (income, employment type, credit score, location, and existing EMIs) against the underwriting criteria of multiple empaneled bank and NBFC partners. We then present transparent options detailing interest rates, processing fees, tenure options, and sanction probability."
  },
  {
    id: "faq-3",
    category: "Eligibility",
    question: "Will I definitely get a loan?",
    answer: "Loan approval is never guaranteed by any responsible advisor. Approval, sanctioned amount, interest rate, and terms strictly depend on the lending partner's underwriting policies, your credit score, income verification, property evaluation (if applicable), and documentation compliance."
  },
  {
    id: "faq-4",
    category: "Eligibility",
    question: "What determines my interest rate?",
    answer: "Interest rates offered by banks and NBFCs depend on your CIBIL/credit score, monthly net income or business turnover, employment stability, employer category, debt-to-income ratio, loan tenure, and collateral type."
  },
  {
    id: "faq-5",
    category: "Process",
    question: "How long does the process take?",
    answer: "Timelines vary by loan type: Personal and Gold loans can be processed in 24 to 48 hours. Business and MSME loans typically take 3 to 5 business days. Home Loans and Loans Against Property require property valuation and legal checks, taking around 7 to 12 business days."
  },
  {
    id: "faq-6",
    category: "Documents",
    question: "What documents may be required?",
    answer: "Standard requirements include Identity Proof (PAN Card, Aadhaar Card), Address Proof, Income Proof (Salary Slips / Form 16 for salaried; 2-3 years ITR with financials for self-employed), 6-12 months Bank Statements, and Property/Business registration documents where relevant."
  },
  {
    id: "faq-7",
    category: "General",
    question: "Do you work with multiple banks/NBFCs?",
    answer: "Yes, we collaborate with multiple leading PSU banks, private sector commercial banks, and RBI-registered NBFC lending partners to provide diverse options under one roof."
  },
  {
    id: "faq-8",
    category: "Eligibility",
    question: "Does applying affect my credit score?",
    answer: "Initial consultation and profile review with Finance Rath do NOT impact your CIBIL score because we conduct soft profile evaluations. Once we identify suitable options and submit formal loan applications to chosen lenders, the lenders perform hard credit bureau inquiries as per regulatory guidelines."
  },
  {
    id: "faq-9",
    category: "Eligibility",
    question: "Can self-employed customers apply?",
    answer: "Absolutely. We specialize in structuring loan options for self-employed professionals (doctors, CAs, architects, consultants) and proprietors with tailored documentation requirements."
  },
  {
    id: "faq-10",
    category: "Eligibility",
    question: "Can businesses apply for loans?",
    answer: "Yes, we support sole proprietorships, partnership firms, LLPs, and Private Limited companies with business loans, working capital limits (CC/OD), and equipment financing."
  },
  {
    id: "faq-11",
    category: "Process",
    question: "What happens after I submit the enquiry?",
    answer: "Once you submit your requirement, a dedicated Finance Rath loan advisor contacts you via phone or WhatsApp to review your requirements, confirm basic eligibility details, compare suitable lender options, guide you through documentation, and track your application until final disbursal."
  }
];
