import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) | High Sanction Limits | Finance Rath",
  description:
    "Unlock high-value liquidity against residential, commercial, or industrial property. Compare LAP interest rates and LTV options across leading banks."
};

export default function LAPPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "loan-against-property") || LOAN_PRODUCTS[3];
  return <LoanLandingTemplate loan={loan} />;
}
