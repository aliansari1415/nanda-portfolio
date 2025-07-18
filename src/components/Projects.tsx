import { useState, useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter, Rocket } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const FloatingProjectIcon = ({ icon }: { icon: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = ["All", "Machine Learning", "Deep Learning", "Generative AI", "NLP", "Data Visualization"];

  const projects = [
    {
      id: 1,
      title: "EduBot: Real-Time Information Retrieval Chatbot",
      description: "Engineered a real-time AI chatbot for college websites, automating information retrieval for 500+ students. Implemented web scraping and NLP-based parsing to extract and summarize official college updates with 95% accuracy. Leveraged BERT embeddings for semantic search, improving query relevance by 40% within a PostgreSQL knowledge base.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=80",
      badges: ["DEPLOYED", "FEATURED"],
      category: "Generative AI",
      stats: ["500+", "95%", "40%", "30% faster response"],
      technologies: ["BERT", "PostgreSQL", "Gemini 1.5 Flash API", "NLP"],
      links: {
        code: "https://github.com/harshajustin/EduBot",
        demo: "https://auedubot.netlify.app/"
      }
    },
    {
      id: 2,
      title: "ATS Resume Expert: AI-Powered Resume Optimization",
      description: "Developed an AI-powered ATS Resume Expert to optimize resumes using Generative AI and NLP. Built an ATS Analysis Engine, increasing resume-job match accuracy by 90%. Designed a Resume Review System with OpenAI API, providing insights that improved user resumes by 70% based on recruiter feedback.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
      badges: ["DEPLOYED", "FEATURED"],
      category: "NLP",
      stats: ["90%", "70%", "85% engagement rate"],
      technologies: ["Python", "Streamlit", "Docker", "OpenAI API"],
      links: {
        code: "https://github.com/harshajustin/ATS-Resume-Expert",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7275429042898587648/"
      }
    },
    {
      id: 3,
      title: "AI-Driven Campus Assistant",
      description: "EduLearn is a next-generation Learning Management System (LMS) that combines traditional educational tools with cutting-edge AI technology. Our platform provides personalized learning experiences, intelligent analytics, and automated evaluation systems to enhance education for students, teachers, and administrators.",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=1800&q=80",
      badges: ["IN PROGRESS", "FEATURED"],
      category: "Machine Learning",
      stats: ["200+", "85%"],
      technologies: ["Python", "TensorFlow", "AWS", "Flask"],
      links: {
        demo: "https://edulearn.studio/"
      }
    },
    {
      id: 4,
      title: "Stock Market Prediction with LSTM",
      description: "Developed a deep learning model for stock market prediction using LSTM networks. Implemented time series analysis with technical indicators and sentiment analysis from financial news to improve prediction accuracy.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=80",
      badges: ["COMPLETED"],
      category: "Deep Learning",
      stats: ["78%", "15% better than baseline"],
      technologies: ["PyTorch", "Pandas", "Plotly", "LSTM"],
      links: {}
    },
    {
      id: 5,
      title: "E-commerce Recommendation Engine",
      description: "Built a scalable recommendation system using collaborative filtering and deep learning. Implemented hybrid approach combining content-based and collaborative filtering with neural networks for personalized product recommendations.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=80",
      badges: ["COMPLETED"],
      category: "Machine Learning",
      stats: ["25% CTR increase", "Sub-100ms response time"],
      technologies: ["Python", "PySpark", "AWS", "Collaborative Filtering"],
      links: {}
    },
    {
      id: 6,
      title: "Real-Time Analytics Dashboard",
      description: "Created an interactive dashboard for real-time business metrics visualization using modern web technologies. Features real-time data streaming, predictive analytics, and customizable KPI tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
      badges: ["COMPLETED"],
      category: "Data Visualization",
      stats: ["50+ dashboards", "Real-time updates"],
      technologies: ["React", "D3.js", "Node.js", "WebSocket"],
      links: {}
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "DEPLOYED":
        return "default";
      case "FEATURED":
        return "secondary";
      case "IN PROGRESS":
        return "outline";
      case "COMPLETED":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              🚀 Explore my latest AI/ML projects and technical implementations with real-world impact
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
            <Button variant="ghost" size="sm" className="text-sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter:
            </Button>
            {filters.map((filter) => (
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
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* 3D Floating Icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[2, 2, 1]} />
                    <FloatingProjectIcon icon={project.category} />
                  </Canvas>
                </div>
                
                <Card 
                  className={`bg-gradient-card shadow-card hover:shadow-lg transition-all duration-500 border border-primary/10 animate-scale-in transform-gpu ${
                    hoveredProject === project.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-48 object-cover transition-all duration-700 ${
                        hoveredProject === project.id ? 'scale-110 blur-sm' : 'group-hover:scale-110'
                      }`}
                    />
                    {/* Overlay effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-100' : 'group-hover:opacity-70'
                    }`}></div>
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.badges.map((badge) => (
                        <Badge 
                          key={badge} 
                          variant={getBadgeVariant(badge)}
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.map((stat, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {stat}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-2">
                  {project.links.code && (
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button size="sm" className="flex-1 bg-gradient-hero hover:shadow-hero transition-all duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Demo
                    </Button>
                  )}
                </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Project Impact */}
          <div className="text-center animate-fade-in relative">
            {/* Background 3D Effect */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.4} />
                <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
                  <mesh position={[-3, 2, 0]}>
                    <torusGeometry args={[2, 0.8, 16, 100]} />
                    <meshStandardMaterial color="#3b82f6" wireframe />
                  </mesh>
                </Float>
                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
                  <mesh position={[3, -2, 0]}>
                    <octahedronGeometry args={[1.5]} />
                    <meshStandardMaterial color="#ec4899" wireframe />
                  </mesh>
                </Float>
              </Canvas>
            </div>
            
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Project Impact</span>
            </h3>
            <p className="text-muted-foreground mb-8">Real metrics from deployed projects</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { value: "6+", label: "Total Projects" },
                { value: "500+", label: "Users Served" },
                { value: "95%", label: "Avg Accuracy" },
                { value: "3", label: "Live Deployments" }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;