// Updated content extracted from Nirav Rohra’s resume :contentReference[oaicite:0]{index=0}
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatAI from "@/components/ChatAI"
import {
  Brain,
  Code,
  Database,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import { Spotlight } from "@/components/spotlight"
import { ThemeToggle } from "@/components/theme-toggle"
import { SpotlightCard } from "@/components/spotlight-card"

export default function Portfolio() {
  /* ——————————————————— SKILLS ——————————————————— */
  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Spark MLlib",
    "Hugging Face",
    "Java (OOP)",
    "C++",
    "SQL & Presto",
    "AWS",
    "Docker / CI-CD",
    "Cybersecurity",
    "Applied Statistics",
    "MLOps",
    "Graphic Design",
  ]

  /* ——————————————————— PROJECTS ——————————————————— */
  const projects = [
    {
      title: "AstroParticle Classifier",
      description:
        "Open-sourced notebook that identifies gamma vs hadron particles on UCI MAGIC data using KNN, Naïve Bayes, SVM, logistic regression, and deep neural networks.",
      technologies: ["Python","Java", "TensorFlow", "Scikit-learn", "Pandas"],
      link: "https://github.com/niravrohra/Medical-ML/blob/main/MAGIC.ipynb",
    },
    {
      title: "Tranquil Flow ",
      description:
        "Yoga platform that leverages CNNs to flag potential posture-related injuries, clusters users with K-means, and recommends sessions via collaborative filtering.",
      technologies: ["Next.js", "TensorFlow", "K-means", "Firebase"],
      link: "https://www.tranquilflow.org",
    },
    {
      title: "AIAA UTD",
      description:
        "Overhauled the Aerospace organization’s site, integrating dynamic event feeds, resource libraries, and real - time member analytics; scaled to 300+ active members.",
      technologies: ["Next.js", "Tailwind", "Firebase", "Chart.js"],
      link: "https://aiaautd.org",
    },
    {
      title: "FTTH24x7",
      description:
        "Built a high availability telecom portal with self service onboarding, SLA tracking, and GIS based fiber - fault visualization; boosted client acquisition by 18 %.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      link: "https://ftth24x7.com",
    },
    {
      title: "DeepFake Audio Detector",
      description:
        "ResNet-based model that distinguishes synthetic voices from real speech with 96.8 % accuracy, fortifying media integrity pipelines.",
      technologies: ["Python", "PyTorch", "ResNet", "NumPy"],
      
    },
    {
      title: "Pen-Testing",
      description:
        "Performed a full-scope penetration test of the admin portal, reported critical vulns to the founder, and boosted platform security posture.",
      technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "Kali Linux"],
      
    },
  ]

  /* ——————————————————— EXPERIENCE ——————————————————— */
  const experience = [
    {
      role: "Office of Information and Technology Labs Assistant",
      company: "The University of Texas at Dallas",
      period: "Aug 2024 – Present",
      description:
        "Resolve complex IT tickets for 30 000+ students & faculty, maintain 99.1 % uptime across labs, and harden systems against SSH & driver exploits.",
    },
    {
          role: "Cybersecurity and AI Undergraduate Researcher",
    company: "The University of Texas at Dallas",
    period: "Jan 2025 – Present",
    description:
      "Conduct cutting-edge research on state-sponsored malware using Python-based ETL pipelines, static code analysis, and machine learning. Led classification of 70,000+ behavior logs with a precision-tuned active learning model that outperformed SOTA by 9pp. Collaborated with Columbia and EU-based researchers to publish findings, reducing false positives by 17.8% and uncovering 18 high-priority threats across Russian, North Korean, and Turkish APTs.",

      
    },
    {
      role: "Web Designer & Deployment Consultant",
      company: "Contract (Various Clients)",
      period: "Nov 2019 – Present",
      description:
        "Designed data-driven sites (ftth24x7, AIAAUTD, HRCR LLP) using UX A/B testing, SEO, and secure DevOps workflows - lifting retention by 23.5 %.",
    },
    {
      role: "Software Engineer",
      company: "Royal Technosoft Pvt Ltd",
      period: "Nov 2019 – Jul 2021",
      description:
        "Taught 500+ freshmen C++ & Unity3D, created holographic Dino game for HoloLens, and scaled curriculum to 800+ global students during COVID.",
    },
    {
      role: "President, Community Council",
      company: "UT Dallas Residence Life",
      period: "Sep 2024 – Present",
      description:
        "Lead data-driven initiatives for residents, and oversee exec board to execute campus-wide programs.",
    },
    
  ]


  return (
    <>
      <Spotlight />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        {/* ——————————— HEADER ——————————— */}
        <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70 border-b dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">Nirav Rohra</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                {["about","ai", "skills", "projects", "experience","contact"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors capitalize"
                  >
                    {id}
                  </a>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

                {/* ——————————— AI EXPERTISE ——————————— */}
              <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">AI & Cybersecurity Focus</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                      Chat directly with my AI system trained on my work - ask anything about my projects, experience, or insights!
                    </p>
                  </div>

                  <ChatAI />
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-16">
                    {/* Your AI Project Cards */}
                  </div>
                </div>
              </section>  

        {/* ——————————— HERO ——————————— */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/Nirav.jpeg?height=200&width=200"
                alt="Nirav Rohra"
                className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-purple-200 dark:border-purple-800 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              AI Engineer &<span className="text-purple-600 dark:text-purple-400"> Cybersecurity Researcher</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Architecting intelligent systems, fortifying digital defenses, and translating cutting-edge research into
              real-world impact - one model and one exploit fix at a time.
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href="mailto:hello@honrly.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              asChild
            >
              <a href="/Nirav_Rohra_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>

          </div>
        </section>
                
          

        {/* ——————————— ABOUT ——————————— */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                I’m a builder at heart—equally at home training vision models, hardening servers, or crafting pixel-perfect
                interfaces that delight users.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  From teaching 500+ students C++ as a teen to safeguarding 30 000-user lab networks at UT Dallas, my path
                  has been fueled by relentless curiosity and a passion for sharing knowledge.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Today, I orchestrate ML pipelines, break (and then fix) enterprise security, and lead a council of
                  4 500 peers—always championing ethical, human-centric tech.
                </p>
                <div className="flex space-x-4">
                  {/* GitHub */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  >
                    <a
                      href="https://github.com/niravrohra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  {/* LinkedIn */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  >
                    <a
                      href="https://www.linkedin.com/in/nirav-rohra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>

              </div>
              <div className="grid grid-cols-2 gap-6">
                <SpotlightCard>
                  <CardHeader className="pb-3">
                    <Code className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" />
                    <CardTitle className="text-lg">500+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Production Projects</p>
                  </CardContent>
                </SpotlightCard>
                <SpotlightCard>
                  <CardHeader className="pb-3">
                    <Database className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                    <CardTitle className="text-lg">30 000+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Users Supported</p>
                  </CardContent>
                </SpotlightCard>
                <SpotlightCard>
                  <CardHeader className="pb-3">
                    <GitBranch className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-2" />
                    <CardTitle className="text-lg">23.5 %</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Boost in UX Retention</p>
                  </CardContent>
                </SpotlightCard>
                <SpotlightCard>
                  <CardHeader className="pb-3">
                    <Brain className="h-8 w-8 text-red-600 dark:text-red-400 mb-2" />
                    <CardTitle className="text-lg">5+ Years</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI & Security Experience</p>
                  </CardContent>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </section>

        {/* ——————————— SKILLS ——————————— */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Skills & Expertise</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A polyglot toolbox spanning model prototyping to production hardening.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* ——————————— PROJECTS ——————————— */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A snapshot of research-driven builds and red-team escapades.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <SpotlightCard key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ——————————— EXPERIENCE ——————————— */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Crafting solutions, teaching minds, leading communities.
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <SpotlightCard key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-purple-600 dark:text-purple-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                  </CardContent>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
              



        {/* ——————————— CONTACT ——————————— */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Have a daring idea or a gnarly breach to patch? - drop me a line.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5" />
                <span>hello@honrly.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5" />
                <span> Not Disclosed  </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Dallas, TX</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <a href="mailto:hello@honrly.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
            </div>

          </div>
        </section>

        {/* ——————————— FOOTER ——————————— */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">Nirav Rohra</span>
            </div>
            <p className="text-gray-400 mb-6">
              Engineering intelligence & resilience for tomorrow’s challenges.
            </p>
            <div className="flex justify-center space-x-6">
            <Button
  variant="ghost"
  size="sm"
  className="text-gray-400 hover:text-white"
  asChild
>
  <a
    href="https://github.com/niravrohra"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="h-5 w-5" />
  </a>
</Button>

<Button
  variant="ghost"
  size="sm"
  className="text-gray-400 hover:text-white"
  asChild
>
  <a
    href="https://www.linkedin.com/in/nirav-rohra"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="h-5 w-5" />
  </a>
</Button>

            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
              <p>&copy; 2025 Nirav Rohra. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
