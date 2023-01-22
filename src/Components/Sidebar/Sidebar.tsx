import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import sidebarMenuBtn from "../../img/sidebar_menu.svg"
import logo1 from "../../img/logo1.svg"
import logo2 from "../../img/logo2.svg"


const Sidebar = () => {
  const [active, setActive] = useState(false)
  const location = useLocation()
  let name: string = "Eli Krasiuchenko";
  let year: number = new Date().getFullYear();
  type Link = {
    link: string,
    name: string,
  }
  let links:Array<Link> = [
    { link: "/home", name: "Home", },
    { link: "/portfolio", name: "Portfolio", },
    // { link: "/contact", name: "Contact", },
  ];
  let linksMapped = links.map((link,index) => {
    return <NavLink 
    key={index}
    className={location.pathname === link.link ? 'active rounded' : 'sidebar_link'}
    to={link.link}>{link.name}
    </NavLink>
  });
  useEffect(()=> {
    
  })
  return (
    <>
    <div className="sidebar bg-slate-900 text-slate-300 z-1">
      <div className="sidebar_logo"><img src={logo2} alt="" /></div>
      {linksMapped}
      <p className="sidebar_footer">
        <span>© {year} {name}</span>
      </p>
    </div>
    </>
  );
};

export default Sidebar;
