import React from "react";
import { Metadata } from "next";
import { LOAN_PRODUCTS } from "../../data/loans";
import { LoanLandingTemplate } from "../../components/LoanLandingTemplate";

export const metadata: Metadata = {
  title: "Two-Wheeler & EV Scooter Loans | Finance Rath",
  description:
    "Easy motorcycle and electric two-wheeler financing with minimal paperwork and pocket-friendly EMIs."
};

export default function TwoWheelerLoanPage() {
  const loan = LOAN_PRODUCTS.find((l) => l.id === "two-wheeler-loan") || LOAN_PRODUCTS[5];
  return <LoanLandingTemplate loan={loan} />;
}
