import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

// Helper to read leads safely
function getLeads() {
  try {
    if (!fs.existsSync(leadsFilePath)) {
      return [];
    }
    const fileData = fs.readFileSync(leadsFilePath, "utf8");
    return JSON.parse(fileData || "[]");
  } catch (error) {
    console.error("Error reading leads file:", error);
    return [];
  }
}

// Helper to save leads safely
function saveLeads(leads: any[]) {
  try {
    const dir = path.dirname(leadsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing leads file:", error);
    return false;
  }
}

// GET /api/leads - Fetch all leads for admin dashboard
export async function GET() {
  const leads = getLeads();
  return NextResponse.json({ success: true, count: leads.length, leads });
}

// POST /api/leads - Submit new lead form
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      mobile,
      whatsapp,
      city,
      loanType,
      loanAmount,
      employmentType,
      monthlyIncome,
      existingEmi,
      preferredContact,
      message,
      source
    } = body;

    // Server-side validation
    if (!fullName || !mobile || !city) {
      return NextResponse.json(
        { success: false, error: "Name, Mobile, and City are required fields." },
        { status: 400 }
      );
    }

    const currentLeads = getLeads();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newLeadId = `FR-${new Date().getFullYear()}-${randomCode}`;

    const newLead = {
      id: newLeadId,
      fullName,
      mobile,
      whatsapp: whatsapp || mobile,
      city,
      loanType: loanType || "personal-loan",
      loanAmount: loanAmount || "0",
      employmentType: employmentType || "Salaried",
      monthlyIncome: monthlyIncome || "0",
      existingEmi: existingEmi || "0",
      preferredContact: preferredContact || "Call",
      message: message || "",
      source: source || "Website Lead Form",
      status: "NEW",
      assignedAdvisor: "Unassigned",
      createdDate: new Date().toISOString(),
      lastFollowUp: new Date().toISOString(),
      notes: "Lead captured via website enquiry form."
    };

    currentLeads.unshift(newLead);
    saveLeads(currentLeads);

    return NextResponse.json({
      success: true,
      leadId: newLeadId,
      message: "Loan enquiry submitted successfully."
    });
  } catch (error: any) {
    console.error("Error in lead POST API:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

// PATCH /api/leads - Update lead status, notes, advisor
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { leadId, status, assignedAdvisor, notes } = body;

    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Lead ID is required." },
        { status: 400 }
      );
    }

    const currentLeads = getLeads();
    const index = currentLeads.findIndex((l: any) => l.id === leadId);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Lead not found." },
        { status: 404 }
      );
    }

    if (status) currentLeads[index].status = status;
    if (assignedAdvisor !== undefined) currentLeads[index].assignedAdvisor = assignedAdvisor;
    if (notes !== undefined) currentLeads[index].notes = notes;
    currentLeads[index].lastFollowUp = new Date().toISOString();

    saveLeads(currentLeads);

    return NextResponse.json({
      success: true,
      lead: currentLeads[index],
      message: "Lead updated successfully."
    });
  } catch (error: any) {
    console.error("Error updating lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
