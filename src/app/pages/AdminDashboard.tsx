import { Users, DollarSign, ShoppingBag, TrendingUp } from "lucide-react";

const data = [
  { name: 'Mon', total: 1200 },
  { name: 'Tue', total: 2100 },
  { name: 'Wed', total: 1800 },
  { name: 'Thu', total: 2400 },
  { name: 'Fri', total: 3200 },
  { name: 'Sat', total: 4100 },
  { name: 'Sun', total: 3800 },
];

function RevenueChart() {
  const max = Math.max(...data.map((d) => d.total));
  const width = 700;
  const height = 260;
  const padding = 28;
  const points = data.map((d, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - (d.total / max) * (height - padding * 2);
    return { ...d, x, y };
  });
  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full overflow-visible" role="img" aria-label="Revenue overview line chart">
      <defs>
        <linearGradient id="adminRevenueArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6F4E37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6F4E37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((tick) => (
        <line
          key={`grid-${tick}`}
          x1={padding}
          x2={width - padding}
          y1={padding + tick * (height - padding * 2)}
          y2={padding + tick * (height - padding * 2)}
          stroke="#E5E7EB"
          strokeDasharray="3 6"
        />
      ))}
      <path d={areaPath} fill="url(#adminRevenueArea)" />
      <path d={linePath} fill="none" stroke="#6F4E37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((point) => (
        <g key={`point-${point.name}`}>
          <circle cx={point.x} cy={point.y} r="4" fill="#FAF6F2" stroke="#6F4E37" strokeWidth="2" />
          <text x={point.x} y={height - 4} textAnchor="middle" fontSize="12" fill="#6B7280" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {point.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function AdminDashboard() {
  return (
    <div className="pt-28 pb-24 px-6 lg:px-10 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl lg:text-4xl text-[#232323]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Dashboard Overview
        </h1>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 rounded-full border border-[#6F4E37]/20 bg-white text-sm outline-none text-[#232323]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Year</option>
          </select>
          <button className="px-5 py-2 rounded-full text-sm font-medium" style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}>
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: "$24,500", trend: "+12%", icon: <DollarSign className="w-5 h-5" /> },
          { label: "Active Orders", value: "142", trend: "+5%", icon: <ShoppingBag className="w-5 h-5" /> },
          { label: "Total Customers", value: "3,210", trend: "+18%", icon: <Users className="w-5 h-5" /> },
          { label: "Conversion Rate", value: "4.8%", trend: "+1.2%", icon: <TrendingUp className="w-5 h-5" /> },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-[#6F4E37]/10 shadow-[0_4px_20px_rgba(111,78,55,0.02)]">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F2] text-[#6F4E37] flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-xs font-medium text-[#7A8450] bg-[#7A8450]/10 px-2 py-1 rounded-md" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {stat.trend}
              </span>
            </div>
            <p className="text-[#232323]/60 text-sm mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>{stat.label}</p>
            <h3 className="text-2xl text-[#232323]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-[#6F4E37]/10 shadow-[0_4px_20px_rgba(111,78,55,0.02)]">
          <h3 className="text-lg text-[#232323] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Revenue Overview</h3>
          <div className="h-[300px] w-full">
            <RevenueChart />
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#6F4E37]/10 shadow-[0_4px_20px_rgba(111,78,55,0.02)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg text-[#232323]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Recent Orders</h3>
            <button className="text-sm text-[#6F4E37] hover:underline" style={{ fontFamily: "'Manrope', sans-serif" }}>View all</button>
          </div>
          <div className="space-y-5">
            {[
              { id: "#BB-9042", name: "Amelia R.", amount: "$120", status: "Processing" },
              { id: "#BB-9041", name: "Jonathan S.", amount: "$245", status: "Shipped" },
              { id: "#BB-9040", name: "Elena V.", amount: "$85", status: "Delivered" },
              { id: "#BB-9039", name: "David L.", amount: "$310", status: "Delivered" },
            ].map(order => (
              <div key={order.id} className="flex items-center justify-between pb-4 border-b border-[#6F4E37]/5 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm text-[#232323]" style={{ fontFamily: "'Manrope', sans-serif" }}>{order.id}</p>
                  <p className="text-xs text-[#232323]/60" style={{ fontFamily: "'Manrope', sans-serif" }}>{order.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm text-[#232323]" style={{ fontFamily: "'Manrope', sans-serif" }}>{order.amount}</p>
                  <p className={`text-[10px] uppercase tracking-wider mt-0.5 ${order.status === 'Delivered' ? 'text-[#7A8450]' : order.status === 'Processing' ? 'text-[#F4A261]' : 'text-[#6F4E37]'}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Inventory Low Warning */}
      <div className="bg-[#F4D6D8]/20 p-6 rounded-2xl border border-[#D8A7B1]/30 flex items-center justify-between gap-4">
        <div>
           <h4 className="text-[#d4183d] font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>Low Inventory Alert</h4>
           <p className="text-sm text-[#232323]/70" style={{ fontFamily: "'Manrope', sans-serif" }}>White Peonies and Blush Ranunculus are running low. Reorder soon to maintain stock.</p>
        </div>
        <button className="px-5 py-2 bg-white border border-[#D8A7B1] rounded-full text-sm text-[#d4183d] font-medium hover:bg-[#F4D6D8]/40 transition-colors" style={{ fontFamily: "'Manrope', sans-serif" }}>
          View Inventory
        </button>
      </div>
    </div>
  );
}
