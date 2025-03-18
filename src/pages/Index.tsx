
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Layout, 
  Database, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail,
  Layers,
  Monitor,
  Cpu,
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

// Add framer-motion dependency
import { lov-add-dependency } from 'framer-motion@10.17.3';

const Index: React.FC = () => {
  // Smooth scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to allow page to render fully
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
  
  // Experience timeline data
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
  
  // Skills data
  const skillsData = [
    {
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive user interfaces with modern frameworks and design systems.',
      icon: <Layout size={36} />,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend Development',
      description: 'Building robust, scalable server applications and APIs with modern technologies.',
      icon: <Database size={36} />,
      tags: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL']
    },
    {
      title: 'Web Design',
      description: 'Designing intuitive user experiences and visually appealing interfaces with attention to detail.',
      icon: <Layers size={36} />,
      tags: ['UI/UX Design', 'Figma', 'Design Systems', 'Animation']
    },
    {
      title: 'DevOps',
      description: 'Streamlining development workflows and infrastructure with automation and CI/CD.',
      icon: <CloudCog size={36} />,
      tags: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
    },
    {
      title: 'Performance Optimization',
      description: 'Enhancing application speed and efficiency through strategic optimizations.',
      icon: <LineChart size={36} />,
      tags: ['Web Vitals', 'Lighthouse', 'Bundle Analysis', 'Caching']
    },
    {
      title: 'Testing & QA',
      description: 'Ensuring application reliability and quality through comprehensive testing strategies.',
      icon: <Search size={36} />,
      tags: ['Jest', 'Cypress', 'TDD', 'E2E Testing']
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background particles */}
      <ParticleSystem />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="caption mb-3 text-accent">Portfolio</p>
              <h1 className="heading-xl mb-6">
                Crafting digital experiences with precision.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
                Software engineer specializing in creating elegant, user-centered solutions 
                for complex problems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact"
                  className="glass-card bg-accent text-white px-6 py-3 hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
                >
                  Get in touch
                </a>
                <a 
                  href="#skills"
                  className="glass-card px-6 py-3 hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
                >
                  Explore skills
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <p className="caption mb-3 text-accent">Expertise</p>
            <h2 className="heading-lg mb-6">Skills & Competencies</h2>
            <p className="text-muted-foreground">
              A comprehensive collection of technical skills and domains of expertise,
              refined through years of professional experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 relative bg-secondary/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <p className="caption mb-3 text-accent">Career</p>
            <h2 className="heading-lg mb-6">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl">
              A chronological journey through my professional career, highlighting key roles,
              responsibilities, and achievements.
            </p>
          </motion.div>
          
          <div className="space-y-2">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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
      
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="caption mb-3 text-accent">Connect</p>
              <h2 className="heading-lg mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-10 max-w-lg">
                Interested in working together or have a question? Feel free to reach out 
                through any of the channels below.
              </p>
              
              <div className="flex flex-col gap-4 max-w-md">
                <ContactLink 
                  href="mailto:contact@example.com" 
                  icon={<Mail size={20} />} 
                  label="contact@example.com"
                />
                <ContactLink 
                  href="https://github.com/" 
                  icon={<Github size={20} />} 
                  label="GitHub"
                />
                <ContactLink 
                  href="https://linkedin.com/" 
                  icon={<Linkedin size={20} />} 
                  label="LinkedIn"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="max-w-sm w-full">
                <SmoothImage
                  src="https://images.unsplash.com/photo-1551649445-48959d272bf6?q=80&w=1000&auto=format&fit=crop"
                  alt="Contact visual"
                  aspectRatio="portrait"
                  className="rounded-2xl shadow-xl rotate-1 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
