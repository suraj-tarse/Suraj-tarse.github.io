import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h1>

          <div className="bento-card space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <span className="text-foreground font-semibold">Suraj Tarse</span> — a Business Analyst and Strategy professional currently pursuing my Master's in Project Management (Business Analysis) at Northeastern University, Boston, with a 3.9 GPA.
            </p>
            <p>
              I sit at the intersection of data, strategy, and execution — turning complex business problems into clear, actionable insights that drive real decisions. Whether it's building Power BI dashboards, conducting market research, or delivering strategic recommendations to senior leadership, I bring structure to ambiguity and clarity to complexity.
            </p>

            <h2 className="text-lg font-semibold text-foreground pt-2">What I Do</h2>

            <p>
              <span className="font-medium text-foreground">📊 Business Analysis & Strategy</span><br />
              I gather requirements, analyze processes, and identify opportunities that help businesses grow smarter. From stakeholder interviews to executive-level reports, I connect the dots between data and decisions.
            </p>
            <p>
              <span className="font-medium text-foreground">📈 Data Analytics & Visualization</span><br />
              I transform raw data into compelling stories using Power BI, Tableau, Excel, and Python — helping teams track performance, identify trends, and make faster, better-informed decisions.
            </p>
            <p>
              <span className="font-medium text-foreground">🎯 Market Research & Competitive Intelligence</span><br />
              I dig deep into markets, competitors, and customer behavior to uncover insights that shape product strategy, expansion plans, and go-to-market decisions.
            </p>
            <p>
              <span className="font-medium text-foreground">🗂️ Project Management</span><br />
              From planning to delivery, I coordinate cross-functional teams, manage timelines, and ensure projects stay on track — using Agile, Waterfall, and everything in between.
            </p>

            <h2 className="text-lg font-semibold text-foreground pt-2">My Journey</h2>

            <p>
              I've had the privilege of working across real estate, construction, and strategy sectors in both India and the United States. At Propburg, I worked as a Project & Business Analyst, supporting 10+ client engagements with market research, data dashboards, and strategic recommendations. At Better Floors, I contributed to Annual Operating Plans and process documentation. At Adhiraj Construction, I gained my first taste of real-world business development and client management.
            </p>
            <p>
              Beyond work, I completed the Harvard Business School Online Certificate in Business Analytics — a program focused on quantitative methods and data-driven decision-making — which sharpened my analytical foundation before I ever stepped into a professional role.
            </p>

            <h2 className="text-lg font-semibold text-foreground pt-2">What Drives Me</h2>

            <p>
              I believe the best business decisions are grounded in data, shaped by curiosity, and executed with precision. I'm drawn to fast-paced environments where analytical rigor meets real-world impact — whether that's a consulting firm tackling a Fortune 500 challenge, a tech company scaling its operations, or a healthcare organization improving patient outcomes.
            </p>
            <p>
              I'm currently seeking co-op and internship opportunities in Business Analysis, Strategy & Operations, Market Research, and Product Analytics — available from June 2026.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
