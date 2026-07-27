import { useState, useEffect } from "react";
import { getAllInquiries, markInquiryRead, deleteInquiry } from "../../firebase/services/inquiryService";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  
  // Filters
  const [filterIntent, setFilterIntent] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    const data = await getAllInquiries();
    setInquiries(data);
    setLoading(false);
  };

  const handleToggleRead = async (id, currentStatus) => {
    await markInquiryRead(id, !currentStatus);
    // Optimistic update
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, isRead: !currentStatus } : inq));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to permanently delete this inquiry?")) {
      await deleteInquiry(id);
      setInquiries(prev => prev.filter(inq => inq.id !== id));
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesIntent = filterIntent === "all" || inq.intent === filterIntent;
    const matchesStatus = filterStatus === "all" || 
                         (filterStatus === "read" && inq.isRead) || 
                         (filterStatus === "unread" && !inq.isRead);
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm || 
                          (inq.name && inq.name.toLowerCase().includes(searchLower)) ||
                          (inq.email && inq.email.toLowerCase().includes(searchLower)) ||
                          (inq.org && inq.org.toLowerCase().includes(searchLower));
    
    return matchesIntent && matchesStatus && matchesSearch;
  });

  if (loading && inquiries.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-surface-tint border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-primary mb-1">Inquiries Log</h1>
          <p className="font-body text-on-surface-variant text-sm">Manage contacts from investors, suppliers, and buyers.</p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl p-4 border border-outline-variant/30 shadow-ambient-sm flex flex-col lg:flex-row gap-4 items-center">
        <div className="w-full lg:flex-1 relative">
          <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input 
            type="text" 
            placeholder="Search name, email, or org..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-surface-tint"
          />
        </div>
        
        <div className="w-full lg:w-auto flex gap-4">
          <select 
            value={filterIntent} 
            onChange={(e) => setFilterIntent(e.target.value)}
            className="flex-1 lg:w-48 bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-surface-tint"
          >
            <option value="all">All Types</option>
            <option value="investor">Investors</option>
            <option value="supplier">Suppliers</option>
            <option value="buyer">Buyers</option>
            <option value="speculative">Speculative CVs</option>
          </select>

          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex-1 lg:w-40 bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-surface-tint"
          >
            <option value="all">All Status</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filteredInquiries.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-outline-variant/30">
            <p className="text-on-surface-variant">No inquiries match your filters.</p>
          </div>
        ) : (
          filteredInquiries.map(inq => {
            const isExpanded = expandedId === inq.id;
            const date = inq.createdAt ? new Date(inq.createdAt.seconds * 1000).toLocaleString() : 'N/A';
            
            return (
              <div key={inq.id} className={`bg-white rounded-2xl border transition-all overflow-hidden ${!inq.isRead ? 'border-surface-tint/40 shadow-md' : 'border-outline-variant/30 shadow-sm'}`}>
                {/* Header Row */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : inq.id)}
                  className={`p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-colors ${!inq.isRead ? 'bg-surface-tint/5' : 'hover:bg-surface-container-low/30'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {inq.isRead ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                      ) : (
                        <div className="w-2.5 h-2.5 rounded-full bg-surface-tint animate-pulse"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`text-base font-semibold ${!inq.isRead ? 'text-primary' : 'text-on-surface-variant'}`}>
                          {inq.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-surface-tint bg-surface-tint/10 px-2 py-0.5 rounded">
                          {inq.intent}
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant/80">{inq.email} • {date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleToggleRead(inq.id, inq.isRead); }}
                      className={`p-2 rounded-lg transition-colors ${inq.isRead ? 'text-on-surface-variant hover:bg-surface-container-low' : 'text-surface-tint bg-surface-tint/10 hover:bg-surface-tint/20'}`}
                      title={inq.isRead ? "Mark as unread" : "Mark as read"}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={inq.isRead ? "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" : "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"} /></svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDelete(inq.id); }}
                      className="p-2 rounded-lg text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    </button>
                    <div className="w-8 h-8 ml-2 flex items-center justify-center text-outline transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-6 border-t border-outline-variant/20 bg-surface-container-lowest">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      
                      {/* Dynamic Details based on Intent */}
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/30 pb-2">Provided Details</h4>
                        
                        {inq.org && (
                          <div><span className="text-xs font-semibold block">Organization</span><span className="text-sm">{inq.org}</span></div>
                        )}
                        {inq.interestArea && (
                          <div><span className="text-xs font-semibold block">Interest Area</span><span className="text-sm">{inq.interestArea}</span></div>
                        )}
                        {inq.residueType && (
                          <div><span className="text-xs font-semibold block">Residue Type</span><span className="text-sm">{inq.residueType}</span></div>
                        )}
                        {inq.targetProduct && (
                          <div><span className="text-xs font-semibold block">Target Product</span><span className="text-sm">{inq.targetProduct}</span></div>
                        )}
                        {inq.volume && (
                          <div><span className="text-xs font-semibold block">Volume</span><span className="text-sm">{inq.volume}</span></div>
                        )}
                        {inq.role && (
                          <div><span className="text-xs font-semibold block">Target Role</span><span className="text-sm">{inq.role}</span></div>
                        )}
                        {inq.linkedin && (
                          <div><span className="text-xs font-semibold block">LinkedIn/URL</span><a href={inq.linkedin} target="_blank" rel="noopener noreferrer" className="text-surface-tint hover:underline text-sm break-all">{inq.linkedin}</a></div>
                        )}
                      </div>

                      {/* Message Content */}
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/30 pb-2 mb-4">Message / Brief</h4>
                        <div className="bg-surface-container-low/50 p-4 rounded-xl text-sm whitespace-pre-wrap leading-relaxed">
                          {inq.message || "No message provided."}
                        </div>
                      </div>

                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <a 
                        href={`mailto:${inq.email}`}
                        className="btn-primary py-2.5 px-6 shadow-none text-xs"
                      >
                        Reply via Email
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
