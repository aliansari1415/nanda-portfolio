import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Award, Briefcase, CalendarDays, MapPin } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Education", "Leadership", "Certificates", "Projects"];
  const filterIcons = {
    "All": null,
    "Education": GraduationCap,
    "Leadership": Trophy,
    "Certificates": Award,
    "Projects": Briefcase
  };

  const experiences = [
    {
      id: 1,
      type: "Education",
      title: "B.Tech, Computer Science and Engineering",
      organization: "Anurag University",
      location: "Hyderabad, Telangana",
      period: "September 2022 - Present",
      description: "CGPA: 8.05. Focused on web development and computer science fundamentals.",
      tags: ["Computer Science", "Web Development", "Programming"],
      icon: GraduationCap,
      status: "ongoing"
    },
    {
      id: 2,
      type: "Education",
      title: "TS Board of Intermediate Education, MPC",
      organization: "Sree Chaithnya Junior College",
      location: "Karimnagar, Telangana",
      period: "June 2019 - May 2021",
      description: "Achieved 94.8% in Mathematics, Physics, and Chemistry specialization.",
      tags: ["Mathematics", "Physics", "Chemistry"],
      icon: GraduationCap,
      status: "completed"
    },
    {
      id: 3,
      type: "Leadership",
      title: "AI Days - Internal Hackathon",
      organization: "Anurag University",
      location: "Hyderabad, Telangana",
      period: "March 2024",
      description: "Participated in the hackathon, working collaboratively in a team to develop innovative solutions and gain hands-on experience in problem-solving.",
      tags: ["Team Work", "Problem Solving", "Innovation"],
      icon: Trophy,
      status: "completed"
    }
  ];

  const stats = [
    { value: "2", label: "Education", color: "bg-primary/20" },
    { value: "1", label: "Leadership", color: "bg-accent/20" },
    { value: "2", label: "Projects", color: "bg-secondary/20" },
    { value: "0", label: "Certificates", color: "bg-muted/20" }
  ];

  const filteredExperiences = activeFilter === "All" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  const getStatusColor = (status: string) => {
    return status === "ongoing" 
      ? "bg-primary/10 text-primary border-primary/30" 
      : "bg-accent/10 text-accent border-accent/30";
  };

  return (
    <section id="experience" className="py-20 relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Experience & Education</span>
            </h2>
            <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
              🎓 My academic and professional journey in software development
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} text-white text-xl font-bold mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
            {filters.map((filter) => {
              const IconComponent = filterIcons[filter as keyof typeof filterIcons];
              return (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm transition-all duration-300 ${
                    activeFilter === filter 
                      ? "bg-gradient-hero text-white shadow-hero" 
                      : "border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                  {filter}
                </Button>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            <div className="space-y-12">
              {filteredExperiences.map((experience, index) => (
                <div 
                  key={experience.id} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-scale-in-delay-${Math.min(index, 3)}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/10">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            <experience.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-foreground mb-1">{experience.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                              <span className="font-medium">{experience.organization}</span>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {experience.location}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                <CalendarDays className="w-3 h-3" />
                                {experience.period}
                              </div>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getStatusColor(experience.status)}`}
                              >
                                {experience.status === "ongoing" ? "Current" : "Completed"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;