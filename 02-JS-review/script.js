const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//  Destrcucturing-Деструктуриране

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Arrays-Масиви with Rest/Spread Operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ["epic fantasy", ...genres];
newGenres;

// object-обект
const updatedBook = {
  ...book,
  // Adding a new property-Добавяне на нов имот
  moviePublicationDate: "2001-12-19",
  //  Overwriting an existing property-Презаписване на съществуващо свойство
  pages: 1210,
};
updatedBook;

// Arrow Functions-Функции на стрелките
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Template Literals-Шаблонни литерали
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Ternaries instead of if/else-Тернари вместо if/else
// Statements-Изявления
// Ternaries-има-3-части
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// Short-Circuiting And Logical Operators: &&, ||, ??-Късо съединение и логически оператори: &&, ||, ??
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, ' ', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT  TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no date";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no date";
// count;

// Optional Chaining

// 1.Разбери концепцията за Optional Chaining (?.) -Верижно свързване

// Това е оператор, който позволява достъп до вложени свойства без да хвърля грешка, ако някое от тях е undefined или null.

// Вместо да проверяваме ръчно с if, използваме ?., което прави кода по-изчистен и кратък.

// 2.Разбери концепцията за Разбери концепцията за Nullish Coalescing (??) -нулево сливане(??)

// Този оператор (??) задава стойност по подразбиране, ако дадено свойство е null или undefined.

// В кода librarything ?? 0 гарантира, че ако librarything е undefined, резултатът ще е 0.

// Защо този начин е най-добър?

// ✅ По-чист и кратък код – избягваме вложени if проверки и && оператори.

// ✅ Предотвратява грешки – без Optional Chaining, ако book.reviews не съществува, кодът ще хвърли грешка.

// ✅ По-лесен за четене – веднага става ясно, че проверяваме за undefined и използваме стойност по подразбиране.

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// The Array map Method
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// 1.Разбиране на метода .map()

// .map() е метод на масивите в JavaScript, който създава нов масив, като трансформира всеки елемент от оригиналния масив.

// Важното тук е, че .map() връща нов масив със същия брой елементи, но с модифицирани стойности.

// 2. Защо този начин е най-добър?

// ✅ Кратък и ясен синтаксис – използва arrow function, което прави кода по-четим.

// ✅ Използва функционално програмиране – вместо for цикъл, .map() автоматично преминава през всички елементи.

// ✅ Създава нов масив, без да променя оригинала – това подобрява чистотата на кода (immutable data).

const titles = books.map((books) => books.title);
titles;

const essentialDate = books.map((books) => ({
  title: books.title,
  author: books.author,
  reviewsCount: getTotalReviewCount(books),
}));

essentialDate;

// The Array filter Mathod

// 1.Разбиране на метода .filter()

// .filter() връща нов масив, съдържащ само елементите, които отговарят на дадено условие.

// Всеки елемент преминава през функцията, ако върне true, остава в новия масив, ако върне false, се изключва.

// 2.Комбиниране на .filter() и .map()

// След като филтрираме резултатите, .map() ни помага да извлечем само желаните свойства.

// 3.Защо този начин е най-добър?
// ✅ По-лесен за четене и разбиране – използваме декларативен стил вместо for цикли.

// ✅ Не променя оригиналния масив – .filter() създава нов масив, което подобрява четимостта и надеждността.

// ✅ Позволява верижни трансформации – можем лесно да комбинираме .filter() с .map() за по-гъвкави операции.
const longBooksWithMovie = books
  .filter((books) => books.pages > 500)
  .filter((books) => books.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((books) => books.title);

adventureBooks;

// The Array reduce Method

// 1.Разбиране на .reduce()

// .reduce() се използва за агрегиране на стойности в масив (например, сумиране на числа).

// Приема callback функция и начална стойност.

// Callback функцията има два основни аргумента:

// 1.accumulator (натрупваща променлива – тук sum).
// 2.currentValue (текущ елемент от масива – тук books).

// 3. Защо този начин е най-добър?
// ✅ По-ефективен от for цикъл – не създава допълнителни променливи.

// ✅ По-кратък и четим код – .reduce() прави точно това, от което имаме нужда.

// ✅ Гъвкавост – може да се използва за сумиране, броене, групиране и други операции.
const pagesAllBooks = books.reduce((sum, books) => sum + books.pages, 0);
pagesAllBooks;

// The Array sort Method

// Най-добрият начин да разбереш и научиш този код е чрез разбиране на .sort(), използване на .slice() и практика с различни примери.
// .slice() създава копие на arr, за да не го променя.
// .sort((a, b) => a - b) сортира числата във възходящ ред.

// const arr = [3, 7, 1, 9, 6];
// const sorted = arr.slice().sort((a, b) => a - b);

// console.log(sorted); // [1, 3, 6, 7, 9]
// console.log(arr);    // [3, 7, 1, 9, 6] (НЕ е променен)

// 1.Разбиране на метода .sort()

// .sort() подрежда елементите в масива, но променя оригиналния масив!
// Приема callback функция (a, b), която определя реда:

// Ако a - b < 0 → a идва преди b (възходящ ред).
// Ако a - b > 0 → b идва преди a (низходящ ред).
// Ако a - b === 0 → редът остава непроменен.

// 2.Защо този начин е най-добър?
// ✅ Не променя оригиналния масив – използването на .slice() предотвратява неочаквани промени.
// ✅ Използва .sort() с числово сравнение – a - b е правилният начин за сортиране на числа.
// ✅ Работи със сложни обекти – сортиране по pages в books е често срещан случай.

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// Working With Immutable Arrays

//  1.Разбиране на неизменяемите (immutable) масиви
// ➡️ В JavaScript масивите и обектите се предават по референция.
// ➡️ Ако модифицираш оригиналния масив, можеш неочаквано да промениш други части от кода.
// ➡️ Затова е добра практика да не променяме оригиналния масив, а вместо това да създаваме нов, базиран на стария.

// 📌 Как работи?
// ...books разгръща (spread) всички елементи от books в нов масив.
// newBook се добавя като последен елемент.
// Оригиналният books остава непроменен.

// 2. Защо този начин е най-добър?
// ✅ Оригиналният масив не се променя – избягваме нежелани ефекти.
// ✅ Кодът е по-четим и кратък – използването на spread оператор (...) прави кода елегантен.
// ✅ По-лесно за дебъгване – можем да следим промените в booksAfterAdd, без да се притесняваме за оригинала.
// ✅ Подходящо за React и функционално програмиране – много библиотеки като React изискват неизменяеми данни.
// ✅ Работа с неизменяеми масиви е по-сигурна и добра практика.
// ✅ spread (...), .map() и .filter() създават нови масиви без да променят оригинала.
// ✅ Подходящо за React и функционално програмиране.

// 1. Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Delete book object from array
// 📌 Как работи?
// booksAfterAdd.filter(...) – преминава през всеки елемент в booksAfterAdd.
// books.id !== 3 – оставя само книгите, чието id НЕ Е 3.
// Връща нов масив без книгата с id: 3.

// Защо този начин е най-добър?
// ✅ Запазва неизменяемостта (immutability) – не променя оригиналния масив.
// ✅ Ясна и кратка синтактична структура – .filter() е лесен за четене и разбиране.
// ✅ Работи добре в React и функционално програмиране – избягва директни промени в данните.
// ✅ Правилен начин с .filter():
// const booksAfterDelite = booksAfterAdd.filter((book) => book.id !== 3);
// 📌 Ако искаме да изтрием няколко книги, използваме !includes():
// const booksAfterDeliteMultiple = booksAfterAdd.filter((book) => ![2, 3].includes(book.id));
// ➡️ Това ще изтрие книгите с id 2 и 3.
// ✅ .filter() е мощен и безопасен начин за изтриване на елементи.
// ✅ Не променя оригиналния масив, което прави кода по-сигурен и предвидим.
const booksAfterDelite = booksAfterAdd.filter((books) => books.id !== 3);
booksAfterDelite;

// 3. Update book object in the array
// 📌 Как работи?
// booksAfterDelite.map(...) – обхожда всеки елемент от booksAfterDelite.
// books.id === 1 – проверява дали id на книгата е равно на 1.
// ? { ...books, pages: 1210 } : books –
// Ако условието е вярно, създава нов обект с актуализирана стойност на pages (с spread оператора ...books).
// Ако условието е лъжа, връща оригиналния обект books.

// ✅ Правилен начин с .map():
// const booksAfterUpdate = booksAfterDelite.map((book) =>
// book.id === 1 ? { ...book, pages: 1210 } : book
// );

// Защо този начин е най-добър?
// ✅ .map() е мощен и безопасен начин за актуализиране на елементи в масив.
// ✅ Не променя оригиналния масив, което прави кода по-сигурен и предвидим.
// ✅ Запазва неизменяемостта (immutability) – не променя оригиналния масив, а връща нов.
// ✅ Чист и четим код – използването на .map() и spread оператор прави кода елегантен.
// ✅ Подходящо за React и функционално програмиране – работи с неизменяеми данни.
const booksAfterUpdate = booksAfterDelite.map((books) =>
  books.id === 1 ? { ...books, pages: 1210 } : books
);
booksAfterUpdate;

// Asynchronous JavaScript: Promises

// 1.Разбиране на асинхронността в JavaScript
// JavaScript е однопоточен – изпълнява код последователно, което означава, че всяка операция трябва да завърши, преди следващата да започне.
// Асинхронните операции (като HTTP заявки) не блокират основния поток и позволяват на програмата да продължи с изпълнението, докато чака отговор.
// Promises предлагат начин за управление на асинхронни операции, като предоставят механизъм за работа с резултата от асинхронна операция, когато тя завърши.

// 📌 Как работи?
// fetch("https://jsonplaceholder.typicode.com/todos") – изпраща HTTP GET заявка до предоставения URL и връща Promise.
// .then((res) => res.json()) – когато заявката е успешна, методът res.json() извлича JSON данните от отговора. Този метод също връща Promise, което позволява да се използва следващото .then().
// .then((data) => console.log(data)) – когато JSON данните са готови, те се предават на следващата функция, която ги отпечатва в конзолата.
// console.log("jonas") – Тази линия се изпълнява незабавно, без да чака отговора от fetch, тъй като fetch е асинхронен.
// ✅ Правилен начин с Promises:
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => res.json())
// .then((data) => console.log(data));

//  Защо този начин е най-добър?
// ✅ Непрекъснато изпълнение на кода – асинхронните операции не блокират основния поток, което подобрява производителността.
// ✅ Лесно управление на асинхронни операции – Promises предоставят ясна структура за работа с асинхронност, като .then() и .catch() за обработка на успех и грешки.
// ✅ Четивност и яснота – кодът е по-лесен за разбиране в сравнение с callback функции, особено когато работим с последователни асинхронни операции.

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

// Asynchronous JavaScript: Async/Await

// Разбиране на Async/Await

// Async/Await е синтаксис, който позволява по-лесно и четимо управление на асинхронен код в JavaScript.

// async функция връща Promise и позволява да се използва await за "чакане" на завършването на Promise.

// await спира изпълнението на функцията, докато Promise не бъде решен (resolved) или отхвърлен (rejected).

// ✅ Правилен начин с Async/Await:
// async function getTodos() {
// const res = await fetch("https://jsonplaceholder.typicode.com/todos");
// const data = await res.json();
// console.log(data);
// }

// 📌 Как работи?
// async function getTodos() – определя асинхронна функция, която може да използва await.

// const res = await fetch(...) – изпраща HTTP GET заявка и "изчаква" отговора от fetch, без да блокира основния поток.

// const data = await res.json() – изчаква преобразуването на отговора в JSON формат.

// console.log(data) – отпечатва получените данни, когато те са налични.

// console.log("jonas") – тази линия се изпълнява незабавно, без да чака getTodos().

//  Защо този начин е най-добър?
// ✅ По-четим код – Async/Await синтаксисът е по-интуитивен и близък до синхронния код, което улеснява разбирането.
//  ✅ Лесно управление на грешки – можете да използвате try/catch, за да обработвате грешки, което е по-ясно в сравнение с .catch() при Promises.
//  ✅ Непрекъснато изпълнение на кода – асинхронните операции не блокират основния поток, подобрявайки производителността.

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("jonas");
