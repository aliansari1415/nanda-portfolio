import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, GraduationCap, Trophy, GitBranch } from "lucide-react";

const GitHub = () => {
  const highlights = [
    { value: "2", label: "Web Projects", icon: GitBranch },
    { value: "8.05", label: "CGPA", icon: GraduationCap },
    { value: "CSE", label: "Computer Science", icon: Code },
    { value: "2024", label: "Graduating Year", icon: Trophy }
  ];

  const techStack = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", 
    "Node.js", "Three.js", "TailwindCSS", "Git", "SQL", "MongoDB", "Express.js"
  ];

  const projects = [
    {
      emoji: "🌐",
      title: "Portfolio Website",
      description: "Personal portfolio built with React, TypeScript, and Three.js"
    },
    {
      emoji: "�",
      title: "Ongoing Project",
      description: "Currently working on an exciting web development project"
    }
  ];

  return (
    <section id="github" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">📈 GitHub Analytics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my coding journey, contributions, and web development projects. Building modern web experiences, one commit at a time! 🚀
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* GitHub Stats Cards */}
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-center mb-8">Activity Overview</h3>
              
              {/* GitHub Stats */}
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardContent className="p-6">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=aliansari1415&show_icons=true&theme=dark&border_radius=12&bg_color=1e293b&title_color=3b82f6&text_color=e2e8f0&icon_color=3b82f6&border_color=334155"
                    alt="Nanda's GitHub Stats"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* GitHub Activity Summary */}
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">Activity Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img 
                      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=aliansari1415&theme=github_dark"
                      alt="GitHub Activity Summary"
                      className="w-full rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden p-6 text-center">
                      <p className="text-muted-foreground mb-4">
                        GitHub stats are temporarily unavailable.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => window.location.reload()}
                        className="gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Languages */}
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">Top Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=aliansari1415&layout=compact&theme=dark&border_radius=12&bg_color=1e293b&title_color=3b82f6&text_color=e2e8f0&border_color=334155&langs_count=8"
                    alt="Top Languages"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Profile Highlights & Projects */}
            <div className="space-y-8 animate-fade-in">
              {/* Profile Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Profile Highlights</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <Card key={index} className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/10">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <highlight.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">{highlight.value}</div>
                        <div className="text-sm text-muted-foreground font-medium">{highlight.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button className="bg-gradient-hero hover:shadow-hero transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub Profile
                  </Button>
                </div>
              </div>

              {/* Building the Future Section */}
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">🚀 Building Modern Web Experiences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Computer Science and Engineering student passionate about creating innovative web solutions. 
                    Focusing on modern web development with React, TypeScript, and other cutting-edge technologies 
                    to build responsive and user-friendly applications.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      🛠️ Tech Arsenal
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div key={index} className="flex gap-3 p-3 rounded-lg bg-secondary/30">
                        <div className="text-2xl">{project.emoji}</div>
                        <div>
                          <h5 className="font-semibold text-sm">{project.title}</h5>
                          <p className="text-xs text-muted-foreground">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground mb-3">🤝 Let's Collaborate</p>
                    <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      💻 LeetCode Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Graph */}
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">Contribution Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://github-readme-activity-graph.vercel.app/graph?username=aliansari1415&theme=github-compact&bg_color=1e293b&color=3b82f6&line=3b82f6&point=e2e8f0&area=true&hide_border=true"
                    alt="GitHub Activity Graph"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;