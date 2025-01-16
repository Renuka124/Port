'use client';

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import Image from 'next/image';
import Pf from '@/public/Pf.jpg';
import { Github, ExternalLink } from "lucide-react";

export function Cards() {
  const { theme } = useTheme();
  return (
    <div className="flex h-[400px] w-[600px] flex-col gap-4 lg:flex-row bg-black text-white border-none">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center p-6 whitespace-nowrap text-xl shadow-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex flex-col gap-4 w-[50]">
          {/* Project Image */}
          <div className="relative w-48 h-48 rounded-lg overflow-hidden">
            <Image
              src={Pf}
              alt="Project Image"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
              priority
            />
          </div>
          
          {/* Project Info */}
          <div className="space-y-3">
            {/* Title */}
            <h2 className="text-2xl font-bold">Project Title</h2>
            
            {/* Description */}
            <p className="text-sm text-gray-300 line-clamp-2">
              A brief description of your project. This can be two lines long before it gets truncated with an ellipsis.
            </p>
            
            {/* Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/yourusername/project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
              >
                <Github size={20} />
                Code
              </a>
              <a 
                href="https://your-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}