export default function HeroVideo() {
  return (
    <div className="flex justify-center items-center mt-5">
      <video
        className="w-[90%] h-auto rounded-3xl"
        autoPlay
        loop
      >
        <source src="/assets/videos/sample.mp4" type="video/mp4" />
      </video>
    </div>
  );
}