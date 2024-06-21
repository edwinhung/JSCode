// function find_missing(arr1, arr2) {
//   arr1.sort();
//   arr2.sort();
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1[i] !== arr2[i]) return arr1[i];
//   }
//   return arr1[arr1.length - 1];
// }

// console.log(find_missing([1, 2, 2, 3], [1, 2, 3]));
// console.log(find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));

// function avg(arr) {
//   sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//   return sum / arr.length;
// }

// console.log(avg([1, 2, 3, 4, 5, 10]));

// function isPangram(str) {
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabetArray = alphabetString.split("");
//   const strLower = str.toLowerCase();
//   for (let alpha of alphabetArray) {
//     if (strLower.indexOf(alpha) === -1) return false;
//   }
//   return true;
// }

// console.log(isPangram("Sphinx of black quartz, judge my vow."));

// function getCard() {
//   const RANK = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const SUIT = ["diamond", "spade", "heart", "club"];
//   return {
//     value: RANK[Math.floor(Math.random() * 13)],
//     suit: SUIT[Math.floor(Math.random() * 4)],
//   };
// }

// console.log(getCard());
// console.log(getCard());

// let bird = "bird";
// function printBird() {
//   console.log(bird);
// }
// printBird();

// // higher order functions
// // return functions
// const powerOf = function (x) {
//   // x >= 0
//   return function (num) {
//     let sum = 1;
//     for (let i = 0; i < x; i++) {
//       sum *= num;
//     }
//     return sum;
//   };
// };

// const square = powerOf(2);
// const cube = powerOf(3);
// console.log(square(2));
// console.log(cube(5));
// // forEach with index argument
// let nums = [2, 3, 4, 5, 6, 7];
// nums.forEach((num, idx) => console.log(idx, num));

// nums = [200, 500.5, 1, 99.99, 8000, 33.33];
// nums.sort((a, b) => b - a);
// console.log(nums);
// nums.sort((a, b) => a - b);
// console.log(nums);

// // string is an iterable
// let Nole = "GOAT";
// console.log(...Nole);

// let SlamRank = ["Nole", "Murray", "Med", "Sinner"];
// const [first, ...others] = SlamRank;
// console.log(first);
// console.log(others);

// // dynamic value in object
// let result = {
//   [Nole]: first,
//   others: others,
// };

// console.log(result);
// let Novak = {
//   first: "Novak",
//   last: "Djokovic",
//   nick: "Nole",
//   getName() {
//     const { first, last, nick } = this;
//     return `${first} ${last} AKA ${nick}`;
//   },
//   printName() {
//     console.log(`${this.getName()} is GOAT`);
//   },
//   ha() {
//     setInterval(function () {
//       console.log(this);
//     }, 2000);
//   },
//   haha() {
//     setInterval(() => {
//       console.log(this);
//     }, 2000);
//   },
// };

// Novak.printName();
// Novak.ha();
// Novak.haha();

// const img = document.createElement("img");
// img.src =
//   "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2156502455.jpg?c=16x9&q=h_438,w_780,c_fill";
// document.body.append(img);

// // manipulate classes
// const todoItem = document.querySelector("#todo .todo");
// todoItem.classList.add("done");
// todoItem.classList.remove("done");
// todoItem.classList.toggle("done"); // add done class if done is not present
// todoItem.classList.toggle("done"); // remove done class if done is present

// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// const boxes = document.querySelector("#boxes");
// const h2 = document.querySelector("h2");

// const pick = function (e) {
//   console.log(e);
//   h2.style.color = this.style.backgroundColor;
// };

// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   box.addEventListener("click", pick);
//   boxes.append(box);
// }

// document.body.addEventListener("keypress", function (e) {
//   console.log(e);
// });
// const form = document.querySelector("#form");
// const commitInput = document.querySelector("#commit");
// const checkbox = document.querySelector("#check");
// const sportsSelect = document.querySelector("#sports");

// formData = {};

// for (let input of [commitInput, checkbox, sportsSelect]) {
//   input.addEventListener("input", ({ target }) => {
//     const { name, type, value, checked } = target;
//     formData[name] = type === "checkbox" ? checked : value;
//   });
// }

// const submitBtn = document.querySelector("input[type='submit']");
// setTimeout(() => {
//   submitBtn.style.transform = "translateX(300px)";
//   setTimeout(() => (submitBtn.style.transform = "translateX(400px)"), 500);
// }, 500);

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [{ id: 1, username: "Jack" }],
//         "/about": "This is Home Page",
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/about")
//   .then((res) => {
//     console.log(res.status);
//     console.log(res.data);
//   })
//   .catch((res) => {
//     console.log(res.status);
//   });

// const printFilms = (data) => {
//   for (let film of data.films) {
//     console.log(film);
//   }
//   return Promise.resolve();
// };

// fetch("https://swapi.dev/api/people/2")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`We got ${res.status}`);
//     }
//     return res.json();
//   })
//   .then(printFilms)
//   .catch((err) => {
//     console.log(
//       "Network error or didn't get a response, or failed request",
//       err
//     );
//   });
// Sequential
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
//   console.log(poke1.data.name);
//   console.log(poke2.data.name);
//   console.log(poke3.data.name);
// }

// Parallell
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/4");
  console.log(prom1);
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(prom1);
  console.log(poke1.data.name);
  console.log(poke2.data.name);
  console.log(poke3.data.name);
}

get3Pokemon();
