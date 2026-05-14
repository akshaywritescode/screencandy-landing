"use client";

import TestimonialCard from "../components/testimonial-card";

const testimonialData = [
  {
    description:
      "Screen Candy made my tutorials look instantly more professional. The zoom effects and motion feel incredibly smooth.",
    testimonialName: "Alex Carter",
    testimonialUserHandle: "@alexcreates",
    testimonialInitials: "AC",
  },
  {
    description:
      "Finally a screen recorder that feels modern and works properly on Linux. The recording quality is beautiful.",
    testimonialName: "Samantha Lee",
    testimonialUserHandle: "@samdev",
    testimonialInitials: "SL",
  },
  {
    description:
      "I usually spend hours editing recordings after capture. With Screen Candy, most of the polish is already there.",
    testimonialName: "Daniel Brown",
    testimonialUserHandle: "@danbuilds",
    testimonialInitials: "DB",
  },
  {
    description:
      "The cinematic motion and cursor tracking make demos feel premium without needing complicated editing software.",
    testimonialName: "Nina Patel",
    testimonialUserHandle: "@ninacodes",
    testimonialInitials: "NP",
  },
  {
    description:
      "Screen Candy feels like the screen recorder I always wanted for developer demos. Fast, clean, and beautiful.",
    testimonialName: "Liam Johnson",
    testimonialUserHandle: "@liamships",
    testimonialInitials: "LJ",
  },
  {
    description:
      "Most recording tools feel outdated. Screen Candy feels polished, lightweight, and actually enjoyable to use.",
    testimonialName: "Emma Wilson",
    testimonialUserHandle: "@emmaux",
    testimonialInitials: "EW",
  },
  {
    description:
      "The smooth zoom animations completely changed how my product walkthroughs look. Huge difference.",
    testimonialName: "Chris Adams",
    testimonialUserHandle: "@chrisdev",
    testimonialInitials: "CA",
  },
  {
    description:
      "Beautiful UI, smooth recordings, and support for Windows, macOS, and Linux. That combination is rare.",
    testimonialName: "Sophia Martinez",
    testimonialUserHandle: "@sophiadesign",
    testimonialInitials: "SM",
  },
  {
    description:
      "Screen Candy makes ordinary recordings look cinematic. It genuinely improves the quality of my content.",
    testimonialName: "Ethan Reynolds",
    testimonialUserHandle: "@ethanreact",
    testimonialInitials: "ER",
  },
];

const columns = [
  testimonialData.slice(0, 3),
  testimonialData.slice(3, 6),
  testimonialData.slice(6, 9),
];

function TestimonialTrack({
  column,
  direction,
}: {
  column: typeof testimonialData;
  direction: "up" | "down";
}) {
  const repeated = [...column, ...column, ...column];

  return (
    <div
      className={`flex flex-col gap-8 ${
        direction === "up"
          ? "animate-testimonial-up"
          : "animate-testimonial-down"
      }`}
    >
      {repeated.map((testimonial, index) => (
        <TestimonialCard
          key={`${testimonial.testimonialUserHandle}-${index}`}
          description={testimonial.description}
          testimonialName={testimonial.testimonialName}
          testimonialUserHandle={testimonial.testimonialUserHandle}
          testimonialInitials={testimonial.testimonialInitials}
        />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            What users are saying
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Creators and developers use Screen Candy to make tutorials, demos,
            and walkthroughs feel cinematic, polished, and engaging.
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-10">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`
                relative h-[760px] w-[320px] overflow-hidden
                ${columnIndex === 1 ? "hidden md:block" : ""}
                ${columnIndex === 2 ? "hidden lg:block" : ""}
              `}
            >
              {/* Top Fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent" />

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />

              <TestimonialTrack
                column={column}
                direction={columnIndex === 1 ? "down" : "up"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}