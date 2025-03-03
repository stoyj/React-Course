import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {/*✅<Steps />
          ✅Извиква друг компонент Steps. */}
      <Steps />

      {/*✅<StepMessage step={1}>...</StepMessage> и <StepMessage step={2}>...</      StepMessage>
          ✅Динамично рендиране на съдържание чрез пропс.
          ✅За всяка от стъпките (step={1} и step={2}) се изпращат различни дете елементи (children), които съдържат HTML тагове (<p>) и емотикони. 
          ✅Пропсът step контролира какво ще се показва в компонента StepMessage.
          ✅Компонентът StepMessage използва prop step и деца (children), които се предават между отварящия и затварящия таг на компонента*/}
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // ✅step е променлива на състоянието, която държи текущата стъпка-setStep е функция за актуализиране на step-useState(1) задава началната стойност на step като 1.
  // ✅ isOpen е булева променлива на състоянието, която контролира дали е отворено. -useState(true) задава начална стойност true, което означава, че е отворено.

  // const [test, setTest] = useState({ name: "Jonas" });

  // ✅При натискане на бутона handlePrevious() ще намали step, ако не сме на първата стъпка.
  // ✅Това е функция за обработка на бутон ("Предишна стъпка") в React компонент, който използва useState за управление на състоянието на стъпките (step).
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // ✅Проверява дали step е по-голямо от 1: - setStep е функция като намалява стойността му с 1:
    // ✅Бутонът е деактивиран (disabled={step === 1}), за да предотвратим връщане преди стъпка 1.
  }

  // ✅Обработва се чрез бутон onClick={handleNext}.
  function handleNext() {
    //✅Проверява дали step е по-малко от 3:
    if (step < 3) {
      setStep((s) => s + 1);
      //✅Актуализира step, като го увеличава с 1:
      // setStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    // ✅Добавя събитие onClick, което се изпълнява при натискане на бутона
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {/*✅ Ако isOpen е true, става false, и обратно.
          ✅Ако isOpen === false, нищо няма да се покаже.
          ✅Създава div с клас "steps", който съдържа числа (етапи на процеса).
          ✅Клас active за текущата или преминатите стъпки: */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* ✅Step {step}: Използва React JSX интерполация {}, за да покаже текущата стъпка (step). */}
          <StepMessage step={step}>
            {messages[step - 1]}
            {/* ✅{messages[step - 1]} Извлича съобщението за текущата стъпка от масива messages, като индексира с step - 1 (защото масивите в JavaScript започват от 0).  */}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          {/* ✅Създава бутон <button> с CSS клас "close" */}
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ✅StepMessage. Той приема props (параметри), включително step и children, и рендира съдържание въз основа на тях
function StepMessage({ step, children }) {
  return (
    // ✅Компонентът връща <div>, който съдържа клас "message".
    // Това ще може да се използва за стилизиране на този компонент с CSS
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
