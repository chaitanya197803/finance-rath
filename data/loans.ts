export interface LoanProduct {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  indicativeRates: string;
  maxTenure: string;
  maxAmount: string;
  highlights: string[];
  eligibility: string[];
  documents: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: "personal-loan",
    slug: "personal-loan",
    name: "Personal Loan",
    shortDesc: "Unsecured personal loans for medical expenses, travel, weddings, or emergency liquidity needs.",
    fullDesc: "Compare flexible personal loan options from top banks and NBFCs with collateral-free funding tailored to your profile.",
    iconName: "UserCheck",
    indicativeRates: "Starting from 10.5% p.a.*",
    maxTenure: "Up to 5 Years",
    maxAmount: "Up to ₹50 Lakhs",
    highlights: [
      "No collateral or guarantor required",
      "Minimal documentation & fast processing",
      "Flexible repayment tenure up to 60 months",
      "Options for both salaried & self-employed"
    ],
    eligibility: [
      "Min Age: 21 Years | Max Age: 60 Years at maturity",
      "Salaried: Min monthly net income ₹20,000",
      "Self-employed: Min 2 years of active business operations",
      "Good credit history (CIBIL 700+ preferred)"
    ],
    documents: [
      "Identity Proof (PAN Card / Aadhaar / Passport)",
      "Address Proof (Aadhaar / Utility Bill / Voter ID)",
      "Income Proof (Last 3 months salary slips / Form 16)",
      "Bank Statements (Last 6 months salary/current account)"
    ],
    faqs: [
      {
        question: "Can I get a personal loan without collateral?",
        answer: "Yes, personal loans are unsecured financial products and do not require any collateral or asset security."
      },
      {
        question: "What determines my personal loan interest rate?",
        answer: "Lenders decide interest rates based on your monthly income, credit score (CIBIL), employment stability, employer profile, and existing EMI obligations."
      }
    ]
  },
  {
    id: "business-loan",
    slug: "business-loan",
    name: "Business Loan",
    shortDesc: "Collateral-free & custom credit lines to expand operations, purchase inventory, or upgrade machinery.",
    fullDesc: "Empower your enterprise with customized commercial credit solutions compared across leading business lenders.",
    iconName: "Briefcase",
    indicativeRates: "Starting from 12.0% p.a.*",
    maxTenure: "Up to 7 Years",
    maxAmount: "Up to ₹2 Crores",
    highlights: [
      "Funding available without property collateral",
      "Supports business expansion & capital needs",
      "Structured EMIs matched to business cashflows",
      "Quick sanction support with dedicated advisor"
    ],
    eligibility: [
      "Business vintage of at least 2 years with GST/ITR",
      "Minimum annual business turnover of ₹15 Lakhs",
      "Sole proprietors, Partnership firms, Private Limited Cos",
      "Clean repayment track record"
    ],
    documents: [
      "KYC of business entity & promoters/directors",
      "GST registration certificate & GST returns",
      "Last 2 years audited Financials / ITR with Computation",
      "Last 12 months primary Bank Statements"
    ],
    faqs: [
      {
        question: "How much loan amount can my business get?",
        answer: "Sanction amount depends on your annual business turnover, net profit margins, bank balance trends, and existing debt obligations."
      },
      {
        question: "Can self-employed professionals apply?",
        answer: "Yes, doctors, chartered accountants, consultants, and trade proprietors can apply for business loans."
      }
    ]
  },
  {
    id: "home-loan",
    slug: "home-loan",
    name: "Home Loan",
    shortDesc: "Competitive home finance options for purchasing, constructing, or transferring your dream property.",
    fullDesc: "Unlock affordable home ownership with step-by-step guidance, balance transfer benefits, and maximum tenure options.",
    iconName: "Home",
    indicativeRates: "Starting from 8.35% p.a.*",
    maxTenure: "Up to 30 Years",
    maxAmount: "Up to ₹10 Crores",
    highlights: [
      "Low EMI rates with long tenure options",
      "Tax benefits under Section 80C & Section 24",
      "Balance transfer option to lower existing rates",
      "Support for plot purchase & home construction"
    ],
    eligibility: [
      "Salaried professionals, self-employed & business owners",
      "Min Age: 21 Years | Max Age: 70 Years at maturity",
      "Clear title property with legal approval",
      "Sufficient income repayment capacity"
    ],
    documents: [
      "PAN Card & Aadhaar Card of applicants",
      "Income Proof (Salary Slips / ITR for last 3 years)",
      "Bank Account Statements (Last 6 months)",
      "Property ownership documents / Agreement to Sell"
    ],
    faqs: [
      {
        question: "What is the maximum tenure for a home loan?",
        answer: "Home loans offer the longest repayment tenure in the market, extending up to 30 years based on applicant age."
      },
      {
        question: "Can I transfer my existing home loan to a lower interest rate?",
        answer: "Yes, we help evaluate Home Loan Balance Transfer (HLBT) options to reduce your monthly EMI burden."
      }
    ]
  },
  {
    id: "loan-against-property",
    slug: "loan-against-property",
    name: "Loan Against Property",
    shortDesc: "Unlock high-value liquidity against residential, commercial, or industrial real estate assets.",
    fullDesc: "Leverage your property's market value to secure substantial funds at significantly lower interest rates than unsecured loans.",
    iconName: "Building2",
    indicativeRates: "Starting from 9.25% p.a.*",
    maxTenure: "Up to 15 Years",
    maxAmount: "Up to ₹15 Crores",
    highlights: [
      "High sanction limit up to 70% of property market value",
      "Significantly lower interest rates than personal loans",
      "Longer tenure for easy EMI management",
      "Accepts residential, commercial & industrial titles"
    ],
    eligibility: [
      "Property owners with clear, unencumbered titles",
      "Salaried, self-employed professionals & corporate entities",
      "Demonstrated income capacity to service EMIs"
    ],
    documents: [
      "Promoter KYC & Address proof",
      "Income Proof / 3 Years ITR with Computation",
      "Property documents (Title Deed, Approved Layout, Tax Receipt)",
      "Last 12 months bank statements"
    ],
    faqs: [
      {
        question: "Can I continue using my property after taking a LAP?",
        answer: "Yes, you retain full ownership and usage rights of the property while using the funds for your needs."
      }
    ]
  },
  {
    id: "car-loan",
    slug: "car-loan",
    name: "Car Loan",
    shortDesc: "Finance new or pre-owned vehicles with competitive rates and high funding percentage.",
    fullDesc: "Drive home your preferred automobile with flexible financing options tailored to your personal or commercial requirements.",
    iconName: "Car",
    indicativeRates: "Starting from 8.75% p.a.*",
    maxTenure: "Up to 7 Years",
    maxAmount: "Up to 90% On-Road Price",
    highlights: [
      "Funding up to 90% of on-road vehicle cost",
      "Attractive interest rates with quick pre-approval",
      "Options for both brand-new and pre-owned cars",
      "Minimal processing time"
    ],
    eligibility: [
      "Salaried individuals with minimum 1 year job stability",
      "Self-employed & business owners with active business",
      "Minimum annual income threshold met"
    ],
    documents: [
      "KYC documents & Address Proof",
      "Income proof (Salary slips / ITR)",
      "Bank statement (Last 6 months)",
      "Vehicle Proforma Invoice from dealer"
    ],
    faqs: [
      {
        question: "Can I get financing for a used car?",
        answer: "Yes, lenders offer financing for pre-owned cars based on vehicle age, evaluation report, and applicant profile."
      }
    ]
  },
  {
    id: "two-wheeler-loan",
    slug: "two-wheeler-loan",
    name: "Two-Wheeler Loan",
    shortDesc: "Easy financing for motorcycles, scooters, and electric two-wheelers.",
    fullDesc: "Get swift approval and flexible EMIs for your daily commute vehicle with minimal documentation.",
    iconName: "Bike",
    indicativeRates: "Starting from 9.99% p.a.*",
    maxTenure: "Up to 4 Years",
    maxAmount: "Up to 95% On-Road Price",
    highlights: [
      "High funding ratio for new bikes & electric vehicles",
      "Hassle-free documentation & quick processing",
      "Pocket-friendly EMI options",
      "Options for first-time borrowers"
    ],
    eligibility: [
      "Min Age: 21 Years",
      "Salaried or self-employed with stable income",
      "Residency proof"
    ],
    documents: [
      "Aadhaar Card & PAN Card",
      "Bank Account details / Statement",
      "Vehicle quotation from authorized dealer"
    ],
    faqs: [
      {
        question: "Are electric scooters eligible for loan financing?",
        answer: "Yes, leading lenders provide two-wheeler loans for major brand electric vehicles."
      }
    ]
  },
  {
    id: "education-loan",
    slug: "education-loan",
    name: "Education Loan",
    shortDesc: "Fund higher education in India or abroad for undergraduate and postgraduate programs.",
    fullDesc: "Support academic aspirations with dedicated student finance covering tuition fees, living costs, and travel expenses.",
    iconName: "GraduationCap",
    indicativeRates: "Starting from 9.5% p.a.*",
    maxTenure: "Up to 15 Years",
    maxAmount: "Up to ₹1 Crore",
    highlights: [
      "Covers full tuition fees, accommodation & exam costs",
      "Moratorium period available (Course duration + 1 year)",
      "Tax benefits under Section 80E",
      "Secured & unsecured options based on institute ranking"
    ],
    eligibility: [
      "Indian citizen with confirmed admission to recognized institute",
      "Co-applicant (Parent/Guardian/Spouse) with regular income",
      "Good academic track record"
    ],
    documents: [
      "Admission letter & fee structure",
      "Academic marksheets (10th, 12th, Graduation)",
      "Co-applicant KYC & Income proof",
      "Bank statements of co-borrower"
    ],
    faqs: [
      {
        question: "What is a moratorium period in an education loan?",
        answer: "It is a grace period during your studies plus up to 12 months after graduation before principal repayment starts."
      }
    ]
  },
  {
    id: "gold-loan",
    slug: "gold-loan",
    name: "Gold Loan",
    shortDesc: "Instant liquidity backed by gold ornaments with simple valuation and lowest processing time.",
    fullDesc: "Convert household gold jewellery into immediate business or personal cash at competitive LTV ratios.",
    iconName: "Coins",
    indicativeRates: "Starting from 8.9% p.a.*",
    maxTenure: "Up to 3 Years",
    maxAmount: "Up to 75% Gold Value",
    highlights: [
      "Instant disbursal upon gold valuation",
      "No income proof or credit score barrier required",
      "Bullet repayment & flexible interest payment choices",
      "Secure bank vault storage for gold ornaments"
    ],
    eligibility: [
      "Any individual owning gold ornaments/coins",
      "Min Age: 18 Years",
      "Basic KYC ID verification"
    ],
    documents: [
      "PAN Card & Aadhaar Card",
      "Passport size photographs",
      "Gold ornaments for appraiser evaluation"
    ],
    faqs: [
      {
        question: "Is income proof mandatory for a gold loan?",
        answer: "No, gold loans are secured against the physical gold pledge and generally do not require income tax returns."
      }
    ]
  },
  {
    id: "msme-loan",
    slug: "msme-loan",
    name: "Working Capital / MSME Loan",
    shortDesc: "Cash credit, overdraft facilities, and machinery loans to boost industrial productivity.",
    fullDesc: "Specialized MSME credit products designed for micro, small, and medium enterprises across Chhattisgarh and India.",
    iconName: "Factory",
    indicativeRates: "Starting from 11.5% p.a.*",
    maxTenure: "Up to 10 Years",
    maxAmount: "Up to ₹5 Crores",
    highlights: [
      "Cash Credit (CC) & Overdraft (OD) limit facilities",
      "Government scheme assistance (CGTMSE / Mudra / MSME)",
      "Machinery financing & invoice discounting",
      "Structured credit support for factories & traders"
    ],
    eligibility: [
      "Udyam Registered MSME entities",
      "Min 2 years active manufacturing/trading history",
      "Satisfactory credit rating & bank turnover"
    ],
    documents: [
      "Udyam Certificate & Entity Registration",
      "GST returns & Audited balance sheets (2-3 years)",
      "12 months bank statements",
      "Project report / Business profile"
    ],
    faqs: [
      {
        question: "Can MSMEs get collateral-free loans under CGTMSE?",
        answer: "Yes, eligible MSME entities can access credit guarantees up to specified limits under government credit schemes subject to lender terms."
      }
    ]
  },
  {
    id: "other-solutions",
    slug: "other-solutions",
    name: "Other Loan Solutions",
    shortDesc: "Debt consolidation, balance transfers, top-up loans, and specialized financial advisory.",
    fullDesc: "Custom financial structuring to lower your existing EMI burden, consolidate fragmented loans, or meet unique capital requirements.",
    iconName: "Sparkles",
    indicativeRates: "Customized according to profile*",
    maxTenure: "Custom Tenure",
    maxAmount: "Flexible Limits",
    highlights: [
      "Debt consolidation to merge multiple high-cost EMIs into one",
      "Loan Balance Transfer with top-up cash limit",
      "Doctor & Professional loans",
      "Personalized advisory from seasoned financial experts"
    ],
    eligibility: [
      "Available for salaried professionals, self-employed & businesses",
      "Evaluated on a case-by-case basis by senior advisors"
    ],
    documents: [
      "KYC & Income Documents",
      "Existing Loan Sanction Letters & Track Records",
      "Bank Account Statements"
    ],
    faqs: [
      {
        question: "How does debt consolidation help?",
        answer: "It merges multiple active high-interest loans into a single lower-interest loan with one convenient monthly EMI."
      }
    ]
  }
];
