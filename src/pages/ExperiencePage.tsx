import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, ChevronRight, Code, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const experiences = [
  {
    id: "propburg",
    company: "PropBurg",
    role: "Project & Business Analyst",
    period: "Mar 2025 – Aug 2025",
    location: "Mumbai, India",
    color: "gold",
    description: "PropBurg is a real estate consulting and advisory firm based in Mumbai that helps clients navigate complex property markets. As a Project & Business Analyst, I was embedded in a client-facing team where I worked across 10+ consulting engagements spanning market entry strategy, competitive positioning, and operational transformation. My role involved end-to-end project delivery — from initial stakeholder discovery and data gathering through analysis, insight generation, and final presentation to senior leadership. I served as the analytical backbone of the team, building the models and dashboards that drove strategic decisions worth millions in investment.",
    highlights: [
      "Joined a client-facing team to tackle complex business challenges across 10+ engagements, combining stakeholder interviews, market research, and data analysis to uncover root causes and generate breakthrough strategic recommendations for senior leadership.",
      "Built Excel models and Power BI dashboards to support data-driven decision making, enabling client teams to evaluate strategic options, track performance, and drive bottom-line impact across multiple markets.",
      "Synthesized competitive intelligence, operational data, and stakeholder insights into structured PowerPoint deliverables, equipping clients with tools and knowledge to sustain transformation and growth independently.",
    ],
    technicalSkills: ["Excel Modelling", "Power BI", "Data Visualization", "Market Research", "Financial Modelling"],
    softSkills: ["Client Communication", "Stakeholder Management", "Problem Structuring", "Strategic Thinking", "Cross-functional Collaboration"],
  },
  {
    id: "betterfloors",
    company: "Better Floors",
    role: "Business Strategy Intern",
    period: "Mar 2024 – Jun 2024",
    location: "Mumbai, India",
    color: "accent",
    description: "Better Floors is a property management consulting firm operating across India's residential and commercial real estate markets. As a Business Strategy Intern, I worked directly with the leadership team to analyze the company's competitive landscape, property portfolios, and market positioning to identify growth opportunities. My day-to-day involved deep-dive analysis of property management processes, market trends, and financial data across multiple client engagements. I managed multiple parallel workstreams across 7 stakeholders — producing financial summaries, business reports, and strategic planning documents. My analytical work directly influenced Annual Operating Plan (AOP) decisions, including market expansion priorities and resource allocation strategies.",
    highlights: [
      "Collaborated with cross-functional teams to analyze business processes, identify competitive opportunities, and develop actionable plans that enabled leadership to grow market share and improve operational performance.",
      "Managed multiple workstreams simultaneously across 7 stakeholders, producing structured written deliverables — financial summaries, business reports, and planning documents — that communicated complex findings clearly across all seniority levels.",
      "Demonstrated rigorous analytical thinking by flagging data anomalies and performance gaps, translating insights into strategic recommendations that shaped Annual Operating Plan decisions.",
    ],
    technicalSkills: ["Google Sheets", "Data Analysis", "Business Reporting", "Market Sizing"],
    softSkills: ["Multi-Seniority Communication", "Workstream Management", "Analytical Thinking", "Written Communication", "Team Collaboration"],
  },
  {
    id: "adhiraj",
    company: "Adhiraj Construction",
    role: "Business Development Intern",
    period: "Mar 2023 – Jun 2023",
    location: "Mumbai, India",
    color: "primary",
    description: "Adhiraj Construction is a prominent real estate development firm in Mumbai known for premium residential projects. As a Business Development Intern, I supported the company's client acquisition and pipeline management efforts. Working in a fast-paced commercial environment, I was responsible for managing communication workflows, tracking leads through the sales funnel, and monitoring team performance against quarterly targets. This role taught me the foundations of business development — from prospecting and relationship building to pipeline analytics and strategic target-setting. I consistently took ownership of tasks from start to completion, building a reputation for reliability and initiative.",
    highlights: [
      "Supported client engagement and business development workstreams, managing pipelines and communications while tracking team performance against strategic targets in a fast-paced environment.",
      "Initiated and owned tasks independently from start to completion, demonstrating strong organizational capability and time management under shifting priorities.",
    ],
    technicalSkills: ["Pipeline Management", "CRM Tools", "Excel", "Business Development"],
    softSkills: ["Self-Management", "Time Management", "Organizational Skills", "Initiative", "Adaptability"],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; bar: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", bar: "bg-gold" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", bar: "bg-accent" },
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", bar: "bg-primary" },
};

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>("propburg");
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
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Experience</span>
          </h1>
          <p className="text-muted-foreground mb-8">Professional journey with detailed breakdowns</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-4">
            {experiences.map((exp, idx) => {
              const c = colorMap[exp.color];
              const isExpanded = expandedId === exp.id;
              const tab = getTab(exp.id);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <div
                    className={`bento-card border ${isExpanded ? c.border : "border-border"} cursor-pointer transition-all md:ml-10 relative`}
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[29px] top-6 w-3 h-3 rounded-full ${c.bar} border-2 border-background hidden md:block`} />

                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                          <Briefcase size={18} className={c.text} />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold">{exp.company}</h2>
                          <p className="text-sm text-muted-foreground">{exp.role}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.period} · {exp.location}</p>
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className={`text-muted-foreground transition-transform duration-200 mt-3 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-4 border-t border-border">
                        {/* Tabs */}
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                          {["about", "overview", "technical", "soft skills"].map((t) => (
                            <button
                              key={t}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab((prev) => ({ ...prev, [exp.id]: t }));
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

                        {/* Tab content */}
                        <motion.div key={tab} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                          {tab === "about" && (
                            <div className="space-y-3">
                              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                            </div>
                          )}

                          {tab === "overview" && (
                            <ul className="space-y-3">
                              {exp.highlights.map((h, i) => (
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
                                <span className="text-sm font-medium">Technical Skills Used</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.technicalSkills.map((s) => (
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
                                <span className="text-sm font-medium">Soft Skills Demonstrated</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.softSkills.map((s) => (
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
    </div>
  );
};

export default ExperiencePage;
