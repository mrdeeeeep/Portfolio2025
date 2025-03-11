import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Define skill levels
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "C", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      name: "AI & Data",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Deep Learning", level: "Advanced" },
        { name: "NLP", level: "Intermediate" },
        { name: "Data Engineering", level: "Advanced" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "React Native", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Advanced" },
        
      ]
    },
    {
      name: "Mobile",
      skills: [
        { name: "Java", level: "Beginner" },
        { name: "Kotlin", level: "Beginner"},
        { name: "Android Studio", level: "Intermediate" },
        { name: "SwiftUI", level: "Beginner" },
        { name: "Xcode", level: "Intermediate" }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Expert" },
        { name: "Supabase", level: "Beginner" }
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "Figma", level: "Advanced" }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Fast-Learner", level: "Expert" },
        { name: "Teamwork", level: "Expert" },
        { name: "Problem Solving", level: "Expert" }
      ]
    }
  ];

  // Convert skill level to progress value
  const getProgressValue = (level: SkillLevel): number => {
    switch (level) {
      case "Beginner": return 25;
      case "Intermediate": return 50;
      case "Advanced": return 75;
      case "Expert": return 100;
      default: return 0;
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      }
    })
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Technical <span className="text-gradient">Skills</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and toolset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
            >
              <Card className="p-6 h-full card-hover glass-card">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={skillIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillVariants}
                      className="space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}</span>
                      </div>
                      <Progress 
                        value={getProgressValue(skill.level)} 
                        className="h-2 w-full" 
                        aria-label={`${skill.name} proficiency: ${skill.level}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
