import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Link2Icon } from "lucide-react"
import FadeInSection from "@/components/FadeInSection"

const Projects = () => {
  const projects = [
    {
      title: "Macros",
      description: "Social Nutrition Tracker",
      period: "June 2025 - July 2025",
      link: "https://github.com/chasereyn/Macros",
      image: "/images/macros.png",
      summary: "Full-stack nutrition tracking platform with social features, integrating USDA's food database. Features comprehensive meal tracking, social networking, and cross-platform support via web and Flutter mobile apps.",
      technologies: ["Next.js 14", "Express.js", "MongoDB", "Flutter", "shadcn/ui", "Cloudinary"]
    },
    {
      title: "Flueo",
      description: "Language Learning Platform",
      period: "Jun 2025 - Present",
      link: "https://www.flueo.app",
      image: "/images/flueo.png",
      summary: "Web app for learning languages through AI-powered translations and spaced repetition. Features modern authentication, real-time database operations, and personalized learning paths.",
      technologies: ["Next.js", "TypeScript", "GPT-4", "Supabase"]
    },
    {
      title: "SmartCards",
      description: "ShellHacks Hackathon Winner",
      period: "October 2024",
      link: "https://devpost.com/software/smartcards-qxdusb",
      image: "/images/smartcards.png",
      summary: "AI-powered receipt scanning application that won 1st place among 40 teams. Features hybrid React/Flask architecture and real-time Firebase database integration.",
      technologies: ["React", "Flask", "Firebase", "OpenAI"]
    },
    {
      title: "LegalFlow",
      description: "Knight Hacks Honorary Mention",
      period: "October 2023",
      link: "https://devpost.com/software/legalflow-upbc1a",
      image: "/images/legalflow.png",
      summary: "AI-powered legal document classifier achieving 100% accuracy across 6 categories. Built with Azure AI Document Intelligence and LangChain, featuring an intuitive Streamlit interface.",
      technologies: ["Azure AI", "LangChain", "Streamlit", "Python"]
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-[900px]">
        <h2 className="text-2xl font-bold mb-12 text-zinc-200">Featured Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <FadeInSection key={index}>
              <Card className="bg-transparent border-purple-400/40 hover:border-purple-300/60 transition-colors backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base text-zinc-100">{project.title}</CardTitle>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-purple-300 transition-colors"
                        >
                          <Link2Icon className="w-4 h-4" />
                        </a>
                      </div>
                      <CardDescription className="text-sm text-zinc-400">{project.description}</CardDescription>
                    </div>
                    <CardDescription className="text-sm text-zinc-400">{project.period}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.image && (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-4">
                      <p className="text-sm text-zinc-300">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-400/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 