type NavbarProps = {
  mobile?: boolean;
};

export default function Navbar({ mobile = false }: NavbarProps) {
  return (
    <nav>
      <ul
        className={`flex ${
          mobile
            ? "flex-col gap-5 text-center"
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