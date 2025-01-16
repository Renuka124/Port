import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";


export function Footer() {
  return (
    <footer className="z-10 flex items-center justify-center text-center text-white py-4 bg-gradient-to-r from-black to-black">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-black" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-blue-300 via-teal-200 to-green-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
          
        >
          © {new Date().getFullYear()} Renuka Kothekar. All Rights Reserved. Contact: kothekarrenuka1@gmail.com
        </span>
        <ChevronRight className="ml-1 size-3 text-yellow-700 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </footer>
  );
}
