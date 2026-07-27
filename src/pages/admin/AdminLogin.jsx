import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const { error } = await login(email, password);
    
    if (error) {
      setError(error);
      setIsSubmitting(false);
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background gradients from design system */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface-tint/5 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-surface-tint/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl text-primary mb-2">System Access</h1>
          <p className="font-body text-on-surface-variant text-sm tracking-wider uppercase">Ratnanjali Bioenergy Portal</p>
        </div>

        <div className="glass-card p-8 md:p-10">
          {error && (
            <div className="bg-error/10 text-error font-body text-sm px-4 py-3 rounded-lg mb-6 border border-error/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-body font-bold text-primary/80 uppercase tracking-widest mb-1.5 ml-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300"
                placeholder="admin@ratnanjali.com"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-body font-bold text-primary/80 uppercase tracking-widest mb-1.5 ml-1">
                Secure Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary justify-center mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Authenticating..." : "Authorize"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
