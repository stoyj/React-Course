// import { useState } from "react"; е част от React и използва деструктуриращ импорт за извличане на useState от библиотеката React.
import { useState } from "react";

// Декларира константна променлива messages с помощта на const.
// Създава масив (Array) от низове (strings), които съдържат текст и емоджита
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// Декларира и експортира по подразбиране (export default) функция, наречена App.
// export default позволява този компонент да бъде импортиран в друг файл без използване на {}.
export default function App() {
  return (
    // JSX структурата съдържа <div>, който включва два <Steps /> компонента:
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

// Това е началото на React функционален компонент, наречен Steps. Той използва React Hook-а useState, за да управлява две състояния.
function Steps() {
  const [step, setStep] = useState(1);
  // step е променлива на състоянието, която държи текущата стъпка-setStep е функция за актуализиране на step-useState(1) задава началната стойност на step като 1.

  const [isOpen, setIsOpen] = useState(true);
  // isOpen е булева променлива на състоянието, която вероятно контролира дали е отворено. -useState(true) задава начална стойност true, което означава, че е отворено.

  // const [test, setTest] = useState({ name: "Jonas" });

  // Това е функция за обработка на бутон ("Предишна стъпка") в React компонент, който използва useState за управление на състоянието на стъпките (step).
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // Проверява дали step е по-голямо от 1: - setStep е функция като намалява стойността му с 1:
    // ✅ При натискане на бутона handlePrevious() ще намали step, ако не сме на първата стъпка.
    // ✅Бутонът е деактивиран (disabled={step === 1}), за да предотвратим връщане преди стъпка 1.
  }

  // Това е функция, която управлява превключването към следващата стъпка в React компонент. Използва useState за управление на състоянието (step).
  function handleNext() {
    // Проверява дали step е по-малко от 3:
    if (step < 3) {
      setStep((s) => s + 1);
      // // Актуализира step, като го увеличава с 1:
      // setStep((s) => s + 1);

      // ✅Предотвратява преминаване над 3-та стъпка.
      // ✅Използва функционална актуализация setStep((s) => s + 1).
      // ✅Обработва се чрез бутон onClick={handleNext}.
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      {/*.Добавя събитие onClick, което се изпълнява при натискане на бутона
      Ако isOpen е true, става false, и обратно. */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        //✅ Условно рендиране с isOpen && (...)
        //✅Ако isOpen === true, тогава JSX кодът вътре ще се покаже.
        //✅Ако isOpen === false, нищо няма да се покаже.
        //✅Създава div с клас "steps", който съдържа числа (етапи на процеса).
        //✅Клас active за текущата или преминатите стъпки:
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/*✅<p className="message"> - Това създава <p> (параграф) с клас "message" за стилове.
              ✅Step {step}: Използва React JSX интерполация {}, за да покаже текущата стъпка (step).
              ✅{messages[step - 1]} Извлича съобщението за текущата стъпка от масива messages, като индексира с step - 1 (защото масивите в JavaScript започват от 0).  */}
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          {/*✅Създава бутон <button> с CSS клас "close" */}
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              {/*✅handlePrevious: Намалява step, но не позволява да падне под 1. */}
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              {/*✅handleNext: Увеличава step, но не над 3. */}
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
