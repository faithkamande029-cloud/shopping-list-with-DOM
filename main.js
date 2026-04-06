// empty array
let shoppingCart = [];

const itemInput = document.getElementById("item-input");
const priceInput = document.getElementById("price-input");
const addItem = document.getElementById("add-item")
const shoppingList = document.getElementById("shopping-list");
const clearListBtn = document.getElementById("clear-list")

function showItemInput(product) {
    const li = document.createElement("li");
    li.textContent = product.item + " - $"+ product.price;
    shoppingList.appendChild(li);
}
function renderList(){
    shoppingList.innerHTML = ""; 
    for(let i = 0; i < shoppingCart.length; i++){
        showItemInput(shoppingCart[i]);
    }
}
addItem.addEventListener("click", function(){
    const item = itemInput.value;
    const price = priceInput.value;

    if(item === "" || price === "") return;

    const product = {
        item: item,
        price: price
    };

    shoppingCart.push(product)

    localStorage.setItem('cart', JSON.stringify(shoppingCart));

    showItemInput(product);
    itemInput.value = "";
    priceInput.value = "";

});

clearListBtn.addEventListener("click", () => {
    shoppingList = [];
    localStorage.removeItem("cart");
    renderList();
});

const savedItems = localStorage.getItem('cart');
if(savedItems){
    shoppingCart =JSON.parse(savedItems);
    renderList();
}

alert("Niaje Msupa")