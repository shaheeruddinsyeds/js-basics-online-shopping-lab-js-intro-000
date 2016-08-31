var cart = [];

function setCart(newCart) {
    cart = newCart;
}

function getCart() {
    return cart;
}

function addToCart(item) {
    var price = Math.floor((Math.random() * 100) + 1);
    cart.push({
        [item]: price
    })
    console.log(`${item}` + " has been added to your cart.");
    return cart;
}

function viewCart() {
    //var price=Math.floor((Math.random() * 100) + 1);
    //var shaheer="In your cart, you have";
    var sohail = ["In your cart, you have"];
    var shaheer = [];
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.");
    }
    for (var i = 0; i < cart.length; i++) {
        var item = Object.keys(cart[i])[0];
        var price = cart[i][item];
        shaheer.push = (` ${item} at $${cart[item]},`);
    }
    //shaheer.push(cart +" at "+ cart[item]);
    shaheer = sohail.join();
    shaheer = (shaheer.slice(0, -1) + '.');
    return shaheer;
}

//console.log("In your cart, you have"+ `${shaheer}`);



function removeFromCart(item) {
    var i = 0;
    for (var i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
            if (key == item) {
                cart.splice(i, 1);
            } else {
                {
                  console.log("That item is not in your cart.")
                    //alert("That item is not in your cart.");
                }
            }
        }
    }
  }

    function placeOrder(cc) {
        if (cc === undefined) {
            console.log("We don't have a credit card on file for you to place your order.")
        } else {
            console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
            cart = [];
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
