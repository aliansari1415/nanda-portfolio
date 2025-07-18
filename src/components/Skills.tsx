import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Cloud, GitBranch, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, dots: 3 },
        { name: "Java", level: 70, dots: 2 },
        { name: "SQL", level: 90, dots: 3 },
        { name: "C", level: 70, dots: 2 }
      ],
      count: "4 skills"
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      skills: [
        { name: "Hugging Face Transformers", level: 90, dots: 3 },
        { name: "PhiData", level: 70, dots: 2 },
        { name: "MLflow", level: 70, dots: 2 },
        { name: "TensorFlow", level: 40, dots: 1 },
        { name: "PyTorch", level: 40, dots: 1 }
      ],
      count: "5 skills"
    },
    {
      title: "Cloud & Databases",
      icon: Database,
      skills: [
        { name: "AWS", level: 70, dots: 2 },
        { name: "MySQL", level: 90, dots: 3 },
        { name: "PostgreSQL", level: 70, dots: 2 },
        { name: "MongoDB", level: 40, dots: 1 }
      ],
      count: "4 skills"
    },
    {
      title: "DevOps & Collaboration",
      icon: GitBranch,
      skills: [
        { name: "Git & Github", level: 90, dots: 3 },
        { name: "Docker", level: 70, dots: 2 },
        { name: "Notion", level: 90, dots: 3 },
        { name: "Microsoft Teams", level: 90, dots: 3 }
      ],
      count: "4 skills"
    },
    {
      title: "Fine-Tuning & Model Optimization",
      icon: Zap,
      skills: [
        { name: "LoRA (Low-Rank Adaptation)", level: 90, dots: 3 },
        { name: "QLoRA", level: 70, dots: 2 },
        { name: "PEFT (Parameter Efficient Fine-Tuning)", level: 90, dots: 3 },
        { name: "Model Quantization", level: 70, dots: 2 },
        { name: "Supervised Fine-Tuning (SFT)", level: 90, dots: 3 },
        { name: "RLHF (Reinforcement Learning from Human Feedback)", level: 40, dots: 1 }
      ],
      count: "6 skills"
    },
    {
      title: "Specialized Skills",
      icon: Cloud,
      skills: [
        { name: "Natural Language Processing", level: 90, dots: 3 },
        { name: "Generative AI & RAG", level: 90, dots: 3 },
        { name: "Data Visualization", level: 70, dots: 2 },
        { name: "Deep Learning", level: 70, dots: 2 },
        { name: "Power BI", level: 70, dots: 2 }
      ],
      count: "5 skills"
    }
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    return "bg-yellow-500";
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Proficient";
    if (level >= 70) return "Intermediate";
    return "Learning";
  };

  const renderDots = (dots: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot <= dots ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Skills & Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              🎯 A comprehensive overview of my technical expertise and capabilities in AI/ML engineering and data science
            </p>
          </div>

          {/* Skill Level Legend */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Learning</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/10 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{category.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">{category.count}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        {renderDots(skill.dots)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={skill.level} 
                          className="flex-1 h-2"
                        />
                        <Badge 
                          variant="outline" 
                          className={`text-xs px-2 py-0.5 border-0 text-white ${getLevelColor(skill.level)}`}
                        >
                          {getLevelLabel(skill.level)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              🚀 Always learning and exploring new technologies in AI & Data Science
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;