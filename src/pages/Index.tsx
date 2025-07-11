
import React, { useEffect, useState } from 'react';
import { Code, Database, Globe, Cpu, Mail, Linkedin, Github, Terminal, User, Briefcase, GraduationCap, FolderOpen } from 'lucide-react';
import AnimatedWindow from '../components/AnimatedWindow';
import SkillBar from '../components/SkillBar';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Database Design', level: 85 }
  ];

  const projects = [
    {
      title: "Java E-Commerce Console Application",
      technologies: ["Java", "SQL", "JDBC"],
      description: [
        "Developed a Java-based console application enabling users to register, log in, browse products, add to cart, and place orders, with distinct user and admin functionalities.",
        "Implemented an admin dashboard to manage inventory and approve customer orders.",
        "Integrated SQL database for persistent storage of user profiles, product data, and order history using JDBC."
      ]
    },
    {
      title: "UI/UX Design Project",
      subtitle: "Interactive Social Platform for Seniors",
      technologies: ["Axure RP", "Balsamiq"],
      description: [
        "Designed a web and mobile prototype using Axure to combat digital exclusion among senior citizens in Saudi Arabia by promoting accessible, community-driven interaction.",
        "Built interactive wireframes featuring chat, video calling, interest-based groups, and step-by-step digital literacy tutorials.",
        "Focused on accessibility, responsive design, and cultural adaptation to ensure inclusivity and ease of use."
      ]
    },
    {
      title: "Web-Based Ordering System",
      subtitle: "Campus Coffee",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      description: [
        "Created a full-stack online coffee shop website with user registration/login, profile management, product browsing, cart handling, and secure checkout.",
        "Designed and connected a backend MySQL database to manage users, menu items, orders, and admin functionalities.",
        "Enabled admins to log in, add/edit products, view orders, and manage the menu efficiently through a dedicated interface."
      ]
    },
    {
      title: "Arabic NLP for Comment Classification (Graduation Project)",
      subtitle: "ArC-Sort",
      technologies: ["Python", "BiLSTM", "NLP"],
      description: [
        "Designed and trained an Arabic NLP model to analyze sentiment and urgency in Google Maps customer reviews for coffee shops.",
        "Used BiLSTM neural networks to classify comments into 'Response Required' or 'No Response.'",
        "Addressed challenges such as Arabic dialects and emojis. Developed a web-based prototype."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background matrix-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-mono font-bold text-primary glow-text">Turki Al-Kreedees</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-sm font-mono hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm font-mono hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="text-sm font-mono hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="text-sm font-mono hover:text-primary transition-colors">Education</a>
              <a href="#projects" className="text-sm font-mono hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm font-mono hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-primary glow-text typewriter">Turki</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
              Computer Information Systems Graduate
            </p>
            <div className="flex justify-center space-x-4">
              <Code className="w-8 h-8 text-primary animate-pulse" />
              <Database className="w-8 h-8 text-accent animate-pulse" />
              <Globe className="w-8 h-8 text-primary animate-pulse" />
              <Cpu className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedWindow title="about.exe" delay={200}>
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">Professional Summary</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              Inspired Computer Information Systems alum with a solid foundation in both the hardware and 
              software domains. Interested in continuing to learn more about computing and programming, 
              with exposure to languages such as C++, Java, JavaScript, Python, HTML, and SQL databases. 
              Committed to continuous learning and contributing positively to innovative technological solutions.
            </p>
          </AnimatedWindow>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedWindow title="skills.json" delay={400}>
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Programming Languages</h3>
                {skills.slice(0, 4).map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill.name} 
                    level={skill.level} 
                    delay={index * 200}
                  />
                ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Technologies & Concepts</h3>
                {skills.slice(4).map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill.name} 
                    level={skill.level} 
                    delay={(index + 4) * 200}
                  />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-accent mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['JDBC', 'MySQL', 'BiLSTM', 'Figma', 'Axure RP', 'Balsamiq'].map((tool, index) => (
                  <span 
                    key={tool}
                    className="px-3 py-2 bg-secondary text-primary rounded-lg font-mono text-sm border border-primary/30 hover:border-primary/60 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedWindow>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedWindow title="experience.log" delay={600}>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">Professional Experience</h2>
            </div>
            <ExperienceCard
              title="Web Development Intern"
              company="Documents and Archives Center of Imam Abdulrahman bin Faisal University (Co-op)"
              duration="06/2024 – 08/2024"
              location="Dammam, Saudi Arabia"
              description={[
                "Designed a responsive website interface using Figma, focusing on user experience and visual consistency.",
                "Translated the design into a functional website using HTML, CSS, and basic JavaScript.",
                "Planned and structured the database schema and developed relevant SQL queries to support backend data operations."
              ]}
            />
          </AnimatedWindow>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedWindow title="education.md" delay={800}>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">Education</h2>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent mb-2">Bachelor's Degree in Computer Information Systems</h3>
              <p className="text-muted-foreground mb-2">Imam Abdulrahman Bin Faisal University</p>
              <p className="text-sm text-primary font-mono">08/2019 – 05/2025 | Dammam, Saudi Arabia</p>
            </div>
          </AnimatedWindow>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedWindow title="projects.dir" delay={1000}>
            <div className="flex items-center mb-8">
              <FolderOpen className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  technologies={project.technologies}
                  description={project.description}
                />
              ))}
            </div>
          </AnimatedWindow>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedWindow title="contact.sh" delay={1200}>
            <div className="flex items-center mb-8">
              <Mail className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-primary">Contact Me</h2>
            </div>
            <div className="text-center">
              <p className="text-foreground mb-8 font-mono">
                Let's connect and discuss opportunities in technology and development.
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/turki-al-kreedees-aab85325b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-primary text-background px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 font-mono"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </AnimatedWindow>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 Turki Al-Kreedees. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
