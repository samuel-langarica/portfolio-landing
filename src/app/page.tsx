'use client';

import { useState, useEffect } from 'react';
import { 
  SiFlutter, 
  SiTypescript, 
  SiJavascript, 
  SiPostgresql, 
  SiSupabase, 
  SiPython, 
  SiGit, 
  SiDocker, 
  SiStripe, 
  SiNextdotjs,
  SiUnity
} from 'react-icons/si';


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
    { name: 'Work Experience', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">SL</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#resume"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#resume"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Samuel Langarica</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                Full-Stack Developer focused on SaaS and Fintech
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                I build scalable applications that solve real-world problems, specializing in modern web technologies and mobile development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle decorative elements */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">SL</div>
                      <div className="text-sm text-gray-500">Samuel Langarica</div>
                    </div>
                  </div>
                </div>
                {/* Subtle floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Technology Icons Section
function TechnologyIconsSection() {
  const technologies = [
    { name: "Flutter", icon: SiFlutter, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", icon: SiTypescript, color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-yellow-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "from-indigo-400 to-indigo-600" },
    { name: "Supabase", icon: SiSupabase, color: "from-green-400 to-green-600" },
    { name: "Python", icon: SiPython, color: "from-blue-400 to-blue-600" },
    { name: "Git", icon: SiGit, color: "from-orange-400 to-orange-600" },
    { name: "Docker", icon: SiDocker, color: "from-blue-400 to-indigo-600" },
    { name: "Stripe", icon: SiStripe, color: "from-purple-400 to-purple-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-600 to-gray-800" },
    { name: "Java", icon: "Java", color: "from-red-400 to-red-600", isText: true },
    { name: "Unity", icon: SiUnity, color: "from-gray-500 to-gray-700" },
    { name: "C#", icon: "C#", color: "from-purple-500 to-purple-700", isText: true }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Technologies I Work With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated selection of the tools and technologies I use to build modern applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`
                  w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} 
                  flex items-center justify-center shadow-lg hover:shadow-xl 
                  transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                  group-hover:rotate-3
                `}>
                  {tech.isText ? (
                    <span className="text-xl font-bold text-white">{tech.icon}</span>
                  ) : (
                    <IconComponent className="text-3xl text-white" />
                  )}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
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
      logo: "RT"
    },
    {
      id: 2,
      company: "Barbania",
      role: "Founder & Lead Developer",
      period: "2022 - Present",
      description: "Founded and developed a comprehensive e-commerce platform using Flutter and Supabase. Managed full product lifecycle from concept to deployment.",
      logo: "BA"
    },
    {
      id: 3,
      company: "Freelance Developer",
      role: "Full-Stack Developer",
      period: "2021 - 2023",
      description: "Delivered custom web applications and mobile solutions for various clients. Specialized in React, Flutter, and modern backend technologies.",
      logo: "FD"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and entrepreneurship.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">{experience.logo}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>
                  <span className="text-sm text-gray-500 font-medium">{experience.period}</span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-2">{experience.company}</h4>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            </div>
          ))}
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
      tags: ["Flutter", "Supabase", "Stripe", "Dart"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      name: "FinTech Dashboard",
      description: "Real-time financial analytics dashboard with interactive charts, user management, and automated reporting capabilities.",
      tags: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      name: "WhatsApp Business API Integration",
      description: "Custom CRM system with WhatsApp Business API integration for automated customer communication and lead management.",
      tags: ["Node.js", "WhatsApp API", "MongoDB", "Docker"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      name: "SaaS Analytics Platform",
      description: "Multi-tenant SaaS platform for business analytics with role-based access control and automated data processing.",
      tags: ["Next.js", "Supabase", "Stripe", "GitHub Actions"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-50 transition-colors"
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

// Volunteer Experience Section
function VolunteerSection() {
  const volunteerWork = [
    {
      id: 1,
      location: "Split, Croatia",
      period: "August 2022",
      duration: "4 weeks",
      description: "Marine conservation program focused on protecting marine ecosystems and biodiversity.",
      logo: "🌊"
    },
    {
      id: 2,
      location: "Sarrebourg, France",
      period: "2022",
      duration: "3 weeks",
      description: "Local organic farm work with French-only communication. Collaborated with other volunteers in community work for food and homestay modality.",
      logo: "🌾"
    },
    {
      id: 3,
      location: "Alaska",
      period: "2022",
      duration: "2 weeks",
      description: "Stay with local family farm caring for animals and plants, and taking care of children.",
      logo: "🏔️"
    },
    {
      id: 4,
      location: "Portugal",
      period: "2022",
      duration: "3 weeks",
      description: "Aiding in the care of sheep - 41 sheep and 20 babies. Walked them every day for 3 hours independently.",
      logo: "🐑"
    },
    {
      id: 5,
      location: "Belgium",
      period: "2022",
      duration: "2 weeks",
      description: "Permaculture farm work focusing on sustainable agriculture practices.",
      logo: "🌱"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Volunteer Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Giving back to the community through mentorship and knowledge sharing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((volunteer) => (
            <div key={volunteer.id} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-green-600 flex items-center justify-center">
                    <span className="text-2xl">{volunteer.logo}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{volunteer.location}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">{volunteer.period}</span>
                    <span className="text-sm text-green-600 font-medium">• {volunteer.duration}</span>
                  </div>
                  <p className="text-gray-600">{volunteer.description}</p>
                </div>
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600">
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
              <h3 className="text-xl font-semibold text-gray-900">Key Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">2022 - Founded Barbania</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">2023 - Joined Roii Tech as Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">2024 - Launched multiple SaaS products</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">SL</div>
                      <div className="text-sm text-gray-500">Samuel Langarica</div>
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and skills I use to build modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
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

// Hobbies Section
function HobbiesSection() {
  const hobbies = [
    { name: "Music", icon: "🎵", description: "Playing guitar and exploring different genres" },
    { name: "Urban Cycling", icon: "🚴", description: "Exploring cities on two wheels" },
    { name: "Photography", icon: "📸", description: "Capturing moments and urban landscapes" },
    { name: "Reading", icon: "📚", description: "Tech books, biographies, and sci-fi novels" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When I'm not coding, you can find me pursuing these interests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-white rounded-xl p-6 text-center hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{hobby.name}</h3>
              <p className="text-sm text-gray-600">{hobby.description}</p>
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Send me a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">samuel@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">💬</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Telegram</p>
                  <p className="text-gray-600">@samuellangarica</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">📅</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Schedule a Call</p>
                  <a href="#" className="text-blue-600 hover:underline">Book on Calendly</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Let's work together</h4>
              <p className="text-gray-600 text-sm">
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
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Download My Resume
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4">Samuel Langarica</div>
          <p className="text-gray-600 mb-6">
            Full-Stack Developer focused on SaaS and Fintech
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Samuel Langarica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TechnologyIconsSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <VolunteerSection />
      <AboutSection />
      <SkillsSection />
      <HobbiesSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}
