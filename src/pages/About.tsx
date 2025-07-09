import { CalendarDays, GraduationCap, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SkillBadge from "@/components/skills/SkillBadge";

// Timeline data
const timelineItems = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Senior Developer",
    company: "Tech Solutions Inc.",
    description: "Leading development of web applications and mentoring junior developers.",
    icon: <Briefcase className="text-primary" size={20} />,
  },
  {
    id: 2,
    date: "2019 - 2022",
    title: "Full Stack Developer",
    company: "Digital Innovations",
    description: "Built and maintained various client projects using modern technologies.",
    icon: <Briefcase className="text-primary" size={20} />,
  },
  {
    id: 3,
    date: "2018",
    title: "Bachelor's Degree in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, specializing in software engineering.",
    icon: <GraduationCap className="text-primary" size={20} />,
  },
  {
    id: 4,
    date: "2017",
    title: "Web Development Intern",
    company: "StartUp Hub",
    description: "Gained practical experience working on real-world projects.",
    icon: <Briefcase className="text-primary" size={20} />,
  },
];

// Skills grouped by category
const skillGroups = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel"]
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX", "Wireframing", "Prototyping"]
  }
];

export default function About() {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        {/* About Me Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden border shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Your Name</h2>
              <h3 className="text-xl text-muted-foreground mb-6">Full Stack Developer & Designer</h3>
              
              <div className="space-y-4 text-base/relaxed">
                <p>
                  I'm a passionate developer with over 5 years of experience building web applications and digital experiences. I specialize in creating responsive, user-friendly interfaces and robust backend systems.
                </p>
                <p>
                  My journey in technology began with a fascination for how digital tools can solve real-world problems. This curiosity led me to pursue formal education in computer science, followed by hands-on experience across various industries.
                </p>
                <p>
                  When I'm not coding, I enjoy hiking, photography, and contributing to open-source projects. I'm constantly learning new technologies and techniques to stay at the forefront of web development.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">My Journey</h2>
          
          <div className="relative border-l border-muted pl-6 ml-6 space-y-12">
            {timelineItems.map((item) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-background border">
                  {item.icon}
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <CalendarDays size={14} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Skills & Expertise</h2>
          
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}