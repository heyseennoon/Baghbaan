import { useState } from "react";
import {
  LayoutDashboard, Package, Tag, ShoppingBag, Users, Star,
  Ticket, BarChart2, MapPin, Settings, LogOut, Search,
  Bell, MessageSquare, Calendar, Plus, TrendingUp, TrendingDown,
  Eye, Edit2, Trash2, Copy, ToggleLeft, ToggleRight,
  ChevronRight, Filter, Download, MoreHorizontal, CheckCircle,
  Clock, Truck, XCircle, RefreshCw, ArrowUpRight, ChevronDown,
  Phone, Mail, Globe, Instagram, Facebook, Shield, CreditCard,
  Send, X, Check, AlertCircle, Leaf
} from "lucide-react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";

/* ── Brand tokens ──────────────────────────────────────────────────── */
const C = {
  forest: "#1D5C3F",
  sage: "#8AAE92",
  ivory: "#FAF8F4",
  white: "#FFFFFF",
  gold: "#C9A84C",
  gray: "#F4F4F4",
  cocoa: "#6F4E37",
  walnut: "#8B5E3C",
  blush: "#F4D6D8",
  rose: "#D8A7B1",
  charcoal: "#232323",
  olive: "#7A8450",
  border: "rgba(29,92,63,0.1)",
  shadow: "0 4px 24px rgba(29,92,63,0.07)",
  shadowHover: "0 8px 40px rgba(29,92,63,0.14)",
};

const serif = "'Playfair Display', serif";
const body = "'Manrope', sans-serif";
const italic = "'Cormorant Garamond', serif";
const mono = "'Inter', monospace";

/* ── Mock data ─────────────────────────────────────────────────────── */
const revenueData = [
  { month: "Jan", revenue: 42000, orders: 134 },
  { month: "Feb", revenue: 38500, orders: 118 },
  { month: "Mar", revenue: 51000, orders: 162 },
  { month: "Apr", revenue: 47200, orders: 149 },
  { month: "May", revenue: 63800, orders: 201 },
  { month: "Jun", revenue: 58400, orders: 185 },
  { month: "Jul", revenue: 71200, orders: 224 },
  { month: "Aug", revenue: 68900, orders: 217 },
  { month: "Sep", revenue: 74500, orders: 235 },
  { month: "Oct", revenue: 82100, orders: 258 },
  { month: "Nov", revenue: 91400, orders: 287 },
  { month: "Dec", revenue: 104200, orders: 328 },
];

const categoryData = [
  { name: "Bouquets", value: 38, color: C.forest },
  { name: "Lilies", value: 24, color: C.sage },
  { name: "Roses", value: 19, color: C.rose },
  { name: "Custom", value: 11, color: C.gold },
  { name: "Gifts", value: 8, color: C.olive },
];

const weeklyOrders = [
  { day: "Mon", orders: 34 }, { day: "Tue", orders: 28 },
  { day: "Wed", orders: 42 }, { day: "Thu", orders: 38 },
  { day: "Fri", orders: 56 }, { day: "Sat", orders: 72 },
  { day: "Sun", orders: 61 },
];

const mockProducts = [
  { id: 1, name: "Casa Blanca Lily Bouquet", category: "Lilies", price: 4800, stock: 24, featured: true, visible: true, img: "https://images.unsplash.com/photo-1486102515046-44130769cb25?w=300&h=300&fit=crop&auto=format" },
  { id: 2, name: "Blush Rose Arrangement", category: "Roses", price: 3600, stock: 31, featured: false, visible: true, img: "https://images.unsplash.com/photo-1532152562158-bb5400e012f6?w=300&h=300&fit=crop&auto=format" },
  { id: 3, name: "Garden Bridal Bundle", category: "Bouquets", price: 8500, stock: 8, featured: true, visible: true, img: "https://images.unsplash.com/photo-1612961718547-e615a67ffa8e?w=300&h=300&fit=crop&auto=format" },
  { id: 4, name: "Peony Paradise", category: "Bouquets", price: 5200, stock: 0, featured: false, visible: false, img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=300&h=300&fit=crop&auto=format" },
  { id: 5, name: "Tulip Spring Mix", category: "Mixed", price: 2900, stock: 45, featured: false, visible: true, img: "https://images.unsplash.com/photo-1547414912-6fe761a1d88a?w=300&h=300&fit=crop&auto=format" },
  { id: 6, name: "White Orchid Grace", category: "Orchids", price: 6100, stock: 15, featured: true, visible: true, img: "https://images.unsplash.com/photo-1631407779166-86952be9dbd7?w=300&h=300&fit=crop&auto=format" },
];

const mockOrders = [
  { id: "#BB-1042", customer: "Amelia Rahman", avatar: "AR", bouquet: "Casa Blanca Lily", amount: "Rs. 4,800", payment: "Paid", status: "Delivered", date: "28 Jun 2024", city: "Islamabad" },
  { id: "#BB-1041", customer: "Tariq Mehmood", avatar: "TM", bouquet: "Blush Rose Arrangement", amount: "Rs. 3,600", payment: "Paid", status: "Out for Delivery", date: "28 Jun 2024", city: "Rawalpindi" },
  { id: "#BB-1040", customer: "Sara Khan", avatar: "SK", bouquet: "Garden Bridal Bundle", amount: "Rs. 8,500", payment: "Pending", status: "Preparing", date: "27 Jun 2024", city: "Islamabad" },
  { id: "#BB-1039", customer: "Ali Raza", avatar: "AR", bouquet: "Peony Paradise", amount: "Rs. 5,200", payment: "Paid", status: "Confirmed", date: "27 Jun 2024", city: "Islamabad" },
  { id: "#BB-1038", customer: "Fatima Malik", avatar: "FM", bouquet: "Tulip Spring Mix", amount: "Rs. 2,900", payment: "Paid", status: "Pending", date: "26 Jun 2024", city: "Rawalpindi" },
  { id: "#BB-1037", customer: "Hamza Sheikh", avatar: "HS", bouquet: "White Orchid Grace", amount: "Rs. 6,100", payment: "Refunded", status: "Cancelled", date: "26 Jun 2024", city: "Islamabad" },
  { id: "#BB-1036", customer: "Zara Qureshi", avatar: "ZQ", bouquet: "Casa Blanca Lily", amount: "Rs. 4,800", payment: "Paid", status: "Delivered", date: "25 Jun 2024", city: "Islamabad" },
  { id: "#BB-1035", customer: "Bilal Hussain", avatar: "BH", bouquet: "Blush Rose Arrangement", amount: "Rs. 3,600", payment: "Paid", status: "Delivered", date: "25 Jun 2024", city: "Rawalpindi" },
];

const mockCustomers = [
  { name: "Amelia Rahman", email: "amelia@gmail.com", orders: 14, spent: "Rs. 62,400", flower: "Lilies", city: "Islamabad", joined: "Jan 2024", avatar: "AR" },
  { name: "Sara Khan", email: "sara@gmail.com", orders: 9, spent: "Rs. 45,800", flower: "Roses", city: "Islamabad", joined: "Mar 2024", avatar: "SK" },
  { name: "Zara Qureshi", email: "zara@gmail.com", orders: 7, spent: "Rs. 38,100", flower: "Peonies", city: "Islamabad", joined: "Feb 2024", avatar: "ZQ" },
  { name: "Tariq Mehmood", email: "tariq@gmail.com", orders: 5, spent: "Rs. 22,600", flower: "Mixed", city: "Rawalpindi", joined: "Apr 2024", avatar: "TM" },
  { name: "Fatima Malik", email: "fatima@gmail.com", orders: 4, spent: "Rs. 18,200", flower: "Orchids", city: "Rawalpindi", joined: "May 2024", avatar: "FM" },
  { name: "Bilal Hussain", email: "bilal@gmail.com", orders: 3, spent: "Rs. 11,400", flower: "Tulips", city: "Rawalpindi", joined: "Jun 2024", avatar: "BH" },
];

const mockReviews = [
  { customer: "Amelia Rahman", avatar: "AR", rating: 5, product: "Casa Blanca Lily Bouquet", review: "Absolutely breathtaking! The lilies lasted nearly three weeks and the packaging was like receiving a gift from a luxury brand. Will order again.", date: "27 Jun 2024", status: "published" },
  { customer: "Sara Khan", avatar: "SK", rating: 5, product: "Garden Bridal Bundle", review: "Perfect for my nikah. Every guest asked about the flowers. Baghbaan delivered exactly what we discussed — truly bespoke.", date: "26 Jun 2024", status: "published" },
  { customer: "Tariq Mehmood", avatar: "TM", rating: 4, product: "Blush Rose Arrangement", review: "Beautiful flowers, delivery was slightly late but the quality made up for it completely. Highly recommend.", date: "25 Jun 2024", status: "pending" },
  { customer: "Zara Qureshi", avatar: "ZQ", rating: 5, product: "White Orchid Grace", review: "The orchids are still thriving after two weeks! Incredible quality and presentation. My favourite florist in Islamabad.", date: "24 Jun 2024", status: "published" },
];

/* ── Shared sub-components ─────────────────────────────────────────── */
function GlassCard({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-[20px] transition-all duration-300 ${className}`}
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${C.border}`,
        boxShadow: C.shadow,
        ...style,
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

const statusConfig: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
  "Pending":         { bg: "rgba(201,168,76,0.12)", text: C.gold,   icon: <Clock className="w-3 h-3" /> },
  "Confirmed":       { bg: "rgba(29,92,63,0.1)",    text: C.forest, icon: <CheckCircle className="w-3 h-3" /> },
  "Preparing":       { bg: "rgba(138,174,146,0.2)",  text: "#4a7c5f", icon: <RefreshCw className="w-3 h-3" /> },
  "Out for Delivery":{ bg: "rgba(111,78,55,0.1)",   text: C.cocoa,  icon: <Truck className="w-3 h-3" /> },
  "Delivered":       { bg: "rgba(29,92,63,0.12)",   text: C.forest, icon: <Check className="w-3 h-3" /> },
  "Cancelled":       { bg: "rgba(220,53,69,0.1)",   text: "#dc3545", icon: <XCircle className="w-3 h-3" /> },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status] ?? { bg: C.gray, text: C.charcoal, icon: null };
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium"
      style={{ fontFamily: body, background: cfg.bg, color: cfg.text }}
    >
      {cfg.icon}{status}
    </span>
  );
}

function Avatar({ initials, size = 36 }: { initials: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0 text-xs font-semibold"
      style={{ width: size, height: size, background: "rgba(29,92,63,0.1)", color: C.forest, fontFamily: body }}
    >
      {initials}
    </div>
  );
}

/* ── Overview ──────────────────────────────────────────────────────── */
function Overview() {
  const stats = [
    { label: "Total Products", value: "48", trend: "+3", up: true, icon: <Package className="w-5 h-5" />, sub: "4 low stock" },
    { label: "Orders Today", value: "24", trend: "+12%", up: true, icon: <ShoppingBag className="w-5 h-5" />, sub: "vs yesterday" },
    { label: "Revenue (June)", value: "Rs. 2.4L", trend: "+18%", up: true, icon: <TrendingUp className="w-5 h-5" />, sub: "Rs. 8,400 today" },
    { label: "Total Customers", value: "1,284", trend: "+24", up: true, icon: <Users className="w-5 h-5" />, sub: "this month" },
    { label: "Pending Orders", value: "9", trend: "-2", up: false, icon: <Clock className="w-5 h-5" />, sub: "need action" },
    { label: "Delivered Today", value: "15", trend: "+5", up: true, icon: <Truck className="w-5 h-5" />, sub: "on time" },
  ];

  const bestSellers = [
    { name: "Casa Blanca Lily", orders: 86, revenue: "Rs. 1,18,900" },
    { name: "Garden Bridal Bundle", orders: 54, revenue: "Rs. 1,45,800" },
    { name: "Blush Rose Arrangement", orders: 71, revenue: "Rs. 76,200" },
    { name: "White Orchid Grace", orders: 38, revenue: "Rs. 82,100" },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Dashboard Overview"
        subtitle="Welcome back — here's what's blooming today."
        action={
          <div className="flex items-center gap-3">
            <select className="px-4 py-2.5 rounded-full text-sm outline-none" style={{ fontFamily: body, background: C.gray, border: `1px solid ${C.border}`, color: C.charcoal }}>
              <option>Last 30 days</option><option>Last 7 days</option><option>This Year</option>
            </select>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ fontFamily: body, background: C.forest, color: C.white, boxShadow: `0 4px 16px rgba(29,92,63,0.3)` }}>
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        }
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
        {stats.map((s) => (
          <GlassCard key={s.label} className="p-6 hover:-translate-y-0.5 cursor-default" style={{ boxShadow: C.shadow }}>
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `rgba(29,92,63,0.08)`, color: C.forest }}>
                {s.icon}
              </div>
              <span className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full`}
                style={{ fontFamily: body, background: s.up ? "rgba(29,92,63,0.08)" : "rgba(220,53,69,0.08)", color: s.up ? C.forest : "#dc3545" }}>
                {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {s.trend}
              </span>
            </div>
            <p className="text-sm mb-1" style={{ fontFamily: body, color: `${C.charcoal}70` }}>{s.label}</p>
            <p className="mb-1" style={{ fontFamily: mono, fontWeight: 700, fontSize: "1.75rem", color: C.charcoal, lineHeight: 1 }}>{s.value}</p>
            <p className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}50` }}>{s.sub}</p>
          </GlassCard>
        ))}
      </div>

      {/* Revenue chart + Category donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.15rem", color: C.charcoal }}>Revenue Overview</h3>
              <p className="text-xs mt-0.5" style={{ fontFamily: body, color: `${C.charcoal}55` }}>Monthly sales performance</p>
            </div>
            <div className="flex gap-1 p-1 rounded-full" style={{ background: C.gray }}>
              {["Revenue", "Orders"].map((t) => (
                <button key={t} className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                  style={{ fontFamily: body, background: t === "Revenue" ? C.white : "transparent", color: C.charcoal, boxShadow: t === "Revenue" ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={revenueData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.forest} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={C.forest} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 6" stroke="rgba(0,0,0,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: body, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fontFamily: mono, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip contentStyle={{ fontFamily: body, borderRadius: 12, border: `1px solid ${C.border}`, boxShadow: C.shadow, fontSize: 12 }} />
              <Area type="monotone" dataKey="revenue" stroke={C.forest} strokeWidth={2.5} fill="url(#revGrad)" dot={false} activeDot={{ r: 5, fill: C.forest }} />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <h3 className="mb-1" style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.15rem", color: C.charcoal }}>Category Sales</h3>
          <p className="text-xs mb-5" style={{ fontFamily: body, color: `${C.charcoal}55` }}>By category, last 30 days</p>
          <ResponsiveContainer width="100%" height={170}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={48} outerRadius={76} paddingAngle={3} dataKey="value">
                {categoryData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontFamily: body, borderRadius: 12, border: `1px solid ${C.border}`, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {categoryData.map((d) => (
              <div key={d.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                  <span className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}80` }}>{d.name}</span>
                </div>
                <span className="text-xs font-semibold" style={{ fontFamily: mono, color: C.charcoal }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Weekly bar + Best sellers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6 md:p-8">
          <h3 className="mb-1" style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.15rem", color: C.charcoal }}>Weekly Orders</h3>
          <p className="text-xs mb-6" style={{ fontFamily: body, color: `${C.charcoal}55` }}>Orders by day this week</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={weeklyOrders} barSize={28}>
              <CartesianGrid strokeDasharray="3 6" vertical={false} stroke="rgba(0,0,0,0.04)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fontFamily: body, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ fontFamily: body, borderRadius: 12, border: `1px solid ${C.border}`, fontSize: 12 }} />
              <Bar dataKey="orders" fill={C.sage} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.15rem", color: C.charcoal }}>Best-Selling Bouquets</h3>
              <p className="text-xs mt-0.5" style={{ fontFamily: body, color: `${C.charcoal}55` }}>This month's top performers</p>
            </div>
          </div>
          <div className="space-y-4">
            {bestSellers.map((b, i) => (
              <div key={b.name} className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ fontFamily: mono, background: i === 0 ? C.gold : C.gray, color: i === 0 ? C.white : `${C.charcoal}70` }}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ fontFamily: body, color: C.charcoal }}>{b.name}</p>
                  <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ background: C.gray }}>
                    <div className="h-full rounded-full" style={{ width: `${100 - i * 18}%`, background: i === 0 ? C.forest : C.sage }} />
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-semibold" style={{ fontFamily: mono, color: C.charcoal }}>{b.orders}</p>
                  <p className="text-[10px]" style={{ fontFamily: body, color: `${C.charcoal}55` }}>orders</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Low stock alert */}
      <div className="p-5 rounded-2xl flex items-center justify-between gap-4"
        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)" }}>
            <AlertCircle className="w-4 h-4" style={{ color: C.gold }} />
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ fontFamily: body, color: C.charcoal }}>Low Inventory Alert</p>
            <p className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}65` }}>Garden Bridal Bundle (8 left) · White Orchid Grace (15 left) — reorder soon</p>
          </div>
        </div>
        <button className="shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105"
          style={{ fontFamily: body, background: C.gold, color: C.white }}>
          View Inventory
        </button>
      </div>
    </div>
  );
}

/* ── Products ──────────────────────────────────────────────────────── */
function AdminProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [showAdd, setShowAdd] = useState(false);

  const toggleVisible = (id: number) =>
    setProducts((p) => p.map((x) => x.id === id ? { ...x, visible: !x.visible } : x));

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Product Management"
        subtitle={`${products.length} products in catalogue`}
        action={
          <button onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{ fontFamily: body, background: C.forest, color: C.white, boxShadow: `0 4px 16px rgba(29,92,63,0.3)` }}>
            <Plus className="w-4 h-4" /> Add Product
          </button>
        }
      />

      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-48 px-4 py-2.5 rounded-full" style={{ background: C.white, border: `1px solid ${C.border}` }}>
          <Search className="w-4 h-4" style={{ color: `${C.charcoal}40` }} />
          <input placeholder="Search products…" className="flex-1 outline-none text-sm bg-transparent" style={{ fontFamily: body }} />
        </div>
        {["All", "Bouquets", "Lilies", "Roses", "Orchids", "Mixed"].map((f) => (
          <button key={f} className="px-4 py-2 rounded-full text-xs font-medium transition-all"
            style={{ fontFamily: body, background: f === "All" ? C.forest : C.gray, color: f === "All" ? C.white : `${C.charcoal}80` }}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((p) => (
          <GlassCard key={p.id} className="overflow-hidden group hover:-translate-y-1" style={{ boxShadow: C.shadow }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-107" style={{ background: C.blush }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {p.featured && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                  style={{ fontFamily: body, background: C.gold, color: C.white }}>
                  Featured
                </span>
              )}
              {!p.stock && (
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                  style={{ fontFamily: body, background: "rgba(220,53,69,0.9)", color: C.white }}>
                  Out of Stock
                </span>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(29,92,63,0.5)", backdropFilter: "blur(4px)" }}>
                {[
                  { icon: <Eye className="w-4 h-4" />, label: "View" },
                  { icon: <Edit2 className="w-4 h-4" />, label: "Edit" },
                  { icon: <Copy className="w-4 h-4" />, label: "Dupe" },
                  { icon: <Trash2 className="w-4 h-4" />, label: "Delete" },
                ].map((a) => (
                  <button key={a.label} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.2)", color: C.white }}>
                    {a.icon}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-medium leading-snug" style={{ fontFamily: serif, color: C.charcoal }}>{p.name}</h4>
                <button onClick={() => toggleVisible(p.id)} className="shrink-0 text-xs transition-colors"
                  style={{ color: p.visible ? C.forest : `${C.charcoal}40` }}>
                  {p.visible ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs mb-3" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{p.category}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold" style={{ fontFamily: mono, fontSize: "1rem", color: C.charcoal }}>
                  Rs. {p.price.toLocaleString()}
                </span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium`}
                  style={{ fontFamily: body, background: p.stock > 10 ? "rgba(29,92,63,0.08)" : p.stock === 0 ? "rgba(220,53,69,0.08)" : "rgba(201,168,76,0.12)", color: p.stock > 10 ? C.forest : p.stock === 0 ? "#dc3545" : C.gold }}>
                  {p.stock === 0 ? "Out of stock" : `${p.stock} in stock`}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Add Product Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(35,35,35,0.5)", backdropFilter: "blur(8px)" }}>
          <GlassCard className="w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ background: C.white }}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 style={{ fontFamily: serif, fontWeight: 600, fontSize: "1.4rem", color: C.charcoal }}>Add New Product</h3>
                <button onClick={() => setShowAdd(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Product Name", placeholder: "e.g. Casa Blanca Lily Bouquet" },
                  { label: "Price (Rs.)", placeholder: "e.g. 4800" },
                  { label: "Stock Quantity", placeholder: "e.g. 24" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ fontFamily: body, color: `${C.charcoal}70` }}>{f.label}</label>
                    <input placeholder={f.placeholder} className="w-full px-4 py-3 rounded-2xl outline-none text-sm transition-all"
                      style={{ fontFamily: body, background: C.gray, border: `1px solid transparent` }} />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ fontFamily: body, color: `${C.charcoal}70` }}>Category</label>
                  <select className="w-full px-4 py-3 rounded-2xl outline-none text-sm" style={{ fontFamily: body, background: C.gray }}>
                    {["Bouquets", "Lilies", "Roses", "Orchids", "Mixed", "Gifts"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ fontFamily: body, color: `${C.charcoal}70` }}>Description</label>
                  <textarea rows={3} placeholder="Describe the bouquet…" className="w-full px-4 py-3 rounded-2xl outline-none text-sm resize-none"
                    style={{ fontFamily: body, background: C.gray }} />
                </div>
                <div className="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center gap-2 cursor-pointer hover:border-opacity-100 transition-all"
                  style={{ borderColor: `${C.forest}30` }}>
                  <Plus className="w-6 h-6" style={{ color: `${C.forest}60` }} />
                  <p className="text-sm" style={{ fontFamily: body, color: `${C.charcoal}60` }}>Upload product images</p>
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setShowAdd(false)} className="flex-1 py-3 rounded-full text-sm font-medium"
                    style={{ fontFamily: body, background: C.gray, color: C.charcoal }}>
                    Cancel
                  </button>
                  <button className="flex-1 py-3 rounded-full text-sm font-medium transition-all hover:scale-[1.02]"
                    style={{ fontFamily: body, background: C.forest, color: C.white, boxShadow: `0 4px 16px rgba(29,92,63,0.3)` }}>
                    Publish Product
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}

/* ── Orders ─────────────────────────────────────────────────────────── */
function AdminOrders() {
  const [selected, setSelected] = useState<string | null>(null);
  const order = mockOrders.find((o) => o.id === selected);

  const timeline = ["Order Received", "Confirmed", "Preparing", "Packed", "Out for Delivery", "Delivered"];

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Orders"
        subtitle={`${mockOrders.length} orders — ${mockOrders.filter((o) => o.status === "Pending").length} pending`}
        action={
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm" style={{ fontFamily: body, background: C.gray, color: C.charcoal }}>
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm" style={{ fontFamily: body, background: C.gray, color: C.charcoal }}>
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Table */}
        <GlassCard className={`${selected ? "xl:col-span-2" : "xl:col-span-3"} overflow-hidden`}>
          <div className="p-5 border-b flex items-center gap-3" style={{ borderColor: C.border }}>
            <div className="flex items-center gap-2 flex-1 px-4 py-2 rounded-full" style={{ background: C.gray }}>
              <Search className="w-4 h-4" style={{ color: `${C.charcoal}40` }} />
              <input placeholder="Search orders…" className="flex-1 outline-none text-sm bg-transparent" style={{ fontFamily: body }} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  {["Order ID", "Customer", "Bouquet", "City", "Payment", "Status", "Amount", "Date", ""].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-[10px] uppercase tracking-widest whitespace-nowrap"
                      style={{ fontFamily: body, color: `${C.charcoal}50`, fontWeight: 600 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((o) => (
                  <tr key={o.id}
                    onClick={() => setSelected(selected === o.id ? null : o.id)}
                    className="cursor-pointer transition-colors hover:bg-green-50/40"
                    style={{ borderBottom: `1px solid ${C.border}`, background: selected === o.id ? "rgba(29,92,63,0.03)" : "transparent" }}>
                    <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.forest }}>{o.id}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <Avatar initials={o.avatar} size={30} />
                        <span className="text-sm" style={{ fontFamily: body, color: C.charcoal }}>{o.customer}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm whitespace-nowrap" style={{ fontFamily: body, color: `${C.charcoal}75` }}>{o.bouquet}</td>
                    <td className="px-5 py-4 text-xs" style={{ fontFamily: body, color: `${C.charcoal}60` }}>{o.city}</td>
                    <td className="px-5 py-4">
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: body,
                        background: o.payment === "Paid" ? "rgba(29,92,63,0.08)" : o.payment === "Pending" ? "rgba(201,168,76,0.12)" : "rgba(220,53,69,0.08)",
                        color: o.payment === "Paid" ? C.forest : o.payment === "Pending" ? C.gold : "#dc3545" }}>
                        {o.payment}
                      </span>
                    </td>
                    <td className="px-5 py-4"><StatusBadge status={o.status} /></td>
                    <td className="px-5 py-4 text-sm font-semibold" style={{ fontFamily: mono, color: C.charcoal }}>{o.amount}</td>
                    <td className="px-5 py-4 text-xs whitespace-nowrap" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{o.date}</td>
                    <td className="px-5 py-4">
                      <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
                        <MoreHorizontal className="w-4 h-4" style={{ color: `${C.charcoal}50` }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Order detail panel */}
        {selected && order && (
          <GlassCard className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 style={{ fontFamily: serif, fontWeight: 600, fontSize: "1.1rem", color: C.charcoal }}>{order.id}</h3>
              <button onClick={() => setSelected(null)} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Timeline */}
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-4" style={{ fontFamily: body, color: `${C.charcoal}50`, fontWeight: 600 }}>Timeline</p>
              <div className="space-y-3">
                {timeline.map((step, i) => {
                  const statusIndex = timeline.findIndex((s) => s.toLowerCase().includes(order.status.toLowerCase().split(" ")[0]));
                  const done = i <= statusIndex;
                  return (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs"
                        style={{ background: done ? C.forest : C.gray, color: done ? C.white : `${C.charcoal}40`, transition: "all .2s" }}>
                        {done ? <Check className="w-3 h-3" /> : <span style={{ fontFamily: mono }}>{i + 1}</span>}
                      </div>
                      <span className="text-xs" style={{ fontFamily: body, color: done ? C.charcoal : `${C.charcoal}40`, fontWeight: done ? 500 : 400 }}>{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t pt-5" style={{ borderColor: C.border }}>
              <p className="text-[10px] uppercase tracking-widest mb-3" style={{ fontFamily: body, color: `${C.charcoal}50`, fontWeight: 600 }}>Customer</p>
              <div className="flex items-center gap-3">
                <Avatar initials={order.avatar} size={38} />
                <div>
                  <p className="text-sm font-medium" style={{ fontFamily: body, color: C.charcoal }}>{order.customer}</p>
                  <p className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{order.city}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-5" style={{ borderColor: C.border }}>
              <div className="flex justify-between text-xs mb-2">
                <span style={{ fontFamily: body, color: `${C.charcoal}60` }}>Bouquet</span>
                <span style={{ fontFamily: body, color: C.charcoal }}>{order.bouquet}</span>
              </div>
              <div className="flex justify-between text-xs mb-2">
                <span style={{ fontFamily: body, color: `${C.charcoal}60` }}>Payment</span>
                <span style={{ fontFamily: body, color: order.payment === "Paid" ? C.forest : C.gold, fontWeight: 600 }}>{order.payment}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold mt-3 pt-3 border-t" style={{ borderColor: C.border }}>
                <span style={{ fontFamily: body, color: C.charcoal }}>Total</span>
                <span style={{ fontFamily: mono, color: C.charcoal }}>{order.amount}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Confirm", "Cancel"].map((a) => (
                <button key={a} className="py-2.5 rounded-full text-xs font-medium transition-all hover:scale-[1.02]"
                  style={{ fontFamily: body, background: a === "Confirm" ? C.forest : C.gray, color: a === "Confirm" ? C.white : C.charcoal }}>
                  {a}
                </button>
              ))}
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
}

/* ── Customers ──────────────────────────────────────────────────────── */
function AdminCustomers() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Customers" subtitle={`${mockCustomers.length} registered customers`} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockCustomers.map((c) => (
          <GlassCard key={c.name} className="p-6 hover:-translate-y-0.5 cursor-default group">
            <div className="flex items-start gap-4 mb-5">
              <Avatar initials={c.avatar} size={48} />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold" style={{ fontFamily: serif, color: C.charcoal }}>{c.name}</h4>
                <p className="text-xs truncate" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{c.email}</p>
                <p className="text-xs mt-0.5" style={{ fontFamily: body, color: `${C.charcoal}45` }}>Member since {c.joined}</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" style={{ color: `${C.charcoal}50` }} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Orders", value: c.orders },
                { label: "Spent", value: c.spent, small: true },
                { label: "City", value: c.city, small: true },
              ].map((m) => (
                <div key={m.label} className="text-center py-2.5 rounded-xl" style={{ background: C.gray }}>
                  <p className="font-bold" style={{ fontFamily: mono, fontSize: m.small ? "0.7rem" : "1.1rem", color: C.charcoal, lineHeight: 1.2 }}>{m.value}</p>
                  <p className="text-[10px] mt-0.5" style={{ fontFamily: body, color: `${C.charcoal}50` }}>{m.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: C.border }}>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-3 h-3" style={{ color: C.sage }} />
                <span className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}65` }}>Favourite: {c.flower}</span>
              </div>
              <button className="text-xs font-medium transition-colors hover:text-green-700" style={{ fontFamily: body, color: C.forest }}>
                View profile →
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ── Reviews ────────────────────────────────────────────────────────── */
function AdminReviews() {
  const [reviews, setReviews] = useState(mockReviews);
  return (
    <div className="space-y-8">
      <SectionHeader title="Customer Reviews" subtitle={`${reviews.filter((r) => r.status === "pending").length} awaiting approval`} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <GlassCard key={i} className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <Avatar initials={r.avatar} size={40} />
                <div>
                  <p className="text-sm font-medium" style={{ fontFamily: body, color: C.charcoal }}>{r.customer}</p>
                  <p className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{r.product}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} style={{ color: s < r.rating ? C.gold : `${C.charcoal}20`, fontSize: "0.75rem" }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wide font-medium shrink-0"
                style={{ fontFamily: body, background: r.status === "published" ? "rgba(29,92,63,0.1)" : "rgba(201,168,76,0.12)", color: r.status === "published" ? C.forest : C.gold }}>
                {r.status}
              </span>
            </div>
            <p className="text-sm leading-relaxed italic" style={{ fontFamily: italic, color: `${C.charcoal}75` }}>"{r.review}"</p>
            <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: C.border }}>
              <span className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}45` }}>{r.date}</span>
              <div className="flex gap-2">
                {r.status === "pending" && (
                  <button onClick={() => setReviews((rv) => rv.map((x, j) => j === i ? { ...x, status: "published" } : x))}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105"
                    style={{ fontFamily: body, background: C.forest, color: C.white }}>
                    <Check className="w-3 h-3" /> Approve
                  </button>
                )}
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs" style={{ fontFamily: body, background: C.gray, color: C.charcoal }}>
                  <Send className="w-3 h-3" /> Reply
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs" style={{ fontFamily: body, background: "rgba(220,53,69,0.08)", color: "#dc3545" }}>
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ── Analytics ──────────────────────────────────────────────────────── */
function AdminAnalytics() {
  const customerGrowth = [
    { month: "Jan", customers: 820 }, { month: "Feb", customers: 890 },
    { month: "Mar", customers: 970 }, { month: "Apr", customers: 1040 },
    { month: "May", customers: 1130 }, { month: "Jun", customers: 1284 },
  ];
  return (
    <div className="space-y-8">
      <SectionHeader title="Analytics" subtitle="Performance insights for Baghbaan" />
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {[
          { label: "Avg. Order Value", value: "Rs. 4,820", trend: "+8%", up: true },
          { label: "Conversion Rate", value: "5.2%", trend: "+0.4%", up: true },
          { label: "Repeat Customers", value: "38%", trend: "+3%", up: true },
          { label: "Avg. Delivery Time", value: "1.8 hrs", trend: "-12min", up: true },
        ].map((m) => (
          <GlassCard key={m.label} className="p-5">
            <p className="text-xs mb-2" style={{ fontFamily: body, color: `${C.charcoal}60` }}>{m.label}</p>
            <p className="font-bold mb-1" style={{ fontFamily: mono, fontSize: "1.5rem", color: C.charcoal }}>{m.value}</p>
            <span className="text-xs font-semibold" style={{ color: C.forest }}>{m.trend}</span>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-8">
          <h3 className="mb-1" style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.15rem", color: C.charcoal }}>Revenue vs Orders</h3>
          <p className="text-xs mb-6" style={{ fontFamily: body, color: `${C.charcoal}55` }}>Full year comparison</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 6" vertical={false} stroke="rgba(0,0,0,0.04)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: body, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 10, fontFamily: mono, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fontFamily: mono, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontFamily: body, borderRadius: 12, border: `1px solid ${C.border}`, fontSize: 12 }} />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke={C.forest} strokeWidth={2.5} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="orders" stroke={C.gold} strokeWidth={2} dot={false} strokeDasharray="5 3" />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="mb-1" style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.15rem", color: C.charcoal }}>Customer Growth</h3>
          <p className="text-xs mb-6" style={{ fontFamily: body, color: `${C.charcoal}55` }}>Cumulative customers this year</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={customerGrowth}>
              <defs>
                <linearGradient id="custGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.gold} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={C.gold} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 6" vertical={false} stroke="rgba(0,0,0,0.04)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: body, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fontFamily: mono, fill: `${C.charcoal}60` }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontFamily: body, borderRadius: 12, border: `1px solid ${C.border}`, fontSize: 12 }} />
              <Area type="monotone" dataKey="customers" stroke={C.gold} strokeWidth={2.5} fill="url(#custGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>
    </div>
  );
}

/* ── Delivery Areas ─────────────────────────────────────────────────── */
function AdminDelivery() {
  const areas = [
    {
      city: "Islamabad",
      zones: ["F-6", "F-7", "F-8", "F-10", "G-9", "G-10", "G-11", "I-8", "I-9", "E-7", "Blue Area", "Bahria Town"],
      charge: "Rs. 10–15",
      cutoff: "2:00 PM",
      hours: "9 AM – 8 PM",
      holiday: true,
      color: C.forest,
    },
    {
      city: "Rawalpindi",
      zones: ["Saddar", "Peshawar Road", "Murree Road", "Bahria Town RWP", "Gulraiz", "Ayub Colony", "Dheri Hassanabad"],
      charge: "Rs. 12–15",
      cutoff: "1:00 PM",
      hours: "9 AM – 7 PM",
      holiday: false,
      color: C.sage,
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader title="Delivery Areas" subtitle="Coverage: Islamabad & Rawalpindi" />

      {/* Visual map placeholder */}
      <GlassCard className="overflow-hidden" style={{ aspectRatio: "16/6" }}>
        <div className="w-full h-full flex items-center justify-center relative"
          style={{ background: "linear-gradient(135deg, rgba(29,92,63,0.06) 0%, rgba(138,174,146,0.12) 100%)" }}>
          <svg viewBox="0 0 800 300" className="w-full h-full absolute inset-0 opacity-20">
            <circle cx="380" cy="130" r="100" fill={C.forest} />
            <circle cx="500" cy="180" r="80" fill={C.sage} />
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx={300 + Math.cos(i / 12 * Math.PI * 2) * 90} cy={130 + Math.sin(i / 12 * Math.PI * 2) * 60} r="3" fill={C.gold} />
            ))}
          </svg>
          <div className="relative z-10 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: C.forest }} />
            <p style={{ fontFamily: serif, fontSize: "1.1rem", color: C.charcoal, fontWeight: 500 }}>Islamabad · Rawalpindi</p>
            <p className="text-xs mt-1" style={{ fontFamily: body, color: `${C.charcoal}60` }}>Interactive map integration available with Supabase</p>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {areas.map((a) => (
          <GlassCard key={a.city} className="p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${a.color}15`, color: a.color }}>
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 style={{ fontFamily: serif, fontWeight: 600, fontSize: "1.15rem", color: C.charcoal }}>{a.city}</h3>
                <p className="text-xs" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{a.zones.length} delivery zones</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              {[
                { label: "Delivery Charge", value: a.charge },
                { label: "Same-Day Cutoff", value: a.cutoff },
                { label: "Delivery Hours", value: a.hours },
                { label: "Holiday Delivery", value: a.holiday ? "Available" : "Not Available" },
              ].map((m) => (
                <div key={m.label} className="p-3.5 rounded-2xl" style={{ background: C.gray }}>
                  <p className="text-[10px] uppercase tracking-wide mb-1" style={{ fontFamily: body, color: `${C.charcoal}50`, fontWeight: 600 }}>{m.label}</p>
                  <p className="text-sm font-semibold" style={{ fontFamily: mono, color: m.label === "Holiday Delivery" && !a.holiday ? "#dc3545" : a.color }}>{m.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide mb-3" style={{ fontFamily: body, color: `${C.charcoal}50`, fontWeight: 600 }}>Active Zones</p>
              <div className="flex flex-wrap gap-2">
                {a.zones.map((z) => (
                  <span key={z} className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: body, background: `${a.color}10`, color: a.color, border: `1px solid ${a.color}20` }}>
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

/* ── Settings ───────────────────────────────────────────────────────── */
function AdminSettings() {
  const sections = [
    {
      title: "Store Information",
      icon: <Globe className="w-4 h-4" />,
      fields: [
        { label: "Store Name", value: "Baghbaan" },
        { label: "Tagline", value: "Where Every Flower Finds Its Home" },
        { label: "Phone", value: "+92 311 0000000" },
        { label: "Email", value: "hello@baghbaan.pk" },
        { label: "Address", value: "Islamabad, Pakistan" },
      ],
    },
    {
      title: "Social Media",
      icon: <Instagram className="w-4 h-4" />,
      fields: [
        { label: "Instagram", value: "@baghbaan.pk" },
        { label: "Facebook", value: "facebook.com/baghbaan" },
        { label: "Website", value: "www.baghbaan.pk" },
      ],
    },
  ];

  const payments = ["JazzCash", "EasyPaisa", "Bank Transfer"];

  return (
    <div className="space-y-8">
      <SectionHeader title="Settings" subtitle="Store configuration and preferences" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((s) => (
          <GlassCard key={s.title} className="p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${C.forest}10`, color: C.forest }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.05rem", color: C.charcoal }}>{s.title}</h3>
            </div>
            <div className="space-y-4">
              {s.fields.map((f) => (
                <div key={f.label}>
                  <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ fontFamily: body, color: `${C.charcoal}55` }}>{f.label}</label>
                  <input defaultValue={f.value} className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{ fontFamily: body, background: C.gray, border: `1px solid transparent`, color: C.charcoal }} />
                </div>
              ))}
            </div>
          </GlassCard>
        ))}

        {/* Payment methods */}
        <GlassCard className="p-7">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${C.forest}10`, color: C.forest }}>
              <CreditCard className="w-4 h-4" />
            </div>
            <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.05rem", color: C.charcoal }}>Payment Methods</h3>
          </div>
          <div className="space-y-3">
            {payments.map((p) => (
              <div key={p} className="flex items-center justify-between p-4 rounded-2xl" style={{ background: C.gray }}>
                <span className="text-sm font-medium" style={{ fontFamily: body, color: C.charcoal }}>{p}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ fontFamily: body, color: C.forest }}>Active</span>
                  <div className="w-10 h-5 rounded-full flex items-center" style={{ background: C.forest }}>
                    <div className="w-4 h-4 rounded-full bg-white ml-auto mr-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Security */}
        <GlassCard className="p-7">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${C.forest}10`, color: C.forest }}>
              <Shield className="w-4 h-4" />
            </div>
            <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: "1.05rem", color: C.charcoal }}>Security</h3>
          </div>
          <div className="space-y-4">
            {["Change Password", "Two-Factor Authentication", "Active Sessions"].map((a) => (
              <div key={a} className="flex items-center justify-between p-4 rounded-2xl" style={{ background: C.gray }}>
                <span className="text-sm" style={{ fontFamily: body, color: C.charcoal }}>{a}</span>
                <ChevronRight className="w-4 h-4" style={{ color: `${C.charcoal}40` }} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105"
          style={{ fontFamily: body, background: C.forest, color: C.white, boxShadow: `0 4px 16px rgba(29,92,63,0.3)` }}>
          <Check className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </div>
  );
}

/* ── Sidebar nav config ─────────────────────────────────────────────── */
const NAV = [
  { id: "overview",  label: "Dashboard",      icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: "products",  label: "Products",        icon: <Package className="w-4 h-4" /> },
  { id: "orders",    label: "Orders",           icon: <ShoppingBag className="w-4 h-4" />, badge: 9 },
  { id: "customers", label: "Customers",        icon: <Users className="w-4 h-4" /> },
  { id: "reviews",   label: "Reviews",          icon: <Star className="w-4 h-4" />, badge: 1 },
  { id: "analytics", label: "Analytics",        icon: <BarChart2 className="w-4 h-4" /> },
  { id: "delivery",  label: "Delivery Areas",   icon: <MapPin className="w-4 h-4" /> },
  { id: "settings",  label: "Settings",         icon: <Settings className="w-4 h-4" /> },
];

/* ── Root AdminDashboard ─────────────────────────────────────────────── */
export default function AdminDashboard() {
  const [active, setActive] = useState("overview");
  const [sideOpen, setSideOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const currentPage = {
    overview:  <Overview />,
    products:  <AdminProducts />,
    orders:    <AdminOrders />,
    customers: <AdminCustomers />,
    reviews:   <AdminReviews />,
    analytics: <AdminAnalytics />,
    delivery:  <AdminDelivery />,
    settings:  <AdminSettings />,
  }[active] ?? <Overview />;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F0EDE9", fontFamily: body }}>

      {/* ── Sidebar ── */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sideOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ width: 260, background: C.white, borderRight: `1px solid ${C.border}`, boxShadow: "2px 0 20px rgba(29,92,63,0.06)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b" style={{ borderColor: C.border }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.forest}10` }}>
            <Leaf className="w-5 h-5" style={{ color: C.forest }} />
          </div>
          <div>
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: C.charcoal, letterSpacing: "-0.01em" }}>Baghbaan</span>
            <span className="block text-[10px] uppercase tracking-widest" style={{ color: `${C.charcoal}45`, fontFamily: body }}>Admin Panel</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); setSideOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative"
                style={{
                  fontFamily: body,
                  background: isActive ? `${C.forest}` : "transparent",
                  color: isActive ? C.white : `${C.charcoal}70`,
                  boxShadow: isActive ? `0 4px 16px rgba(29,92,63,0.25)` : "none",
                }}
              >
                <span style={{ color: isActive ? C.white : `${C.charcoal}55` }}>{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: isActive ? "rgba(255,255,255,0.25)" : C.gold, color: C.white }}>
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute right-3 w-1.5 h-1.5 rounded-full" style={{ background: C.gold }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-4 py-5 border-t" style={{ borderColor: C.border }}>
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl mb-3" style={{ background: C.gray }}>
            <Avatar initials="AK" size={34} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate" style={{ fontFamily: body, color: C.charcoal }}>Admin Khan</p>
              <p className="text-[10px] truncate" style={{ fontFamily: body, color: `${C.charcoal}50` }}>admin@baghbaan.pk</p>
            </div>
            <ChevronDown className="w-3 h-3 shrink-0" style={{ color: `${C.charcoal}40` }} />
          </div>
          <a href="/" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-left transition-all hover:bg-red-50"
            style={{ fontFamily: body, color: "#dc3545" }}>
            <LogOut className="w-4 h-4" />
            <span>Back to Site</span>
          </a>
        </div>
      </aside>

      {/* Sidebar mobile overlay */}
      {sideOpen && <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setSideOpen(false)} />}

      {/* ── Main area ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top bar */}
        <header className="shrink-0 flex items-center gap-4 px-6 lg:px-8 py-4"
          style={{ background: C.white, borderBottom: `1px solid ${C.border}`, boxShadow: "0 2px 12px rgba(29,92,63,0.04)" }}>
          <button onClick={() => setSideOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100">
            <LayoutDashboard className="w-5 h-5" style={{ color: C.charcoal }} />
          </button>

          {/* Search */}
          <div className="flex items-center gap-2 flex-1 max-w-sm px-4 py-2.5 rounded-full" style={{ background: C.gray }}>
            <Search className="w-4 h-4 shrink-0" style={{ color: `${C.charcoal}40` }} />
            <input placeholder="Search orders, products, customers…" className="flex-1 outline-none text-sm bg-transparent" style={{ fontFamily: body }} />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Notification bell */}
            <div className="relative">
              <button onClick={() => setNotifOpen((v) => !v)}
                className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Bell className="w-4 h-4" style={{ color: `${C.charcoal}70` }} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: C.gold }} />
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-12 w-80 rounded-2xl overflow-hidden z-50"
                  style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: "0 12px 40px rgba(29,92,63,0.12)" }}>
                  <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: C.border }}>
                    <span className="text-sm font-semibold" style={{ fontFamily: body, color: C.charcoal }}>Notifications</span>
                    <button onClick={() => setNotifOpen(false)}><X className="w-4 h-4" style={{ color: `${C.charcoal}50` }} /></button>
                  </div>
                  {[
                    { msg: "New order #BB-1042 from Amelia Rahman", time: "2 min ago", dot: C.forest },
                    { msg: "Garden Bridal Bundle — only 8 left", time: "1 hr ago", dot: C.gold },
                    { msg: "New 5-star review from Sara Khan", time: "3 hrs ago", dot: C.sage },
                  ].map((n, i) => (
                    <div key={i} className="px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b last:border-0" style={{ borderColor: C.border }}>
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: n.dot }} />
                      <div>
                        <p className="text-xs leading-relaxed" style={{ fontFamily: body, color: C.charcoal }}>{n.msg}</p>
                        <p className="text-[10px] mt-0.5" style={{ fontFamily: body, color: `${C.charcoal}45` }}>{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <MessageSquare className="w-4 h-4" style={{ color: `${C.charcoal}70` }} />
            </button>
            <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Calendar className="w-4 h-4" style={{ color: `${C.charcoal}70` }} />
            </button>

            {/* Add product */}
            <button
              onClick={() => setActive("products")}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ fontFamily: body, background: C.forest, color: C.white, boxShadow: `0 4px 16px rgba(29,92,63,0.25)` }}>
              <Plus className="w-4 h-4" /> Add Product
            </button>

            <div className="ml-1">
              <Avatar initials="AK" size={36} />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto px-6 lg:px-8 py-8">
          {currentPage}
        </main>
      </div>
    </div>
  );
}
