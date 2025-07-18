import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, Github, Linkedin, Code, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "nandaosman1515@gmail.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Let's Chat",
      description: "Available for collaboration and opportunities",
      action: "Start Conversation"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a time that works for both of us",
      action: "Schedule Meeting"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/aliansari1415" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/kasam-nanda-kishor-reddy-b390b5352/" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              💬 Ready to collaborate on exciting web development projects? Let's build something amazing together!
            </p>
            
            {/* Availability Status */}
            <div className="flex justify-center mt-8">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-green-100 text-green-800 border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                            <p className="text-muted-foreground text-sm mb-3">{info.description}</p>
                            <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                              {info.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button key={social.label} variant="outline" size="sm" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Location & Info */}
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location & Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Based in Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Open to remote opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Interested in Web Development collaborations</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-card shadow-card border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind? I'd love to hear about it!
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="John" className="border-primary/20 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Doe" className="border-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="border-primary/20 focus:border-primary" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input 
                      placeholder="Web Development Project Collaboration" 
                      className="border-primary/20 focus:border-primary" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project, timeline, and how we can work together..."
                      rows={5}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-hero hover:shadow-hero transition-all duration-300 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    I'll get back to you within 24 hours. Promise! 🚀
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;