import { GitFork, BriefcaseBusiness, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Brijesh-H", icon: GitFork },
  { label: "LinkedIn", href: "https://linkedin.com/in/brijeshh11", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:brijesh1147@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Brijesh H. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                    "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
