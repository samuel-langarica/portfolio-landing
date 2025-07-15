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
                Software Developer
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
      company: "Zell Enterprise",
      role: "Software Developer",
      period: "Feb 2025 – Present",
      description: [
        "Financial technology company building AI-driven tools to optimize portfolio management and enhance customer support.",
        "Designed and developed a cross-platform mobile app using Flutter (iOS and Android), covering UI/UX, business logic, and API integration.",
        "Co-developed an internal AI assistant using Python and FastAPI with a Retrieval-Augmented Generation (RAG) pipeline, helping employees resolve customer queries more efficiently via internal tools and APIs.",
        "Designed and implemented a backend service for deploying finance-specific AI agents, each equipped with domain tools to automate expert-level guidance for end users."
      ],
      logo: "ZE"
    },
    {
      id: 2,
      company: "Roii Tech",
      role: "Full Stack Developer",
      period: "Jan 2024 – Feb 2025",
      description: [
        "Developed B2B solutions to automate internal processes and empower clients with efficient tools.",
        "Built and maintained client platforms and internal automation tools using Flutter, with a focus on usability for non-technical users.",
        "Developed backend services using PostgreSQL and Drizzle ORM, enabling type-safe data access and robust performance.",
        "Contributed to API design and business logic implementation, collaborating on scalable and secure database schemas.",
        "Participated in technical interviews and candidate evaluations, helping to uphold engineering quality standards."
      ],
      logo: "RT"
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
            My professional journey in software development.
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
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
      organization: "Marine Conservation Program",
      location: "Split, Croatia",
      period: "2022",
      duration: "4 weeks",
      description: "Four week program for the restoration and maintenance of the natural state of the marine ecosystem along the Croatian coast for SSI open water divers.",
      logo: "🌊"
    },
    {
      id: 2,
      organization: "Le Champ du Ver Luisant",
      location: "Sarrebourg, France",
      period: "October - September 2021",
      duration: "5 weeks",
      description: "Educational exchange of ecological farming practices in a five week volunteering stay in support of a local organic farm.",
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
      organization: "L'école Du Bout Du Monde",
      location: "Arlon, Belgium",
      period: "June 2023",
      duration: "2 weeks",
      description: "Two week volunteering at a permaculture/agroecology and nut polyculture farm. Training center and support for local transition initiatives and pioneering post-carbon projects.",
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
            Giving back to the community through volunteering.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {volunteer.organization ? volunteer.organization : volunteer.location}
                  </h3>
                  {volunteer.organization && (
                    <h4 className="text-lg font-medium text-green-600 mb-1">{volunteer.location}</h4>
                  )}
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
              I’m Samuel, a developer who really enjoys building things that feel useful and well-made. I care about clean, reliable tools — whether that’s a mobile app, a backend service, or just a script that saves someone time. I’m always trying to improve not just what I build, but how I think through problems and work with others.
              </p>
              <p>
              Lately, I’ve been working on Barbania, a booking app for small businesses — it’s still in progress, but it’s been a great way to explore product design, infrastructure, and how to make something simple but helpful. It’s also reminded me how much I enjoy long-term projects that grow over time.
              </p>
              <p>
              In the past, I’ve worked at startups where I helped build real products for real users — mobile apps, backend systems, internal tools. I’ve learned a lot about collaboration, making decisions with care, and staying flexible when things change (which they always do).
              </p>
              <p>
              What I’m looking for now is a team where I can keep learning, contribute meaningfully, and build good software with good people. I’m not looking for a perfect fit — just a place where I can do honest work and grow alongside others who care about what they do.
              </p>
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

// Hobbies Section
function HobbiesSection() {
  const hobbies = [
    { name: "iRacing (Sim Racing)", icon: "🏎️", description: "Competitive sim racing and virtual motorsports" },
    { name: "Chess", icon: "♟️", description: "Strategic thinking and competitive play" },
    { name: "Outdoor Running", icon: "🏃", description: "Staying active and exploring new routes" },
    { name: "Science Fiction", icon: "🚀", description: "Reading and exploring futuristic worlds and concepts" }
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

        <div className="max-w-2xl mx-auto">
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
                  <p className="text-gray-600">samuel.langarica.m@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">📞</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+52 33 1487 36 11</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">💬</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <a href="https://wa.me/523314873611" className="text-blue-600 hover:underline">+52 33 1487 36 11</a>
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
            href="/CV.pdf"
            download="Samuel_Langarica_CV.pdf"
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
            Software Developer
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/samuel-langarica" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samuel-langarica/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              LinkedIn
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
      <VolunteerSection />
      <AboutSection />
      <HobbiesSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}
