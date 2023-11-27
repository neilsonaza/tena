

let totalPrice = 0;

// Loop through each product in the shopping cart
for (let i = 0; i < shoppingCart.length; i++) {
  // Add the price of the current product to the total price
  totalPrice += shoppingCart[i].price;
}

// Return the total price
return totalPrice;
