
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
  GraduationCap,
  Users,
  LightbulbIcon,
  Sparkles,
  BookOpen
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
      date: '2024 - Atual',
      title: 'Especialista em Inovação Educacional',
      company: 'Escolas Municipais ETI',
      description: [
        'Liderança de projetos pedagógicos digitais impactando +1.6k alunos',
        'Capacitação de 120+ professores em metodologias ágeis de ensino híbrido',
        'Desenvolvimento de plataforma de aprendizagem adaptativa (aumento de 40% no engajamento discente)',
        'Parcerias estratégicas com EdTechs para modernização de infraestrutura tecnológica'
      ]
    },
    {
      date: '2018 - 2025',
      title: 'Coordenador de Operações Acadêmicas',
      company: 'Universidade Estadual do Maranhão',
      description: [
        'Gestão de polo educacional com excelência operacional (98% de satisfação discente)',
        'Transformação digital de ecossistemas educacionais',
        'Gestão de operações acadêmicas de alta complexidade',
        'Desenvolvimento de soluções pedagógicas escaláveis'
      ]
    }
  ];
  
  const skillsData = [
    {
      title: 'Gestão de Projetos Educacionais',
      description: 'Capacidade de liderar e coordenar iniciativas educacionais com excelência operacional',
      icon: <GraduationCap size={36} />,
      tags: ['Planejamento', 'Execução', 'Monitoramento', 'Avaliação']
    },
    {
      title: 'Inovação e Integração Tecnológica',
      description: 'Implementação de soluções digitais para melhorar processos educacionais',
      icon: <Sparkles size={36} />,
      tags: ['EdTech', 'Transformação Digital', 'Automação', 'Análise de Dados']
    },
    {
      title: 'Colaboração e Parcerias',
      description: 'Criação de alianças estratégicas para potencializar resultados educacionais',
      icon: <Users size={36} />,
      tags: ['Networking', 'Parcerias', 'Colaboração', 'Comunicação']
    },
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de plataformas educacionais e sistemas de aprendizagem',
      icon: <Code size={36} />,
      tags: ['HTML', 'CSS', 'JavaScript', 'Python']
    },
    {
      title: 'Formação e Capacitação',
      description: 'Treinamento e desenvolvimento de educadores em metodologias inovadoras',
      icon: <BookOpen size={36} />,
      tags: ['Workshops', 'Mentoria', 'Treinamentos', 'Feedback']
    }
  ];

  const technicalSkills = [
    { name: 'Estrutura HTML', level: 90 },
    { name: 'Técnicas de estilo CSS', level: 85 },
    { name: 'Funcionalidade JavaScript', level: 80 },
    { name: 'Python para desenvolvimento web', level: 75 },
    { name: 'Princípios de UI/UX', level: 85 },
    { name: 'Dicas de design do Figma', level: 70 }
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
              Especialista em Educação & Tecnologia
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              Profissional na intersecção entre tecnologia e educação com comprovada expertise em transformação digital de ecossistemas educacionais
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#contact"
                className="bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                Entre em contato
              </a>
              <a 
                href="#skills"
                className="bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                Ver competências
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 flex justify-center mt-10 md:mt-0"
          >
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-4 border-[#64ffda] overflow-hidden animate-float">
              <SmoothImage
                src="/profile-photo.png"
                alt="Duilio Melo"
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
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Competências</p>
            <h2 className="heading-lg mb-6">Competências Destacadas</h2>
            <p className="text-[#ccd6f6]/80 max-w-2xl mx-auto">
              Combinando experiência em educação e tecnologia para criar soluções inovadoras
            </p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20"
          >
            <h3 className="heading-sm mb-6 text-center">Conhecimentos Técnicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-[#ccd6f6]">{skill.name}</span>
                    <span className="text-[#64ffda]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#495670]/30 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#64ffda] h-full rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Carreira</p>
            <h2 className="heading-lg mb-6">Experiência Profissional</h2>
            <p className="text-[#ccd6f6]/80 max-w-2xl">
              Trajetória profissional focada na interseção entre educação e tecnologia, 
              desenvolvendo soluções inovadoras para ambientes de aprendizagem.
            </p>
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
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Conecte-se</p>
            <h2 className="heading-lg mb-6">Entre em Contato</h2>
            <p className="text-[#ccd6f6]/80 max-w-md mx-auto">
              Interessado em colaborar em projetos educacionais inovadores? Entre em contato!
            </p>
          </motion.div>
          
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <ContactLink 
              href="mailto:dudumelo@gmail.com" 
              icon={<Mail size={20} />} 
              label="dudumelo@gmail.com"
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
          href="mailto:dudumelo@gmail.com"
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
