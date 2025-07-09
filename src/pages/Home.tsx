import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import SkillBadge from "@/components/skills/SkillBadge";

const featuredProjects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of this amazing project and the technologies used.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "An overview of another fantastic project showcasing different skills.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB"],
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "TailwindCSS", "HTML/CSS", "Git", "UI/UX Design", "Responsive Design"
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Developer & Designer crafting exceptional digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-muted rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/about">More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}