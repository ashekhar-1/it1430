//1. We create a variable to remember the total money we spent
// We start with $0.00
let currentTotal = 0;

//2. This function will run exactly when the user clicks "Add Item" Button
function addExpense(){
    // Getting the text and number from the HTML input boxes
    let name = document.getElementById("itemName").value;

    // We use Number() to make sure that our computer treats the price as MATH, and not text
    let price = Number(document.getElementById("itemPrice").value);

    // Add a new price to running our total
    currentTotal = currentTotal + price;

    // We are updating the total on the display on our HTML screen
    document.getElementById("totalValueDisplay").innerText = currentTotal;

    // Find the empty list (ul) and we add a new item (li) inside it
    let list  = document.getElementById("expenseList");
    list.innerHTML = list.innerHTML + "<li>" + name + " :$ " + price + "</li>";

    // Here we clear the boxes so that they are empty for the next item
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
}