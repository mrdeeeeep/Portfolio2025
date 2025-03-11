
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Code, Rocket, Globe } from "lucide-react";

interface Project {
  title: string;
  year: string;
  description: string[];
  technologies: string[];
  link?: string;
  githubLink?: string;
  icon?: 'code' | 'rocket' | 'globe' | 'github';
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Facial Emotion Detection using ML",
      year: "2023",
      description: [
        "Built a machine learning model to classify human emotions from facial expressions."
      ],
      technologies: ["Python", "ML", "Computer Vision"],
      icon: 'code',
      githubLink: "https://github.com/username/emotion-detection"
    },
    {
      title: "Workplace Posture Correction System",
      year: "2024",
      description: [
        "Created a system to monitor and correct posture in workplace environments to improve ergonomics."
      ],
      technologies: ["Computer Vision", "IoT", "Python"],
      icon: 'rocket'
    },
    {
      title: "Chatbot for Delegation of Power (DOP) - NEEPCO",
      year: "05/2024 - 07/2024",
      description: [
        "Designed and implemented an NLP-based chatbot to assist employees with DOP-related queries."
      ],
      technologies: ["NLP", "Python", "AI"],
      icon: 'code',
      githubLink: "https://github.com/username/dop-chatbot"
    },
    {
      title: "AttendX",
      year: "2024",
      description: [
        "Developed a web application for tracking attendance in college lectures."
      ],
      technologies: ["Web Development", "Database", "JavaScript"],
      icon: 'globe',
      githubLink: "https://github.com/username/attendx"
    },
    {
      title: "iOS Attendance Tracker",
      year: "2024",
      description: [
        "Developed an iOS app for students to track attendance, timetable, and tasks."
      ],
      technologies: ["Swift", "iOS", "Mobile Development"],
      icon: 'rocket'
    }
  ];

  const getIcon = (iconName?: string) => {
    switch(iconName) {
      case 'code': return <Code className="h-6 w-6 text-accent" />;
      case 'rocket': return <Rocket className="h-6 w-6 text-accent" />;
      case 'globe': return <Globe className="h-6 w-6 text-accent" />;
      case 'github': return <Github className="h-6 w-6 text-accent" />;
      default: return <Code className="h-6 w-6 text-accent" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">My <span className="text-gradient">Projects</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group card-hover glass-card">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-accent/10 p-2 rounded-full">
                        {getIcon(project.icon)}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <div>
                    {project.description.map((point, i) => (
                      <p key={i} className="text-muted-foreground mb-4">{point}</p>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-4">
                      {project.githubLink && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="gap-1"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </Button>
                      )}
                      
                      {project.link && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="gap-1"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
