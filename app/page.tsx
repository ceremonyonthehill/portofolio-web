"use client";
import { useState } from "react";
import Interest from "./components/interest";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [inputCommand, setInputCommand] = useState("");
  
  // 1. STATE BARU UNTUK LOADING & ERROR
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = inputCommand.toLowerCase().trim();
      setInputCommand(""); // Langsung bersihkan kotak input
      setErrorMsg(""); // Bersihkan error sebelumnya
      setActiveSection(null); // Tutup section yang sedang terbuka

      if (cmd === "about" || cmd === "project" || cmd === "contact") {
        // Mulai proses loading
        setIsLoading(true);
        setLoadingText(`> npm install @radit/${cmd}...`);

        // Ganti teks loading di detik ke-0.5
        setTimeout(() => {
          setLoadingText(`> resolving dependencies for ${cmd}...`);
        }, 500);

        // Ganti teks loading di detik ke-1
        setTimeout(() => {
          setLoadingText(`> extracting ${cmd} packages...`);
        }, 1000);

        // Selesai loading di detik ke-1.5, munculkan konten aslinya!
        setTimeout(() => {
          setIsLoading(false);
          setActiveSection(cmd);
        }, 1500);

      } else if (cmd === "clear") {
        setActiveSection(null);
        setErrorMsg("");
      } else if (cmd !== "") {
        // Jika perintah tidak dikenali
        setErrorMsg(`bash: ${cmd}: command not found`);
      }
    }
  };

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
      <div className="relative group font-martian text-sm md:text-base flex items-center gap-3 px-4 py-3 mt-10 md:mt-16 w-full max-w-2xl mx-auto border border-zinc-800 hover:border-zinc-500 rounded-md bg-[#0a0a0a] transition-all">
        <span className="absolute -top-7 left-0 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          <div className="text-red-500 animate-pulse">
            {errorMsg}
          </div>
        )}

        {/* EFEK LOADING */}
        {isLoading && (
          <div className="text-zinc-400 animate-fade-in flex flex-col gap-1">
            <span className="text-[#4af626]">{loadingText}</span>
            <span className="animate-pulse bg-zinc-400 w-2 h-4 inline-block mt-1"></span>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeSection === "about" && (
          <div className="text-left text-zinc-300 animate-fade-in space-y-4 leading-relaxed border-l-2 border-zinc-800 pl-4">
            <p>
              I'm Radit Hardiansyah. I love learning by doing, currently exploring 
              machine learning, competitive programming, and building fullstack apps!
            </p>
            <p>
              Currently, I am diving deep into the logic behind competitive programming and exploring the fascinating world of machine learning. 
              When I'm taking a break from the terminal, you can usually find me analyzing a good film or figuring out the mechanics of game development.
            </p>
          </div>
        )}

        {/* PROJECT SECTION */}
        {activeSection === "project" && (
          <div className="flex flex-col items-start w-full animate-fade-in border-l-2 border-zinc-800 pl-4 py-2">
            <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#4af626]">
              [ Loaded Packages : Projects ]
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* CARD 1 */}
              <div className="card bg-zinc-900 w-full border border-zinc-800 rounded">
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-md font-bold text-white">Project Satu</h2>
                  <p className="text-zinc-400 text-xs">Aplikasi prediksi dengan regresi linier.</p>
                  <button className="mt-2 text-xs text-[#4af626] hover:underline self-start border border-[#4af626] px-2 py-1 rounded">Lihat Detail</button>
                </div>
              </div>
              {/* CARD 2 */}
              <div className="card bg-zinc-900 w-full border border-zinc-800 rounded">
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-md font-bold text-white">Project Dua</h2>
                  <p className="text-zinc-400 text-xs">Portfolio web Next.js dan Tailwind.</p>
                  <button className="mt-2 text-xs text-[#4af626] hover:underline self-start border border-[#4af626] px-2 py-1 rounded">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeSection === "contact" && (
          <div className="text-left text-zinc-300 animate-fade-in border-l-2 border-zinc-800 pl-4 py-2">
            <p>Reach out to me here: <span className="text-[#4af626]">radit@example.com</span></p>
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