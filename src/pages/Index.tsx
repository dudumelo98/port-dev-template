import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Layout, 
  Database, 
  Github, 
  Linkedin, 
  Mail,
  Layers,
  CloudCog,
  Search,
  LineChart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ParticleSystem from '@/components/ParticleSystem';
import SkillCard from '@/components/SkillCard';
import TimelineItem from '@/components/TimelineItem';
import ContactLink from '@/components/ContactLink';
import SmoothImage from '@/components/SmoothImage';

const Index: React.FC = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const experienceData = [
    {
      date: '2022 - Present',
      title: 'Senior Software Engineer',
      company: 'TechInnovate Inc.',
      description: 'Led development of cloud-native applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.'
    },
    {
      date: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed scalable web applications with modern JavaScript frameworks. Collaborated with design team to create intuitive user interfaces.'
    },
    {
      date: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'CreativeWeb Agency',
      description: 'Created responsive websites and interactive web experiences. Optimized performance and accessibility across multiple platforms.'
    },
    {
      date: '2017 - 2018',
      title: 'Web Developer Intern',
      company: 'StartUp Hub',
      description: 'Assisted in building web applications and learned modern development practices. Contributed to open source projects.'
    }
  ];
  
  const skillsData = [
    {
      title: 'Infrastructure Management',
      description: 'Cloud Computing · Virtualization · DevOps',
      icon: <CloudCog size={36} />,
      tags: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      title: 'Development',
      description: 'HTML · CSS · JavaScript · Python',
      icon: <Code size={36} />,
      tags: ['React', 'Node.js', 'Python', 'TypeScript']
    },
    {
      title: 'Web Design',
      description: 'Figma · UI/UX · Prototyping',
      icon: <Layers size={36} />,
      tags: ['UI/UX Design', 'Figma', 'Design Systems', 'Animation']
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0a192f] text-[#ccd6f6]">
      <ParticleSystem />
      
      <section className="min-h-screen relative flex items-center px-[10%] py-16 md:py-0">
        <div className="section-container relative z-10 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 md:pr-8"
          >
            <h1 className="heading-xl mb-4">
              Duilio Melo
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 text-[#64ffda]">
              IT Manager & Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              Transforming ideas into innovative technological solutions
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#contact"
                className="bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                Get in touch
              </a>
              <a 
                href="#skills"
                className="bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                View skills
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 flex justify-center mt-10 md:mt-0"
          >
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-4 border-[#64ffda] overflow-hidden animate-float">
              <SmoothImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Profile Photo"
                aspectRatio="square"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section id="skills" className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Skills</p>
            <h2 className="heading-lg mb-6">Technical Expertise</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <SkillCard
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  tags={skill.tags}
                  className="bg-[#495670]/20 hover:border-[#64ffda]/30 border border-transparent"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="experience" className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Career</p>
            <h2 className="heading-lg mb-6">Professional Experience</h2>
          </motion.div>
          
          <div className="space-y-2">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <TimelineItem
                  date={experience.date}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                  isLast={index === experienceData.length - 1}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Connect</p>
            <h2 className="heading-lg mb-6">Get in Touch</h2>
          </motion.div>
          
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <ContactLink 
              href="mailto:contact@example.com" 
              icon={<Mail size={20} />} 
              label="contact@example.com"
              className="border border-[#64ffda]/20 hover:border-[#64ffda] text-[#64ffda]"
            />
            <ContactLink 
              href="https://github.com/" 
              icon={<Github size={20} />} 
              label="GitHub"
              className="border border-[#64ffda]/20 hover:border-[#64ffda] text-[#64ffda]"
            />
            <ContactLink 
              href="https://linkedin.com/" 
              icon={<Linkedin size={20} />} 
              label="LinkedIn"
              className="border border-[#64ffda]/20 hover:border-[#64ffda] text-[#64ffda]"
            />
          </div>
        </div>
      </section>
      
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <motion.a
          href="mailto:contact@example.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-12 h-12 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Mail size={20} />
        </motion.a>
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-12 h-12 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Github size={20} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-12 h-12 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Linkedin size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default Index;
