"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";

export default function WorkItem() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="items-center justify-center px-6 py-16">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 w-full">

          {/* Erstes Accordion */}
          <Accordion>
            <AccordionPanel>
              <AccordionTitle onClick={() => handleToggle(0)}>
                <div className="flex flex-col justify-center items-center p-6 rounded-2xl w-full h-full">
                  <Image
                    src="/Logos/LFDY_TM_Logo_weiß.png"
                    alt="LFDY Logo"
                    width={200}
                    height={80}
                    className="invert dark:invert-0 px-6"
                    loading="eager"
                  />
                  <p className="text-sm md:text-base mt-4 text-center">
                    Content created for <strong>LFDY</strong>, including videos for TikTok and Instagram as well as campaign highlights. <strong>Click to see the work.</strong>
                  </p>
                </div>
              </AccordionTitle>
              {activeIndex === 0 && (
               <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 rounded-xl bg-background">
                  {[
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Flatley-Video.MP4",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/250627_LFDY_Mexico_Master_NowOnline_16x9.mov",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/VHS%20Mexico%20recap.mov",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/250224_SWF_LFDY_SPRING_16x9_MAINFILM_V09_ONLINE_H264.mov",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Size%20Guide%20Video.MP4",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Viral%20Video%20Performance.MP4",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/169-PERFORMANCE_MAIN.mov",
                  ].map((src, i) => (
                    <div key={i} className="aspect-2/3 rounded-sm overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                      >
                        <source src={src} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </AccordionContent>

              )}
            </AccordionPanel>
          </Accordion>

          {/* Zweites Accordion */}
          <Accordion>
            <AccordionPanel>
              <AccordionTitle onClick={() => handleToggle(1)}>
                <div className="flex flex-col justify-center items-center p-6 rounded-2xl w-full h-full">
                  <Image
                    src="/Logos/Peso-Eagle_Peso-Mainlogo-black Kopie.png"
                    alt="Peso Logo"
                    width={200}
                    height={80}
                    className="invert dark:invert-0 px-6"
                    loading="eager"
                  />
                  <p className="text-sm md:text-base mt-4 text-center">
                    Content created for <strong>Peso Clothing</strong>, featuring social media edits, collection showcases, and creative visuals. <strong>Click to see the work.</strong>
                  </p>
                </div>
              </AccordionTitle>
              {activeIndex === 1 && (
               <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 rounded-xl bg-background">
                  {[
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Grüne%20Jacke%20Peso.mp4",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20Pearl%20Denim.mp4",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/ImageBucket/Peso%20schuhe.jpg",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20Shooting%20BTS.MOV",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20shooting%20details.MOV",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20shooting%20mag%20gevin.MOV",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/ImageBucket/Peso%20schuhe%20auto.jpg",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Schuhe%20Peso.mp4",
                    "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/ImageBucket/Vor%20edm%20auuto.jpg",
                  ].map((src, i) =>
                    src.endsWith(".mp4") || src.endsWith(".MOV") ? (
                      <div key={i} className="aspect-2/3 rounded-sm overflow-hidden">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                          className="w-full h-full object-cover"
                        >
                          <source src={src} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div key={i} className="aspect-2/3 rounded-sm overflow-hidden">
                        <Image
                          src={src}
                          alt={`Image ${i}`}
                          width={300}
                          height={450}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    )
                  )}
                </div>
              </AccordionContent>

              )}
            </AccordionPanel>
          </Accordion>

        </div>
      </div>
    </section>
  );
}
