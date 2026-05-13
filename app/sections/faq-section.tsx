"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Screen Candy really free?",
    answer:
      "Yes. Screen Candy is completely free and open source. No subscriptions, no locked features, and no export watermarks.",
  },
  {
    question: "Which platforms does Screen Candy support?",
    answer:
      "Screen Candy works on Windows, macOS, and Linux. The goal is to give every desktop platform access to beautiful cinematic screen recordings.",
  },
  {
    question: "What makes Screen Candy different?",
    answer:
      "Screen Candy focuses on making recordings feel polished and cinematic with smooth zooms, motion effects, cursor tracking, and a cleaner workflow designed for creators and developers.",
  },
  {
    question: "Is Screen Candy open source?",
    answer:
      "Yes. Screen Candy is open source and community-driven. You can explore the codebase, contribute improvements, and help shape the future of the project.",
  },
  {
    question: "Who is Screen Candy built for?",
    answer:
      "Screen Candy is built for developers, creators, educators, indie hackers, and teams who want tutorials, demos, and walkthroughs to look more professional.",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Everything you need to know about Screen Candy, platform support,
            open source development, and cinematic screen recording workflows.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[28px] border border-black/8 bg-background shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold tracking-tight sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/8 bg-muted/35 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-black/8 px-6 py-5 sm:px-7">
                      <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
