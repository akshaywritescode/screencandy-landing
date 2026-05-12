import Banner from "./components/banner";
import Header from "./sections/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Banner />
      <Header />
    </div>
  );
}
