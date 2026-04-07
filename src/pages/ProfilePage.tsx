import { motion } from "framer-motion";
import { ArrowLeft, User, BarChart3, TrendingUp, Target, FolderKanban, Briefcase, GraduationCap, Heart, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const sections = [
  {
    id: "about",
    icon: User,
    title: "About Me",
    color: "primary",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Hi, I'm <span className="text-foreground font-semibold">Suraj Tarse</span> — a Business Analyst and Strategy professional currently pursuing my Master's in Project Management (Business Analysis) at Northeastern University, Boston, with a <span className="text-primary font-semibold">3.9 GPA</span>.
        <br /><br />
        I sit at the intersection of data, strategy, and execution — turning complex business problems into clear, actionable insights that drive real decisions. Whether it's building Power BI dashboards, conducting market research, or delivering strategic recommendations to senior leadership, I bring structure to ambiguity and clarity to complexity.
      </p>
    ),
  },
  {
    id: "ba",
    icon: BarChart3,
    title: "Business Analysis & Strategy",
    emoji: "📊",
    color: "gold",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        I gather requirements, analyze processes, and identify opportunities that help businesses grow smarter. From stakeholder interviews to executive-level reports, I connect the dots between data and decisions.
      </p>
    ),
  },
  {
    id: "data",
    icon: TrendingUp,
    title: "Data Analytics & Visualization",
    emoji: "📈",
    color: "accent",
    content: (
      <div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          I transform raw data into compelling stories using Power BI, Tableau, Excel, and Python — helping teams track performance, identify trends, and make faster, better-informed decisions.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Power BI", "Tableau", "Excel", "Python", "SQL"].map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent/10 text-accent border border-accent/30">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "market",
    icon: Target,
    title: "Market Research & Competitive Intelligence",
    emoji: "🎯",
    color: "primary",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        I dig deep into markets, competitors, and customer behavior to uncover insights that shape product strategy, expansion plans, and go-to-market decisions.
      </p>
    ),
  },
  {
    id: "pm",
    icon: FolderKanban,
    title: "Project Management",
    emoji: "🗂️",
    color: "gold",
    content: (
      <div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          From planning to delivery, I coordinate cross-functional teams, manage timelines, and ensure projects stay on track — using Agile, Waterfall, and everything in between.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Agile", "Waterfall", "Scrum", "Jira", "MS Project"].map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gold/10 text-gold border border-gold/30">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "journey",
    icon: Briefcase,
    title: "My Journey",
    color: "accent",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          I've had the privilege of working across real estate, construction, and strategy sectors in both India and the United States.
        </p>
        <div className="space-y-3">
          {[
            { company: "Propburg", desc: "Project & Business Analyst — supported 10+ client engagements with market research, data dashboards, and strategic recommendations." },
            { company: "Better Floors", desc: "Contributed to Annual Operating Plans and process documentation in property management consulting." },
            { company: "Adhiraj Construction", desc: "Gained first taste of real-world business development and client management." },
          ].map((j) => (
            <div key={j.company} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-foreground">{j.company}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Beyond work, I completed the <span className="text-foreground font-medium">Harvard Business School Online Certificate in Business Analytics</span> — a program focused on quantitative methods and data-driven decision-making.
        </p>
      </div>
    ),
  },
  {
    id: "drives",
    icon: Heart,
    title: "What Drives Me",
    color: "primary",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        I believe the best business decisions are grounded in data, shaped by curiosity, and executed with precision. I'm drawn to fast-paced environments where analytical rigor meets real-world impact — whether that's a consulting firm tackling a Fortune 500 challenge, a tech company scaling its operations, or a healthcare organization improving patient outcomes.
      </p>
    ),
  },
  {
    id: "seeking",
    icon: Calendar,
    title: "Currently Seeking",
    color: "gold",
    content: (
      <div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          I'm currently seeking co-op and internship opportunities — available from <span className="text-foreground font-semibold">June 2026</span>.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Business Analysis", "Strategy & Operations", "Market Research", "Product Analytics"].map((r) => (
            <span key={r} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary border border-primary/30">{r}</span>
          ))}
        </div>
      </div>
    ),
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>("about");

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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Suraj Tarse</span>
          </h1>
          <p className="text-muted-foreground mb-8">Business Analyst · Strategy Professional · Data Enthusiast</p>
        </motion.div>

        <div className="space-y-3">
          {sections.map((sec, idx) => {
            const c = colorMap[sec.color];
            const isExpanded = expandedId === sec.id;
            const Icon = sec.icon;

            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <div
                  className={`bento-card border ${isExpanded ? c.border : "border-border"} cursor-pointer transition-all`}
                  onClick={() => setExpandedId(isExpanded ? null : sec.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={16} className={c.text} />
                      </div>
                      <h2 className="text-base font-semibold">
                        {sec.emoji && <span className="mr-1.5">{sec.emoji}</span>}
                        {sec.title}
                      </h2>
                    </div>
                    <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <span className="text-muted-foreground text-sm">→</span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-border">
                      {sec.content}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
