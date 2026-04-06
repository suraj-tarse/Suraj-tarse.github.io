import { motion } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const skills = [
  "Excel Modelling", "Power BI", "Python", "Tableau", "SQL",
  "Data Visualization", "Financial Modelling", "Jira",
  "Scenario Analysis", "Market Research", "Stakeholder Management",
  "Risk Management", "Agile", "Google Sheets", "Demand Forecasting",
];

const SkillsCard = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bento-card col-span-1 md:col-span-2 cursor-pointer group"
      onClick={() => navigate("/skills")}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap size={18} className="text-gold" />
          <span className="section-label">Skills</span>
        </div>
        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.03 }}
            className="skill-badge"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3 group-hover:text-primary/70 transition-colors">
        Click to see all 32 skills →
      </p>
    </motion.div>
  );
};

export default SkillsCard;
