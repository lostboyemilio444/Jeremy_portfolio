import { useEffect } from "react";



export default function MoodContent() {

  const posts = [
    "https://www.instagram.com/p/DM-C6wrMi8O/embed",
    "https://www.instagram.com/p/DNdGaBQsyjD/embed",
    "https://www.instagram.com/p/DI1IhfbMieY/embed",
    "https://www.instagram.com/p/DGseWF8MSXY/embed"
    
    // Füge hier beliebig viele weitere Embed-Links hinzu
  ];

  return (
    <section className="px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* ...dein bisheriger Content... */}

        {/* Instagram-Posts als iFrame */}
        <div className="grid md:grid-cols-2 scroll-animate-left   gap-8 my-8">
          {posts.map((url, idx) => (
            <iframe
              key={idx}
              src={url}
              width="400"
              height="550"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              className="rounded-xl mx-auto  bg-background w-72 h-96 md:w-[400px] md:h-[550px] "
             style={{ background: "bg-background" }}
            ></iframe>
          ))}
        </div>

        {/* ...dein bisheriger Content... */}
     
    {/* <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto"> */}
        {/* Main Content */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed">
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-start p-8 bg-background rounded-2xl"> */}
            {/* Profile Image Placeholder */}
           {/* < div className="rounded-xl md:scroll-animate-top scroll-animate-left overflow-hidden bg-muted w-57 h-80 ">
         

           </div>
           < div className="rounded-xl scroll-animate-right  overflow-hidden bg-muted w-57 h-80 "></div>
           < div className="rounded-xl  scroll-animate-left delay-75 overflow-hidden bg-muted w-57 h-80 "></div>
           < div className="rounded-xl scroll-animate-right delay-75 overflow-hidden bg-muted w-57 h-80 "></div>
           < div className="rounded-xl scroll-animate-left delay-150 overflow-hidden  bg-muted w-57 h-80 "></div>
           < div className="rounded-xl overflow-hidden scroll-animate-right delay-150  bg-muted w-57 h-80 "></div> */}



            {/* Bio Content - Made more compact with tighter spacing */}
            {/* <div className="space-y-4 scroll-animate-right">
              <p className="text-xl md:text-2xl font-bold leading-tight font-sans">Hey, I'm Jeremy Torres Hosp.</p>

              <p className="text-sm md:text-base">
                Born and raised in Hamburg, Germany, I've always done things my own way. During the Facebook days, I ran
                a short-video blog with my brother – just experimenting, having fun, creating.
              </p>

              <p className="text-sm md:text-base">
                My parents taught me something important: it's okay to be different. That mindset shaped me and pushed
                me to carve out my own lane.
              </p>
            </div> */}
          {/* </div> */}

          {/* Current Role - More compact layout */}
          <div className="bg-background border border-sky-400 p-6 rounded-2xl scroll-animate-right">
            <h2 className="text-2xl font-bold mb-4 font-sans">My Aesthetic 🎯👨🏾‍💻</h2>
            <p className="text-sm md:text-base">

              I’m a content creator with a unique eye for <strong>trends and authentic storytelling</strong>. On Instagram,<strong> I share insights, creative ideas, and entertaining clips </strong>that engage my community and invite them to be part of the conversation.
            </p>
          </div>

          {/* Education & Goals - Condensed text */}
         

          {/* Skills Section - More compact grid */}
          
        </div>
        <div className="h-72 mt-10 inset-0 z-0">
          
        <video autoPlay muted loop playsInline className="w-full h-full object-cover scroll-bottom">
          <source src="/250627_LFDY_Mexico_Master_NowOnline_16x9.mov" type="video/mp4" />
        </video>
         <div className="absolute h-72 mt-10 inset-0 z-10"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      </div>
    </section>
  )
}
