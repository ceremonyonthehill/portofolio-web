import { useState } from "react";

export function useTerminal() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [inputCommand, setInputCommand] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = inputCommand.toLowerCase().trim();
      setInputCommand(""); 
      setErrorMsg(""); 
      setActiveSection(null); 

      if (cmd === "about" || cmd === "project" || cmd === "contact") {
        setIsLoading(true);
        setLoadingText(`> npm install @radit/${cmd}...`);

        setTimeout(() => {
          setLoadingText(`> resolving dependencies for ${cmd}...`);
        }, 500);

        setTimeout(() => {
          setLoadingText(`> extracting ${cmd} packages...`);
        }, 1000);

        setTimeout(() => {
          setIsLoading(false);
          setActiveSection(cmd);
        }, 1500);

      } else if (cmd === "clear") {
        setActiveSection(null);
        setErrorMsg("");
      } else if (cmd !== "") {
        setErrorMsg(`bash: ${cmd}: command not found`);
      }
    }
  };

  return {
    activeSection,
    inputCommand,
    setInputCommand, 
    isLoading,
    loadingText,
    errorMsg,
    handleCommand,
  };
}