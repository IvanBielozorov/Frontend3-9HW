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
        return console.log(total);
    }
}
calculateEngravingPrice("Hello friend", 10);