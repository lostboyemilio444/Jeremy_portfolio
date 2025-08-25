import HeroSection from "@/components/hero-section"
import AboutContent from "@/components/about-content"
import WorkSlideshow from "@/components/work-slideshow"
import ContactContent from "@/components/contact-content"
import ScrollAnimations from "@/components/scroll-animations"
import AnimatedText from "@/components/animated-text"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <HeroSection />

      <section id="about" className="min-h-screen pt-20">
        <div className="px-6 mb-16">
          <AnimatedText
            text="ABOUT"
            className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none font-mono"
          />
        </div>
        <AboutContent />
      </section>

      <section id="work" className="min-h-screen pt-20">
        <div className="px-6 mb-16">
          <AnimatedText
            text="WORK"
            className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none font-mono"
            delay={20}
          />
        </div>
        <WorkSlideshow />
      </section>

      <section id="contact" className="min-h-screen pt-20">
        <div className="px-6 mb-16">
          <AnimatedText
            text="CONTACT"
            className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none font-mono"
            delay={40}
          />
        </div>
        <ContactContent />
      </section>
    </main>
  )
}
