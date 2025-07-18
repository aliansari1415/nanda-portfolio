import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Code, Trophy, Users, GraduationCap } from "lucide-react";
import Floating3DBackground from "./3d/Floating3DBackground";

const About = () => {
  const stats = [
    { value: "8.05", label: "CGPA", icon: GraduationCap },
    { value: "1", label: "Deployed Projects", icon: Code },
    { value: "1", label: "Ongoing Projects", icon: Trophy },
    { value: "0", label: "Hackathon Wins", icon: Trophy },
    { value: "2", label: "Leadership Roles", icon: Users },
    { value: "3", label: "Certifications", icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/10 relative overflow-hidden">
      <Floating3DBackground density="low" colors={['#3b82f6', '#06b6d4', '#8b5cf6']} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">About Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am <span className="text-primary font-semibold">Nanda Kishor Reddy Kasam</span>, 
                a B.Tech student in Computer Science and Engineering at Anurag University 
                with a strong passion for web development and creating user-friendly applications. I have expertise in 
                HTML, CSS, JavaScript, React, and modern web technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm focused on building responsive and engaging web applications, constantly learning 
                and exploring new technologies in the web development ecosystem. My goal is to create 
                seamless user experiences while maintaining clean, efficient code.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Button variant="default" className="bg-gradient-hero hover:shadow-hero transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => window.open("https://github.com/aliansari1415", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => window.open("https://www.linkedin.com/in/kasam-nanda-kishor-reddy-b390b5352/", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => window.open("https://leetcode.com/u/nandakasam/", "_blank")}
                >
                  <Code className="w-4 h-4 mr-2" />
                  LeetCode
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => window.open("https://www.hackerrank.com/profile/22eg105j64", "_blank")}
                >
                  <Code className="w-4 h-4 mr-2" />
                  HackerRank
                </Button>
              </div>

              {/* Status Badge */}
              <div className="pt-4">
                <Badge variant="secondary" className="text-sm px-4 py-2 bg-green-100 text-green-800 border border-green-200">
                  🟢 Open to work and collaboration opportunities
                </Badge>
              </div>
            </div>

            {/* Professional Overview Stats */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Professional Overview</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/10 group animate-glow">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;