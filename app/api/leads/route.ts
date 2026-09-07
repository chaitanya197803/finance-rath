import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

// Support multiple env var naming conventions (Vercel & standard)
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL;

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabaseClient() {
  if (supabaseUrl && supabaseKey) {
    return createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    });
  }
  return null;
}

// Local JSON file helpers (failsafe fallback for local dev)
function getLocalLeads() {
  try {
    if (!fs.existsSync(leadsFilePath)) return [];
    const content = fs.readFileSync(leadsFilePath, "utf8");
    return JSON.parse(content || "[]");
  } catch (error) {
    console.error("Local JSON read error:", error);
    return [];
  }
}

function saveLocalLeads(leads: any[]) {
  try {
    const dir = path.dirname(leadsFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");
  } catch (error) {
    console.error("Local JSON write error:", error);
  }
}

// Map Supabase snake_case columns to frontend camelCase properties
function mapFromSupabase(item: any) {
  return {
    id: item.lead_id || item.id,
    dbId: item.id,
    fullName: item.full_name || item.fullName || "",
    mobile: item.mobile || "",
    whatsapp: item.whatsapp || item.mobile || "",
    city: item.city || "",
    loanType: item.loan_type || item.loanType || "personal-loan",
    loanAmount: String(item.loan_amount || item.loanAmount || "0"),
    employmentType: item.employment_type || item.employmentType || "Salaried",
    monthlyIncome: String(item.monthly_income || item.monthlyIncome || "0"),
    existingEmi: String(item.existing_emi || item.existingEmi || "0"),
    preferredContact: item.preferred_contact || item.preferredContact || "Call",
    message: item.message || "",
    source: item.source || "Website Lead Form",
    status: item.status || "NEW",
    assignedAdvisor: item.assigned_advisor || item.assignedAdvisor || "Unassigned",
    createdDate: item.created_at || item.createdDate || new Date().toISOString(),
    lastFollowUp: item.last_follow_up || item.lastFollowUp || new Date().toISOString(),
    notes: item.notes || ""
  };
}

// READ (GET /api/leads)
export async function GET() {
  const supabase = getSupabaseClient();
  const localLeads = getLocalLeads();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase GET error:", error.message, error.details);
      } else if (data) {
        const sbMapped = data.map(mapFromSupabase);
        return NextResponse.json({ success: true, source: "supabase", count: sbMapped.length, leads: sbMapped });
      }
    } catch (err) {
      console.error("Supabase GET exception:", err);
    }
  }

  return NextResponse.json({ success: true, source: "local", count: localLeads.length, leads: localLeads });
}

// CREATE (POST /api/leads)
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
      source,
      status,
      assignedAdvisor,
      notes
    } = body;

    if (!fullName || !mobile || !city) {
      return NextResponse.json(
        { success: false, error: "Full Name, Mobile Number, and City are required fields." },
        { status: 400 }
      );
    }

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newLeadId = body.id || `FR-${new Date().getFullYear()}-${randomCode}`;

    const leadObject = {
      id: newLeadId,
      fullName,
      mobile,
      whatsapp: whatsapp || mobile,
      city,
      loanType: loanType || "personal-loan",
      loanAmount: String(loanAmount || "0"),
      employmentType: employmentType || "Salaried",
      monthlyIncome: String(monthlyIncome || "0"),
      existingEmi: String(existingEmi || "0"),
      preferredContact: preferredContact || "Call",
      message: message || "",
      source: source || "Website Lead Form",
      status: status || "NEW",
      assignedAdvisor: assignedAdvisor || "Unassigned",
      createdDate: new Date().toISOString(),
      lastFollowUp: new Date().toISOString(),
      notes: notes || "Lead created via enquiry platform."
    };

    // 1. Save to local JSON (failsafe)
    const localLeads = getLocalLeads();
    localLeads.unshift(leadObject);
    saveLocalLeads(localLeads);

    // 2. Insert into Supabase
    const supabase = getSupabaseClient();
    let supabaseSuccess = false;
    let supabaseErrorMsg = "";

    if (supabase) {
      const { data, error } = await supabase.from("leads").insert([
        {
          lead_id: newLeadId,
          full_name: fullName,
          mobile,
          whatsapp: whatsapp || mobile,
          city,
          loan_type: loanType || "personal-loan",
          loan_amount: String(loanAmount || "0"),
          employment_type: employmentType || "Salaried",
          monthly_income: String(monthlyIncome || "0"),
          existing_emi: String(existingEmi || "0"),
          preferred_contact: preferredContact || "Call",
          message: message || "",
          source: source || "Website Lead Form",
          status: status || "NEW",
          assigned_advisor: assignedAdvisor || "Unassigned",
          notes: notes || "Lead created via enquiry platform."
        }
      ]).select();

      if (error) {
        console.error("Supabase INSERT error:", error.message, error.details);
        supabaseErrorMsg = error.message;
      } else {
        supabaseSuccess = true;
      }
    } else {
      supabaseErrorMsg = "Supabase env variables missing on server";
      console.warn("Supabase client not initialized: Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
    }

    return NextResponse.json({
      success: true,
      leadId: newLeadId,
      lead: leadObject,
      supabaseSynced: supabaseSuccess,
      supabaseNotice: supabaseErrorMsg || undefined,
      message: "Lead created successfully."
    });
  } catch (error: any) {
    console.error("POST /api/leads Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create lead." }, { status: 500 });
  }
}

// UPDATE (PATCH /api/leads)
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { leadId, fullName, mobile, whatsapp, city, loanType, loanAmount, employmentType, monthlyIncome, status, assignedAdvisor, notes } = body;

    if (!leadId) {
      return NextResponse.json({ success: false, error: "Lead ID is required for update." }, { status: 400 });
    }

    // 1. Update local JSON
    const localLeads = getLocalLeads();
    const idx = localLeads.findIndex((l: any) => l.id === leadId || l.dbId === leadId);
    if (idx !== -1) {
      if (fullName) localLeads[idx].fullName = fullName;
      if (mobile) localLeads[idx].mobile = mobile;
      if (whatsapp) localLeads[idx].whatsapp = whatsapp;
      if (city) localLeads[idx].city = city;
      if (loanType) localLeads[idx].loanType = loanType;
      if (loanAmount !== undefined) localLeads[idx].loanAmount = String(loanAmount);
      if (employmentType) localLeads[idx].employmentType = employmentType;
      if (monthlyIncome !== undefined) localLeads[idx].monthlyIncome = String(monthlyIncome);
      if (status) localLeads[idx].status = status;
      if (assignedAdvisor !== undefined) localLeads[idx].assignedAdvisor = assignedAdvisor;
      if (notes !== undefined) localLeads[idx].notes = notes;
      localLeads[idx].lastFollowUp = new Date().toISOString();
      saveLocalLeads(localLeads);
    }

    // 2. Update Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      const payload: any = { last_follow_up: new Date().toISOString() };
      if (fullName) payload.full_name = fullName;
      if (mobile) payload.mobile = mobile;
      if (whatsapp) payload.whatsapp = whatsapp;
      if (city) payload.city = city;
      if (loanType) payload.loan_type = loanType;
      if (loanAmount !== undefined) payload.loan_amount = String(loanAmount);
      if (employmentType) payload.employment_type = employmentType;
      if (monthlyIncome !== undefined) payload.monthly_income = String(monthlyIncome);
      if (status) payload.status = status;
      if (assignedAdvisor !== undefined) payload.assigned_advisor = assignedAdvisor;
      if (notes !== undefined) payload.notes = notes;

      const { error } = await supabase.from("leads").update(payload).or(`lead_id.eq.${leadId},id.eq.${leadId}`);
      if (error) {
        console.error("Supabase UPDATE error:", error.message);
      }
    }

    return NextResponse.json({ success: true, message: "Lead updated successfully." });
  } catch (error: any) {
    console.error("PATCH /api/leads Error:", error);
    return NextResponse.json({ success: false, error: "Failed to update lead." }, { status: 500 });
  }
}

// DELETE (DELETE /api/leads?id=FR-2026-1042)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get("id");

    if (!leadId) {
      return NextResponse.json({ success: false, error: "Lead ID parameter is required." }, { status: 400 });
    }

    // 1. Delete from local JSON
    let localLeads = getLocalLeads();
    localLeads = localLeads.filter((l: any) => l.id !== leadId && l.dbId !== leadId);
    saveLocalLeads(localLeads);

    // 2. Delete from Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      const { error } = await supabase.from("leads").delete().or(`lead_id.eq.${leadId},id.eq.${leadId}`);
      if (error) {
        console.error("Supabase DELETE error:", error.message);
      }
    }

    return NextResponse.json({ success: true, message: `Lead ${leadId} deleted successfully.` });
  } catch (error: any) {
    console.error("DELETE /api/leads Error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete lead." }, { status: 500 });
  }
}
