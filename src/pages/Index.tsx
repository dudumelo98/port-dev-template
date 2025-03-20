import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Layout, 
  Github, 
  Linkedin, 
  Mail,
  GraduationCap,
  Users,
  Sparkles,
  BookOpen,
  FileCode,
  PaintBucket,
  Globe,
  Boxes,
  Award,
  TrendingUp,
  Lightbulb,
  Medal,
  CheckCircle2,
  Clipboard,
  Building,
  Target,
  Tool
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ParticleSystem from '@/components/ParticleSystem';
import SkillCard from '@/components/SkillCard';
import TimelineItem from '@/components/TimelineItem';
import ContactLink from '@/components/ContactLink';
import SmoothImage from '@/components/SmoothImage';
import ResumeSection from '@/components/ResumeSection';
import TechnicalSkill from '@/components/TechnicalSkill';
import Achievement from '@/components/Achievement';
import KeyCompetency from '@/components/KeyCompetency';

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
      title: 'Especialista em Tecnologia Educacional',
      company: 'Escolas Municipais ETI',
      description: [
        'Desenvolvimento de Plataformas Interativas: Utilizei HTML5 e CSS3 (Grid, Flexbox, animações) para criar ambientes virtuais de aprendizagem, aumentando em 35% a participação em atividades extracurriculares.',
        'UI/UX para Educação: Apliquei princípios de acessibilidade e design responsivo (Figma) em interfaces usadas por 2.500+ alunos, reduzindo o tempo de navegação em 20%.',
        'JavaScript para Engajamento: Implementei quizzes dinâmicos e gamificação (via JavaScript ES6+), elevando a retenção de conteúdo em 40% em escolas parceiras.',
        'Capacitação Docente: Treinei 90+ professores em ferramentas digitais, com workshops práticos em Python para análise de desempenho estudantil.'
      ]
    },
    {
      date: '2018 - 2025',
      title: 'Coordenador de Polo Tecnológico',
      company: 'Universidade Estadual do Maranhão (UEMA)',
      description: [
        'Sistemas Web para Comunidades Rurais: Desenvolvi plataformas de gestão escolar com Python (Django), beneficiando 15 polos educacionais e simplificando processos administrativos em 60%.',
        'CSS para Materiais Didáticos: Criei templates responsivos para cursos EAD, adotados por 1.200+ alunos como material de apoio oficial.',
        'Parcerias Estratégicas: Estabeleci colaborações com 8 ONGs para workshops de programação básica (HTML/JS), impactando 500+ jovens em zonas remotas.',
        'Figma na Educação: Prototipei interfaces de um sistema de monitoramento acadêmico, adotado como modelo estadual em 2023.'
      ]
    }
  ];
  
  const keyCompetencies = [
    {
      title: 'Gestão de Projetos Educacionais',
      icon: <Clipboard size={36} />
    },
    {
      title: 'Integração de Tecnologia em Sala de Aula',
      icon: <Layout size={36} />
    },
    {
      title: 'Desenvolvimento de Plataformas Educacionais',
      icon: <Code size={36} />
    },
    {
      title: 'Design Instrucional com Figma',
      icon: <Boxes size={36} />
    },
    {
      title: 'Capacitação de Equipes para Transformação Digital',
      icon: <Users size={36} />
    },
    {
      title: 'Parcerias Interinstitucionais',
      icon: <Building size={36} />
    }
  ];

  const frontEndSkills = [
    { name: 'HTML5 Semântico', icon: <FileCode size={20} /> },
    { name: 'CSS3 (SASS, Animations)', icon: <PaintBucket size={20} /> },
    { name: 'JavaScript (React Basics)', icon: <Code size={20} /> },
    { name: 'Python (Automação Web)', icon: <Globe size={20} /> }
  ];

  const designSkills = [
    { name: 'Figma (Design Systems)', icon: <Boxes size={20} /> },
    { name: 'Testes de Usabilidade', icon: <Target size={20} /> },
    { name: 'Wireframes Interativos', icon: <Layout size={20} /> },
    { name: 'Princípios WCAG', icon: <CheckCircle2 size={20} /> }
  ];

  const managementSkills = [
    { name: 'Metodologias Ágeis (Scrum/Kanban)', icon: <Sparkles size={20} /> },
    { name: 'PMI para Projetos Educacionais', icon: <Clipboard size={20} /> },
    { name: 'Trello/Asana', icon: <BookOpen size={20} /> },
    { name: 'Capacitação em Ferramentas Digitais', icon: <Users size={20} /> }
  ];

  const achievements = [
    {
      title: 'Prêmio Inovação em Educação Digital 2024',
      description: 'Pela plataforma "Aula Dinâmica" integrando tecnologias web para escolas públicas e transformando a experiência de aprendizado.',
      icon: <GraduationCap size={32} />
    },
    {
      title: 'Transformação de Processos Pedagógicos',
      description: 'Redesign de sistemas administrativos com foco em ferramentas educacionais que liberam mais tempo para atividades pedagógicas.',
      icon: <BookOpen size={32} />
    },
    {
      title: 'Pioneirismo em Design Educacional',
      description: 'Desenvolvimento de protótipos de interfaces de aprendizado que se tornaram referência para plataformas educacionais.',
      icon: <Medal size={32} />
    }
  ];

  const whyHireMe = [
    {
      title: 'Tecnologia com Propósito',
      description: 'Não crio "ferramentas", mas experiências educacionais que resolvem problemas reais (ex.: evasão escolar, desinteresse).',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Ponte entre Saberes',
      description: 'Traduzo linguagens técnicas para educadores e necessidades pedagógicas para desenvolvedores.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Todo projeto inclui métricas de impacto (tempo economizado, engajamento, redução de custos).',
      icon: <Target size={24} />
    }
  ];

  const formation = [
    'Designer Web e Mobile Completo: UI/UX, Figma',
    'Curso Avançado de Figma (Design + Prototipagem)',
    'Curso de Excel do Básico ao Avançado, Macro e VBA + Power BI',
    'Estruturas de Dados e Algoritmos Python + Exercícios LEETCODE',
    'Prompt Completo de Engenharia para Bootcamp de IA (2025)',
    'IA Generativa e Large Language Models (LLMs) na Prática'
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#64daff] uppercase font-sans">
              Duilio Melo
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-[#64ffda]">
              Gestor em Tecnologia da Informação
            </h2>
            <div className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              <p className="mb-4">
                Profissional na intersecção entre tecnologia e educação, com 7+ anos liderando projetos que transformam realidades escolares por meio da inovação digital.
              </p>
              <p>
                Combino expertise em desenvolvimento web com uma visão pedagógica para criar ferramentas que simplificam o aprendizado, capacitam educadores e engajam estudantes.
              </p>
            </div>
            
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
            className="flex-1 flex justify-center mt-12 md:mt-0"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border-4 border-[#64ffda] overflow-hidden animate-float">
              <SmoothImage
                src="/lovable-uploads/f7c14f98-6507-4721-973c-fa12f4cda16b.png"
                alt="Duilio Melo"
                aspectRatio="square"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ResumeSection 
        id="resume" 
        title="Resumo Estratégico" 
        subtitle="Minha trajetória profissional"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#495670]/20 p-6 rounded-lg border-l-2 border-[#64ffda] max-w-4xl mx-auto"
        >
          <p className="text-[#ccd6f6] mb-4">
            Minha trajetória reflete a capacidade de traduzir códigos em soluções educacionais acessíveis, intuitivas e escaláveis.
          </p>
          <p className="text-[#ccd6f6]/80 italic">
            <span className="text-[#64ffda]">✨ Diferencial Único:</span> Minha codificação tem DNA pedagógico – cada linha de HTML, CSS ou Python é escrita para descomplicar, nunca para intimidar. Afinal, tecnologia na educação só é revolucionária quando é acessível.
          </p>
        </motion.div>
      </ResumeSection>

      <ResumeSection id="competencies" title="Competências-Chave">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyCompetencies.map((competency, index) => (
            <KeyCompetency 
              key={index}
              title={competency.title}
              icon={competency.icon}
              index={index}
            />
          ))}
        </div>
      </ResumeSection>
      
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
            <h2 className="heading-lg mb-6">Experiência Relevante</h2>
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
      
      <section id="skills" className="py-20 relative bg-[#495670]/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">Expertise</p>
            <h2 className="heading-lg mb-6">Habilidades Técnicas</h2>
            <p className="text-[#ccd6f6]/80 max-w-2xl mx-auto">
              Combinando desenvolvimento web, design de interfaces e gestão de projetos educacionais
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#0a192f]/80 p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all"
            >
              <h3 className="text-xl font-bold text-[#64ffda] mb-6 flex items-center">
                <Code size={20} className="mr-2" /> Front-End
              </h3>
              <div className="space-y-4">
                {frontEndSkills.map((skill, index) => (
                  <TechnicalSkill 
                    key={index} 
                    name={skill.name} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#0a192f]/80 p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all"
            >
              <h3 className="text-xl font-bold text-[#64ffda] mb-6 flex items-center">
                <Boxes size={20} className="mr-2" /> Design & UX
              </h3>
              <div className="space-y-4">
                {designSkills.map((skill, index) => (
                  <TechnicalSkill 
                    key={index} 
                    name={skill.name} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#0a192f]/80 p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all"
            >
              <h3 className="text-xl font-bold text-[#64ffda] mb-6 flex items-center">
                <Clipboard size={20} className="mr-2" /> Gestão Educacional
              </h3>
              <div className="space-y-4">
                {managementSkills.map((skill, index) => (
                  <TechnicalSkill 
                    key={index} 
                    name={skill.name} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ResumeSection 
        id="achievements" 
        title="Realizações em Destaque"
        subtitle="Projetos e reconhecimentos"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Achievement 
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              index={index}
            />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection 
        id="hire-me" 
        title="Por Que Me Contratar?"
        className="bg-[#495670]/10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyHireMe.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#0a192f] p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all"
              >
                <div className="flex justify-center mb-4 text-[#64ffda]">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-3">{reason.title}</h3>
                <p className="text-sm text-center text-[#ccd6f6]/80">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 bg-[#0a192f] p-6 rounded-lg border-l-2 border-[#64ffda]"
          >
            <h4 className="text-xl font-semibold mb-4 text-[#64ffda]">Formação Complementar</h4>
            <ul className="space-y-2">
              {formation.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#64ffda] mr-2">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ResumeSection>
      
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
            <h2 className="heading-lg mb-6">Vamos Transformar a Educação Juntos?</h2>
            <p className="text-[#ccd6f6]/80 max-w-xl mx-auto mb-6">
              Disponível para consultorias em integração tecnológica, desenvolvimento de plataformas educacionais e capacitação em ferramentas digitais.
            </p>
          </motion.div>
          
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <ContactLink 
              href="mailto:dudumelo723@gmail.com" 
              icon={<Mail size={20} />} 
              label="dudumelo723@gmail.com"
              className="border border-[#64ffda]/20 hover:border-[#64ffda] text-[#64ffda]"
            />
            <ContactLink 
              href="https://github.com/dudumelo98" 
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
          href="mailto:dudumelo723@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-12 h-12 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Mail size={20} />
        </motion.a>
        <motion.a
          href="https://github.com/dudumelo98"
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
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-12 h-12 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Tool size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default Index;
