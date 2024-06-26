import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ link, setMenu }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={clsx(pathname === link.path ? "text-[#118ace]" : "text-black")}
      onClick={() => setMenu(false)}
    >
      <li className="list-none py-2">{link.label}</li>
    </Link>
  );
};

export default SideBarLink;
