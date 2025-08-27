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
                Ready to bring your vision to life? Let's collaborate. 🫱🏽‍🫲🏾
              </p>
            </div>

            <div className="w-full border-2 border-border rounded-2xl p-8 hover:border-sky-400 transition-colors duration-300">
              <a href="mailto:jeremyjob23@gmail.com" className="block w-full text-center">
                <AnimatedText
                  text=" JEREMYJOB23@GMAIL.COM"
                  className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight hover:opacity-70 transition-opacity duration-300 font-mono break-all"
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
                <div className="p-6 bg-background rounded-2xl shadow-sm scroll-animate ">
                  <h4 className="font-semibold mb-2 font-mono">Location 📍</h4>
                  <p className="text-lg">Born in Hamburg. Moved to Düsseldorf for my Job and open to relocate anywhere!</p>
                </div>
                <div className="p-6 bg-background rounded-2xl shadow-sm scroll-animate">
                  <h4 className="font-semibold mb-2 font-mono">Response Time ⏰</h4>
                  <p className="text-lg">Usually within 24 hours</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square md:aspect-2/3 bg-muted rounded-2xl overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Eigene-Videos/Restock-Videos.MP4" type="video/mp4" />
                </video>
                </div>
                <div className="aspect-square md:aspect-2/3 bg-muted rounded-2xl overflow-hidden">
                 <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Eigene-Videos/Flatley-Video.MP4" type="video/mp4" />
                </video>
                <div className="absolute aspect-square md:aspect-2/3 mt-10 inset-0 z-10"></div>
                </div>
              </div>
            </div>

            {/* Social Media & Services */}
            <div className="space-y-12">
              {/* Social Media */}
              <div className="p-6 bg-background  rounded-2xl  scroll-animate ">
                <h3 className="text-2xl font-bold mb-6">Follow My Work</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/jeremyhosp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 border-2 border-border hover:border-2 hover:border-sky-400 transition-colors duration-300 group  bg-background rounded-2xl"
                  >
                    <div className="w-12 h-12  group-hover:opacity-80 rounded-full flex items-center justify-center text-background font-bold transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="" className="bi bi-instagram fill-foreground" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                   </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Instagram</h4>
                      <p className="text-sm text-muted-foreground">@jeremyhosp - Creative content & behind the scenes</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@jeremyhosp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 border-2 border-border hover:border-2 hover:border-sky-400 transition-colors duration-300 group bg-background  rounded-2xl"
                  >
                    <div className="w-12 h-12  group-hover:opacity-80 rounded-full flex items-center justify-center text-background font-bold transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="" className="bi bi-tiktok fill-foreground" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">TikTok</h4>
                      <p className="text-sm text-muted-foreground">@jeremyhosp
 - Viral content & trends</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className=" relative p-8 bg-background rounded-2xl shadow-sm ">
                {/* <div className="absolute inset-0 z-0">
                     <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src="/169-PERFORMANCE_MAIN.mp4" type="video/mp4" />
                      </video>
                   </div> */}
                   
                <h3 className="text-2xl font-bold mb-6 z-10 font-mono">What I Offer 💰</h3>
                  
                <ul className="space-y-3 z-20">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>▫️ Social Media Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>▫️ Content Creation & Strategy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>▫️ Video Editing & Production</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>▫️ Trend Research & Analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                    <span>▫️ Brand Photography</span>
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
