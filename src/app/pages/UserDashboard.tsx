import { User, Package, MapPin, CreditCard, LogOut } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="pt-28 pb-24 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
      
      {/* Sidebar */}
      <aside className="md:w-64 shrink-0">
        <div className="bg-white rounded-3xl p-6 border border-[#6F4E37]/10 shadow-[0_4px_20px_rgba(111,78,55,0.03)] sticky top-28">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#6F4E37]/10">
            <div className="w-12 h-12 rounded-full bg-[#F4D6D8] flex items-center justify-center text-[#6F4E37] font-medium text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              A
            </div>
            <div>
              <p className="text-sm font-medium text-[#232323]" style={{ fontFamily: "'Manrope', sans-serif" }}>Amelia Rose</p>
              <p className="text-xs text-[#232323]/50" style={{ fontFamily: "'Manrope', sans-serif" }}>amelia@example.com</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {[
              { label: "Profile Info", icon: <User className="w-4 h-4" />, active: true },
              { label: "Order History", icon: <Package className="w-4 h-4" /> },
              { label: "Addresses", icon: <MapPin className="w-4 h-4" /> },
              { label: "Payment Methods", icon: <CreditCard className="w-4 h-4" /> },
            ].map(item => (
              <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${item.active ? "bg-[#6F4E37]/5 text-[#6F4E37] font-medium" : "text-[#232323]/70 hover:bg-[#FAF6F2]"}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
                {item.icon} {item.label}
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[#d4183d]/80 hover:bg-[#d4183d]/5 transition-colors mt-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <h1 className="text-3xl text-[#232323]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Personal Information
        </h1>
        
        <div className="bg-white rounded-3xl p-8 border border-[#6F4E37]/10 shadow-[0_4px_20px_rgba(111,78,55,0.03)]">
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-[#232323]/80 block mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>First Name</label>
                  <input type="text" defaultValue="Amelia" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#232323]/80 block mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>Last Name</label>
                  <input type="text" defaultValue="Rose" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#232323]/80 block mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>Email Address</label>
                <input type="email" defaultValue="amelia@example.com" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
              </div>
              <div>
                <label className="text-sm font-medium text-[#232323]/80 block mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
              </div>
              <div className="pt-4">
                <button className="px-8 py-3 rounded-full text-sm font-medium tracking-wide" style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}>
                  Save Changes
                </button>
              </div>
           </form>
        </div>

        <h2 className="text-2xl text-[#232323] pt-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
          Recent Orders
        </h2>
        
        <div className="space-y-4">
           {[
             { id: "#BB-8921", date: "Oct 12, 2024", total: "$120.00", status: "Delivered", color: "bg-[#7A8450]/10 text-[#7A8450]" },
             { id: "#BB-8640", date: "Sep 05, 2024", total: "$85.00", status: "Delivered", color: "bg-[#7A8450]/10 text-[#7A8450]" },
             { id: "#BB-7901", date: "Feb 14, 2024", total: "$240.00", status: "Delivered", color: "bg-[#7A8450]/10 text-[#7A8450]" },
           ].map(order => (
             <div key={order.id} className="bg-white p-5 rounded-2xl border border-[#6F4E37]/10 flex flex-wrap items-center justify-between gap-4 shadow-sm">
               <div>
                 <p className="font-medium text-[#232323]" style={{ fontFamily: "'Manrope', sans-serif" }}>{order.id}</p>
                 <p className="text-xs text-[#232323]/60" style={{ fontFamily: "'Manrope', sans-serif" }}>Placed on {order.date}</p>
               </div>
               <div className="text-right">
                 <p className="font-medium text-[#6F4E37]">{order.total}</p>
                 <span className={`inline-block mt-1 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${order.color}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
                   {order.status}
                 </span>
               </div>
               <button className="px-4 py-2 border border-[#6F4E37]/20 rounded-full text-xs font-medium text-[#232323] hover:bg-[#FAF6F2] transition-colors" style={{ fontFamily: "'Manrope', sans-serif" }}>
                 View Details
               </button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
