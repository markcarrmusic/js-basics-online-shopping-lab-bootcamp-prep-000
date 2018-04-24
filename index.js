var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign({}, cart, { itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)}));
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var i = 0;
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if(cart.length === 1) {

      for(i, cart.length === 1; i < 1; i++) {
        return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
  } else if(cart.length > 1) { 
          var multiCart = [];
          for(; i < cart.length; i++) {
            multiCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      return 'In your cart, you have' + multiCart.slice(0, multiCart.length -1) + ', and'+ multiCart.slice(-1) + '.';
    }     
}

function total() {
  var i = 0;
  var totalCost = 0;
  var total = [];
  for(; i < cart.length; i++) {
    total.push(totalCost += cart[i].itemPrice);
  }
  return parseInt(total.slice(-1));
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
}