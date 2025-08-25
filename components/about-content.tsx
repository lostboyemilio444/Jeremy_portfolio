export default function AboutContent() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed">
          <div className="grid md:grid-cols-2 gap-12 items-start p-6 bg-background rounded-2xl">
            {/* Profile Image Placeholder */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden scroll-animate-left">
              <img
                src="/465387736_1604561207148055_4500114554584912704_n.jpeg"
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
          <div className="bg-background border border-sky-400 p-6 rounded-2xl scroll-animate">
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
              <div className="space-y-3 text-sm bg-background w-full h-fit rounded-2xl px-7">
                <div className="bg-background  w-full h-fit rounded-sm px-5 pt-5 pb-5">
                  <h4 className="font-semibold mb-1">Video Editing</h4>
                  <p>CapCut, Adobe Premiere Pro, After Effects</p>
                </div>
                <div className="bg-background invert w-full h-fit rounded-sm px-5 pt-5 pb-5">
                  <h4 className="font-semibold mb-1">Design Tools</h4>
                  <p>Canva, Photoshop, Illustrator</p>
                </div>
                <div className="bg-background  w-full h-fit rounded-sm px-5 pt-5 pb-5">
                  <h4 className="font-semibold mb-1">Content Creation</h4>
                  <p>Trend spotting, scripting, storytelling</p>
                </div>
              </div>
            </div>

            <div className="scroll-animate-right  ">
              <h3 className="text-xl font-bold mb-4  font-sans">Languages</h3>
              <div className="space-y-2 text-sm bg-background w-full h-fit rounded-sm px-7 pt-5 pb-5">
                <div className="flex justify-between">
                  <span className="font-semibold">German</span>
                  <span className="bg-background invert h-full rounded-sm px-5 pt-1 pb-1">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Spanish</span>
                  <span className="bg-background invert h-full rounded-sm px-5 pt-1 pb-1">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">English</span>
                  <span className="bg-background invert h-full rounded-sm px-5 pt-1 pb-1">Fluent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-72 mt-10 inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/250224_SWF_LFDY_SPRING_16x9_MAINFILM_V09_ONLINE_H264.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      </div>
    </section>
  )
}
