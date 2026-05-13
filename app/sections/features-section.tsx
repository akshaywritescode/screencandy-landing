"use client";

export default function FeatureSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-sm font-medium text-black/60">
            Powerful Recording
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Record webcam, microphone, and system audio
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
            Screen Candy makes it easy to create full-featured courses,
            tutorials, team updates, and demos with smooth cinematic recording
            workflows.
          </p>
        </div>

        {/* Video Container */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-black shadow-2xl shadow-black/10">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

            {/* Browser Top Bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Video */}
            <div className="relative aspect-video w-full">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}