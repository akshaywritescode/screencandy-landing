type NavbarProps = {
  mobile?: boolean;
};

export default function Navbar({ mobile = false }: NavbarProps) {
  return (
    <nav className="relative z-50">
      <ul
        className={`flex ${
          mobile
            ? "flex-col items-center gap-7 text-2xl"
            : "items-center gap-7 text-sm"
        }`}
      >
        <li className="hover:scale-110 transition">
          <a href="#">About Us</a>
        </li>

        <li className="hover:scale-110 transition">
          <a href="#">Donate</a>
        </li>

        <li className="hover:scale-110 transition">
          <a href="#">Pricing</a>
        </li>

        <li className="hover:scale-110 transition">
          <a href="#">Contribute</a>
        </li>

        <li className="hover:scale-110 transition">
          <a href="#">Get Featured</a>
        </li>
      </ul>
    </nav>
  );
}