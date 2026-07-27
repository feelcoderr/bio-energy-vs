import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCareers } from "../../firebase/services/careerService";
import { getAllInquiries } from "../../firebase/services/inquiryService";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalInquiries: 0,
    unreadInquiries: 0,
  });
  const [recentJobs, setRecentJobs] = useState([]);
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [careers, inquiries] = await Promise.all([
          getAllCareers(),
          getAllInquiries()
        ]);

        setStats({
          totalJobs: careers.length,
          activeJobs: careers.filter(c => c.status === "active").length,
          totalInquiries: inquiries.length,
          unreadInquiries: inquiries.filter(i => !i.isRead).length
        });

        setRecentJobs(careers.slice(0, 5));
        setRecentInquiries(inquiries.slice(0, 5));
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-surface-tint border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div>
        <h1 className="font-heading text-3xl text-primary mb-2">Overview</h1>
        <p className="font-body text-on-surface-variant text-sm">System snapshot and recent activity.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Roles" value={stats.activeJobs} total={stats.totalJobs} label="Total listed" color="bg-surface-tint" />
        <StatCard title="Total Roles" value={stats.totalJobs} color="bg-primary" />
        <StatCard title="Unread Inquiries" value={stats.unreadInquiries} total={stats.totalInquiries} label="Total received" color="bg-error" />
        <StatCard title="Total Inquiries" value={stats.totalInquiries} color="bg-secondary" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Jobs */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/30 shadow-ambient-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl text-primary">Recent Roles</h2>
            <Link to="/admin/careers" className="text-xs font-semibold text-surface-tint hover:underline uppercase tracking-wider">View All</Link>
          </div>
          <div className="space-y-4">
            {recentJobs.length === 0 ? (
              <p className="text-sm text-on-surface-variant">No roles posted yet.</p>
            ) : (
              recentJobs.map(job => (
                <div key={job.id} className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
                  <div>
                    <h3 className="font-semibold text-primary text-sm">{job.title}</h3>
                    <p className="text-xs text-on-surface-variant mt-1">{job.dept} • {job.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.status === 'active' ? 'bg-surface-tint/10 text-surface-tint' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {job.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/30 shadow-ambient-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl text-primary">Recent Inquiries</h2>
            <Link to="/admin/inquiries" className="text-xs font-semibold text-surface-tint hover:underline uppercase tracking-wider">View All</Link>
          </div>
          <div className="space-y-4">
            {recentInquiries.length === 0 ? (
              <p className="text-sm text-on-surface-variant">No inquiries received yet.</p>
            ) : (
              recentInquiries.map(inq => (
                <div key={inq.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {!inq.isRead && <span className="w-2 h-2 rounded-full bg-error animate-pulse" />}
                      <h3 className="font-semibold text-primary text-sm">{inq.name || "Anonymous"}</h3>
                    </div>
                    <p className="text-xs text-on-surface-variant truncate max-w-[200px]">{inq.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary mb-1">
                      {inq.intent || "General"}
                    </span>
                    <p className="text-[10px] text-on-surface-variant/70">
                      {inq.createdAt ? new Date(inq.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, total, label, color }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-ambient-sm flex flex-col relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-5 rounded-bl-full group-hover:scale-110 transition-transform duration-500`} />
      <span className="text-xs font-body font-bold text-on-surface-variant/60 uppercase tracking-widest mb-4">{title}</span>
      <div className="flex items-end gap-3 mt-auto">
        <span className="font-heading text-4xl text-primary leading-none">{value}</span>
        {total !== undefined && (
          <div className="pb-1">
            <span className="text-xs font-medium text-on-surface-variant">/ {total}</span>
            <span className="block text-[9px] text-on-surface-variant/60 uppercase tracking-wider">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
