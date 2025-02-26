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
import React from "react";
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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"};
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

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

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/*{pizzaObj.soldOut ? (
        <span>SOLD OUT</span>
        ) : (
         <span>{pizzaObj.price}</span>
        )}*/}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

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
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
