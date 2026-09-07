import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "Personal Loan Comparison | Low Rates & Quick Disbursal | Finance Rath Durg",
  description:
    "Compare personal loan options from leading banks & NBFCs in Chhattisgarh. Collateral-free personal loans for salaried and self-employed professionals."
};

export default function PersonalLoanPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "personal-loan") || LOAN_PRODUCTS[0];
  return <LoanLandingTemplate loan={loan} />;
}
