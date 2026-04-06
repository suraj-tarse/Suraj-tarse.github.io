import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const LocationCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const bostonTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const visitorTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bento-card flex flex-col justify-between bg-gradient-to-br from-teal/10 to-card"
    >
      <div className="flex items-center justify-between mb-2">
        <MapPin size={18} className="text-teal" />
        <Clock size={14} className="text-muted-foreground" />
      </div>
      <div>
        <p className="text-teal text-sm font-medium">Boston, MA</p>
        <div className="mt-3">
          <p className="section-label">My Time</p>
          <p className="text-2xl font-mono font-bold">{bostonTime}</p>
        </div>
        <div className="mt-2">
          <p className="section-label">Your Time</p>
          <p className="text-lg font-mono text-muted-foreground">{visitorTime}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;
