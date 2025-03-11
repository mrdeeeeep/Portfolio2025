
import { circIn, motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

import CitLogo from "@/assets/image/citLogo.png"; 
import KvsLogo from "@/assets/image/kvs.jpg"; 
import GdscLogo from "@/assets/image/gdsc.png"; 


interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
  scoreLabel?: string;
  logo?: string;
}

interface ExperienceItem {
  title: string;
  organization: string;
  description: string;
  logo?: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: "BTech in Computer Science and Engineering",
      institution: "Central Institute of Technology Kokrajhar",
      period: "2021 - 2025",
      location: "Kokrajhar, India",
      score: "8.1",
      scoreLabel: "GPA / 10",
      logo: CitLogo 
    },
    {
      degree: "Higher Secondary",
      institution: "Kendriya Vidyalaya Tamulpur",
      period: "2019 - 2021",
      location: "Tamulpur",
      score: "84%",
      scoreLabel: "Percentage / 100%",
      logo: KvsLogo 
    }
  ];

  const additionalExperience: ExperienceItem[] = [
    {
      title: "Event Organizer",
      organization: "Techcracy 2024 (Technical College Fest)",
      description: "Organized events, workshops, and hackathons.",
      logo: CitLogo
    },
    {
      title: "Club Coordinator",
      organization: "Google Developer Students Club (GDSC)",
      description: "Coordinated various Google Events and Competition via Club",
      logo: GdscLogo
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Education & <span className="text-gradient">Experience</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My academic background and additional leadership experiences
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6 flex items-center"
        >
          <GraduationCap className="mr-2 h-6 w-6" /> Education
        </motion.h3>
          
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 mb-16 max-w-4xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 glass-card card-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex items-start gap-4">
                    {item.logo && (
                      <div className="hidden md:block flex-shrink-0">
                        <div className="h-16 w-16 bg-background rounded-full overflow-hidden flex items-center justify-center border border-border">
                          <img 
                            src={item.logo} 
                            alt={item.institution} 
                            className="h-12 w-12 object-contain"
                            onError={(e) => (e.target as HTMLImageElement).src = "/placeholder_logo.png"}
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <h5 className="text-lg text-accent mt-1">{item.institution}</h5>
                      <div className="flex items-center text-sm text-muted-foreground mt-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {item.score && (
                    <div className="bg-secondary rounded-lg p-4 text-center min-w-[100px]">
                      <div className="text-2xl font-bold">{item.score}</div>
                      <div className="text-xs text-muted-foreground">{item.scoreLabel}</div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6 flex items-center"
        >
          <Briefcase className="mr-2 h-6 w-6" /> Additional Experience
        </motion.h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {additionalExperience.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 glass-card card-hover">
                <div className="flex items-start gap-4">
                  {item.logo && (
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 bg-background rounded-full overflow-hidden flex items-center justify-center border border-border">
                        <img 
                          src={item.logo} 
                          alt={item.organization} 
                          className="h-12 w-12 object-contain"
                          onError={(e) => (e.target as HTMLImageElement).src = "/placeholder_logo.png"}
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <h5 className="text-lg text-accent mt-1">{item.organization}</h5>
                    <p className="mt-3 text-muted-foreground">{item.description}</p>
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

export default Education;
