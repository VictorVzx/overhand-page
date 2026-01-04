import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  showLabel?: boolean;
}

export function ThemeToggle({ showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-5 w-5 text-foreground transition-transform duration-300 hover:rotate-45" />
          {showLabel && <span className="text-sm">Tema Claro</span>}
        </>
      ) : (
        <>
          <Moon className="h-5 w-5 text-foreground transition-transform duration-300 hover:-rotate-12" />
          {showLabel && <span className="text-sm">Tema Escuro</span>}
        </>
      )}
    </button>
  );
}
