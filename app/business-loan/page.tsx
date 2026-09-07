import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "Business Loan Comparison | Collateral-Free Credit | Finance Rath Chhattisgarh",
  description:
    "Explore business loan options for expansion, inventory, and capital needs across multiple bank partners. Dedicated advisor support in Durg, Bhilai & Raipur."
};

export default function BusinessLoanPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "business-loan") || LOAN_PRODUCTS[1];
  return <LoanLandingTemplate loan={loan} />;
}
