import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    id: 3,
    title: "Travel Blog",
    description: "A responsive travel blog with content management system, image gallery, and interactive maps.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS"],
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile-friendly application to track workouts, nutrition, and progress with visualizations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "Chart.js"],
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A real-time weather monitoring dashboard with forecasts, maps, and historical data.",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2670&auto=format&fit=crop",
    tags: ["JavaScript", "Weather API", "CSS"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A custom portfolio website to showcase projects and skills with a modern, responsive design.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

// Extract all unique tags
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => project.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Explore my portfolio of projects spanning web development, mobile applications, and UI/UX design. Each project represents unique challenges and solutions.
        </p>
        
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Filter by technology:</p>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge 
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTags.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedTags([])}
                  className="text-xs h-7"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}