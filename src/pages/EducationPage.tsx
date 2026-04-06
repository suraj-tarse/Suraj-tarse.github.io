import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, BookOpen, Award, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const educationData = [
  {
    id: "northeastern",
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science in Project Management (Business Analysis)",
    gpa: "3.9/4.0",
    period: "Sep 2025 – Apr 2027",
    color: "teal",
    coursework: [
      {
        name: "Project Management",
        description: "Foundations of project lifecycle, initiation to closure, methodologies including Agile and Waterfall.",
      },
      {
        name: "Scope Management",
        description: "Defining, validating, and controlling project scope using WBS and requirements traceability.",
      },
      {
        name: "Risk Management",
        description: "Risk identification, qualitative & quantitative analysis, response planning, and monitoring.",
      },
      {
        name: "Schedule & Cost Management",
        description: "Critical path method, earned value management, budgeting, and resource allocation.",
      },
      {
        name: "Business Analysis",
        description: "Eliciting, analyzing, and documenting business requirements for stakeholder alignment.",
      },
      {
        name: "Requirements Analysis",
        description: "Techniques for gathering, prioritizing, and validating functional and non-functional requirements.",
      },
      {
        name: "Strategy & Needs Assessment",
        description: "Enterprise analysis, gap analysis, feasibility studies, and strategic planning frameworks.",
      },
    ],
    experience: {
      title: "Graduate Application Processor",
      period: "Sep 2025 – Present",
      highlights: [
        "Processed 300+ applications from worldwide applicants",
        "Ensured data accuracy and compliance through academic record analysis",
      ],
    },
  },
  {
    id: "pillai",
    school: "Pillai University",
    location: "Mumbai, India",
    degree: "Bachelor of Business Administration",
    gpa: "3.0/4.0",
    period: "Jul 2022 – Apr 2025",
    color: "primary",
    coursework: [
      { name: "Business Economics", description: "Micro and macroeconomic principles applied to business decision-making." },
      { name: "Financial Management", description: "Capital budgeting, working capital management, and financial planning." },
      { name: "Marketing Management", description: "Marketing mix, consumer behavior, segmentation, and brand strategy." },
      { name: "Organizational Behavior", description: "Leadership, motivation, group dynamics, and organizational culture." },
      { name: "Operations Management", description: "Supply chain, quality management, process optimization, and lean principles." },
      { name: "Business Statistics", description: "Statistical methods, probability, regression analysis for business insights." },
    ],
    experience: null,
  },
];

const certification = {
  title: "Business Analytics",
  issuer: "Harvard Business School Online",
  date: "Dec 2022",
  topics: [
    "Descriptive Analytics & Data Visualization",
    "Predictive Analytics & Regression",
    "Prescriptive Analytics & Optimization",
    "A/B Testing & Experimentation",
    "Data-Driven Decision Making",
  ],
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30" },
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30" },
};

const EducationPage = () => {
  const navigate = useNavigate();
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});

  const toggleCourse = (key: string) => {
    setExpandedCourses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-primary">Education</span>
          </h1>
          <p className="text-muted-foreground mb-8">Academic background, coursework, and certifications</p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, eduIdx) => {
            const c = colorMap[edu.color];
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: eduIdx * 0.15 }}
                className={`bento-card border ${c.border}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap size={20} className={c.text} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{edu.school}</h2>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <div className="flex gap-3 mt-1">
                      <span className={`text-xs font-medium ${c.text}`}>GPA: {edu.gpa}</span>
                      <span className="text-xs text-muted-foreground">{edu.period}</span>
                      <span className="text-xs text-muted-foreground">{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} className={c.text} />
                    <span className="section-label">Relevant Coursework</span>
                  </div>
                  <div className="space-y-2">
                    {edu.coursework.map((course) => {
                      const key = `${edu.id}-${course.name}`;
                      const isExpanded = expandedCourses[key];
                      return (
                        <motion.div
                          key={course.name}
                          className="rounded-lg bg-secondary/50 border border-border overflow-hidden cursor-pointer hover:border-primary/20 transition-colors"
                          onClick={() => toggleCourse(key)}
                        >
                          <div className="flex items-center justify-between px-4 py-2.5">
                            <span className="text-sm font-medium">{course.name}</span>
                            <ChevronRight
                              size={14}
                              className={`text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                            />
                          </div>
                          <motion.div
                            initial={false}
                            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-3 text-xs text-muted-foreground leading-relaxed">{course.description}</p>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* On-campus experience */}
                {edu.experience && (
                  <div className="mt-5 pt-4 border-t border-border">
                    <span className="section-label mb-2 block">On-Campus Role</span>
                    <p className="font-medium text-sm">{edu.experience.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">{edu.experience.period}</p>
                    <ul className="space-y-1">
                      {edu.experience.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <ChevronRight size={12} className={`${c.text} mt-0.5 flex-shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento-card border border-gold/30"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Award size={20} className="text-gold" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{certification.title}</h2>
                <p className="text-sm text-primary">{certification.issuer}</p>
                <p className="text-xs text-muted-foreground">{certification.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={14} className="text-gold" />
              <span className="section-label">Topics Covered</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {certification.topics.map((t) => (
                <span key={t} className="skill-badge text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
