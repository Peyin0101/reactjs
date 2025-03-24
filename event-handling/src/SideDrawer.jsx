import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Sidedrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const SideDrawerContent = () => {
    return (
      <>
        {isOpen && <div className="overlay" onClick={closeMenu} />}

        <div className={`side-drawer ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <>
      <button onClick={toggleMenu} className="menu-btn">
        Menu
      </button>
      {ReactDOM.createPortal(<SideDrawerContent />, document.body)}
    </>
  );
}
