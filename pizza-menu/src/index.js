// 1. import React from "react";
// Този ред импортира основната библиотека React.
// 🔹 Защо е необходим?
// React осигурява базовата функционалност за работа с компоненти. В по-новите версии на React (17 и 18) не е задължително ръчно да импортираш React, когато използваш JSX, но все още е добра практика в някои случаи.

// 2. import ReactDOM from "react-dom/client";
// Този ред зарежда ReactDOM, който е библиотека за рендиране на React компоненти в реалния DOM.
// 🔹 Защо е необходим?
// React сам по себе си работи с виртуален DOM, но за да може да покаже нещо в уеб страницата, е нужно ReactDOM. В React 18 използваме "react-dom/client", защото то съдържа нов API за рендиране, наречен createRoot (по-ефективен от стария ReactDOM.render).
// Пример за използване:
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// 3. import "./index.css";
// Това зарежда CSS файл, който стилзира приложението.
// 🔹 Защо е необходим?
// Това е начин да добавим стили към нашето приложение директно чрез JavaScript модули. В Webpack или Vite, който обикновено се използва с React, CSS файловете се обработват автоматично.

// Обобщение:

// import React from "react"; – зарежда React библиотеката (не винаги нужно в новите версии).

// import ReactDOM from "react-dom/client"; – използва новия API за рендиране в DOM (React 18).

// import "./index.css"; – добавя стилове към приложението.
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Този код дефинира масив от обекти в JavaScript, наречен pizzaData, който съдържа информация за различни видове пици.

// Всеки елемент в масива е обект, който описва определен вид пица. Обектите имат следните свойства:

// 1.name – Името на пицата (пример: "Focaccia", "Pizza Margherita").
// 2.ingredients – Описание на съставките (пример: "Tomato and mozarella").
// 3.price – Цена на пицата (пример: 6, 10, 12).
// 4.photoName – Път до изображението на пицата (пример: "pizzas/focaccia.jpg").
// 5.soldOut – Булева стойност (true или false), която показва дали пицата е разпродадена.

// 🧐 Защо е важно да разбереш този код?

// 1.Работа с масиви и обекти

// Това е структурирани данни, които често се използват в реални приложения, особено в уеб разработката.
// Ще трябва да извличаш, филтрираш и показваш тези данни (например, да покажеш само наличните пици).

// 2.Използване в React компоненти
// В React можеш да използваш map() върху pizzaData, за да рендираш списък с пици в UI.
// Пример: {pizzaData.map((pizza) => (
// <Pizza key={pizza.name} pizza={pizza} />
// ))}
// Където <Pizza /> е React компонент, който приема pizza като проп-props-реквизит;

// 3.Динамична логика с soldOut
// Можеш да използваш soldOut свойството, за да промениш начина, по който показваш пиците:
// if (pizza.soldOut) {
// return <p>Sold out</p>;
// }

// 4.Работа с изображения в уеб разработката
// Свойството photoName съдържа пътя към изображението, което може да се използва в <img> таг в React:
// <img src={pizza.photoName} alt={pizza.name} />

// 🏆 Какво можеш да направиш с тези данни?
// ✅ Показване на списък с пици
// ✅ Динамично маркиране на разпродадените пици
// ✅ Изчисляване на обща цена на поръчката
// ✅ Филтриране на пици по цена или съставки
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Това е функционален компонент в React. Ето какво прави:

// function App() – Това е функция, която връща JSX (JavaScript XML), което изглежда като HTML.

// return (...) – Връща JSX структурата, която ще се визуализира на екрана.

// {/* <div className="container"> – Това е обикновен HTML <div>, но в React използваме className вместо class, защото class е запазена дума в JavaScript. */}

/* <Header />, <Menu />, <Footer /> – Това са  React компоненти, са дефинирани поотделно. */
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Какво прави този код?
// Създава React компонент (Header), който връща HTML-подобен JSX код.

// Декларира обект style, който може да съдържа CSS стилизация (но в този случай е празен {}).

// Рендерира HTML елементи:
/* {
<header> с className="header" – вероятно стиловете за този клас са дефинирани в CSS файл. 
}
*/

/* <h1> с inline стилове {style} – въпреки че сега е празен, ако добавиш стилове, те ще се приложат. */

// ✅ Динамични стилове
/*function Header() {
  const isFancy = true;
  const style = isFancy
    ? { color: "blue", fontSize: "48px" }
    : { color: "gray", fontSize: "32px" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
*/
// Този код е важен, защото показва:
//  ✔ Как се създават React компоненти
// ✔ Как се използват inline стилове в React
// ✔ Как се добавят CSS класове с className
// ✔ Как можеш да променяш стилизацията динамично
function Header() {
  // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"};
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// 📌 Какво се случва тук?
// pizzaData – Очаква се да бъде масив от пици (предварително дефиниран).
// const pizzas = pizzaData; – Зарежда този масив в променливата pizzas.
// Ако вместо това използваме const pizzas = [];, менюто ще бъде празно.
// const numPizzas = pizzas.length; – Запазва броя на наличните пици.
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  // 📌 Какво се случва тук?
  // Показва заглавие:
  // <h2>Our menu</h2>
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* Използва условен (тернарен) оператор:
      {numPizzas > 0 ? ( ... ) : ( ... )}
      Ако има повече от 0 пици, показва меню с пици.
Ако няма пици, показва съобщение:
➡️ "We're still working on our menu. Please come back later :)" */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          {/* Генерира списък с пици:
          Използва .map() за генериране на JSX компоненти от масива pizzas.
         Всеки <Pizza> компонент получава:
         pizzaObj={pizza} – цялата информация за пицата.
         key={pizza.name} – Уникален ключ за React. */}
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* ➡️ Този закоментиран код създава ръчно два компонента <Pizza> с фиксирани данни.
         ✅ Сега данните идват динамично от pizzaData, което прави кода по-гъвкав. 
         ✅ Динамично рендериране на списъци
         Този код използва .map(), за да генерира компоненти динамично.
         Ако искаш да правиш динамични списъци (като продукти, статии, коментари), трябва да разбереш този принцип.
        ✅ Условно рендериране
         Използването на numPizzas > 0 ? (...) : (...) решава дали да покаже списък с пици или съобщение.
       🔹 Това е често срещан React модел, който можеш да използваш за показване на съобщения при липса на данни.
        ✅ Компонентен подход
        Menu() използва Pizza, което означава, че можеш повторно да използваш Pizza компонент за всяка пица.
        ✅ Обобщение
        ✔ Menu() зарежда списък с пици от pizzaData
        ✔ Използва условно рендериране (numPizzas > 0 ? ... : ...)
        📌 Условно рендериране (Conditional Rendering)
        ✔ React може да рендерира различно съдържание според дадено условие.
        ✔ Генерира динамично списък с <Pizza> компоненти
        ✔ Кодът е гъвкав и лесен за разширяване*/}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// 📌 Какво прави този код?
// Pizza е компонент, който получава обект pizzaObj като пропс-props.
// console.log(pizzaObj); – отпечатва pizzaObj в конзолата, за да видиш какви данни получава компонентът.
// ➡️ Това означава, че в Pizza() ще имаме достъп до:
// ✅ pizzaObj.name → "Pizza Margherita"
// ✅ pizzaObj.ingredients-съставки → "Tomato, mozzarella, basil"
// ✅ pizzaObj.photoName → "pizzas/margherita.jpg"
// ✅ pizzaObj.price → 10
// ✅ pizzaObj.soldOut → false
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  //   Условно рендериране: ако пицата е разпродадена, не я показвай
  // if (pizzaObj.soldOut) return null;
  // ➡️ Ако разкоментираш този ред, тогава разпродадените пици няма да се показват изобщо.

  return (
    // 📌 Какво се случва тук?
    //  Обвива пицата в <li>, като ѝ дава динамичен клас:
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      {/* Ако pizzaObj.soldOut === true, класът ще бъде "pizza sold-out".
       Ако pizzaObj.soldOut === false, класът ще бъде "pizza". */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      {/* Показва снимка на пицата:
      Зарежда изображението от pizzaObj.photoName. */}
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* Показва име и съставки: */}
        {/*{pizzaObj.soldOut ? (
        <span>SOLD OUT</span>
        ) : (
         <span>{pizzaObj.price}</span>
        )}*/}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        {/* {/* Показва цена или "SOLD OUT-ИЗЧЕРПАН":
        Ако soldOut === true, ще се покаже "SOLD OUT".
        Ако soldOut === false, ще се покаже цената. 
        ✅ Компонентен подход
        Този код показва как да изграждаш динамични UI компоненти в React, които могат да се използват многократно.
        ✅ Условно рендериране
         ✔ if (pizzaObj.soldOut) return null; ➝ скрива напълно разпродадените пици
         ✔ className={pizzaObj.soldOut ? "sold-out" : ""} ➝ прилага CSS класове динамично
         ✔ {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} ➝ показва различен текст*/}
        {/* ✅ Динамични пропсове (props) 
    Този компонент работи за всяка пица, като получава информация чрез pizzaObj. */}
      </div>
    </li>
  );
}

// 📌 Какво се случва тук?
// new Date().getHours() – взема текущия час от компютъра на потребителя.
// Например, ако сега е 15:30, тогава hour = 15.
// openHour = 12 и closeHour = 22 – ресторантът работи от 12:00 до 22:00.
// isOpen = hour >= openHour && hour <= closeHour
// Проверява дали текущият час (hour) е в работното време.
// Ако hour = 15, тогава isOpen = true.
// Ако hour = 23, тогава isOpen = false.
// console.log(isOpen); – отпечатва true или false в конзолата за дебъгване.
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //  Закоментирани части (допълнителна функционалност)
  //Кодът съдържа закоментирани редове, които можеш да активираш, ако искаш повече функционалност:
  // ✔ Ако ги разкоментираш, браузърът ще показва изскачащ прозорец (alert) в зависимост от статуса на ресторанта.
  // ✔ Ако този ред бъде разкоментиран, ще рендерира само "CLOSED" и нищо друго, ако ресторантът не работи.
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  // 2. Условно рендериране
  // 📌 Какво се случва тук?
  // Ако isOpen === true, рендерира компонента <Order />.
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  // Ако isOpen === true, рендерира компонента <Order />.
  // ➡️ Това означава, че клиентът може да поръча.
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      {/* Ако isOpen === false, рендерира текстово съобщение:
      ➡️ Това казва на клиента в колко часа ресторантът отваря. */}
      <button
        className="btn"
        onClick={() => setIsOrderSubmitted(!isOrderSubmitted)}
      >
        Order
      </button>
      {isOrderSubmitted && <p>Your order is being processed.</p>}
    </div>
    // ✅ Динамично рендериране – компонентът автоматично променя съдържанието в зависимост от часа.
    //  ✅ Условно рендериране (? :) – React може да показва различни неща без if-else.
    // ✅ Компонентна архитектура – използва друг компонент <Order />, което подобрява структурата на кода.
  );
}

// React v18
// 📌 1. document.getElementById("root")
// Това намира HTML елемента:
// ➡️ Тук React ще изобрази цялото приложение.

// 📌 2. ReactDOM.createRoot() (React 18)
// ➡️ Създава "React Root", което е основната точка, където React управлява UI-то.
// 📌 Важно: createRoot() е нов в React 18 и позволява по-бърз и ефективен рендеринг.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 📌 3. root.render()
// ➡️ Показва компонента <App /> вътре в root.
// ✔ <App /> – това е главният компонент на React приложението.
// ✔ <React.StrictMode> – помага за намиране на грешки в кода, но не влияе върху UI.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));

// Подобрен код
// Това е подобрената версия на компонента Footer с всички подобрения:
/*
import { useState, useEffect } from "react";

function Footer() {
  const [hour, setHour] = useState(new Date().getHours());
  const [notify, setNotify] = useState(false);

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000); // Обновяване на часа всяка минута

    return () => clearInterval(interval);
  }, []);

  function handleNotifyMe() {
    setNotify(true);
    setTimeout(() => {
      alert("Ресторантът вече е отворен! Заповядайте!");
      setNotify(false);
    }, (openHour - hour) * 3600000); // Пресмята оставащото време до отварянето
  }

  return (
    <footer className={`footer ${isOpen ? "" : "closed"}`}>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <>
          <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
          {!notify ? (
            <button onClick={handleNotifyMe}>Уведоми ме, когато отворите</button>
          ) : (
            <p>Ще ви уведомим, когато ресторантът отвори! 😊</p>
          )}
        </>
      )}
    </footer>
  );
}

export default Footer;
*/

// Какво подобрихме?
// ✅ 1. Стилизация за затворен ресторант
// Добавихме допълнителен CSS клас "closed", който ще направим сив фон и избледнял текст.
// Добави този CSS код в стиловете си (App.css или друг стилов файл):
/*
.footer.closed {
  background-color: #333;
  color: #bbb;
  text-align: center;
  padding: 10px;
}

.footer.closed p {
  opacity: 0.7;
}

.footer button {
  background-color: #ffcc00;
  color: black;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.footer button:hover {
  background-color: #ffdd44;
}
➡️ Ако ресторантът е затворен, footer ще има сив фон и избледнял текст.*/

// ✅ 2. Динамично обновяване на часа (useState() + useEffect())
// Добавихме useState(hour) и useEffect(), за да обновяваме часа автоматично всяка минута.
/*
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000); // Обновяване на часа всяка минута

    return () => clearInterval(interval);
  }, []);
➡️ Това гарантира, че часът се актуализира без нужда от презареждане на страницата.*/

// ✅ 3. Бутон "Уведоми ме, когато отворим" (setTimeout())
// Добавихме бутон, който стартира setTimeout() и изчаква, докато ресторантът отвори.
/*
function handleNotifyMe() {
  setNotify(true);
  setTimeout(() => {
    alert("Ресторантът вече е отворен! Заповядайте!");
    setNotify(false);
  }, (openHour - hour) * 3600000); // Изчислява оставащото време до отваряне
}
Когато потребителят натисне бутона, се появява текст "Ще ви уведомим, когато ресторантът отвори! 😊".
Изчисляваме колко часа остават до отварянето и чакаме съответното време с setTimeout().
Когато времето изтече, показваме известие с alert().

Сега компонентът Footer е:
✅ По-стилен (визуална индикация за затворен ресторант).
✅ По-интерактивен (бутон за уведомяване с setTimeout()).
✅ По-динамичен (автоматично обновява часа с useEffect()).*/
