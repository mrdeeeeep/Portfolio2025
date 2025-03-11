
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase, BookOpen, GraduationCap, Award } from "lucide-react";

// Import placeholder images
import logoNeepco from "@/assets/image/neepco.png";
import logoNielit from "@/assets/image/nielit.jpg";
import logoInternshala from "@/assets/image/internshalla.jpg";

interface TrainingItem {
  title: string;
  organization: string;
  period: string;
  location?: string;
  logo?: string;
  icon?: 'book' | 'briefcase' | 'award' | 'graduation';
}

const Training = () => {
  const trainings: TrainingItem[] = [
    {
      title: "Chatbot for Delegation of Power (DOP)",
      organization: "North Eastern Electric Power Corporation Limited",
      period: "May 2024 - July 2024",
      logo: logoNeepco,
      icon: 'briefcase'
    },
    {
      title: "AI & Machine Learning - Internship",
      organization: "NIELIT, Kokrajhar",
      period: "Jun 2023 - Jul 2023",
      logo: logoNielit,
      icon: 'graduation'
    },
    {
      title: "Android App Development",
      organization: "Internshala Trainings",
      period: "Aug 2023 - Sept 2023",
      logo: logoInternshala,
      icon: 'award'
    }
  ];

  const getIcon = (iconName?: string) => {
    switch(iconName) {
      case 'book': return <BookOpen className="h-6 w-6 text-accent" />;
      case 'briefcase': return <Briefcase className="h-6 w-6 text-accent" />;
      case 'award': return <Award className="h-6 w-6 text-accent" />;
      case 'graduation': return <GraduationCap className="h-6 w-6 text-accent" />;
      default: return <BookOpen className="h-6 w-6 text-accent" />;
    }
  };

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
    <section id="training" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Training & <span className="text-gradient">Courses</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional development and specialized training programs I've completed
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {trainings.map((training, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full glass-card card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {training.logo ? (
                      <div className="h-16 w-16 bg-background rounded-full overflow-hidden flex items-center justify-center border border-border">
                        <img 
                          src={training.logo} 
                          alt={training.organization} 
                          className="h-12 w-12 object-contain" 
                          onError={(e) => (e.target as HTMLImageElement).src = "/placeholder_logo.png"}
                        />
                      </div>
                    ) : (
                      <div className="bg-accent/10 p-3 rounded-full">
                        {getIcon(training.icon)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{training.title}</h3>
                    <p className="text-accent mt-1">{training.organization}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{training.period}</span>
                    </div>
                    {training.location && (
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{training.location}</span>
                      </div>
                    )}
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

export default Training;
