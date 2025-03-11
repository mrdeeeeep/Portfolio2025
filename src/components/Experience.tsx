import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}


const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Chatbot for Delegation of Power (DOP)",
      company: "NEEPCO (North Eastern Electric Power Corporation Limited)",
      date: "05/2024 - 07/2024",
      location: "Shillong, Meghalaya, India",
      description: [
        "Developed an NLP-based chatbot to assist NEEPCO employees with daily queries related to Delegation of Power (DOP)."
      ]
    },
    {
      title: "Web and App developer Intern",
      company: "ZCSasia(division of Suzoco Services Pvt.Ltd.)",
      date: "03/2025",
      location: "Kokrajhar, Assam, India",
      description: [
        "Develop and maintain web and mobile apps, write clean code, debug, test, and integrate APIs."
      ]
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
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Work <span className="text-gradient">Experience</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="mb-12 relative pl-8 md:pl-0 group"
            >
              {/* Timeline line with animation on hover */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border/50 transition-all duration-300 group-hover:bg-accent/70" 
                style={{ 
                  top: '32px', 
                  height: 'calc(100% - 32px)',
                  backgroundImage: 'linear-gradient(to bottom, transparent, var(--accent))',
                  backgroundSize: '100% 0%',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ animation: 'timeline-fill 0.8s ease forwards' }}
                ></div>
              </div>
              
              <div className="relative md:grid md:grid-cols-7 md:gap-8 items-start">
                <div className="md:col-span-3 md:text-right mb-4 md:mb-0 md:pr-8 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                  <h4 className="text-lg font-semibold text-accent">{exp.company}</h4>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 md:justify-end">
                    <Calendar className="h-4 w-4 mr-1 md:order-2 md:ml-1 md:mr-0" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 md:justify-end">
                    <MapPin className="h-4 w-4 mr-1 md:order-2 md:ml-1 md:mr-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-1.5 transition-all duration-300 group-hover:scale-125 group-hover:shadow-glow"></div>
                </div>
                
                <div className="md:col-span-3 md:pl-8">
                  <Card className="p-5 glass-card transition-all duration-300 group-hover:shadow-lg group-hover:transform group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <ul className="mt-2 space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-muted-foreground">• {point}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add the keyframes for timeline animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes timeline-fill {
          0% { background-size: 100% 0%; }
          100% { background-size: 100% 100%; }
        }
        
        .shadow-glow {
          box-shadow: 0 0 8px 2px var(--accent);
        }
      `}} />
    </section>
  );
};

export default Experience;
