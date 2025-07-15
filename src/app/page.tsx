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

// Terminal Typing Animation Component
function TerminalTyping({ text, speed = 100, className = "" }: { text: string; speed?: number; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-[var(--accent-gold)]">$ </span>
      <span>{displayText}</span>
      <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        ▋
      </span>
    </div>
  );
}

// Floating Chess Pieces Component
function FloatingChessPieces() {
  return (
    <>
      <div className="floating-chess left" style={{ top: '20%' }}>♔</div>
      <div className="floating-chess right" style={{ top: '30%' }}>♞</div>
      <div className="floating-chess left" style={{ top: '50%' }}>♜</div>
      <div className="floating-chess right" style={{ top: '60%' }}>♝</div>
      <div className="floating-chess left" style={{ top: '80%' }}>♙</div>
      <div className="floating-chess right" style={{ top: '90%' }}>♟</div>
    </>
  );
}

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="chess-accent">♞</span>
            <span className="text-xl font-bold text-[var(--text-primary)] font-mono tracking-tight">Samuel Langarica</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#resume"
                className="btn-primary text-sm !text-black"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] p-2"
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
          <div className="md:hidden bg-[var(--chess-medium)]/95 backdrop-blur-md border-t border-[var(--chess-lighter)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#resume"
                className="btn-primary block text-base !text-black"
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
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Terminal-style greeting */}
              <div className="mb-8">
                <TerminalTyping 
                  text="Hi, I'm Samuel Langarica"
                  speed={80}
                  className="text-2xl text-[var(--accent-gold)] mb-4"
                />
                <TerminalTyping 
                  text="whoami"
                  speed={100}
                  className="text-lg text-[var(--text-secondary)] mb-2"
                />
                <TerminalTyping 
                  text="Software Developer"
                  speed={80}
                  className="text-xl text-[var(--text-primary)] font-mono font-medium flex items-center gap-2"
                />
              </div>
              
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
                I build scalable applications that solve real-world problems, specializing in modern web technologies and mobile development.
              </p>
              
              {/* Code block accent */}
              <div className="code-block max-w-md">
                <span className="text-[var(--accent-gold)]">const</span> <span className="text-[var(--text-primary)]">developer</span> = {'{'}
                <br />
                {'  '}<span className="text-[var(--accent-gold)]">skills:</span> [<span className="text-[var(--accent-gold)]">'Flutter 🦋'</span>, <span className="text-[var(--accent-gold)]">'PostgreSQL 🐘'</span>, <span className="text-[var(--accent-gold)]">'Python 🐍'</span>],
                <br />
                {'  '}<span className="text-[var(--accent-gold)]">hobbies:</span> [<span className="text-[var(--accent-gold)]">'Strategic board domination ♟️'</span>, <span className="text-[var(--accent-gold)]">'Sim racing at 200fps 🏎️'</span>],
                <br />
                {'  '}<span className="text-[var(--accent-gold)]">motto:</span> <span className="text-[var(--accent-gold)]">'Turning coffee into code ☕️ {'=>'} 💻'</span>
                <br />{'}'};
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="btn-primary text-center flex items-center gap-2"
              >
                <span>♜</span> View My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary text-center flex items-center gap-2"
              >
                <span>♙</span> Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="text-[18rem] text-[var(--accent-main)] opacity-30 animate-chess-dynamic">
                ♔
              </div>
              <style jsx>{`
                @keyframes chessDynamic {
                  0% { transform: scale(1) rotate(-5deg) translateY(0); }
                  20% { transform: scale(1.05) rotate(2deg) translateY(-10px); }
                  40% { transform: scale(1.1) rotate(-3deg) translateY(10px); }
                  60% { transform: scale(1.08) rotate(3deg) translateY(-5px); }
                  80% { transform: scale(1.04) rotate(-2deg) translateY(5px); }
                  100% { transform: scale(1) rotate(-5deg) translateY(0); }
                }
                .animate-chess-dynamic {
                  animation: chessDynamic 6s ease-in-out infinite;
                  display: inline-block;
                }
              `}</style>
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 font-mono flex items-center gap-2 justify-center">
            <span className="chess-accent">♞</span> Technologies I Work With <span className="speed-line" />
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
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
                  group-hover:rotate-3 border border-[var(--chess-lighter)]
                `}>
                  {tech.isText ? (
                    <span className="text-xl font-bold text-white font-mono">{tech.icon}</span>
                  ) : (
                    <IconComponent className="text-3xl text-white" />
                  )}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[var(--chess-dark)] text-[var(--text-primary)] text-xs px-2 py-1 rounded whitespace-nowrap border border-[var(--chess-lighter)]">
                    {tech.name}
                  </div>
                  <div className="w-2 h-2 bg-[var(--chess-dark)] transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2 border-l border-t border-[var(--chess-lighter)]"></div>
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
    <section id="work" className="py-20 bg-[var(--chess-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 font-mono flex items-center gap-2 justify-center">
            <span className="chess-accent">♞</span> Work Experience <span className="speed-line" />
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            My professional journey in software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex gap-6 p-6 bg-[var(--chess-lighter)] rounded-xl hover:bg-[var(--chess-light)] transition-colors border border-[var(--chess-lighter)]">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-[var(--accent-blue)] flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">{experience.logo}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{experience.role}</h3>
                  <span className="text-sm text-[var(--text-secondary)] font-medium">{experience.period}</span>
                </div>
                <h4 className="text-lg font-medium text-[var(--accent-blue)] mb-2">{experience.company}</h4>
                <ul className="list-disc pl-5 space-y-1 text-[var(--text-secondary)]">
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
      location: "Portugal",
      period: "2022",
      duration: "3 weeks",
      description: "Aiding in the care of sheep - 41 sheep and 20 babies. Walked them every day for 3 hours independently.",
      logo: "🐑"
    },
    {
      id: 4,
      organization: "L'école Du Bout Du Monde",
      location: "Arlon, Belgium",
      period: "June 2023",
      duration: "2 weeks",
      description: "Two week volunteering at a permaculture/agroecology and nut polyculture farm. Training center and support for local transition initiatives and pioneering post-carbon projects.",
      logo: "🌱"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-[var(--chess-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 font-mono flex items-center gap-2 justify-center">
            <span className="chess-accent">♞</span> Volunteer Experience <span className="speed-line" />
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Giving back to the community through volunteering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((volunteer) => (
            <div key={volunteer.id} className="bg-[var(--chess-lighter)] rounded-xl p-6 hover:bg-[var(--chess-light)] transition-colors border border-[var(--chess-lighter)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-[var(--accent-green)] flex items-center justify-center">
                    <span className="text-2xl">{volunteer.logo}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                    {volunteer.organization ? volunteer.organization : volunteer.location}
                  </h3>
                  {volunteer.organization && (
                    <h4 className="text-lg font-medium text-[var(--accent-green)] mb-1">{volunteer.location}</h4>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-[var(--text-secondary)]">{volunteer.period}</span>
                    <span className="text-sm text-[var(--accent-green)] font-medium">• {volunteer.duration}</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{volunteer.description}</p>
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
    
    <section id="about" className="py-20 bg-[var(--chess-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-mono flex items-center gap-2 justify-center">
              <span className="chess-accent">♞</span> About Me <span className="speed-line" />
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
              I'm Samuel, a developer who really enjoys building things that feel useful and well-made. I care about clean, reliable tools — whether that's a mobile app, a backend service, or just a script that saves someone time. I'm always trying to improve not just what I build, but how I think through problems and work with others.
              </p>
              <p>
              Lately, I've been working on Barbania, a booking app for small businesses — it's still in progress, but it's been a great way to explore product design, infrastructure, and how to make something simple but helpful. It's also reminded me how much I enjoy long-term projects that grow over time.
              </p>
              <p>
              In the past, I've worked at startups where I helped build real products for real users — mobile apps, backend systems, internal tools. I've learned a lot about collaboration, making decisions with care, and staying flexible when things change (which they always do).
              </p>
              <p>
              What I'm looking for now is a team where I can keep learning, contribute meaningfully, and build good software with good people. I'm not looking for a perfect fit — just a place where I can do honest work and grow alongside others who care about what they do.
              </p>
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
    <section className="py-20 bg-[var(--chess-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 font-mono flex items-center gap-2 justify-center">
            <span className="chess-accent">♞</span> Hobbies & Interests <span className="speed-line" />
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            When I'm not coding, you can find me pursuing these interests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-[var(--chess-lighter)] rounded-xl p-6 text-center hover:bg-[var(--chess-light)] transition-colors border border-[var(--chess-lighter)] shadow-sm"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{hobby.name}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{hobby.description}</p>
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
    <section id="contact" className="py-20 bg-[var(--chess-dark)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 font-mono flex items-center gap-2 justify-center">
            <span className="chess-accent">♞</span> Get In Touch <span className="speed-line" />
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--chess-lighter)] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">Email</p>
                  <p className="text-[var(--text-secondary)]">samuel.langarica.m@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--chess-lighter)] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">Phone</p>
                  <p className="text-[var(--text-secondary)]">+52 33 1487 36 11</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--chess-lighter)] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">WhatsApp</p>
                  <a href="https://wa.me/523314873611" className="text-[#25D366] hover:underline">+52 33 1487 36 11</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--chess-lighter)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-3">Let's work together</h4>
              <p className="text-[var(--text-secondary)] text-sm">
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
    <section id="resume" className="py-20 bg-[var(--chess-dark)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[var(--chess-lighter)] to-[var(--chess-medium)] rounded-2xl p-12 border border-[var(--chess-lighter)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 font-mono flex items-center gap-2 justify-center">
            <span className="chess-accent">♞</span> Download My Resume <span className="speed-line" />
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
          </p>
          <a
            href="/CV.pdf"
            download="Samuel_Langarica_CV.pdf"
            className="inline-flex items-center gap-3 bg-[var(--accent-main)] text-[var(--chess-dark)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--accent-gold)] transition-colors"
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
    <footer className="bg-[var(--chess-dark)] py-12 border-t border-[var(--chess-lighter)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text-primary)] mb-4">Samuel Langarica</div>
          <p className="text-[var(--text-secondary)] mb-6">
            Software Developer
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/samuel-langarica" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samuel-langarica/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            © 2024 Samuel Langarica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--chess-dark)]">
      <FloatingChessPieces />
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
