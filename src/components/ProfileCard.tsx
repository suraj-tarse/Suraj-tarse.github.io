import { motion } from "framer-motion";
import { User } from "lucide-react";

const ProfileCard = () => {
  const tags = ["Business Analyst", "Project Manager", "Strategy Consultant"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bento-card flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <User size={18} className="text-primary" />
          <h2 className="font-semibold text-lg">Profile</h2>
        </div>
        <span className="text-muted-foreground text-sm">↗</span>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Turning complex business challenges into clear strategies and actionable insights that drive growth.
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="skill-badge text-xs">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
