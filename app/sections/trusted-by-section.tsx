const logos = [
  "/assets/logos/clerk-wordmark-light.svg",
  "/assets/logos/clickup-wordmark.svg",
  "/assets/logos/protonmail-wordmark.svg",
  "/assets/logos/leap-wallet-wordmark-light.svg",
  "/assets/logos/trello-wordmark.svg",
  "/assets/logos/mongodb-wordmark-light.svg",
];

export default function TrustedBySection() {
  return (
    <section className="mt-20 mb-20 h-160 md:my-20 md:h-100 border-y  border-y-black/15 border-dashed flex flex-col justify-center items-center gap-10 p-10">
      <h2 className="text-black/40 text-center">
        Helping people make beautiful, polished screen recordings
        effortlessly.
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-14">
        {logos.map((logo) => (
          <img
            key={logo}
            src={logo}
            alt="Company logo"
            className="h-8 w-auto"
          />
        ))}
      </div>
    </section>
  );
}
