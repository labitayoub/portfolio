"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Terminal, Calendar, Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ParticleBackground from "@/components/ui/particle-background"
import FloatingElement from "@/components/ui/floating-element"
import AnimatedCodeBlock from "@/components/ui/animated-code-block"
import { downloadCV } from "@/lib/download-utils"
import ColorShiftBackground from "@/components/ui/color-shift-background"
import ClientWrapper from "@/components/ui/client-wrapper"
import { ThemeToggle } from "@/components/theme-toggle"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = [
  { name: "PHP", icon: "/icons/php.svg", color: "bg-purple-600" },
  { name: "Laravel", icon: "/icons/laravel.svg", color: "bg-red-500" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "bg-yellow-500" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "bg-blue-600" },
  { name: "React", icon: "/icons/react.svg", color: "bg-blue-500" },
  { name: "Next.js", icon: "/icons/nextjs.svg", color: "bg-gray-900" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "bg-green-600" },
  { name: "MySQL", icon: "/icons/mysql.svg", color: "bg-blue-700" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "bg-blue-800" },
  { name: "Git", icon: "/icons/git.svg", color: "bg-orange-500" },
  { name: "HTML", icon: "/icons/html.svg", color: "bg-orange-600" },
  { name: "CSS", icon: "/icons/css.svg", color: "bg-blue-400" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", color: "bg-cyan-500" },
  { name: "Java", icon: "/icons/java.svg", color: "bg-red-600" },
  { name: "C", icon: "/icons/c.svg", color: "bg-gray-600" },
]

const projects = [
  {
    title: "E-Commerce Laravel Platform",
    description: "Full-stack e-commerce solution with admin dashboard, payment integration, and inventory management",
    image: "/projects/ecommerce-laravel.svg",
    tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/labitayoub",
    live: "#",
  },
  {
    title: "React Task Management App",
    description: "Modern task management application with real-time updates, drag-and-drop functionality, and team collaboration",
    image: "/projects/react-task-manager.svg",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "https://github.com/labitayoub",
    live: "#",
  },
  {
    title: "Next.js Portfolio Website",
    description: "Professional portfolio website with modern animations, responsive design, and dark mode support",
    image: "/projects/nextjs-portfolio.svg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/labitayoub",
    live: "#",
  },
  {
    title: "Java Desktop Application",
    description: "Cross-platform desktop application demonstrating OOP principles and design patterns",
    image: "/projects/java-desktop-app.svg",
    tech: ["Java", "JavaFX", "MySQL", "Git"],
    github: "https://github.com/labitayoub",
    live: "#",
  },
]

const experience = [
  {
    title: "Full Stack Development Student",
    company: "YouCode",
    period: "2023 - Present",
    description: "Learning modern web development technologies including PHP, Laravel, React, and Node.js",
  },
  {
    title: "University Student",
    company: "UM6P",
    period: "2022 - Present",
    description: "Pursuing higher education while developing programming skills",
  },
  {
    title: "Self-Taught Developer",
    company: "Personal Projects",
    period: "2021 - 2023",
    description: "Started learning programming with C, Java, and web technologies",
  },
  {
    title: "Beginner Programmer",
    company: "Learning Journey",
    period: "2020 - 2021",
    description: "First steps into programming and computer science fundamentals",
  },
]

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <ClientWrapper>
        <ParticleBackground />
      </ClientWrapper>
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4 rounded-full glass border-gradient px-4 sm:px-6 py-2.5">
            <motion.a whileHover={{ scale: 1.05 }} href="#home" className="text-lg sm:text-xl font-bold gradient-text tracking-tight">
              Ayoub Labit
            </motion.a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => {
                const id = item.toLowerCase()
                const active = activeSection === id
                return (
                  <motion.a
                    key={item}
                    href={`#${id}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative rounded-full px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors focus-ring-custom ${active ? 'text-green-300' : 'text-gray-400 hover:text-green-300'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{item}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-green-500/15 border border-green-400/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.a>
                )
              })}
              <div className="pl-2 ml-2 border-l border-white/10 flex items-center"><ThemeToggle /></div>
            </div>
            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-3 pb-4"
              >
                <div className="flex flex-col space-y-3 pt-2 rounded-xl glass border-gradient p-3">
                  {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item, idx) => {
                    const id = item.toLowerCase()
                    const active = activeSection === id
                    return (
                      <motion.a
                        key={item}
                        href={`#${id}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.03 }}
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative rounded-lg px-4 py-2 text-base font-medium transition-colors ${active ? 'text-green-300' : 'text-gray-300 hover:text-green-300'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {active && (
                          <motion.span layoutId="mobile-nav-pill" className="absolute inset-0 rounded-lg bg-green-500/10 border border-green-400/30" />
                        )}
                        <span className="relative z-10">{item}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 px-4 sm:px-6 section-wrapper">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-400 text-base sm:text-lg"
              >
                Hello, I'm
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight gradient-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                Ayoub Labit
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
                Full Stack Developer
              </motion.p>
              <motion.p variants={fadeInUp} className="text-sm sm:text-base lg:text-lg text-gray-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I create exceptional digital experiences with modern technologies. Passionate about clean code and
                innovative solutions.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 lg:gap-6 pt-4 lg:pt-6 max-w-md mx-auto lg:mx-0">
                {[
                  { label: 'School', value: 'YouCode' },
                  { label: 'University', value: 'UM6P' }
                ].map((s) => (
                  <div key={s.label} className="card-base card-hover rounded-xl p-3 sm:p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
                    <h4 className="text-green-300 font-medium mb-1 sm:mb-2 text-xs sm:text-sm tracking-wide uppercase">{s.label}</h4>
                    <p className="text-lg sm:text-xl font-semibold relative z-10">{s.value}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Button 
                  className="btn-gradient-primary shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] disabled:opacity-50 w-full sm:w-auto"
                  onClick={async (e) => {
                    const button = e.currentTarget;
                    const originalText = button.textContent || 'Download CV';
                    
                    try {
                      // Show loading state
                      button.disabled = true;
                      button.innerHTML = '<div class="flex items-center justify-center"><div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>Downloading...</div>';
                      
                      await downloadCV();
                      
                      // Show success state briefly
                      button.innerHTML = '<div class="flex items-center justify-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Downloaded!</div>';
                      
                      setTimeout(() => {
                        button.disabled = false;
                        button.innerHTML = originalText;
                      }, 2000);
                      
                    } catch (error) {
                      console.error('Failed to download CV:', error);
                      
                      // Show error state
                      button.innerHTML = '<div class="flex items-center justify-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>Failed</div>';
                      
                      setTimeout(() => {
                        button.disabled = false;
                        button.innerHTML = originalText;
                      }, 3000);
                      
                      // Show user-friendly error message
                      alert('Sorry, there was an issue downloading the CV. Please try again or contact me directly at labitayoub@gmail.com');
                    }
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="relative border-green-500/60 text-green-300 hover:text-white hover:bg-green-500/80 w-full sm:w-auto overflow-hidden group"
                  onClick={() => window.open("mailto:labitayoub@gmail.com", "_blank")}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0" />
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex space-x-4 sm:space-x-6 pt-4 justify-center lg:justify-start">
                {[
                  { Icon: Github, url: "https://github.com/labitayoub" },
                  { Icon: Linkedin, url: "https://www.linkedin.com/in/ayoub-labit/" },
                  { Icon: Mail, url: "mailto:labitayoub@gmail.com" },
                  { Icon: Phone, url: "tel:+212639383709" },
                ].map(({ Icon, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-end order-first lg:order-last">
              <FloatingElement delay={0.2} duration={4} yOffset={10}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] rounded-full p-[3px] relative bg-[conic-gradient(from_0deg,theme(colors.green.500),theme(colors.blue.500),theme(colors.violet.500),theme(colors.green.500))] animate-spin-slow overflow-hidden will-change-transform">
                    <div className="absolute inset-[3px] rounded-full bg-gray-900/90 backdrop-blur-xl overflow-hidden" />
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src="/ayoub_profile.jpg"
                        alt="Ayoub Labit"
                        width={384}
                        height={384}
                        className="w-full h-full rounded-full object-cover"
                        priority
                      />
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Code className="text-white" size={20} />
                  </motion.div>
                  
                  {/* Small decorative elements */}
                  <motion.div
                    className="absolute -left-4 sm:-left-8 top-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 sm:-bottom-4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 2,
                    }}
                  />
                  <motion.div
                    className="absolute -right-6 sm:-right-12 bottom-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </FloatingElement>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 lg:space-y-6 order-2 lg:order-1"
              >
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer student at YouCode and UM6P. I specialize in modern web
                  technologies including PHP, Laravel, JavaScript, React, and Node.js. I love turning complex problems
                  into simple, beautiful solutions.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, working on personal projects, or
                  contributing to the developer community. I'm always eager to learn and grow as a developer.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 lg:pt-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Experience</h4>
                    <p className="text-xl sm:text-2xl font-bold">2+ Years</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Projects</h4>
                    <p className="text-xl sm:text-2xl font-bold">15+ Completed</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <AnimatedCodeBlock className="w-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ColorShiftBackground className="rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
                My <span className="text-green-400">Skills</span>
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.96 }}
                    className="group relative card-base card-hover rounded-xl p-3 sm:p-4 lg:p-5 flex flex-col items-center text-center overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-2 sm:mb-3 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100" />
                      <Image src={skill.icon} alt={skill.name} width={48} height={48} className="w-full h-full object-contain relative z-10" />
                    </div>
                    <h3 className="font-semibold text-[11px] sm:text-xs lg:text-sm tracking-wide relative z-10 text-gray-200 group-hover:text-green-300 transition-colors">{skill.name}</h3>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-green-500/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </ColorShiftBackground>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
              Featured <span className="text-green-400">Projects</span>
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {projects.map((project, index) => (
                <FloatingElement key={project.title} delay={index * 0.2} duration={5} yOffset={8} xOffset={4}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -12 }}
                    className="group relative rounded-2xl overflow-hidden card-base card-hover h-full flex flex-col border-gradient"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        unoptimized
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/80 opacity-60" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 sm:gap-3">
                        <Button size="sm" variant="outline" className="relative text-xs sm:text-sm overflow-hidden">
                          <span className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="btn-gradient-primary text-xs sm:text-sm shadow">
                          <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Live
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 tracking-tight text-white/90 group-hover:text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm sm:text-base flex-1 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-green-500/15 text-green-300 border border-green-500/20 text-[10px] sm:text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-32 bg-green-500/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity" />
                    </div>
                  </motion.div>
                </FloatingElement>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
              Work <span className="text-green-400">Experience</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-green-500"></div>
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative flex items-start mb-10 sm:mb-14"
                  >
                    <div className="hidden sm:block absolute left-4 lg:left-6 w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-4 border-gray-900 shadow" />
                    <div className="w-full sm:ml-12 lg:ml-16 card-base card-hover rounded-xl p-4 sm:p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
                      <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-1 sm:gap-2 relative z-10">
                        <Calendar className="text-green-400 hidden sm:block" size={16} />
                        <span className="text-green-300 text-xs font-semibold tracking-wide uppercase">{exp.period}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 relative z-10 text-white/90">{exp.title}</h3>
                      <p className="text-green-400 mb-2 sm:mb-3 text-xs sm:text-sm font-medium relative z-10">{exp.company}</p>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">{exp.description}</p>
                      <div className="absolute -bottom-6 right-1/4 w-32 h-24 bg-blue-500/20 blur-2xl opacity-0 hover:opacity-40 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center relative"
          >
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-6 sm:-top-10 left-1/4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/10"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute top-12 sm:top-20 right-1/4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500/10"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              Get In <span className="text-green-400">Touch</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4">
              I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
              together!
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden group w-full sm:w-auto"
                onClick={() => window.open("mailto:labitayoub@gmail.com", "_blank")}
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "mirror", 
                    duration: 1.5, 
                    ease: "easeInOut"
                  }}
                />
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© 2025 Ayoub Labit. Built with Next.js and Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}
