import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react"; // use lucide-react icons
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

export function ModeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    // Apply theme class to <html>
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="relative rounded-full w-8 h-8 bg-background mr-2"
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                    >
                        <SunIcon
                            className={`absolute w-5 h-5 transition-transform duration-500 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                                }`}
                        />
                        <MoonIcon
                            className={`absolute w-5 h-5 transition-transform duration-500 ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                                }`}
                        />
                        <span className="sr-only">Switch Theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Switch Theme</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
