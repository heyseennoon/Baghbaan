import { useState } from "react";
import { Plus, Search, Truck, Leaf, Box, Tag, ClipboardList, Eye, Edit2, Trash2, X } from "lucide-react";

/* ── Brand tokens ──────────────────────────────────────────────────── */
const C = {
  forest: "#1D5C3F",
  sage: "#8AAE92",
  white: "#FFFFFF",
  gray: "#F4F4F4",
  charcoal: "#232323",
  border: "rgba(29,92,63,0.1)",
  shadow: "0 4px 24px rgba(29,92,63,0.07)",
};

const serif = "'Playfair Display', serif";
const body = "'Manrope', sans-serif";
const mono = "'Inter', monospace";

/* ── Shared UI ─────────────────────────────────────────────────────── */
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[20px] transition-all duration-300 ${className}`}
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${C.border}`,
        boxShadow: C.shadow,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 mb-8">
      <div>
        <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: "1.6rem", color: C.charcoal, lineHeight: 1.2 }}>{title}</h2>
        {subtitle && <p className="mt-1 text-sm" style={{ fontFamily: body, color: `${C.charcoal}80` }}>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

/* ── Database Mock Data ────────────────────────────────────────────── */
const initialSuppliers = [
  { id: "SUP-001", name: "Margalla Farm Blooms", contact: "+92 300 1234567" },
  { id: "SUP-002", name: "Punjab Flora Wholesale", contact: "+92 321 7654321" },
  { id: "SUP-003", name: "Murree Rose Gardens", contact: "+92 333 9998888" },
];

const initialFlowers = [
  { id: "FLW-101", commonName: "Red Rose", costPerStem: 150 },
  { id: "FLW-102", commonName: "White Lily", costPerStem: 300 },
  { id: "FLW-103", commonName: "Yellow Tulip", costPerStem: 250 },
  { id: "FLW-104", commonName: "Pink Peony", costPerStem: 450 },
];

const initialShipments = [
  { supplierId: "SUP-001", date: "2024-06-25", flowerId: "FLW-101", quantity: 500, bulkPrice: 65000 },
  { supplierId: "SUP-001", date: "2024-06-25", flowerId: "FLW-102", quantity: 200, bulkPrice: 55000 },
  { supplierId: "SUP-002", date: "2024-06-26", flowerId: "FLW-103", quantity: 300, bulkPrice: 60000 },
];

const initialBouquets = [
  { id: "BQT-001", name: "Nikah / Wedding", retailPrice: 8500 },
  { id: "BQT-002", name: "Nauroz Special", retailPrice: 4500 },
  { id: "BQT-003", name: "Classic Romance", retailPrice: 3200 },
];

const initialRecipes = [
  { bouquetId: "BQT-001", flowerId: "FLW-101", stemCount: 12 },
  { bouquetId: "BQT-001", flowerId: "FLW-102", stemCount: 5 },
  { bouquetId: "BQT-002", flowerId: "FLW-103", stemCount: 15 },
  { bouquetId: "BQT-003", flowerId: "FLW-101", stemCount: 24 },
];

/* ── Components ────────────────────────────────────────────────────── */

export function AdminDatabase() {
  const [activeTab, setActiveTab] = useState("suppliers");

  const tabs = [
    { id: "suppliers", label: "Suppliers", icon: <Truck className="w-4 h-4" /> },
    { id: "flowers", label: "Flowers (Inventory)", icon: <Leaf className="w-4 h-4" /> },
    { id: "shipments", label: "Shipments", icon: <Box className="w-4 h-4" /> },
    { id: "bouquets", label: "Bouquet Designs", icon: <Tag className="w-4 h-4" /> },
    { id: "recipes", label: "Recipes", icon: <ClipboardList className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Database Management"
        subtitle="Manage underlying tables for Islamabad Flowers project"
      />

      <div className="flex gap-2 p-1 rounded-2xl w-fit" style={{ background: C.gray }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={{
              fontFamily: body,
              background: activeTab === t.id ? C.white : "transparent",
              color: activeTab === t.id ? C.forest : `${C.charcoal}70`,
              boxShadow: activeTab === t.id ? "0 2px 8px rgba(0,0,0,0.05)" : "none"
            }}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "suppliers" && <DBSuppliers />}
      {activeTab === "flowers" && <DBFlowers />}
      {activeTab === "shipments" && <DBShipments />}
      {activeTab === "bouquets" && <DBBouquets />}
      {activeTab === "recipes" && <DBRecipes />}
    </div>
  );
}

function TableWrapper({ headers, children, onAdd, addLabel }: { headers: string[], children: React.ReactNode, onAdd: () => void, addLabel: string }) {
  return (
    <GlassCard className="overflow-hidden">
      <div className="p-5 border-b flex items-center justify-between gap-3" style={{ borderColor: C.border }}>
        <div className="flex items-center gap-2 flex-1 max-w-sm px-4 py-2.5 rounded-full" style={{ background: C.gray }}>
          <Search className="w-4 h-4 shrink-0" style={{ color: `${C.charcoal}40` }} />
          <input placeholder="Search records…" className="flex-1 outline-none text-sm bg-transparent" style={{ fontFamily: body }} />
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
          style={{ fontFamily: body, background: C.forest, color: C.white, boxShadow: `0 4px 16px rgba(29,92,63,0.25)` }}>
          <Plus className="w-4 h-4" /> {addLabel}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: `1px solid ${C.border}` }}>
              {headers.map((h) => (
                <th key={h} className="px-5 py-3.5 text-left text-[10px] uppercase tracking-widest whitespace-nowrap"
                  style={{ fontFamily: body, color: `${C.charcoal}50`, fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}

function DBSuppliers() {
  const [data] = useState(initialSuppliers);
  return (
    <TableWrapper headers={["Supplier ID", "Supplier Name", "Contact Number", "Actions"]} onAdd={() => {}} addLabel="Add Supplier">
      {data.map((r) => (
        <tr key={r.id} style={{ borderBottom: `1px solid ${C.border}` }} className="hover:bg-green-50/30 transition-colors">
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.id}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: body, color: C.charcoal }}>{r.name}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: body, color: `${C.charcoal}75` }}>{r.contact}</td>
          <td className="px-5 py-4">
            <div className="flex gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100"><Edit2 className="w-4 h-4 text-gray-500" /></button>
              <button className="p-1.5 rounded-md hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-500" /></button>
            </div>
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
}

function DBFlowers() {
  const [data] = useState(initialFlowers);
  return (
    <TableWrapper headers={["Flower ID", "Common Name", "Cost Per Stem (Rs.)", "Actions"]} onAdd={() => {}} addLabel="Add Flower">
      {data.map((r) => (
        <tr key={r.id} style={{ borderBottom: `1px solid ${C.border}` }} className="hover:bg-green-50/30 transition-colors">
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.id}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: body, color: C.charcoal }}>{r.commonName}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: mono, color: `${C.charcoal}75` }}>{r.costPerStem}</td>
          <td className="px-5 py-4">
            <div className="flex gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100"><Edit2 className="w-4 h-4 text-gray-500" /></button>
              <button className="p-1.5 rounded-md hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-500" /></button>
            </div>
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
}

function DBShipments() {
  const [data] = useState(initialShipments);
  return (
    <TableWrapper headers={["Supplier ID", "Delivery Date", "Flower ID", "Quantity Delivered", "Bulk Price Paid (Rs.)", "Actions"]} onAdd={() => {}} addLabel="Record Shipment">
      {data.map((r, i) => (
        <tr key={i} style={{ borderBottom: `1px solid ${C.border}` }} className="hover:bg-green-50/30 transition-colors">
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.supplierId}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: body, color: C.charcoal }}>{r.date}</td>
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.flowerId}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: mono, color: `${C.charcoal}75` }}>{r.quantity}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: mono, color: `${C.charcoal}75` }}>{r.bulkPrice.toLocaleString()}</td>
          <td className="px-5 py-4">
            <div className="flex gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100"><Edit2 className="w-4 h-4 text-gray-500" /></button>
              <button className="p-1.5 rounded-md hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-500" /></button>
            </div>
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
}

function DBBouquets() {
  const [data] = useState(initialBouquets);
  return (
    <TableWrapper headers={["Bouquet ID", "Bouquet Name", "Retail Price (Rs.)", "Actions"]} onAdd={() => {}} addLabel="Add Bouquet Design">
      {data.map((r) => (
        <tr key={r.id} style={{ borderBottom: `1px solid ${C.border}` }} className="hover:bg-green-50/30 transition-colors">
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.id}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: body, color: C.charcoal }}>{r.name}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: mono, color: `${C.charcoal}75` }}>{r.retailPrice.toLocaleString()}</td>
          <td className="px-5 py-4">
            <div className="flex gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100"><Edit2 className="w-4 h-4 text-gray-500" /></button>
              <button className="p-1.5 rounded-md hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-500" /></button>
            </div>
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
}

function DBRecipes() {
  const [data] = useState(initialRecipes);
  return (
    <TableWrapper headers={["Bouquet ID", "Flower ID", "Stem Count", "Actions"]} onAdd={() => {}} addLabel="Add Recipe Line">
      {data.map((r, i) => (
        <tr key={i} style={{ borderBottom: `1px solid ${C.border}` }} className="hover:bg-green-50/30 transition-colors">
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.bouquetId}</td>
          <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{r.flowerId}</td>
          <td className="px-5 py-4 text-sm" style={{ fontFamily: mono, color: `${C.charcoal}75` }}>{r.stemCount}</td>
          <td className="px-5 py-4">
            <div className="flex gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100"><Edit2 className="w-4 h-4 text-gray-500" /></button>
              <button className="p-1.5 rounded-md hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-500" /></button>
            </div>
          </td>
        </tr>
      ))}
    </TableWrapper>
  );
}
