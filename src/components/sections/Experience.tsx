import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2Icon } from "lucide-react"
import FadeInSection from "@/components/FadeInSection"

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Speer Technologies",
      period: "April 2025 - Present",
      link: "https://www.speer.ai/",
      points: [
        "Architected and launched System One, reducing morning report generation time by 90% through n8n workflow automation and Supabase PostgreSQL, achieving <span className=\"text-purple-400\">99.9% uptime</span>",
        "Connected a RAG system using xAI Grok and LangChain, improving report accuracy through contextual understanding and dynamic content generation",
        "Implemented real-time data pipelines with X API Realtime API enabling automated research and deep research capabilities with <span className=\"text-purple-400\">95% accuracy</span>",
        "Engineered a vector-based memory system using Supabase pgvector and OpenAI Embeddings for semantic search capabilities",
        "Optimized user experience through A/B tested prompt engineering, resulting in an <span className=\"text-purple-400\">85% reduction</span> in clarification requests"
      ]
    },
    {
      title: "Outreach Coordinator",
      company: "UCF Astronomy Society",
      period: "August 2023 - Present",
      link: "https://www.instagram.com/ucfastroclub/?hl=en",
      points: [
        "Lead weekly public astronomy viewing sessions, engaging <span className=\"text-purple-400\">100+ community members</span> monthly in STEM education",
        "Coordinate with Robinson Observatory to organize and execute <span className=\"text-purple-400\">5+ major astronomical events</span> annually",
        "Develop educational materials and interactive demonstrations for K-12 students",
        "Manage a team of <span className=\"text-purple-400\">10+ student volunteers</span> and maintain safety protocols",
        "Created a digital sign-up system using Google Apps Script that improved volunteer scheduling efficiency by <span className=\"text-purple-400\">40%</span>"
      ]
    }
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container max-w-[900px]">
        <h2 className="text-2xl font-bold mb-12 text-zinc-200">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <FadeInSection key={index}>
              <Card className="bg-transparent border-purple-400/40 hover:border-purple-300/60 transition-colors backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base text-zinc-100">{experience.title}</CardTitle>
                        {experience.link && (
                          <a 
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-purple-300 transition-colors"
                          >
                            <Link2Icon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <CardDescription className="text-sm text-zinc-400">{experience.company}</CardDescription>
                    </div>
                    <CardDescription className="text-sm text-zinc-400">{experience.period}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-zinc-300 text-sm">
                    {experience.points.map((point, pointIndex) => (
                      <li key={pointIndex} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 