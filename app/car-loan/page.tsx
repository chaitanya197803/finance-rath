import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "New & Used Car Loan Comparison | Finance Rath",
  description:
    "Get up to 90% on-road funding for new and pre-owned automobiles. Quick pre-approval support across empaneled auto finance lenders."
};

export default function CarLoanPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "car-loan") || LOAN_PRODUCTS[4];
  return <LoanLandingTemplate loan={loan} />;
}
