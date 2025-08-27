"use client";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading pictures...");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const LOADER_DURATION = 39000; // 22 Sekunden
    const PROGRESS_END = 38000;    // 21 Sekunden bis 100%

    const startTime = Date.now();

    // Rotierender Status-Text
    const texts = ["Loading pictures...", "Loading videos...", "Loading assets..."];
    let idx = 0;
    const textInterval = setInterval(() => {
      setStatusText(texts[idx]);
      idx = (idx + 1) % texts.length;
    }, 1000);

    // Progressbar-Update alle 100ms
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / PROGRESS_END) * 100);
      setProgress(pct);
    }, 100);

    // Loader nach 22 Sekunden verschwinden lassen
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, LOADER_DURATION);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
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
