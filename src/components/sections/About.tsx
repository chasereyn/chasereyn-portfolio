import ScrollLink from "@/components/ScrollLink"
import FadeInSection from "@/components/FadeInSection"

const About = () => {
  return (
    <section id="about" className="space-y-8 lg:space-y-12 pt-8">
      <FadeInSection>
        <div className="space-y-5">
          <p className="text-sm text-zinc-400 leading-relaxed">
            I&apos;m a developer passionate about building intelligent automation systems and language learning platforms. 
            My favorite work lies at the intersection of AI and web development, creating experiences that not only 
            solve complex problems but are meticulously built for performance and usability.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            I&apos;m currently wrapping up my role as an AI Engineer at{" "}
            <a 
              href="https://www.speer.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              SpeerAI
            </a>, where I&apos;ve been specializing in building intelligent automation systems. I&apos;m actively seeking new opportunities that align with my passion for AI development and innovative software solutions.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Throughout my journey, I&apos;ve had the opportunity to develop software across various settings — from{" "}
            <ScrollLink href="#projects" className="text-purple-400 hover:text-purple-300 transition-colors">
              hackathon-winning projects
            </ScrollLink>{" "}
            and{" "}
            <ScrollLink href="#experience" className="text-purple-400 hover:text-purple-300 transition-colors">
              automated reporting systems
            </ScrollLink>{" "}
            to{" "}
            <ScrollLink href="#projects" className="text-purple-400 hover:text-purple-300 transition-colors">
              language learning platforms
            </ScrollLink>. My experience spans RAG systems, 
            vector-based memory solutions, and full-stack development, always with a focus on performance and reliability.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me in the kitchen experimenting with new recipes, at the gym staying active, 
            or enjoying nature&apos;s displays — whether that&apos;s catching a beautiful sunset or stargazing on a clear night. 
            These moments of pause help me maintain creativity and perspective in my technical work.
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}

export default About 