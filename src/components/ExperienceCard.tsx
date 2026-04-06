import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "PropBurg",
    role: "Project & Business Analyst",
    period: "Mar 2025 – Aug 2025",
    location: "Mumbai, India",
    highlights: [
      "Tackled complex business challenges across 10+ engagements",
      "Built Excel models and Power BI dashboards for data-driven decisions",
      "Synthesized competitive intelligence into strategic deliverables",
    ],
  },
  {
    company: "Better Floors",
    role: "Business Strategy Intern",
    period: "Mar 2024 – Jun 2024",
    location: "Mumbai, India",
    highlights: [
      "Analyzed business processes to identify competitive opportunities",
      "Managed workstreams across 7 stakeholders simultaneously",
      "Flagged data anomalies translating insights into AOP decisions",
    ],
  },
  {
    company: "Adhiraj Construction",
    role: "Business Development Intern",
    period: "Mar 2023 – Jun 2023",
    location: "Mumbai, India",
    highlights: [
      "Managed client pipelines and business development workstreams",
      "Owned tasks independently demonstrating strong organizational capability",
    ],
  },
];

const ExperienceCard = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experiences[activeIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bento-card col-span-1 md:col-span-2 bg-gradient-to-br from-gold/5 to-card"
    >
      <div className="flex items-center gap-2 mb-4">
        <Briefcase size={18} className="text-gold" />
        <h2 className="font-semibold text-lg">Experience</h2>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {experiences.map((exp, i) => (
          <button
            key={exp.company}
            onClick={() => setActiveIdx(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              i === activeIdx
                ? "bg-gold/20 text-gold border border-gold/30"
                : "bg-secondary text-muted-foreground border border-border hover:border-gold/20"
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      <motion.div key={activeIdx} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <p className="font-medium">{active.role}</p>
        <p className="text-sm text-muted-foreground mb-3">
          {active.period} · {active.location}
        </p>
        <ul className="space-y-2">
          {active.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight size={14} className="text-gold mt-0.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
