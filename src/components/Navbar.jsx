import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
        <div className={`hamburger-lines ${isOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <a href="#quienes-somos" onClick={toggleMenu}>
          Quiénes Somos
        </a>
        <a href="#minutines" onClick={toggleMenu}>
          Minutines Research
        </a>
        <a href="#mopongo-art" onClick={toggleMenu}>
          Mopongo Art
        </a>
        <a href="#only-mopongos" onClick={toggleMenu}>
          Only Mopongos
        </a>
        <a href="#ec-live" onClick={toggleMenu}>
          EC Live
        </a>
        <a href="#join-us" onClick={toggleMenu}>
          Únete
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
