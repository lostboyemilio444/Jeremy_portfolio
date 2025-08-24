export default function AboutContent() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Image Placeholder */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden scroll-animate-left">
              <img
                src="/young-creative-social-media-manager.png"
                alt="Jeremy Torres Hosp"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio Content - Made more compact with tighter spacing */}
            <div className="space-y-4 scroll-animate-right">
              <p className="text-xl md:text-2xl font-bold leading-tight font-sans">Hey, I'm Jeremy Torres Hosp.</p>

              <p className="text-sm md:text-base">
                Born and raised in Hamburg, Germany, I've always done things my own way. During the Facebook days, I ran
                a short-video blog with my brother – just experimenting, having fun, creating.
              </p>

              <p className="text-sm md:text-base">
                My parents taught me something important: it's okay to be different. That mindset shaped me and pushed
                me to carve out my own lane.
              </p>
            </div>
          </div>

          {/* Current Role - More compact layout */}
          <div className="bg-background border border-border p-6 rounded-2xl scroll-animate">
            <h2 className="text-2xl font-bold mb-4 font-sans">Current Role</h2>
            <p className="text-sm md:text-base">
              Today, I work as a <strong>Junior Social Media Manager at LFDY</strong>. I run the TikTok account fully,
              handle Instagram content, edit videos, spot trends, and sometimes step in front of the camera myself.
            </p>
          </div>

          {/* Education & Goals - Condensed text */}
          <div className="space-y-4 scroll-animate">
            <p className="text-sm md:text-base">
              I'm studying <strong>Business Psychology</strong> to understand what really connects with people. My goal:
              create content that's bold, fresh, and sets new standards.
            </p>
          </div>

          {/* Skills Section - More compact grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="scroll-animate-left">
              <h3 className="text-xl font-bold mb-4 font-sans">Skills & Tools</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Video Editing</h4>
                  <p>CapCut, Adobe Premiere Pro, After Effects</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Design Tools</h4>
                  <p>Canva, Photoshop, Illustrator</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Content Creation</h4>
                  <p>Trend spotting, scripting, storytelling</p>
                </div>
              </div>
            </div>

            <div className="scroll-animate-right">
              <h3 className="text-xl font-bold mb-4 font-sans">Languages</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">German</span>
                  <span>Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Spanish</span>
                  <span>Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">English</span>
                  <span>Fluent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
