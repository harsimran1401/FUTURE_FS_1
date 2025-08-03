import { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'MySQL', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'AI/ML', level: 65 },
    { name: 'UI/UX Design', level: 80 }
  ];

  const experiences = [
    {
      title: 'Full Stack Web Development Intern',
      company: 'Future Interns',
      period: 'July 2025 - Present',
      duration: '2 months',
      description: 'Working on full-stack web development projects, gaining hands-on experience with modern web technologies.'
    },
    {
      title: 'Web Developer',
      company: 'Google Developer Groups on Campus - GTBIT',
      period: 'November 2024 - Present',
      duration: '10 months',
      description: 'Contributing to web development projects and participating in technical community initiatives.'
    },
    {
      title: 'Student Prefect',
      company: 'Mother Mary\'s School',
      period: 'April 2023 - March 2024',
      duration: '1 year',
      description: 'Maintained decorum, organized school events, and led the student management team.'
    }
  ];

  const certifications = [
    'Certificate of Participation in Her Cover Story: Voice Through Visuals during WIE WEEK 2025',
    'Battle of Codes Participation Certificate',
    'Certificate of Participation in AlgoVerse Hackathon',
    'Certificate of Participation at the Science Fest - Tarang\'25'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-800">HK</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Education', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Experience', 'Education', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              HK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Harsimran Kaur
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Web Developer & AI/ML Enthusiast
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              B.Tech Student specializing in Computer Science with AI/ML at GTBIT. 
              Passionate about building innovative tech solutions and leading impactful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get In Touch
              </button>
              <a
                href="https://harsimrankaur1401.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium inline-flex items-center gap-2"
              >
                View Portfolio <ExternalLink size={18} />
              </a>
            </div>
          </div>
          <div className="animate-bounce mt-16">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Tech Innovator</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a 2nd-year B.Tech student in Computer Science with a specialization in Artificial Intelligence 
                and Machine Learning at GTBIT, affiliated with GGSIPU. My journey in technology is driven by 
                curiosity and a constant desire to learn and innovate.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With hands-on experience in web development, I've built several projects showcasing my abilities 
                in both front-end and back-end technologies. I'm also skilled in Python programming and MySQL 
                databases, providing me with a solid foundation in development and data handling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond technical skills, I bring strong leadership qualities, team management capabilities, 
                and a creative mindset with expertise in graphic design and UI/UX. I enjoy collaborating on 
                innovative projects and am always eager to contribute to impactful tech solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Code className="text-blue-600 mb-4" size={40} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h4>
                <p className="text-gray-600 text-sm">Full-stack development with modern frameworks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Briefcase className="text-teal-600 mb-4" size={40} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Leadership</h4>
                <p className="text-gray-600 text-sm">Team management and project coordination</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Award className="text-purple-600 mb-4" size={40} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI/ML</h4>
                <p className="text-gray-600 text-sm">Artificial Intelligence and Machine Learning</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <GraduationCap className="text-green-600 mb-4" size={40} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-gray-600 text-sm">Always expanding knowledge and skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Bachelor of Technology - Computer Science with AI & ML
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-2">
                    Guru Tegh Bahadur Institute Of Technology (GTBIT)
                  </p>
                  <p className="text-gray-600 mb-4">Affiliated with GGSIPU • August 2024 - July 2028</p>
                  <p className="text-gray-700">
                    Specializing in Artificial Intelligence and Machine Learning with a focus on 
                    practical applications and innovative tech solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <GraduationCap className="text-teal-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Senior Secondary Education
                  </h3>
                  <p className="text-lg text-teal-600 font-medium mb-2">
                    Mother Mary's School
                  </p>
                  <p className="text-gray-600 mb-4">PCM with Computer Science • April 2020 - March 2024</p>
                  <p className="text-gray-700">
                    Strong foundation in Physics, Chemistry, Mathematics, and Computer Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-yellow-600" size={24} />
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
            <p className="text-gray-300 mt-6 text-lg">
              Let's connect and discuss opportunities in web development and AI/ML
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:kaurharsimran8372@gmail.com"
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kaurharsimran8372@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/harsimrankaur-00a77b335"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-300">Connect with me</p>
              </div>
            </a>

            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300">Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400">
              © 2025 Harsimran Kaur. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;