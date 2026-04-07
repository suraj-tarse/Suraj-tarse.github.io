import { motion } from "framer-motion";
import { ArrowLeft, FolderOpen, ChevronRight, Code, Users, Lightbulb, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const projects = [
  {
    id: "bcg",
    title: "BCG Strategy Simulation",
    type: "Academic Simulation",
    period: "Fall 2024",
    color: "gold",
    description:
      "This was a competitive strategy simulation modeled after real BCG consulting engagements. Our team acted as consultants for BeyondTech, a fictional technology company undergoing digital transformation. We competed against other teams across multiple rounds, making strategic decisions on pricing, market entry, R&D investment, and competitive positioning. The simulation required building detailed financial models, analyzing competitor moves in real-time, and presenting data-backed recommendations to a panel of judges. Our team consistently ranked in the top tier by combining rigorous quantitative analysis with creative strategic thinking.",
    highlights: [
      "Developed comprehensive financial models projecting revenue, costs, and profitability across 5+ market scenarios",
      "Conducted competitive benchmarking analysis against 8 rival teams, identifying market gaps and pricing advantages",
      "Built dynamic Excel dashboards to track KPIs and simulate the impact of strategic decisions in real-time",
      "Presented final strategy recommendations to a panel, securing a top-tier ranking among competing teams",
    ],
    technicalSkills: ["Financial Modeling", "Excel", "Competitive Analysis", "Data Visualization", "Scenario Planning"],
    softSkills: ["Team Leadership", "Strategic Thinking", "Presentation Skills", "Decision-Making Under Pressure"],
    tags: ["Consulting", "Financial Modeling", "Strategy"],
  },
  {
    id: "huskyconnect",
    title: "Husky Connect",
    type: "College Project",
    period: "Spring 2025",
    color: "primary",
    description:
      "Husky Connect was a college project where our team designed a product roadmap for a networking app tailored to Northeastern University students. The goal was to solve the problem of fragmented student networking — where clubs, career events, and social activities lacked a unified platform. I led the market research phase, conducting 25+ stakeholder interviews with students, club leaders, and career services staff. We synthesized insights into user personas, journey maps, and a prioritized feature backlog. The final deliverable was a comprehensive product strategy deck with wireframes, go-to-market recommendations, and a phased launch plan.",
    highlights: [
      "Led market research phase with 25+ stakeholder interviews across students, faculty, and campus organizations",
      "Created detailed user personas and journey maps to identify pain points in student networking experiences",
      "Developed a prioritized feature backlog using MoSCoW framework based on user research insights",
      "Designed wireframes and a phased go-to-market strategy for campus-wide rollout",
    ],
    technicalSkills: ["Market Research", "User Interviews", "Wireframing", "Product Roadmapping", "MoSCoW Prioritization"],
    softSkills: ["Stakeholder Management", "User Empathy", "Cross-functional Collaboration", "Written Communication"],
    tags: ["Product Strategy", "Research", "UX"],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; bar: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", bar: "bg-gold" },
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", bar: "bg-primary" },
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>("bcg");
  const [activeTab, setActiveTab] = useState<Record<string, string>>({});

  const getTab = (id: string) => activeTab[id] || "about";

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h1>
          <p className="text-muted-foreground mb-8">Detailed breakdowns of key projects</p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((proj, idx) => {
            const c = colorMap[proj.color];
            const isExpanded = expandedId === proj.id;
            const tab = getTab(proj.id);

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div
                  className={`bento-card border ${isExpanded ? c.border : "border-border"} cursor-pointer transition-all`}
                  onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                        <FolderOpen size={18} className={c.text} />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">{proj.title}</h2>
                        <p className="text-sm text-muted-foreground">{proj.type}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{proj.period}</p>
                        <div className="flex gap-1.5 mt-2">
                          {proj.tags.map((t) => (
                            <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-4 border-t border-border">
                      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                        {["about", "overview", "technical", "soft skills"].map((t) => (
                          <button
                            key={t}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTab((prev) => ({ ...prev, [proj.id]: t }));
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all capitalize ${
                              tab === t
                                ? `${c.bg} ${c.text} border ${c.border}`
                                : "bg-secondary text-muted-foreground border border-border hover:border-primary/20"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      <motion.div key={tab} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                        {tab === "about" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">{proj.description}</p>
                        )}

                        {tab === "overview" && (
                          <ul className="space-y-3">
                            {proj.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ChevronRight size={14} className={`${c.text} mt-0.5 flex-shrink-0`} />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {tab === "technical" && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Code size={14} className={c.text} />
                              <span className="text-sm font-medium">Technical Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {proj.technicalSkills.map((s) => (
                                <span key={s} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {tab === "soft skills" && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Users size={14} className={c.text} />
                              <span className="text-sm font-medium">Soft Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {proj.softSkills.map((s) => (
                                <span key={s} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
