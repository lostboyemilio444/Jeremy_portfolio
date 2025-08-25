"use client"

import AnimatedText from "./animated-text"

export default function ContactContent() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="w-full">
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Ready to bring your vision to life? Let's collaborate.
              </p>
            </div>

            <div className="w-full border-2 border-border rounded-2xl p-8 hover:border-foreground transition-colors duration-300">
              <a href="mailto:jeremy.torres.hosp@example.com" className="block w-full text-center">
                <AnimatedText
                  text="JEREMY.TORRES.HOSP@EXAMPLE.COM"
                  className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight hover:opacity-70 transition-opacity duration-300 font-mono break-all"
                  delay={10}
                />
              </a>
              <p className="text-muted-foreground mt-6 text-center text-lg">
                Click to open your email client and send me a message directly.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-muted rounded-2xl">
                  <h4 className="font-semibold mb-2 font-mono">Location</h4>
                  <p className="text-lg">Hamburg, Germany</p>
                </div>
                <div className="p-6 bg-muted rounded-2xl">
                  <h4 className="font-semibold mb-2 font-mono">Response Time</h4>
                  <p className="text-lg">Usually within 24 hours</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                  <img
                    src="/placeholder-06f1t.png"
                    alt="Jeremy Torres Hosp"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                  <img src="/placeholder-g6zk0.png" alt="Jeremy at work" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Social Media & Services */}
            <div className="space-y-12">
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Follow My Work</h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/jeremy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 border-2 border-border hover:border-foreground transition-colors duration-300 group rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-foreground group-hover:opacity-80 rounded-full flex items-center justify-center text-background font-bold transition-opacity duration-300">
                      IG
                    </div>
                    <div>
                      <h4 className="font-semibold">Instagram</h4>
                      <p className="text-sm text-muted-foreground">@jeremy - Creative content & behind the scenes</p>
                    </div>
                  </a>

                  <a
                    href="https://tiktok.com/@jeremy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 border-2 border-border hover:border-foreground transition-colors duration-300 group rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-foreground group-hover:opacity-80 rounded-full flex items-center justify-center text-background font-bold transition-opacity duration-300">
                      TT
                    </div>
                    <div>
                      <h4 className="font-semibold">TikTok</h4>
                      <p className="text-sm text-muted-foreground">@jeremy - Viral content & trends</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="bg-foreground text-background p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 font-mono">What I Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>Social Media Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>Content Creation & Strategy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>Video Editing & Production</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>Trend Research & Analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>Brand Photography</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
