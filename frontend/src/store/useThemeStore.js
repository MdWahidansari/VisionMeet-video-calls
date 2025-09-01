import { create } from "zustand";

// Zustand store for theme
export const useThemeStore = create((set) => ({
  // Initialize theme from localStorage, default to 'coffee'
  theme:
    typeof window !== "undefined"
      ? localStorage.getItem("visionMeet-theme") || "coffee"
      : "coffee",

  // Function to update theme
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("visionMeet-theme", theme);
    }
    set({ theme });
  },
}));
