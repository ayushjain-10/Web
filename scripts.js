
const orderNameInput = document.querySelector("#name");
const orderDiameterInput = document.querySelector("#diameter");
const selectTopping = document.querySelector("#pizza-type");
const orderNameOutput = document.querySelector("#name-output");
const diameter = document.querySelector("#diameter-output");
const cost = document.querySelector("#cost-output");
const pizzaVisual = document.querySelector("#pizza");
let total;
const update = () => {
    orderNameOutput.innerHTML = `Name: ${orderNameInput.value}`;
    diameter.innerHTML = `Diameter: ${orderDiameterInput.value} in`;
    if (selectTopping.value == `Cheese`) {
      total = .25 * (Math.PI * (orderDiameterInput.value / 2) ** 2);
    } 
    else {
        total = .33 * (Math.PI * (orderDiameterInput.value / 2) ** 2);
    }
    cost.innerHTML = `Cost: $${total.toFixed(2)}`;
    
  const size= `${orderDiameterInput.value * 2}px`;
  const toppings = selectTopping.value

    let img = "images/cheese.jpeg"
    if (toppings == "Cheese") {
        img = "images/cheese.jpeg"
    }
    if (toppings == "Pepperoni") {
        img = "images/pepperoni.jpeg"
    }
    else if (toppings == "Sausage") {
        img = "images/sausage.jpeg"
    }
    else if (toppings == "Onions") {
        img = "images/onions.jpeg"
    }
    else if (toppings == "Tomatoes") {
        img = "images/tomatoes.jpeg"
    }
    pizzaVisual.innerHTML = `<img src="${img}" height="${size}px" width="${size}px">`
}

document.addEventListener('input', update);

update();