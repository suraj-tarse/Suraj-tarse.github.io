import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bento-card col-span-1 md:col-span-3 bg-gradient-to-r from-card via-primary/5 to-card"
    >
      <h2 className="text-2xl font-bold mb-6">Let's start working together!</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="mailto:tarse.s@northeastern.edu"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Mail size={18} className="text-primary" />
          </div>
          <div>
            <p className="section-label">Email</p>
            <p className="text-sm font-medium group-hover:text-primary transition-colors">
              tarse.s@northeastern.edu
            </p>
          </div>
        </a>
        <a href="tel:+18573511988" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <Phone size={18} className="text-accent" />
          </div>
          <div>
            <p className="section-label">Phone</p>
            <p className="text-sm font-medium group-hover:text-accent transition-colors">
              +1 (857) 351-1988
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;
