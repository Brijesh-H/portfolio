"use client";

import { motion } from "framer-motion";
import { GitFork, Globe, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/brijeshh11", icon: GitFork },
  { label: "LinkedIn", href: "https://linkedin.com/in/brijeshh11", icon: Globe },
  { label: "Email", href: "mailto:brijesh1147@gmail.com", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400"
        >
          Contact
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 sm:mb-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl dark:text-zinc-100"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 max-w-lg text-base text-zinc-700 dark:text-zinc-400"
        >
          Have a project in mind or just want to say hello? Fill out the form
          below or reach out through any of the channels.
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className={cn(
                    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400",
                    "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
                    "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500",
                    "dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20",
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={cn(
                    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400",
                    "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
                    "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500",
                    "dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20",
                  )}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Subject
              </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project collaboration"
                  className={cn(
                    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400",
                    "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
                    "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500",
                    "dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20",
                  )}
                />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className={cn(
                  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 resize-none",
                  "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
                  "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500",
                  "dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20",
                )}
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send Message
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-56 sm:w-56">
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                Illustration
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Or find me on
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
                      "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                      "bg-zinc-100 text-zinc-600 hover:bg-indigo-100 hover:text-indigo-600",
                      "dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-indigo-950 dark:hover:text-indigo-400",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
