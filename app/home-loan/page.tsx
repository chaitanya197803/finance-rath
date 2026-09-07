import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "Home Loan & Balance Transfer | Low EMI Rates | Finance Rath",
  description:
    "Compare affordable home loan options, construction finance, and Home Loan Balance Transfer (HLBT) with tenure up to 30 years across multiple lenders."
};

export default function HomeLoanPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "home-loan") || LOAN_PRODUCTS[2];
  return <LoanLandingTemplate loan={loan} />;
}
