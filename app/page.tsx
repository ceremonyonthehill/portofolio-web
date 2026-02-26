'use client'
import Interest from "./components/interest";
import { useTerminal } from "./components/useTerminal";

export default function Home() {
  const {
    activeSection,
    inputCommand,
    setInputCommand,
    isLoading,
    loadingText,
    errorMsg,
    handleCommand,
  } = useTerminal();

  return (
    <div className="relative bg-black flex flex-col font-sans text-zinc-900 dark:text-zinc-100 min-h-screen pt-20">

      {/* --- HERO TEXT --- */}
      <div className="flex flex-col items-center gap-3 text-center mt-25 px-4">
        <h1 className="text-sm font-martian md:text-sm text-white">Hi, I'm</h1>
        <p className="text-4xl font-martian md:text-4xl font-medium text-white">Radit</p>
        <p className="text-xl font-martian md:text-2xl font-medium text-white mb-2">
          Fullstack Web Developer
        </p>
        <div className="flex flex-col  items-center justify-center gap-2 md:gap-3 text-sm md:text-xl font-medium">
          <span className="font-martian text-zinc-600 dark:text-zinc-400">
            currently interested in
          </span>
          <Interest interests={['"machine learning"', '"competitive programming"', '"film"']} />
        </div>
      </div>

      {/* --- TERMINAL INPUT BOX --- */}
<div className="relative group font-martian text-sm md:text-base flex items-center gap-3 px-4 py-3 mt-16 md:mt-24 w-full max-w-2xl mx-auto border border-zinc-800 hover:border-zinc-500 focus-within:border-zinc-500 rounded-md bg-[#0a0a0a] transition-all">

  <span className="absolute -top-7 left-0 text-xs text-[#4ec9b0] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
    type for more: 'about', 'project', or 'contact'
  </span>

  <span className="text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
    Checkout{">"}
  </span>

  <input
    type="text"
    value={inputCommand}
    onChange={(e) => setInputCommand(e.target.value)}
    onKeyDown={handleCommand}
    className="bg-transparent outline-none text-white w-full caret-zinc-300"
    spellCheck="false"
    autoComplete="off"
    autoFocus 
  />

</div>

      {/* --- TERMINAL OUTPUT AREA --- */}
      <div className="w-full max-w-2xl mx-auto px-4 mt-4 font-martian text-sm">
        
        {/* PESAN ERROR */}
        {errorMsg && (
          <div className="text-[#d16969] animate-pulse">
            {errorMsg}
          </div>
        )}

        {/* EFEK LOADING */}
        {isLoading && (
          <div className="text-zinc-400 animate-fade-in flex flex-col gap-1">
            <span className="text-[#4ec9b0]">{loadingText}</span>
            <span className="animate-pulse bg-zinc-400 w-2 h-4 inline-block mt-1"></span>
          </div>
        )}

        {/* ABOUT SECTION */}
     {/* ABOUT SECTION */}
{activeSection === "about" && (
  <div className="text-left text-zinc-300 animate-fade-in space-y-4 leading-relaxed border-l-2 border-zinc-800 pl-4 py-2">
    <p>
      I am a builder who love solving puzzle, currently focused on Fullstack Web Development. 
      I specialize in building responsive frontends with <strong className="text-white font-normal">Next.js & Tailwind</strong> and scalable backends using <strong className="text-white font-normal">NestJS (TypeScript)</strong>, while currently expanding my server-side toolkit with <strong className="text-white font-normal">Go</strong>.
    </p>
    <p>
      Beyond web development, my technical "side quests" include exploring Machine Learning, Competitive Programming, and Game Development.
    </p>
    
    {/* CV Link Button */}
    <div className="mt-4 pt-4">
      <a 
        href="https://drive.google.com/file/d/1bD2j3wMfI6NfI8XQiUnJRN6EWs6Wqqrp/view?usp=sharing" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-martian text-[#4ec9b0] hover:text-white transition-colors group"
      >
        <span>[📄]</span>
        <span className="border-b border-[#4ec9b0]/30 group-hover:border-white transition-colors">
          fetch --resume
        </span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
      </a>
    </div>
  </div>
)}

        {/* PROJECT SECTION */}
        {activeSection === "project" && (
          <div className="flex flex-col items-start w-full animate-fade-in border-l-2 border-zinc-800 pl-4 py-2">
            <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#4ec9b0]">
              [ Loaded Packages : Projects ]
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* CARD 1 */}
              <div className="card bg-zinc-900 w-full border border-zinc-800 rounded">
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-md font-bold text-white">Project Satu</h2>
                  <p className="text-zinc-400 text-xs">Aplikasi prediksi dengan regresi linier.</p>
                  <button className="mt-2 text-xs text-[#4ec9b0] hover:underline self-start border border-[#4af626] px-2 py-1 rounded">Lihat Detail</button>
                </div>
              </div>
              {/* CARD 2 */}
              <div className="card bg-zinc-900 w-full border border-zinc-800 rounded">
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-md font-bold text-white">Project Dua</h2>
                  <p className="text-zinc-400 text-xs">Portfolio web Next.js dan Tailwind.</p>
                  <button className="mt-2 text-xs text-[#4ec9b0] hover:underline self-start border border-[#4af626] px-2 py-1 rounded">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeSection === "contact" && (
          <div className="text-left text-zinc-300 animate-fade-in border-l-2 border-zinc-800 pl-4 py-2">
            <p>Reach out to me here: <span className="text-[#4ec9b0]">rdithardiansyah@gmail.com</span></p>
          </div>
        )}
        
      </div>

      {/* --- FOOTERR --- */}
      <div className="mt-auto pt-10 pb-5 text-center text-sm font-martian text-zinc-600 w-full">
        &copy; 2026 Radit. Built with Next.js & Tailwind.
      </div>

    </div>
  );
}