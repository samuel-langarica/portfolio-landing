'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Navigation component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Work Experience', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-foreground">SL</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#resume"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-foreground/80 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#resume"
                className="bg-primary text-primary-foreground block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Samuel Langarica</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Full-Stack Developer focused on SaaS and Fintech
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I build scalable applications that solve real-world problems, specializing in modern web technologies and mobile development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary">SL</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Barbania - E-commerce Platform",
      description: "A comprehensive e-commerce solution built with Flutter and Supabase, featuring real-time inventory management and Stripe payment integration.",
      image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Barbania",
      tags: ["Flutter", "Supabase", "Stripe", "Dart"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      name: "FinTech Dashboard",
      description: "Real-time financial analytics dashboard with interactive charts, user management, and automated reporting capabilities.",
      image: "https://via.placeholder.com/600x400/10b981/ffffff?text=FinTech+Dashboard",
      tags: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      name: "WhatsApp Business API Integration",
      description: "Custom CRM system with WhatsApp Business API integration for automated customer communication and lead management.",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=WhatsApp+CRM",
      tags: ["Node.js", "WhatsApp API", "MongoDB", "Docker"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      name: "SaaS Analytics Platform",
      description: "Multi-tenant SaaS platform for business analytics with role-based access control and automated data processing.",
      image: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=SaaS+Analytics",
      tags: ["Next.js", "Supabase", "Stripe", "GitHub Actions"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 border border-border text-foreground py-2 px-4 rounded-lg text-center font-medium hover:bg-secondary transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Work Experience Section
function WorkExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "Roii Tech",
      role: "Full-Stack Developer",
      period: "2023 - Present",
      description: "Leading development of SaaS applications and fintech solutions. Implemented WhatsApp Business API integration and built scalable backend systems with PostgreSQL and Drizzle ORM.",
      logo: "https://via.placeholder.com/60x60/3b82f6/ffffff?text=RT"
    },
    {
      id: 2,
      company: "Barbania",
      role: "Founder & Lead Developer",
      period: "2022 - Present",
      description: "Founded and developed a comprehensive e-commerce platform using Flutter and Supabase. Managed full product lifecycle from concept to deployment.",
      logo: "https://via.placeholder.com/60x60/10b981/ffffff?text=BA"
    },
    {
      id: 3,
      company: "Freelance Developer",
      role: "Full-Stack Developer",
      period: "2021 - 2023",
      description: "Delivered custom web applications and mobile solutions for various clients. Specialized in React, Flutter, and modern backend technologies.",
      logo: "https://via.placeholder.com/60x60/8b5cf6/ffffff?text=FD"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and entrepreneurship.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex gap-6 p-6 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center shadow-sm">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{experience.period}</span>
                </div>
                <h4 className="text-lg font-medium text-primary mb-2">{experience.company}</h4>
                <p className="text-muted-foreground">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with a focus on building scalable SaaS applications and fintech solutions. My journey in software development began with a curiosity for creating digital solutions that solve real-world problems.
              </p>
              <p>
                As the founder of Barbania, I've experienced firsthand the challenges and rewards of building a product from the ground up. This entrepreneurial experience has given me valuable insights into product development, user experience, and business requirements.
              </p>
              <p>
                I believe in writing clean, maintainable code and collaborating effectively with teams. My bilingual background (Spanish-English) allows me to communicate effectively in diverse environments and work with international teams.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">2022 - Founded Barbania</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">2023 - Joined Roii Tech as Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">2024 - Launched multiple SaaS products</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-2xl bg-background border-4 border-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">SL</div>
                      <div className="text-sm text-muted-foreground">Samuel Langarica</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "Flutter", icon: "📱" },
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "UI/UX Design", icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Supabase", icon: "🔥" },
        { name: "Drizzle ORM", icon: "🌿" },
        { name: "Node.js", icon: "🟢" }
      ]
    },
    {
      category: "APIs & DevOps",
      skills: [
        { name: "Stripe API", icon: "💳" },
        { name: "WhatsApp Business API", icon: "💬" },
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "⚡" }
      ]
    },
    {
      category: "Other",
      skills: [
        { name: "Spanish-English Communication", icon: "🌍" },
        { name: "Visual Identity", icon: "🎯" },
        { name: "Product Management", icon: "📊" },
        { name: "Agile Development", icon: "🔄" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and skills I use to build modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Volunteer Experience Section
function VolunteerSection() {
  const volunteerWork = [
    {
      id: 1,
      organization: "Tech for Good Initiative",
      role: "Mentor & Code Reviewer",
      period: "2023 - Present",
      description: "Mentoring junior developers and reviewing code for open-source projects focused on social impact.",
      logo: "https://via.placeholder.com/60x60/10b981/ffffff?text=TFG"
    },
    {
      id: 2,
      organization: "Local Developer Community",
      role: "Workshop Facilitator",
      period: "2022 - 2023",
      description: "Organized and facilitated workshops on modern web development and mobile app development.",
      logo: "https://via.placeholder.com/60x60/8b5cf6/ffffff?text=LDC"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Volunteer Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giving back to the community through mentorship and knowledge sharing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((volunteer) => (
            <div key={volunteer.id} className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center">
                    <Image
                      src={volunteer.logo}
                      alt={volunteer.organization}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{volunteer.role}</h3>
                  <h4 className="text-lg font-medium text-primary mb-2">{volunteer.organization}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{volunteer.period}</p>
                  <p className="text-muted-foreground">{volunteer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hobbies Section
function HobbiesSection() {
  const hobbies = [
    { name: "Music", icon: "🎵", description: "Playing guitar and exploring different genres" },
    { name: "Urban Cycling", icon: "🚴", description: "Exploring cities on two wheels" },
    { name: "Photography", icon: "📸", description: "Capturing moments and urban landscapes" },
    { name: "Reading", icon: "📚", description: "Tech books, biographies, and sci-fi novels" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When I'm not coding, you can find me pursuing these interests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-secondary/20 rounded-xl p-6 text-center hover:bg-secondary/30 transition-colors"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{hobby.name}</h3>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Send me a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">📧</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">samuel@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">💬</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Telegram</p>
                  <p className="text-muted-foreground">@samuellangarica</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Schedule a Call</p>
                  <a href="#" className="text-primary hover:underline">Book on Calendly</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">Let's work together</h4>
              <p className="text-muted-foreground text-sm">
                I'm available for freelance projects, full-time positions, and interesting collaborations. 
                Feel free to reach out if you'd like to discuss potential opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Resume Download Section
function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Download My Resume
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <span>📄</span>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-secondary/20 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-4">Samuel Langarica</div>
          <p className="text-muted-foreground mb-6">
            Full-Stack Developer focused on SaaS and Fintech
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Samuel Langarica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <AboutSection />
      <SkillsSection />
      <VolunteerSection />
      <HobbiesSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}
