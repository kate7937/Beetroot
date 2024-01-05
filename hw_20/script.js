/*
Створити масив «Список покупок». Кожен елемент масиву є об'єктом, який містить  
назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
*/
let shoppingList = [
    {
        name: 'Bread',
        quantity: 1,
        bought: true,
        price: 2,
        amount: null,
    },
    {
        name: 'Milk',
        quantity: 1,
        bought: false,
        price: 3,
        amount: null,
    },
    {
        name: 'Egg',
        quantity: 10,
        bought: true,
        price: 0.5,
        amount: null,
    },
    {
        name: 'Apple',
        quantity: 4,
        bought: false,
        price: 0.5,
        amount: null,
    },
    {
        name: 'Orange',
        quantity: 2,
        bought: true,
        price: 1,
        amount: null,
    },
    {
        name: 'Avocado',
        quantity: 1,
        bought: false,
        price: 3,
        amount: null,
    },
]
shoppingList.forEach(
    function (item) {
        item.amount = item.quantity * item.price;
    }
)
/*
Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
 що ще не придбані, а потім - ті, що вже придбали.
*/
shoppingList.sort(function(a, b) {
    return a.bought - b.bought;
});
let sortedProductNames = shoppingList.map(function(item) {
    return item.name;
}).join(', ');
alert(sortedProductNames);
/*
Покупка продукту. Функція приймає назву продукту 
і відзначає його як придбаний.
*/
function markProduct(productName) {
    for (let i = 0; i < shoppingList.length; i++) {
        if(shoppingList[i].name.toLowerCase() === productName.toLowerCase()) {
            shoppingList[i].bought = true;
            break;
        }
    }
}
markProduct('Milk');
/*
Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, 
в якому продукт, що ми шукаємо, буде відсутнім)
*/
function removeProduct(productName) {
let newShoppingList = shoppingList.filter(function(item){
    return item.name.toLowerCase() !== productName.toLowerCase()
});
console.log(newShoppingList);
}
removeProduct('Avocado');
/*
Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
 При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
 а кількості товарів стало 2, то сума буде 24.
*/
function addProduct (productName, price) {
    let productFound = false;
    for (let i = 0; i < shoppingList.length; i++) {
        if(shoppingList[i].name === productName) {
            shoppingList[i].quantity = shoppingList[i].quantity +1;
            productFound = true;
            break;
        } 
    }
    if (!productFound) {
        shoppingList.push({
            name: productName,
            quantity: 1,
            bought: false,
            price: price,
            amount: null,
        });
    }
    shoppingList.forEach(
        function (item) {
            item.amount = item.quantity * item.price;
        }
    )
};
addProduct ('Apple', 0.5);
addProduct ('Water', 0.8)
console.log(shoppingList);
