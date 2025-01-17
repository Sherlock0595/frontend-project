import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import Person from "../../../assets/SvgIcons/Person1.svg";
import Heart from "../../../assets/SvgIcons/outline.svg";
import Paypal from "../../../assets/SvgIcons/paypal.svg";
import imgMin from "../../../assets/image/imageMin.png";
import Shipping from "./Shipping";

const ItemsReview = () => {

  return (
    <>
      <div className={styles.itContainer}>
        <div className={styles.checkout}>
          <h2>Оформление заказа</h2>
          <Link to="/">Вернуться к покупкам</Link>
        </div>
        <div className={styles.singIn}>
          <img src={Person} alt="person" />
          <p>
            Все еще не зарегестрированы? <Link to="/">Зарегестрируйтесь</Link>{" "}
            для быстрого оформления заказа
          </p>
        </div>
        <div className={styles.line}></div>
        <h3>1. Товары в корзине</h3>
        <div className={styles.clothesContainer}>
          <div className={styles.cloth}>
            <img src={imgMin} alt="clothMin" />
            <div className={styles.clothDescr}>
              <div className={styles.clothName}>
                Basic hooded sweatshirt in pink
              </div>
              <div className={styles.clothProp}>
                <p>
                  Цвет: <span>розовый</span>{" "}
                </p>{" "}
                <p>
                  Размер: <span>S</span>
                </p>
              </div>
            </div>
            <div className={styles.counterBlock}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className={styles.infoBlock1}>
              <div className={styles.discountPrice}>$15.50</div>
              <div className={styles.price}>$31.00</div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.delete}>Удалить</button>
              <div>
                <div>Добавить в</div>
                <img src={Heart} alt="favorite" />
              </div>
            </div>
          </div>
          <div className={styles.subTotal}>Сумма покупки : 0</div>
        </div>
        <h3>2.Информация о доставке</h3>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label htmlFor="firstName" className={styles.inputLabel}>
              Имя:
            </label>
            <input
              type="text"
              id="firstName"
              className={styles.inputField}
              placeholder="Введите имя"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="lastName" className={styles.inputLabel}>
              Фамилия:
            </label>
            <input
              type="text"
              id="lastName"
              className={styles.inputField}
              placeholder="Введите фамилию"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label htmlFor="Email" className={styles.inputLabel}>
              Email :
            </label>
            <input
              type="text"
              id="Email"
              className={styles.inputField}
              placeholder="Введите Email"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="Phone" className={styles.inputLabel}>
              Телефон:
            </label>
            <input
              type="text"
              id="phone"
              className={styles.inputField}
              placeholder="Ваш номер телефона"
            />
          </div>
        </div>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" id="confirmCheckbox" />
          <label htmlFor="confirmCheckbox">
            Адрес доставки и оплаты совпадает?
          </label>
        </div>
        <div className={styles.line}></div>
        <h3>3.Метод доставки</h3>

        <div className={styles.deliveryMethods}>
          <div className={styles.deliveryMethod}>
            <input type="radio" name="delivery" id="method2" value="method2" />
            <label htmlFor="method2">Курьерская доставка</label>
            <span className={styles.priceDelivery}>250 руб.</span>
          </div>

          <div className={styles.deliveryMethod}>
            <input type="radio" name="delivery" id="method1" value="method1" />
            <label htmlFor="method1">Самовывоз</label>
            <span className={styles.priceDelivery}>Бесплатно</span>
          </div>

          <div className={styles.deliveryMethod}>
            <input type="radio" name="delivery" id="method3" value="method3" />
            <label htmlFor="method3">Почта России</label>
            <span className={styles.priceDelivery}>200 руб.</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <h3>4.Оплата</h3>

        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}></div>
          <div className={styles.payMethods}>
            <div className={styles.payMethod}>
              <input type="radio" name="pay" id="pay1" value="pay1" />
              <label htmlFor="pay1">Pay Pal</label>
              <img src={Paypal} alt="Paypal" />
            </div>
            <div className={styles.payMethod}>
              <input type="radio" name="pay" id="cash" value="cash" />
              <label htmlFor="cash">Заплатить при получении</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsReview;
