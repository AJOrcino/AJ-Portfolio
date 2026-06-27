import { useEffect, useState } from "react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Allen.Orcino />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 900);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-cyan-300">
      <div className="w-full max-w-sm rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 px-8 py-10 text-center shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mb-6 text-3xl font-semibold tracking-[0.2em] md:text-2xl">
          {text}
          <span className="ml-1 animate-blink">|</span>
        </div>

        <div className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">
          Preparing portfolio
        </div>

        <div className="mx-auto h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-[40%] animate-loading-bar bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </div>
      </div>
    </div>
  );
};
