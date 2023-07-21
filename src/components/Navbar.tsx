export default function NavBar() {
  return (
    <nav className="flex justify-between text-white">
      <span className="font-bold">Logo</span>
      <ul className="flex gap-4 md:gap-12 text-sm md:text-base">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#review">Review</a>
        </li>
      </ul>
    </nav>
  );
}
