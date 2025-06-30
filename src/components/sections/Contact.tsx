import { Card } from "@/components/ui/card"
import FadeInSection from "@/components/FadeInSection"

const Contact = () => {
  return (
    <section id="contact" className="py-24 pb-48">
      <div className="container max-w-[900px]">
        <h2 className="text-2xl font-bold mb-12 text-zinc-200">Get in Touch</h2>
        
        <FadeInSection>
          <Card className="bg-gradient-to-b from-zinc-900 to-zinc-900/80 border-purple-900/50 hover:border-purple-700/50 transition-colors backdrop-blur-sm p-6">
            <p className="text-zinc-300 mb-4">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation. Whether you&apos;re looking for a developer who can bring AI expertise to your team, or you&apos;d like to collaborate on an exciting project, I&apos;d love to hear from you.
            </p>
            <p className="text-zinc-400">
              Feel free to reach out to me at{" "}
              <a 
                href="mailto:mcreynolds02@gmail.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                mcreynolds02@gmail.com
              </a>
            </p>
          </Card>
        </FadeInSection>
      </div>
    </section>
  )
}

export default Contact 