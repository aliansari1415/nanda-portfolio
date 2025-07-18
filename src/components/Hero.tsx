import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Mail, ArrowDown } from "lucide-react";
import Scene3D from "./3d/Scene3D";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-glow-delay-1"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Status Badge */}
          <div className="animate-fade-in-delay-2">
            <Badge variant="secondary" className="text-sm px-4 py-2 rounded-full border border-primary/20 hover:scale-105 transition-transform duration-300">
              <Rocket className="w-4 h-4 mr-2" />
              Computer Science and Engineering Student passionate about Web Development
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-delay-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
              Nanda Kishor Reddy Kasam
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent hover:scale-102 transition-transform duration-500 cursor-default">
              Web Development
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-6">
            Crafting modern web experiences with{" "}
            <span className="text-primary font-semibold hover:text-blue-600 transition-colors duration-300">React</span>,{" "}
            <span className="text-primary font-semibold hover:text-blue-600 transition-colors duration-300">JavaScript</span>, and{" "}
            <span className="text-primary font-semibold hover:text-blue-600 transition-colors duration-300">Modern Web Technologies</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-8">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-hero transition-all duration-300 text-white px-8 py-6 text-lg rounded-xl group hover:scale-105 transform"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 transform"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-fade-in-delay-10">
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;