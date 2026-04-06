import { motion } from "framer-motion";
import { FolderOpen, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "BCG Strategy Simulation",
    description: "Financial modeling & competitive benchmarking for BeyondTech transformation strategy",
    tags: ["Consulting", "Financial Modeling"],
  },
  {
    title: "Husky Connect",
    description: "Led market research and stakeholder interviews for a networking app product roadmap",
    tags: ["Product Strategy", "Research"],
  },
];

const ProjectsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="bento-card bg-gradient-to-br from-primary/5 to-card"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FolderOpen size={18} className="text-primary" />
          <h2 className="font-semibold text-lg">Projects</h2>
        </div>
        <ArrowUpRight size={16} className="text-muted-foreground" />
      </div>

      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.title} className="group cursor-pointer">
            <p className="font-medium text-sm group-hover:text-primary transition-colors">{p.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{p.description}</p>
            <div className="flex gap-1.5 mt-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
