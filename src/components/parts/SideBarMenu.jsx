import React from "react";
import { CgCloseR } from "react-icons/cg";
import { NavLinks } from "../../lib/path";
import SideBarLink from "./SideBarLink";
import { clsx } from "clsx";

const SideBarMenu = ({ sideMenuOpen, setMenu }) => {
  return (
    <section className="sidebar lg:hidden">
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500",
          sideMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenu(false)}
      ></div>
      <div
        className={clsx(
          "fixed left-0 top-0 h-full w-56 md:w-96 bg-white shadow-lg transform transition-transform duration-500 ease-in-out",
          sideMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <CgCloseR
            onClick={() => setMenu(false)}
            size={30}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col p-8 gap-4">
          {NavLinks.map((link) => (
            <SideBarLink key={link.key} link={link} setMenu={setMenu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBarMenu;
