import { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebarMenuBtn from "../../img/sidebar_menu.svg"

const Sidebar = () => {
  let name: string = "Eli Krasiuchenko";
  let year: number = new Date().getFullYear();
  type Link = {
    link: string,
    name: string,
  }
  let links:Array<Link> = [
    { link: "/home", name: "Home", },
    { link: "/resume", name: "Resume",},
    { link: "/portfolio", name: "Portfolio", },
    { link: "/contact", name: "Contact", },
  ];
  let linksMapped = links.map((link) => {
    return <NavLink 
    className={({isActive})=> isActive ? 'active rounded' : 'sidebar_link'} 
    to={link.link}>{link.name}
    </NavLink>
  });
  return (
    <>
    <div className="sidebar bg-slate-900 text-slate-300 z-1">
      <div className="sidebar_logo">justWeb Logo</div>
      {linksMapped}
      <p className="sidebar_footer">
        <span>© {year} {name}</span>
      </p>
    </div>
    </>
  );
};

export default Sidebar;
