// Task 1
const fruits = ["Apple", "Pear", "Banana", "Watermelon", "Lemon"];
const logItems = function (items) {
    for (let i = 0; i < items.length; i++) {
        console.log(i + 1 + " - " + items[i]);
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