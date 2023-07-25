import React from "react";
import styles from "./Header.module.css";
import Person from "../../assets/SvgIcons/Person.svg";
import heart from "../../assets/SvgIcons/outline.svg";
import cart from "../../assets/SvgIcons/Cart.svg";
import sun from "../../assets/image/sun4.png";
import moon from "../../assets/image/moon4.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [favoritesIndic, setFavoritesIndic] = useState(2);
  const [cartIndic, setCartIndic] = useState(4);
  const [theme, setTheme] = useState(true);

  function handleMan() {
    alert(1);
  }
  function handleWomen() {
    alert(2);
  }
  function handleTheme() {
    setTheme(!theme);
  }
  return (
    <div className={styles.header}>
      <div className={styles.blackLine}>
        <div className={styles.navBar}>
          <button
            className={theme ? styles.themeButton : styles.themeButtonDark}
            onClick={handleTheme}
          >
            <div id={styles.slider}>
              <img src={theme ? sun : moon} alt="sun || moon" />
            </div>
          </button>
          <Link className={styles.link} to="#">
            Отслеживание заказа
          </Link>
          <Link className={styles.link} to="#">
            Контакты
          </Link>
        </div>
        <div className={styles.profileBar}>
          <div className={styles.bar1}>
            Eng / $<div className={styles.subBar1}>&or;</div>
          </div>
          <div className={styles.bar2}>
            <img src={Person} alt="person" />
            <div className={styles.subBar2}>
              <div>Войти</div>/<div>Регистрация</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whiteLine}>
        <span className={styles.logo}>B O O M Z I</span>
        <ul className={styles.categoriesBar}>
          <li onClick={handleMan}>Для мужчин</li>
          <li onClick={handleWomen}>Для женщин</li>
        </ul>
        <div className={styles.iconsBar}>
          <Link to="/favorites" className={styles.favoritesBar}>
            <img src={heart} alt="heart" />
            <div className={styles.favoritesIndic}>{favoritesIndic}</div>
          </Link>
          <Link to="/cart" className={styles.cartBar}>
            <img src={cart} alt="heart" />
            <div className={styles.cartIndic}>{cartIndic}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}