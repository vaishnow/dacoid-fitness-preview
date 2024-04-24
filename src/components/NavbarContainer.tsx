import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = { children: ReactNode };
const NavbarContainer = ({ children }: Props) => {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
};
export default NavbarContainer;
