var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
var price=Math.floor((Math.random() * 100) + 1);
cart.push({ [item]: price })
console.log (`${item}`+" has been added to your cart.");
return cart;
}

function viewCart(){
  var price=Math.floor((Math.random() * 100) + 1);
  var shaheer="";
  //var shaheer=[];
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  for (var item in cart){
    shaheer+=("In your cart, you have"+ cart +" at "+ cart[item])
    //shaheer.push(cart +" at "+ cart[item]);
  }
  console.log(shaheer);
}
//console.log("In your cart, you have"+ `${shaheer}`);



function removeFromCart(item){
  var price=Math.floor((Math.random() * 100) + 1);
  for (var item in cart) {
    if (!cart.hasOwnProperty(item)) {
      alert("That item is not in your cart.");
    }
    else {
      cart.pop({ [item]: price });
      return cart;
  }
}
}

function placeOrder(cc){
  var total=Math.floor((Math.random() * 100) + 1);
if(cc==""){
  console.log("We don't have a credit card on file for you to place your order.")
}
else{
  console.log("Your total cost is $"+ `${total}, which will be charged to the card ${cc}.`);
}
}



function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
return t;
}
