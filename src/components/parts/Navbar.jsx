import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/gkc.png";
import elementComponent from "../elements/template";
import DrawerMenu from "./DrawerMenu";
import NavLinks from "../../lib/path/index";
import DrawerLink from "./DrawerLink";
const { Nav } = elementComponent;

const Navbar = () => {
  const [drawMenuOpen, setMenu] = useState(false);
  return (
    <Nav>
      <div className="container mx-auto px-5 py-4">
        <div className="flex font-mont items-center justify-between">
          <div className="flex gap-4 items-center">
            <img className="w-14 h-14" id="image" src={logo} alt="logo" />
            <div>
              <p className="font-extrabold text-2xl ">GKC Towing</p>
              <small className="text-[14px]">Gatot kaca Nusantara</small>
            </div>
          </div>
          <div className="hidden lg:flex gap-10">
            {NavLinks.map((link) => (
              <DrawerLink key={link.key} link={link} setMenu={setMenu} />
            ))}
          </div>
          <div className="sm:block md:hidden cursor-pointer  lg:hidden ">
            <FiMenu onClick={() => setMenu(true)} size={30} />
          </div>

          <div className="hidden md:block cursor-pointer lg:hidden">
            <FiMenu onClick={() => setMenu(true)} size={30} />
          </div>
        </div>
      </div>
      <DrawerMenu drawMenuOpen={drawMenuOpen} setMenu={setMenu} />
    </Nav>
  );
};

export default Navbar;
