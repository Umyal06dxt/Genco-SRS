import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext: any = createContext({ theme: "system", setTheme: () => null });

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
}) {
    const [theme, setTheme] = useState(() => {
        // Try to get the theme from localStorage
        const storedTheme = localStorage.getItem(storageKey);
        // Return stored theme if exists, otherwise use default
        return storedTheme || defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove previous theme classes
        root.classList.remove("light", "dark");

        // Handle system theme preference
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
            // Set data-theme attribute for components that rely on it
            root.setAttribute("data-theme", systemTheme);
        } else {
            // Add the selected theme class
            root.classList.add(theme);
            // Set data-theme attribute
            root.setAttribute("data-theme", theme);
        }

        // Save theme to localStorage
        localStorage.setItem(storageKey, theme);
    }, [theme, storageKey]);

    // Listen for system theme changes
    useEffect(() => {
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

            const handleChange = () => {
                const root = window.document.documentElement;
                const systemTheme = mediaQuery.matches ? "dark" : "light";

                root.classList.remove("light", "dark");
                root.classList.add(systemTheme);
                root.setAttribute("data-theme", systemTheme);
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme]);

    const value = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
