import HeroCard from "@/components/HeroCard";
import ProfileCard from "@/components/ProfileCard";
import LocationCard from "@/components/LocationCard";
import SkillsCard from "@/components/SkillsCard";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import ProjectsCard from "@/components/ProjectsCard";
import ContactCard from "@/components/ContactCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: Hero (2 cols) + Profile + Location */}
          <HeroCard />
          <div className="flex flex-col gap-4">
            <ProfileCard />
            <LocationCard />
          </div>

          {/* Row 2: Skills (2 cols) + Projects */}
          <SkillsCard />
          <ProjectsCard />

          {/* Row 3: Experience (2 cols) + Education */}
          <ExperienceCard />
          <EducationCard />

          {/* Row 4: Contact */}
          <ContactCard />
        </div>

        <footer className="text-center mt-8 pb-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Crafted by Suraj Tarse
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
