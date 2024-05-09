import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/pawLogo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.menuButton}
          >
            {menuOpen ? <RiCloseFill /> : <RxHamburgerMenu />}
          </button>
          {menuOpen && (
            <div className={styles.navContainer}>
              <button className={styles.buttonOutline}>Donate</button>

              <nav>
                <ul className={styles.navLinks}>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Cats</a>
                  </li>
                  <li>
                    <a href="#services">Dogs</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
