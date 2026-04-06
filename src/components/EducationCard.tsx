import { motion } from "framer-motion";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EducationCard = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bento-card bg-gradient-to-br from-teal/5 to-card cursor-pointer group"
      onClick={() => navigate("/education")}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GraduationCap size={18} className="text-teal" />
          <h2 className="font-semibold text-lg">Education</h2>
        </div>
        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-teal transition-colors" />
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-medium text-sm">Northeastern University</p>
          <p className="text-xs text-muted-foreground">MS Project Management (Business Analysis)</p>
          <p className="text-xs text-teal font-medium">GPA: 3.9/4.0 · Sep 2025 – Apr 2027</p>
        </div>
        <div className="border-t border-border pt-3">
          <p className="font-medium text-sm">Pillai University</p>
          <p className="text-xs text-muted-foreground">BBA · GPA: 3.0/4.0</p>
        </div>
        <div className="border-t border-border pt-3">
          <p className="text-xs text-muted-foreground">Certification</p>
          <p className="text-sm font-medium">Business Analytics</p>
          <p className="text-xs text-primary">Harvard Business School Online</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3 group-hover:text-teal/70 transition-colors">
        Click for coursework details →
      </p>
    </motion.div>
  );
};

export default EducationCard;
