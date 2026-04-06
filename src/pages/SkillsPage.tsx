import { motion } from "framer-motion";
import { ArrowLeft, Code, BarChart3, Users, Briefcase, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Excel Modelling", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "Python", level: 75 },
      { name: "Tableau", level: 85 },
      { name: "Google Sheets", level: 90 },
      { name: "Jira", level: 80 },
      { name: "Data Visualization", level: 88 },
      { name: "SQL", level: 70 },
      { name: "Market Research", level: 92 },
    ],
  },
  {
    title: "Business Analysis",
    icon: BarChart3,
    color: "gold",
    skills: [
      { name: "Scenario Analysis", level: 90 },
      { name: "Demand Forecasting", level: 85 },
      { name: "Market Sizing", level: 88 },
      { name: "Risk & Opportunity Identification", level: 92 },
      { name: "Trend Analysis", level: 87 },
      { name: "Financial Modelling", level: 90 },
    ],
  },
  {
    title: "Project Management",
    icon: Briefcase,
    color: "accent",
    skills: [
      { name: "Project Management", level: 88 },
      { name: "Risk Management", level: 85 },
      { name: "Scope & Schedule Management", level: 82 },
      { name: "Milestone Coordination", level: 80 },
      { name: "Agile / Scrum", level: 78 },
    ],
  },
  {
    title: "Consulting & Strategy",
    icon: Brain,
    color: "rose",
    skills: [
      { name: "Client Workstream Management", level: 90 },
      { name: "Problem Structuring", level: 92 },
      { name: "Total Transformation", level: 85 },
      { name: "Competitive Advantage", level: 88 },
      { name: "Strategic Recommendations", level: 90 },
      { name: "Business Model Analysis", level: 87 },
      { name: "Data-Driven Decision Making", level: 93 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "teal",
    skills: [
      { name: "Leadership & Team Management", level: 88 },
      { name: "Multi-Seniority Communication", level: 90 },
      { name: "Problem-Solving", level: 95 },
      { name: "Cross-Functional Teamwork", level: 87 },
      { name: "Stakeholder Management", level: 90 },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; bar: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", bar: "bg-primary", border: "border-primary/30" },
  gold: { bg: "bg-gold/10", text: "text-gold", bar: "bg-gold", border: "border-gold/30" },
  accent: { bg: "bg-accent/10", text: "text-accent", bar: "bg-accent", border: "border-accent/30" },
  rose: { bg: "bg-rose/10", text: "text-rose", bar: "bg-rose", border: "border-rose/30" },
  teal: { bg: "bg-teal/10", text: "text-teal", bar: "bg-teal", border: "border-teal/30" },
};

const SkillsPage = () => {
  const navigate = useNavigate();

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
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Expertise</span>
          </h1>
          <p className="text-muted-foreground mb-8">A comprehensive breakdown of my professional capabilities</p>
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((cat, catIdx) => {
            const c = colorMap[cat.color];
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`bento-card border ${c.border}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center`}>
                    <Icon size={18} className={c.text} />
                  </div>
                  <h2 className="text-lg font-semibold">{cat.title}</h2>
                  <span className="ml-auto text-xs text-muted-foreground">{cat.skills.length} skills</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: catIdx * 0.1 + i * 0.04 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${c.bar}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: catIdx * 0.1 + i * 0.04 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
