var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  cart.push(`${item}`);
var price=Math.floor((Math.random() * 100) + 1);
cart[`${item}`]=`${price}`;
return (`${item}`+" has been added to your cart.");
return cart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
