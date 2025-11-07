import { Link } from "react-router-dom";
import logo from "@/assets/logos/logo-icon-transparent.png";
import { FaCopyright, FaRegCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          © 2024{" "}
          <span className="bg-gradient-to-r from-orange-600 via-rose-500 to-sky-700 bg-clip-text text-transparent dark:from-orange-300 dark:via-amber-200 dark:to-sky-400 font-semibold">
            Shagize Technologies
          </span>
          . All rights reserved. <br className="md:hidden" />
          Designed & developed with care.
        </p>
      </div>
    </div>
  );
}
