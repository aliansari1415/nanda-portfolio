import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/aliansari1415" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/kasam-nanda-kishor-reddy-b390b5352/" },
    { icon: Mail, label: "Email", url: "mailto:nandaosman1515@gmail.com" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  N
                </div>
                <span className="text-xl font-bold text-foreground">Nanda Kishor Reddy</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Computer Science and Engineering student passionate about web development 
                and building modern web applications. Creating engaging user experiences.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.label} 
                    variant="outline" 
                    size="sm"
                    className="w-10 h-10 p-0 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for opportunities</span>
                </div>
                <div className="text-muted-foreground">
                  <p>📍 Hyderabad, Telangana, India</p>
                  <p>📧 nandaosman1515@gmail.com</p>
                  <p>🎓 CSE Student at Anurag University</p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Nanda Kishor Reddy. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Built with React + Tailwind CSS</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToTop}
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-lg border border-primary/10">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                🚀 <strong>Open Source Enthusiast</strong> | 
                🤖 <strong>AI/ML Researcher</strong> | 
                🤖 <strong>Web Development Researcher</strong> |
                💡 <strong>Innovation Driven</strong>
              </p>
              <p>
                "Building the web, one line of code at a time" - Nanda Kishor Reddy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;