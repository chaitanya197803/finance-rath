import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "MSME & Working Capital Loans | Cash Credit & OD Limits | Finance Rath",
  description:
    "Specialized MSME credit facilities, Cash Credit (CC), Overdraft (OD), and machinery financing for micro, small, and medium enterprises in Chhattisgarh."
};

export default function MSMELoanPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "msme-loan") || LOAN_PRODUCTS[8];
  return <LoanLandingTemplate loan={loan} />;
}
