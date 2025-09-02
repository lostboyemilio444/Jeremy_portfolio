"use client";
import { useEffect, useState } from "react";

type Asset = {
  url: string;
  type: "image" | "video";
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading assets...");

  const assets: Asset[] = [
    // LFDY Videos
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Flatley-Video.MP4", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/250627_LFDY_Mexico_Master_NowOnline_16x9.mov", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/VHS%20Mexico%20recap.mov", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/250224_SWF_LFDY_SPRING_16x9_MAINFILM_V09_ONLINE_H264.mov", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Size%20Guide%20Video.MP4", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Viral%20Video%20Performance.MP4", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/169-PERFORMANCE_MAIN.mov", type: "video" },

    // Peso Videos
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Grüne%20Jacke%20Peso.mp4", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20Pearl%20Denim.mp4", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20Shooting%20BTS.MOV", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20shooting%20details.MOV", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Peso%20shooting%20mag%20gevin.MOV", type: "video" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/VideoBucket/Schuhe%20Peso.mp4", type: "video" },

    // Peso Bilder
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/ImageBucket/Peso%20schuhe.jpg", type: "image" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/ImageBucket/Peso%20schuhe%20auto.jpg", type: "image" },
    { url: "https://iqqfdehyquhzzvfjqjqu.supabase.co/storage/v1/object/public/ImageBucket/Vor%20edm%20auuto.jpg", type: "image" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let loadedCount = 0;
    const total = assets.length;

    const texts = ["Loading pictures...", "Loading videos...", "Loading assets..."];
    let idx = 0;
    const textInterval = setInterval(() => {
      setStatusText(texts[idx]);
      idx = (idx + 1) % texts.length;
    }, 1000);

    // Timeout für max. 5 Sekunden
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 5000);

    const updateProgress = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));
      if (loadedCount >= total) {
        clearTimeout(timeout); // falls früher fertig, Timeout abbrechen
        setLoading(false);
        document.body.style.overflow = "";
      }
    };

    assets.forEach((asset) => {
      if (asset.type === "image") {
        const img = new Image();
        img.src = asset.url;
        img.onload = updateProgress;
        img.onerror = updateProgress;
      } else if (asset.type === "video") {
        const vid = document.createElement("video");
        vid.src = asset.url;
        vid.preload = "auto";
        vid.onloadeddata = updateProgress;
        vid.onerror = updateProgress;
      }
    });

    return () => {
      clearInterval(textInterval);
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {children}

      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-6"></div>
          <p className="text-lg mb-4">{statusText}</p>
          <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm">{Math.round(progress)}%</p>
        </div>
      )}
    </>
  );
}
