import HeroSection from "@/components/hero-section"
import AboutContent from "@/components/about-content"
import WorkSlideshow from "@/components/work-slideshow"
import ContactContent from "@/components/contact-content"
import ScrollAnimations from "@/components/scroll-animations"
import AnimatedText from "@/components/animated-text"
import MoodContent from "@/components/mood-content"

export default function HomePage() {
  return (
    <main className="min-h-screen w-screen overflow-clip">
      <ScrollAnimations />
      <HeroSection />

      <section id="about" className="min-h-screen w-screen pt-12">
        <div className="flex flex-col px-6 mb-16 w-screen items-center">
          <AnimatedText
            text="ABOUT"
            className="text-6xl md:text-8xl font-black tracking-tighter font-oswald uppercase leading-none"
          />
        </div>
        <AboutContent />
      </section>

      <section id="work" className="min-h-screen w-screen pt-12">
       

        
        <div className="flex flex-col px-6 mb-16 w-screen  items-center">
          
          <AnimatedText
            text="WORK"
            className="text-6xl md:text-8xl font-black tracking-tighter font-oswald uppercase leading-none"
            delay={20}
          />
        </div>
        <WorkSlideshow />
      </section>
       <section id="work" className="min-h-screen w-screen pt-12">
       

        
        <div className="flex flex-col px-6 mb-16 w-screen  items-center">
          
          <AnimatedText
            text="MOOD"
            className="text-6xl md:text-8xl font-black tracking-tighter font-oswald uppercase leading-none"
            delay={20}
          />
        </div>
        <MoodContent />
      </section>

      <section id="contact" className="min-h-screen w-screen items-center pt-12">
        <div className="flex flex-col px-6 mb-16 w-screen items-center">
          <AnimatedText
            text="CONTACT"
            className="text-6xl md:text-8xl font-black tracking-tighter font-oswald uppercase leading-none"
            delay={40}
          />
        </div>
        <ContactContent />
      </section>
    </main>
  )
}
