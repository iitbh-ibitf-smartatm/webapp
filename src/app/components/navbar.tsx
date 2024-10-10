'use client'
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Languages, ShoppingCart } from 'lucide-react';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background/70 backdrop-blur-md px-4 pl-56 pr-56">
            <ShoppingCart className="h-8 w-8 mr-2" />

            <h1 className="font-bold text-xl inline-block">
                OneDock | IBITF
            </h1>
            <div className="ml-auto gap-4 flex items-center">
                <nav className="flex gap-4">
                    <a href="#about" className="text-sm">Learn</a>
                    <a href="#contact" className="text-sm">Contact</a>
                </nav>

                <Separator orientation="vertical" className="h-6 bg-gray-300" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Languages />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => console.log("English Selected")}>
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => console.log("Hindi Selected")}>
                            Hindi
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Separator orientation="vertical" className="h-6 bg-gray-300" />

                <div className="flex items-center gap-2">
                    <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                </div>
            </div>
        </header>
    );
}
