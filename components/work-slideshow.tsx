"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export default function WorkItem() {
  return (



   <section className="items-center justify-center px-6 py-16" >
     
  <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
    <div className=" flex flex-col  justify-center items-center gap-4 w-full">  
    <Accordion className="grid grid-cols-1 items-center  justify-center   border-0 bg-background scroll-animate" >
      <AccordionPanel className="w-screen h-52 border-0 ">
       
            <div className="bg-background border shadow-sm p-6 rounded-2xl scroll-animate">
           <AccordionTitle className="flex items-center justify-center w-full h-60 border-0">
            <div className="flex flex-col justify-center items-center p-6 rounded-2xl w-full h-full">
              <Image src="/Logos/LFDY_TM_Logo_weiß.png" alt="TikTok Icon" className="invert dark:invert-0 px-6" width={200} height={80} />
            </div>
            <p className="text-sm md:text-base">
            Content created for <strong>LFDY</strong>, including videos for TikTok and Instagram as well as campaign highlights. <strong>Click to see the work.</strong>
            </p>
            </AccordionTitle>
          </div>
            
      
       <AccordionContent className="border-0 ">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center w-full h-full p-2 rounded-xl gap-2 bg-background">
               <div className="scroll-animate aspect-2/3  rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Eigene-Videos/Flatley-Video.MP4" type="video/mp4" />
                </video>
                </div>
           
                 <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/250627_LFDY_Mexico_Master_NowOnline_16x9.mov" type="video/mp4" />
                </video>
                </div>


                <div className="scroll-animate aspect-2/3  rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Eigene-Videos/VHS Mexico recap.MOV" type="video/mp4" />
                </video>
                </div>
 <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/250224_SWF_LFDY_SPRING_16x9_MAINFILM_V09_ONLINE_H264.mov" type="video/mp4" />
                </video>
                </div>
                <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Eigene-Videos/Size Guide Video.MP4" type="video/mp4" />
                </video>
                </div>

                <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Eigene-Videos/Viral Video Performance.MP4" type="video/mp4" />
                </video>
                </div>
                  <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/169-PERFORMANCE_MAIN.mov" type="video/mp4" />
                </video>
                </div>
               
               
          </div>
          
        </AccordionContent>
      </AccordionPanel>
  
      
    </Accordion>
 <Accordion className="grid grid-cols-1 items-center justify-center   border-0  bg-background scroll-animate">
        <AccordionPanel className="w-full h-52 border-0 bg-background ">
         <div className="bg-background border shadow-sm p-6 rounded-2xl  ">
           <AccordionTitle className="flex items-center justify-center w-full h-60 border-0 ">
            <div className="flex flex-col justify-center items-center p-6 rounded-2xl w-full h-full">
           <Image src="/Logos/Peso-Eagle_Peso-Mainlogo-black Kopie.png" alt="TikTok Icon" className="invert dark:invert-0 px-6 relative  " width={200} height={80} />
            </div>
            <p className="text-sm md:text-base">
            Content created for <strong>Peso Clothing</strong>, featuring social media edits, collection showcases, and creative visuals. <strong>Click to see the work.</strong>
            </p>
            </AccordionTitle>
          </div>
      
        <AccordionContent className="border-0 ">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center w-full h-full p-2 rounded-xl gap-2 bg-background">
               <div className="aspect-2/3 scroll-animate  rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Peso/TT Videos/Grüne Jacke Peso.mp4" type="video/mp4" />
                </video>
                </div>

                 <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Peso/TT Videos/Peso Pearl Denim.mp4" type="video/mp4" />
                </video>
                </div>

<div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <Image
                    src="/Peso/Iphone Fotos/Peso schuhe.jpg"
                    alt="Peso Schuhe Auto"
                    className="w-full h-full object-cover"
                    width={300}
                    height={450}
                  />
                </div>

                <div className="scroll-animate aspect-2/3  rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Peso/TT Videos/Peso Shooting BTS.MOV" type="video/mp4" />
                </video>
                </div>

                <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Peso/TT Videos/Peso shooting details.MOV" type="video/mp4" />
                </video>
                </div>

                <div className="scroll-animate aspect-2/3 rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Peso/TT Videos/Peso shooting mag gevin.MOV" type="video/mp4" />
                </video>
                </div>
                 <div className="scroll-animate aspect-2/3  rounded-sm overflow-hidden">
                  <Image
                    src="/Peso/Iphone Fotos/Peso schuhe auto.jpg"
                    alt="Peso Schuhe Auto"
                    className="w-full h-full object-cover"
                    width={300}
                    height={450}
                  />
                </div>
               

 

                <div className="scroll-animate aspect-2/3  rounded-sm overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                   <source src="/Peso/TT Videos/Schuhe Peso.mp4" type="video/mp4" />
                </video>
                </div>

                 <div className="scroll-animate aspect-2/3  rounded-sm overflow-hidden">
                  <Image
                    src="/Peso/Iphone Fotos/Vor edm auuto.jpg"
                    alt="Peso Schuhe Auto"
                    className="w-full h-full object-cover"
                    width={300}
                    height={450}
                  />
                </div>
                

          </div>
          
        </AccordionContent>
      </AccordionPanel>
      </Accordion>
    </div>
    </div>
    </section>
    
  )
}
