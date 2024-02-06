import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import home from "../assets/home-event.svg";
import search from "../assets/search.svg";

const menuItems = [
  { icon: "../assets/icon1.svg", text: "메뉴1" },
  { icon: "../assets/icon2.svg", text: "메뉴2" },
];

const NavBar = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const renderMenuItems = () => (
    <div className="menu-overlay">
      <p>This is not implemented!!</p>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.icon} alt={item.text} />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
  const handleNavOpen = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const menuTrigger = document.querySelector(".navbar__menu");
      const menuOverlay = document.querySelector(".menu-overlay");

      if (
        menuTrigger &&
        menuOverlay &&
        !menuTrigger.contains(target) &&
        !menuOverlay.contains(target)
      ) {
        setIsNavOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="flex flex-row green gap-5 justify-center self-center items-center">
          <div className="navbar__logo">Testvalley</div>
          <div className="navbar__menu">
            <CiMenuBurger className="inline" onClick={handleNavOpen} /> 신규
            감상어
          </div>
        </div>
        <div
          className={`navbar__search ${
            isInputFocused ? "focused" : ""
          } flex flex-row items-center`}
        >
          <img src={search} alt="search-img" className="mx-3" />
          <input
            type="text"
            id="search"
            placeholder="반가워요 고민되면 검색해보세요!"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
        </div>
        <div className="navbar__items">
          <img src={home} alt="home-nav-bar-login" className="navbar_item" />
          <div className="navbar_item vertical-divider"></div>
          <div className="navbar__item">로그인/회원가입</div>
        </div>
      </header>
      {isNavOpen && renderMenuItems()}
    </>
  );
};

export default NavBar;
