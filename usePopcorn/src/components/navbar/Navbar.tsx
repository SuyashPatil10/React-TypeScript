import type { ReactNode } from "react";
import Logo from "./Logo";

type NavbarProps = {
  children: ReactNode;
};

function Navbar({ children }: NavbarProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
