"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  MessageSquare,
  Clock,
  Edit,
  CheckCircle2,
  AlertCircle,
  FileText,
  Building2,
  RefreshCw
} from "lucide-react";

export interface LeadRecord {
  id: string;
  fullName: string;
  mobile: string;
  whatsapp: string;
  city: string;
  loanType: string;
  loanAmount: string;
  employmentType: string;
  monthlyIncome: string;
  existingEmi: string;
  preferredContact: string;
  message: string;
  source: string;
  status:
    | "NEW"
    | "CONTACTED"
    | "QUALIFIED"
    | "DOCUMENTS_PENDING"
    | "OPTIONS_SHARED"
    | "APPLICATION_SUBMITTED"
    | "SANCTIONED"
    | "DISBURSED"
    | "NOT_ELIGIBLE"
    | "CLOSED";
  assignedAdvisor: string;
  createdDate: string;
  lastFollowUp: string;
  notes: string;
}

const STATUS_COLORS: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-800 border-blue-200",
  CONTACTED: "bg-purple-100 text-purple-800 border-purple-200",
  QUALIFIED: "bg-indigo-100 text-indigo-800 border-indigo-200",
  DOCUMENTS_PENDING: "bg-amber-100 text-amber-800 border-amber-200",
  OPTIONS_SHARED: "bg-cyan-100 text-cyan-800 border-cyan-200",
  APPLICATION_SUBMITTED: "bg-orange-100 text-orange-800 border-orange-200",
  SANCTIONED: "bg-[#7a1c1c] text-white border-[#7a1c1c]",
  DISBURSED: "bg-emerald-600 text-white border-emerald-600",
  NOT_ELIGIBLE: "bg-red-100 text-red-800 border-red-200",
  CLOSED: "bg-slate-200 text-slate-700 border-slate-300"
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);
  const [editStatus, setEditStatus] = useState<string>("");
  const [editAdvisor, setEditAdvisor] = useState<string>("");
  const [editNotes, setEditNotes] = useState<string>("");
  const [updating, setUpdating] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const openLeadModal = (lead: LeadRecord) => {
    setSelectedLead(lead);
    setEditStatus(lead.status);
    setEditAdvisor(lead.assignedAdvisor || "Unassigned");
    setEditNotes(lead.notes || "");
  };

  const handleUpdateLead = async () => {
    if (!selectedLead) return;
    setUpdating(true);
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: selectedLead.id,
          status: editStatus,
          assignedAdvisor: editAdvisor,
          notes: editNotes
        })
      });
      const data = await res.json();
      if (data.success) {
        fetchLeads();
        setSelectedLead(null);
      }
    } catch (err) {
      console.error("Failed to update lead:", err);
    } finally {
      setUpdating(false);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = selectedStatus === "ALL" || l.status === selectedStatus;
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.mobile.includes(searchTerm) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportLeadsJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `finance_rath_leads_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#7a1c1c] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Internal Operations Portal</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 mt-1">Lead Management Dashboard</h1>
              <p className="text-xs text-slate-500">
                Track, assign, and update loan application statuses for Finance Rath clients.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchLeads}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>

              <button
                onClick={exportLeadsJson}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-slate-800 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export Leads</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Name, Mobile, City, or Lead ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#7a1c1c] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-bold text-slate-600 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Status:</span>
              </span>
              {[
                "ALL",
                "NEW",
                "CONTACTED",
                "QUALIFIED",
                "DOCUMENTS_PENDING",
                "OPTIONS_SHARED",
                "APPLICATION_SUBMITTED",
                "SANCTIONED",
                "DISBURSED"
              ].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer transition-colors ${
                    selectedStatus === st
                      ? "bg-[#7a1c1c] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Leads Table Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
                    <th className="p-4">Lead ID / Date</th>
                    <th className="p-4">Applicant Name</th>
                    <th className="p-4">Contact Details</th>
                    <th className="p-4">Loan Details</th>
                    <th className="p-4">Income / EMI</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Advisor</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-slate-500">
                        Loading leads records...
                      </td>
                    </tr>
                  ) : filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-slate-500">
                        No leads matching selected search criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-mono font-bold text-slate-900">
                          <div>{lead.id}</div>
                          <div className="text-[10px] text-slate-400 font-sans font-normal">
                            {new Date(lead.createdDate).toLocaleDateString("en-IN")}
                          </div>
                        </td>
                        <td className="p-4 font-bold text-slate-900">
                          <div>{lead.fullName}</div>
                          <div className="text-[10px] font-normal text-slate-500">{lead.city}</div>
                        </td>
                        <td className="p-4 space-y-1">
                          <a
                            href={`tel:${lead.mobile}`}
                            className="inline-flex items-center gap-1 text-slate-800 hover:text-[#7a1c1c]"
                          >
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{lead.mobile}</span>
                          </a>
                          <a
                            href={`https://wa.me/${lead.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[10px] text-emerald-600 font-semibold"
                          >
                            WhatsApp Link →
                          </a>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-900 uppercase">{lead.loanType}</div>
                          <div className="text-[#b45309] font-bold">
                            ₹ {Number(lead.loanAmount).toLocaleString("en-IN")}
                          </div>
                        </td>
                        <td className="p-4 text-[11px]">
                          <div>{lead.employmentType}</div>
                          <div className="text-slate-500">
                            Inc: ₹{Number(lead.monthlyIncome).toLocaleString("en-IN")}
                          </div>
                          <div className="text-slate-400 text-[10px]">
                            EMI: ₹{Number(lead.existingEmi).toLocaleString("en-IN")}
                          </div>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border uppercase tracking-wider ${
                              STATUS_COLORS[lead.status] || "bg-slate-100 text-slate-800"
                            }`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="p-4 text-[11px] text-slate-600 font-semibold">
                          {lead.assignedAdvisor || "Unassigned"}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => openLeadModal(lead)}
                            className="px-3 py-1.5 rounded-lg bg-amber-50 text-[#7a1c1c] font-bold hover:bg-[#7a1c1c] hover:text-white transition-colors border border-amber-200 cursor-pointer"
                          >
                            Manage
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lead Detail & Status Edit Modal Drawer */}
          {selectedLead && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-6 border border-slate-200 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#7a1c1c]">{selectedLead.id}</span>
                    <h3 className="text-lg font-black text-slate-900">{selectedLead.fullName}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="text-slate-400 hover:text-slate-700 font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 font-bold block">Mobile:</span>
                    <span className="font-semibold text-slate-900">{selectedLead.mobile}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Location:</span>
                    <span className="font-semibold text-slate-900">{selectedLead.city}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Loan Category:</span>
                    <span className="font-bold text-[#7a1c1c] uppercase">{selectedLead.loanType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Amount Requested:</span>
                    <span className="font-bold text-slate-900">
                      ₹ {Number(selectedLead.loanAmount).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Employment:</span>
                    <span className="font-semibold text-slate-900">{selectedLead.employmentType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Monthly Income:</span>
                    <span className="font-semibold text-slate-900">
                      ₹ {Number(selectedLead.monthlyIncome).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {selectedLead.message && (
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-900">
                    <strong className="block text-[#7a1c1c]">Requirement Note:</strong>
                    <span>{selectedLead.message}</span>
                  </div>
                )}

                {/* Edit Status & Advisor */}
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Update Status</label>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="QUALIFIED">QUALIFIED</option>
                      <option value="DOCUMENTS_PENDING">DOCUMENTS_PENDING</option>
                      <option value="OPTIONS_SHARED">OPTIONS_SHARED</option>
                      <option value="APPLICATION_SUBMITTED">APPLICATION_SUBMITTED</option>
                      <option value="SANCTIONED">SANCTIONED</option>
                      <option value="DISBURSED">DISBURSED</option>
                      <option value="NOT_ELIGIBLE">NOT_ELIGIBLE</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Assigned Advisor</label>
                    <input
                      type="text"
                      value={editAdvisor}
                      onChange={(e) => setEditAdvisor(e.target.value)}
                      placeholder="Advisor Name"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Follow-up Notes</label>
                    <textarea
                      rows={3}
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Add follow-up call notes, documents pending..."
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateLead}
                    disabled={updating}
                    className="maroon-gradient-btn px-6 py-2 rounded-xl text-xs font-bold shadow-md"
                  >
                    {updating ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
