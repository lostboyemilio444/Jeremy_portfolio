"use client";
import { useEffect, useRef, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading pictures...");
  const startedAt = useRef<number>(0);

  useEffect(() => {
    startedAt.current = Date.now();
    document.body.style.overflow = "hidden";

    const MIN_DISPLAY = 5000;   // mindestens 5 Sekunden
    const HARD_TIMEOUT = 30000; // spätestens nach 15 Sekunden

    const doneSet = new WeakSet<EventTarget>();
    let total = 0;
    let done = 0;

    const updateProgress = () => {
      const pct = Math.round((done / Math.max(total, 1)) * 100);
      setProgress(Math.min(100, pct));
    };

    const maybeFinish = () => {
      if (done >= total && total > 0) {
        const elapsed = Date.now() - startedAt.current;
        const remaining = Math.max(0, MIN_DISPLAY - elapsed);
        window.setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, remaining);
      }
    };

    const markDone = (el: EventTarget | null) => {
      if (!el || doneSet.has(el)) return;
      doneSet.add(el);
      done++;
      updateProgress();
      maybeFinish();
    };

    const watchImage = (img: HTMLImageElement) => {
      total++;
      if (img.complete) markDone(img);
      else {
        img.onload = () => markDone(img);
        img.onerror = () => markDone(img);
      }
    };

    const watchVideo = (video: HTMLVideoElement) => {
      total++;
      if (video.readyState >= 3) markDone(video);
      else {
        const onReady = () => markDone(video);
        const onErr = () => markDone(video);
        video.addEventListener("canplaythrough", onReady, { once: true });
        video.addEventListener("error", onErr, { once: true });
      }
    };

    // Alle vorhandenen Assets initial erfassen
    const prime = () => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const vids = Array.from(document.querySelectorAll("video"));
      imgs.forEach(watchImage);
      vids.forEach(watchVideo);
      updateProgress();
      maybeFinish();
    };
    prime();

    // Später hinzugefügte Assets ebenfalls tracken
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) watchImage(node);
          else if (node instanceof HTMLVideoElement) watchVideo(node);
          else if (node instanceof HTMLElement) {
            node.querySelectorAll("img").forEach((n) => watchImage(n as HTMLImageElement));
            node.querySelectorAll("video").forEach((n) => watchVideo(n as HTMLVideoElement));
          }
        });
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    // Rotierender Status-Text
    const texts = ["Loading pictures...", "Loading videos...", "Loading assets..."];
    let idx = 0;
    const textInterval = window.setInterval(() => {
      setStatusText(texts[idx]);
      idx = (idx + 1) % texts.length;
    }, 1000);

    // Hard Timeout, falls irgendwas hängt
    const killer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, HARD_TIMEOUT);

    return () => {
      mo.disconnect();
      clearInterval(textInterval);
      clearTimeout(killer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Kinder rendern, damit Assets laden */}
      {children}

      {/* Vollbild-Overlay für Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-6"></div>
          <p className="text-lg mb-4">{statusText}</p>
          <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm">{progress}%</p>
        </div>
      )}
    </>
  );
}
