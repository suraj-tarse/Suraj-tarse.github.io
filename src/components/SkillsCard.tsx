import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const skills = [
  "Excel Modelling", "Power BI", "Python", "Tableau", "Jira",
  "Data Visualization", "SQL", "Google Sheets", "Market Research",
  "Financial Modelling", "Risk Analysis", "Scenario Analysis",
  "Demand Forecasting", "Stakeholder Management", "Agile",
];

const SkillsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bento-card col-span-1 md:col-span-2"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap size={18} className="text-gold" />
          <span className="section-label">Skills</span>
        </div>
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
    </motion.div>
  );
};

export default SkillsCard;
