import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bento-card col-span-2 row-span-2 flex flex-col justify-between min-h-[380px]"
    >
      <div>
        <span className="section-label inline-block mb-4 px-3 py-1 rounded-full border border-border">
          Welcome
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-teal">
            Suraj Tarse
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-md leading-relaxed">
          Project Management & Business Analysis professional specializing in strategic consulting, data-driven insights, and total transformation.
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <a
          href="https://linkedin.com/in/suraj-tarse"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <Linkedin size={20} />
        </a>
        <a href="mailto:tarse.s@northeastern.edu" className="social-icon">
          <Mail size={20} />
        </a>
        <a href="https://github.com/suraj-tarse" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Github size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroCard;
