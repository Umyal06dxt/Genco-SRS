import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";

type ThemeOption = "light" | "dark" | "system";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    // Map theme options to icons and labels
    const themes: { key: ThemeOption; label: string; icon: JSX.Element }[] = [
        { key: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
        { key: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
        { key: "system", label: "System", icon: <Laptop className="h-4 w-4" /> },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="focus:outline-none z-[9999] border  dark:text-white"
                    aria-label="Select theme"
                >
                    {theme === "light" && <Sun className="h-5 w-5" />}
                    {theme === "dark" && <Moon className="h-5 w-5" />}
                    {theme === "system" && <Laptop className="h-5 w-5" />}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {themes.map(({ key, label, icon }) => (
                    <DropdownMenuItem key={key} onClick={() => setTheme(key)}>
                        {icon}
                        <span className="ml-2">{label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
