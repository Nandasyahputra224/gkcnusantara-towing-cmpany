import React, { useState } from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/gkc.png";
import elementComponent from "../elements/template";
import SideBarMenu from "./SideBarMenu";
import { NavLinks } from "../../lib/path";
import SideBarLink from "./SideBarLink";
const { Nav } = elementComponent;

const Navbar = () => {
  const [sideMenuOpen, setMenu] = useState(false);
  return (
    <Nav>
      <div className="container mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img className="w-14 h-14" id="image" src={logo} alt="logo" />
            <div>
              <p className="font-extrabold text-2xl ">GKC Towing</p>
              <small className="text-[14px]">Gatot kaca Nusantara</small>
            </div>
          </div>
          <div className="hidden lg:flex gap-10">
            {NavLinks.map((link) => (
              <SideBarLink key={link.key} link={link} />
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
      <SideBarMenu sideMenuOpen={sideMenuOpen} setMenu={setMenu} />

      {/* <div className="navbar justify-between items-center py-4 px-28">
        <div className="cursor-pointer gap-4">
          <div className="logo w-16">
            <img id="image" src={logo} alt="logo" className="w-full h-auto" />
          </div>
          <div>
            <p className="font-extrabold text-2xl">GKC Towing</p>
            <small className="text-[14px]">Gatot kaca Nusantara</small>
          </div>
        </div>
        <div>
          <ul className="flex space-x-7">
            <li>
              <Link
                className={clsx(
                  location.pathname === "/" ? "text-[#118ace]" : ""
                )}
                to="/"
              >
                <p>Beranda</p>
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  location.pathname === "/tentang-kami" ? "text-[#118ace]" : ""
                )}
                to="/tentang-kami"
              >
                <p>Tentang Kami</p>
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  location.pathname === "/blog" ? "text-[#118ace]" : ""
                )}
                to="/blog"
              >
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  location.pathname === "/hubungi-kami" ? "text-[#118ace]" : ""
                )}
                to="/hubungi-kami"
              >
                <p>Hubungi Kami</p>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </Nav>
  );
};

export default Navbar;
