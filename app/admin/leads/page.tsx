"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { LOAN_PRODUCTS } from "../../../data/loans";
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  MessageSquare,
  RefreshCw,
  Plus,
  Trash2,
  Edit,
  Database,
  CheckCircle2,
  X,
  Loader2,
  FileSpreadsheet
} from "lucide-react";

export interface LeadRecord {
  id: string;
  dbId?: string;
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
  const [dataSource, setDataSource] = useState<string>("local");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedLoanType, setSelectedLoanType] = useState<string>("ALL");

  // Create Modal State
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    fullName: "",
    mobile: "",
    whatsapp: "",
    city: "Durg",
    loanType: "personal-loan",
    loanAmount: "500000",
    employmentType: "Salaried",
    monthlyIncome: "50000",
    existingEmi: "0",
    preferredContact: "Call",
    message: "",
    source: "Admin Manual Entry",
    status: "NEW",
    assignedAdvisor: "Unassigned",
    notes: ""
  });

  // Edit Modal State
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);
  const [updating, setUpdating] = useState(false);

  // Delete Confirmation State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads || []);
        setDataSource(data.source || "supabase");
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

  // CREATE LEAD
  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLeadForm)
      });
      const data = await res.json();
      if (data.success) {
        setCreateModalOpen(false);
        fetchLeads();
        setNewLeadForm({
          fullName: "",
          mobile: "",
          whatsapp: "",
          city: "Durg",
          loanType: "personal-loan",
          loanAmount: "500000",
          employmentType: "Salaried",
          monthlyIncome: "50000",
          existingEmi: "0",
          preferredContact: "Call",
          message: "",
          source: "Admin Manual Entry",
          status: "NEW",
          assignedAdvisor: "Unassigned",
          notes: ""
        });
      }
    } catch (err) {
      console.error("Failed to create lead:", err);
    } finally {
      setCreating(false);
    }
  };

  // EDIT LEAD
  const openEditModal = (lead: LeadRecord) => {
    setSelectedLead({ ...lead });
    setEditModalOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead) return;
    setUpdating(true);
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: selectedLead.id,
          fullName: selectedLead.fullName,
          mobile: selectedLead.mobile,
          whatsapp: selectedLead.whatsapp,
          city: selectedLead.city,
          loanType: selectedLead.loanType,
          loanAmount: selectedLead.loanAmount,
          employmentType: selectedLead.employmentType,
          monthlyIncome: selectedLead.monthlyIncome,
          status: selectedLead.status,
          assignedAdvisor: selectedLead.assignedAdvisor,
          notes: selectedLead.notes
        })
      });
      const data = await res.json();
      if (data.success) {
        setEditModalOpen(false);
        setSelectedLead(null);
        fetchLeads();
      }
    } catch (err) {
      console.error("Failed to update lead:", err);
    } finally {
      setUpdating(false);
    }
  };

  // DELETE LEAD
  const handleDeleteLead = async (leadId: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/leads?id=${encodeURIComponent(leadId)}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        setDeleteConfirmId(null);
        fetchLeads();
      }
    } catch (err) {
      console.error("Failed to delete lead:", err);
    } finally {
      setDeleting(false);
    }
  };

  // FILTER & SEARCH
  const filteredLeads = leads.filter((l) => {
    const matchesStatus = selectedStatus === "ALL" || l.status === selectedStatus;
    const matchesType = selectedLoanType === "ALL" || l.loanType === selectedLoanType;
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.mobile.includes(searchTerm) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  // EXPORT CSV
  const exportLeadsCsv = () => {
    const headers = [
      "Lead ID",
      "Full Name",
      "Mobile",
      "WhatsApp",
      "City",
      "Loan Type",
      "Loan Amount",
      "Employment Type",
      "Monthly Income",
      "Status",
      "Advisor",
      "Created Date",
      "Notes"
    ];

    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.fullName.replace(/"/g, '""')}"`,
      l.mobile,
      l.whatsapp,
      `"${l.city.replace(/"/g, '""')}"`,
      l.loanType,
      l.loanAmount,
      l.employmentType,
      l.monthlyIncome,
      l.status,
      `"${(l.assignedAdvisor || "").replace(/"/g, '""')}"`,
      new Date(l.createdDate).toLocaleString("en-IN"),
      `"${(l.notes || "").replace(/"/g, '""')}"`
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `finance_rath_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Dashboard Header Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#7a1c1c] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Finance Rath Operations</span>
                {dataSource === "supabase" ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-[11px]">
                    <Database className="w-3 h-3 text-emerald-600" />
                    <span>Connected: Supabase Database (Live)</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-semibold text-[11px]">
                    <Database className="w-3 h-3 text-amber-600" />
                    <span>Local Storage Mode</span>
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-black text-slate-900 mt-1">
                Supabase Enquiries &amp; CRUD Dashboard
              </h1>
              <p className="text-xs text-slate-500">
                Manage, edit, filter, assign, create, and delete customer loan enquiries stored in Supabase.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setCreateModalOpen(true)}
                className="maroon-gradient-btn px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>New Enquiry</span>
              </button>

              <button
                onClick={fetchLeads}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>

              <button
                onClick={exportLeadsCsv}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-slate-800 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="relative sm:col-span-6">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Name, Mobile, City, or Lead ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                />
              </div>

              <div className="sm:col-span-3">
                <select
                  value={selectedLoanType}
                  onChange={(e) => setSelectedLoanType(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-slate-300 text-xs font-semibold bg-white"
                >
                  <option value="ALL">All Loan Categories</option>
                  {LOAN_PRODUCTS.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-3 text-xs text-right text-slate-500 font-semibold">
                Showing {filteredLeads.length} of {leads.length} Records
              </div>
            </div>

            {/* Status Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-100 text-xs">
              <span className="font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" />
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
                "DISBURSED",
                "NOT_ELIGIBLE",
                "CLOSED"
              ].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer transition-colors ${
                    selectedStatus === st
                      ? "bg-[#7a1c1c] text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Enquiries Data Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
                    <th className="p-4">Lead ID / Date</th>
                    <th className="p-4">Customer Name</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Loan Details</th>
                    <th className="p-4">Income &amp; EMI</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Advisor</th>
                    <th className="p-4 text-right">CRUD Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="p-10 text-center text-slate-500">
                        <div className="inline-flex items-center gap-2 font-semibold">
                          <Loader2 className="w-5 h-5 animate-spin text-[#7a1c1c]" />
                          <span>Fetching enquiries from Supabase database...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-10 text-center text-slate-500">
                        No customer enquiries match your search filter.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-mono font-bold text-slate-900">
                          <div className="text-slate-900">{lead.id}</div>
                          <div className="text-[10px] text-slate-400 font-sans font-normal">
                            {new Date(lead.createdDate).toLocaleDateString("en-IN")}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-900">{lead.fullName}</div>
                          <div className="text-[10px] text-slate-500 font-normal">{lead.city}</div>
                        </td>
                        <td className="p-4 space-y-1">
                          <a
                            href={`tel:${lead.mobile}`}
                            className="inline-flex items-center gap-1 text-slate-800 hover:text-[#7a1c1c] font-semibold"
                          >
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{lead.mobile}</span>
                          </a>
                          <a
                            href={`https://wa.me/${lead.whatsapp}?text=Hello%20${encodeURIComponent(lead.fullName)},%20this%20is%20Finance%20Rath%20regarding%20your%20${encodeURIComponent(lead.loanType)}%20enquiry%20Ref%20${lead.id}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[10px] text-emerald-600 font-bold hover:underline"
                          >
                            WhatsApp Chat →
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
                        <td className="p-4 text-[11px] font-semibold text-slate-600">
                          {lead.assignedAdvisor || "Unassigned"}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEditModal(lead)}
                              className="p-1.5 rounded-lg bg-amber-50 text-[#7a1c1c] hover:bg-[#7a1c1c] hover:text-white transition-colors border border-amber-200 cursor-pointer"
                              title="Edit Enquiry"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(lead.id)}
                              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors border border-red-200 cursor-pointer"
                              title="Delete Enquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* CREATE NEW LEAD MODAL */}
          {createModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 border border-slate-200 shadow-2xl my-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Plus className="w-5 h-5 text-[#7a1c1c]" />
                    <h3 className="text-lg font-black text-slate-900">Add New Enquiry to Supabase</h3>
                  </div>
                  <button onClick={() => setCreateModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={newLeadForm.fullName}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, fullName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={newLeadForm.mobile}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, mobile: e.target.value, whatsapp: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp Number</label>
                      <input
                        type="tel"
                        value={newLeadForm.whatsapp}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, whatsapp: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={newLeadForm.city}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, city: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#7a1c1c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Loan Category</label>
                      <select
                        value={newLeadForm.loanType}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, loanType: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white font-semibold"
                      >
                        {LOAN_PRODUCTS.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Required Loan Amount (₹)</label>
                      <input
                        type="number"
                        value={newLeadForm.loanAmount}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, loanAmount: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Employment Type</label>
                      <select
                        value={newLeadForm.employmentType}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, employmentType: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white"
                      >
                        <option value="Salaried">Salaried Professional</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Business Owner">Business Owner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Monthly Income (₹)</label>
                      <input
                        type="number"
                        value={newLeadForm.monthlyIncome}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, monthlyIncome: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Status</label>
                      <select
                        value={newLeadForm.status}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, status: e.target.value as any })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white font-bold"
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
                      <label className="block font-bold text-slate-700 mb-1">Assigned Advisor</label>
                      <input
                        type="text"
                        value={newLeadForm.assignedAdvisor}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, assignedAdvisor: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Follow-up Notes / Instructions</label>
                    <textarea
                      rows={2}
                      value={newLeadForm.notes}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setCreateModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={creating}
                      className="maroon-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer"
                    >
                      {creating ? "Inserting..." : "Save to Supabase"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* EDIT LEAD MODAL */}
          {editModalOpen && selectedLead && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 border border-slate-200 shadow-2xl my-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#7a1c1c]">{selectedLead.id}</span>
                    <h3 className="text-lg font-black text-slate-900">Edit Enquiry Details</h3>
                  </div>
                  <button onClick={() => setEditModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Customer Name</label>
                      <input
                        type="text"
                        value={selectedLead.fullName}
                        onChange={(e) => setSelectedLead({ ...selectedLead, fullName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        value={selectedLead.mobile}
                        onChange={(e) => setSelectedLead({ ...selectedLead, mobile: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">City / Location</label>
                      <input
                        type="text"
                        value={selectedLead.city}
                        onChange={(e) => setSelectedLead({ ...selectedLead, city: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Loan Category</label>
                      <select
                        value={selectedLead.loanType}
                        onChange={(e) => setSelectedLead({ ...selectedLead, loanType: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white font-semibold"
                      >
                        {LOAN_PRODUCTS.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Loan Amount (₹)</label>
                      <input
                        type="text"
                        value={selectedLead.loanAmount}
                        onChange={(e) => setSelectedLead({ ...selectedLead, loanAmount: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Monthly Income (₹)</label>
                      <input
                        type="text"
                        value={selectedLead.monthlyIncome}
                        onChange={(e) => setSelectedLead({ ...selectedLead, monthlyIncome: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Lead Status</label>
                      <select
                        value={selectedLead.status}
                        onChange={(e) => setSelectedLead({ ...selectedLead, status: e.target.value as any })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white font-bold"
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
                      <label className="block font-bold text-slate-700 mb-1">Assigned Advisor</label>
                      <input
                        type="text"
                        value={selectedLead.assignedAdvisor}
                        onChange={(e) => setSelectedLead({ ...selectedLead, assignedAdvisor: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Follow-up Notes</label>
                    <textarea
                      rows={3}
                      value={selectedLead.notes}
                      onChange={(e) => setSelectedLead({ ...selectedLead, notes: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setEditModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={updating}
                      className="maroon-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer"
                    >
                      {updating ? "Updating..." : "Update Supabase Record"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* DELETE CONFIRMATION DIALOG */}
          {deleteConfirmId && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 border border-slate-200 shadow-2xl text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900">Delete Customer Enquiry?</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Are you sure you want to permanently delete lead record <strong className="font-mono text-slate-800">{deleteConfirmId}</strong> from Supabase database?
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setDeleteConfirmId(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteLead(deleteConfirmId)}
                    disabled={deleting}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md cursor-pointer"
                  >
                    {deleting ? "Deleting..." : "Yes, Delete Record"}
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
