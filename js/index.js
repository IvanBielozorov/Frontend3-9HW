// Task 1
const fruits = ["Apple", "Pear", "Banana", "Watermelon", "Lemon"];
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + 1 + " - " + array[i]);
  }
}
logItems(fruits);
// Task 2
function calculateEngravingPrice(message = "", pricePerWord) {
  const words = message.split(" ");
  let total = 0;
  for (let i = 0; i < words.length; i++) {
    total += pricePerWord;
  }
  return total;
}
console.log(calculateEngravingPrice("Hello friend", 20));
// Task 3
function findLongestWord(string) {
  const wordsArr = string.split(" ");
  let longestWord = wordsArr[0];
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
    longestWord = wordsArr[i]
    }
  }
  return longestWord;
}
findLongestWord("Hi how are you my friend")
// Task 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}
formatString("ghjfffffffffffffffffffffffffffffffffffrrrrr");
// Task 5
function checkForSpam(message) {
  const words = message.toLowerCase()
  const wordsArray = words.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "spam" || wordsArray[i] === "sale") {
      return true;
    } 
  }
   return false;
}
checkForSpam("ss yuyus spam");
// Task 6
const numbers = [];
let input;

while (true) {
  input = prompt("Введіть число");
  if (input === null) {
    break; // користувач натиснув Cancel
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    continue; // якщо не число — пропускаємо
  }
  numbers.push(input);
}
console.log(numbers);
let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
console.log(total);
// Task 7
const logins = ["hello", "Friend"];
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  } else if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  } else {
    allLogins.push(login);
    return "Логін успішно доданий!";
  }
}
const login = prompt("Enter login:");
console.log(addLogin(logins, login));
console.log(logins);