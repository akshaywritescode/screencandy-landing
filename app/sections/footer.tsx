"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderLogo from "@/app/components/logo"

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#top" },
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Discord", href: "#" },
      { label: "Contribute", href: "#" },
      { label: "Sponsors", href: "#sponsors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Download", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-black/8 bg-muted/35 shadow-xl shadow-black/5">
          {/* Top CTA */}
          <div className="border-b border-black/8 px-6 py-10 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-background/85 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-blue-700" />
                  Free & Open Source
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Create beautiful screen recordings on every desktop platform.
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  Screen Candy helps creators and developers make cinematic
                  tutorials, demos, and walkthroughs with smooth motion and
                  polished visuals.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11 rounded-full px-6">
                  <Link href="#">
                    Download Now
                    <ArrowRight />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-full px-6"
                >
                  <Link href="https://github.com">
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] lg:px-10">
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-foreground transition-opacity hover:opacity-80"
              >
                <HeaderLogo />
              </Link>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                A free and open-source cinematic screen recorder built for
                creators, developers, and educators on Windows, macOS, and
                Linux.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                <span className="rounded-full border border-black/8 bg-background px-3 py-1.5">
                  Open Source
                </span>

                <span className="rounded-full border border-black/8 bg-background px-3 py-1.5">
                  Cross Platform
                </span>

                <span className="rounded-full border border-black/8 bg-background px-3 py-1.5">
                  No Watermark
                </span>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {group.title}
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-black/8 px-6 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>
              © 2026 Screen Candy. Built for beautiful screen recordings.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://github.com"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-foreground"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}