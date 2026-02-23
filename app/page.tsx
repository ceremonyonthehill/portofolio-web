import Interest from "./components/interest";

export default function Home() {
  return (
    <div className="relative bg-black flex flex-col items-center gap-16 font-sans text-zinc-900 dark:text-zinc-100 min-h-screen pt-20 ">

      {/* --- TEXTT --- */}
      <div className="flex flex-col items-center gap-3 text-center mt-25 px-4">
        <h1 className="text-sm font-martian md:text-sm text-white">Hi, I'm</h1>
        <p className="text-4xl font-martian md:text-4xl font-medium text-white">
          Radit
        </p>
        <p className="text-xl font-martian md:text-2xl font-medium text-white">
          Fullstack Web Developer
        </p>
        <div className="flex flex-row items-center justify-center gap-2 text-xl md:text-2xl font-medium ">
          <div className="flex flex-col md:flex-col items-center justify-center gap-2">
            <span className="text-sm font-martian md:text-2xl font-medium text-zinc-600 dark:text-zinc-400">
              currently interested in
            </span>

            <Interest
              interests={['"machine learning"', '"game dev"', '"film"']}
            />
          </div>
        </div>
      </div>
       {/* --- TEXTT --- */}

      {/* --- LISTT --- */}
      <div className="font-martian text-sm md:text-base flex flex-col md:flex-row items-center justify-center  gap-2 px-4 py-2 mt-10 md:mt-24 w-full ">
        <span className="text-zinc-600 dark:text-zinc-400">Checkout{">"}</span>
        <span className="flex flex-col md:flex-row items-center justify-center gap-2 text-white">
          <a>about</a>
          <a>Project</a>
          <a>Contact</a>
        </span>

        <span className="animate-pulse bg-zinc-300 w-2 h-4 inline-block"></span>
      </div>
       {/* --- LISTT --- */}

      {/* --- FOOTERR --- */}
      <div className="mt-auto pt-10 text-center text-sm text-zinc-500 dark:text-zinc-600 w-full">
        &copy; 2026 Radit. Built with Next.js & Tailwind.
      </div>
      {/* --- FOOTERR --- */}

    </div>

  );
}
