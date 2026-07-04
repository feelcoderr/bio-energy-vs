import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobListings = [
  {
    id: "process-eng",
    title: "Lead Pyrolysis Process Engineer",
    dept: "Engineering",
    location: "Bangalore (Refinery Lab)",
    type: "Full-Time (On-site)",
    desc: "Scale and optimize continuous-feed oxygen-free pyrolytic reactor geometries, directing gas separation and volatile carbon flow rates.",
    responsibilities: [
      "Oversee thermodynamic modeling of biomass feed conversion under various temperature ranges (450°C - 650°C)",
      "Troubleshoot continuous feed valve locks and ash removal augers",
      "Collaborate on next-gen modular design blueprints (30 TPD plants)"
    ],
    requirements: [
      "B.Tech / M.Tech in Chemical Engineering or Mechanical Engineering",
      "4+ years industrial experience with fluid bed reactors or thermal processes",
      "Solid knowledge of CAD modeling and process safety rules"
    ]
  },
  {
    id: "sourcing-lead",
    title: "Regional Sourcing & Logistics Lead",
    dept: "Operations",
    location: "Regional Preprocessing Hubs",
    type: "Full-Time (Hybrid/Field)",
    desc: "Build feedstock procurement contracts with agricultural cooperatives and organize geolocated collection and sorting logistics.",
    responsibilities: [
      "Manage procurement relationships with rural farming unions and logistics coops",
      "Track moisture and ash characteristics of residues at storage nodes",
      "Design short-haul trucking schedules to minimize carbon mileage"
    ],
    requirements: [
      "Bachelor's degree in Supply Chain, Agriculture, or Operations Management",
      "Experience setting up local procurement logistics in rural areas",
      "Familiarity with GPS tracing and crop season cycles"
    ]
  },
  {
    id: "carbon-auditor",
    title: "Carbon Credits & Sustainability Auditor",
    dept: "Corporate",
    location: "Bangalore HQ",
    type: "Full-Time (Hybrid)",
    desc: "Monitor compliance frameworks for carbon removal credits, coordinating direct Puro.earth geotracking audits.",
    responsibilities: [
      "Ensure all geolocated feedstock logs meet Puro.earth methodological criteria",
      "Synthesize carbon durability data sheets for third-party auditing companies",
      "Prepare carbon registry validation filings for regional micro-hubs"
    ],
    requirements: [
      "Degree in Environmental Science, Sustainability, or Sustainability Law",
      "2+ years experience in carbon registry methodologies (Verra, Puro, Gold Standard)",
      "Strong database logging and analytical data management skills"
    ]
  },
  {
    id: "materials-chemist",
    title: "Materials Chemist (Activated Carbon)",
    dept: "Engineering",
    location: "Bangalore Lab",
    type: "Full-Time (On-site)",
    desc: "Evaluate physical carbon densities and iodine numbers for processed biochars, optimizing activation parameters.",
    responsibilities: [
      "Lead lab trials on steam-activation and chemical-activation of biochars",
      "Optimize porous surface area configurations for municipal water filter media",
      "Analyze structural graphene-dominant composite samples under electron microscopes"
    ],
    requirements: [
      "M.Sc / Ph.D in Material Science, Applied Chemistry, or Solid-State Physics",
      "Prior lab experience testing charcoal porous structures or carbon materials",
      "Hands-on expertise with adsorption gas analytics and SEM imagery"
    ]
  }
];

export default function CareersJobs() {
  const [activeDept, setActiveDept] = useState("All");
  const [expandedJob, setExpandedJob] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".jobs-reveal",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  const filteredJobs = jobListings.filter(job => 
    activeDept === "All" || job.dept === activeDept
  );

  const handleApplyClick = (jobTitle) => {
    // Fill job application input if present, and scroll
    const inputEl = document.getElementById("speculative-role");
    if (inputEl) {
      inputEl.value = jobTitle;
    }
    const ctaSec = document.getElementById("careers-cta");
    if (ctaSec) {
      ctaSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="open-roles" ref={containerRef} className="py-32 bg-white border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="jobs-reveal text-center mb-16">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Open Opportunities
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            Help Us Scale Carbon Solutions
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Review our active job listings. Click a role to expand requirements and apply directly.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="jobs-reveal flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Engineering", "Operations", "Corporate"].map(dept => (
            <button
              key={dept}
              onClick={() => {
                setActiveDept(dept);
                setExpandedJob(null);
              }}
              type="button"
              className={`px-6 py-2.5 rounded-full border transition-all duration-300 font-body text-xs font-semibold tracking-wider uppercase ${
                activeDept === dept
                  ? "bg-primary text-white border-primary shadow-ambient-sm"
                  : "bg-white border-outline-variant/30 text-on-surface-variant hover:border-outline hover:text-primary"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs List Accordion */}
        <div className="jobs-reveal space-y-4 max-w-4xl mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div 
                  key={job.id}
                  className="bg-surface-container-low/30 border border-outline-variant/35 rounded-3xl overflow-hidden shadow-ambient-sm transition-all duration-300"
                >
                  {/* Job Header */}
                  <button
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    type="button"
                    className="w-full text-left p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-container-low/50 transition-colors"
                  >
                    <div>
                      <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-1">
                        {job.dept}
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl text-primary font-normal">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs font-body text-on-surface-variant/70 mt-2 font-medium">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <span className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary shrink-0 self-end sm:self-center hover:bg-white transition-colors">
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Expanded Content */}
                  <div 
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-[800px] border-t border-outline-variant/30" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 md:p-8 space-y-6 bg-white">
                      <div>
                        <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-2">ROLE OVERVIEW</span>
                        <p className="font-body text-sm text-on-surface leading-relaxed">
                          {job.desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-3">KEY RESPONSIBILITIES</span>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex gap-2.5 items-start">
                                <span className="text-surface-tint font-bold text-xs leading-none mt-0.5">•</span>
                                <span className="font-body text-xs text-on-surface-variant leading-normal">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-3">REQUIREMENTS</span>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex gap-2.5 items-start">
                                <span className="text-surface-tint font-bold text-xs leading-none mt-0.5">•</span>
                                <span className="font-body text-xs text-on-surface-variant leading-normal">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-outline-variant/20 pt-6 flex justify-end">
                        <button
                          onClick={() => handleApplyClick(job.title)}
                          type="button"
                          className="btn-primary"
                        >
                          Apply For This Role
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })
          ) : (
            <p className="text-center text-on-surface-variant py-12">No active roles in this department. Submit a speculative application below.</p>
          )}
        </div>

      </div>
    </section>
  );
}
