import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";
import Link from "next/link";

import { cn } from "@/shared/lib/utils";

const SOCIALS = [
  {
    link: "https://www.linkedin.com/in/velenyx-sivritkin/",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
  {
    link: "https://t.me/velenyx/",
    label: "Telegram",
    Icon: SiTelegram,
  },
  {
    link: "https://github.com/velenyx",
    label: "GitHub",
    Icon: SiGithub,
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "animate-move-down flex items-center justify-between py-10",
        className,
      )}
    >
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-orange-300 underline-offset-8">
        velenyx 😸
      </h1>
      <div className="flex items-center gap-5">
        {SOCIALS.map((social, index) => (
          <Link href={social.link} key={index} aria-label={social.label}>
            <social.Icon className="h-5 w-5 transition-all hover:scale-125" />
          </Link>
        ))}
      </div>
    </nav>
  );
};
