// The "createShoppingCart()" function defines a shopping cart and its metodes

function createShoppingCart() {
  // Retrieve the saved shopping cart from localStorage or create a new on if none exists
  const cart = JSON.parse(localStorage.getItem("myShoppingCart")) || {
    cartItems: [],
  };

  // The "saveCart()" function saves the current state of the cart to localStorage
  function saveCart() {
    localStorage.setItem("myShoppingCart", JSON.stringify(cart));
  }

  // Return an object with a number of metodes for manipulating the shopping cart
  return {
    // Metode to get the items in the shopping cart - test
    getCartItems: function () {
      return cart.cartItems;
    },

    setDeleteItems : function(id) {
        cart.cartItems = cart.cartItems.filter( function(item){
            return item.id !== id;
        });
        saveCart();
    },

    
    setEmptyCart : function() {
        cart.cartItems = [];
        saveCart();
    },

    // Metode to increase the quantity of an item in the shopping cart
    increaseCartQuantity: function (id, price, title, thumbnail) {
      // Find the existing item in the cart
      let exisitingItem = cart.cartItems.find(function (item) {
        return item.id === id;
      });

      if (exisitingItem) {
        // If the item already exist in the cart, increase its quantity
        exisitingItem.amount += 1;
      } else {
        // If the item does not exist in the cart, add it
        cart.cartItems.push({ id: id, price: price, amount: 1, title: title, thumbnail: thumbnail});
      }
      // Save the changes to the cart -
      saveCart();
    },
  };
}

const shoppingCart = createShoppingCart();

//Får info om hvilke produkter der er shoppingcart
console.log("cartitems",shoppingCart.getCartItems());



//--------------- Get the modal CART -----------------
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//  DENNE SEKTION HANDLER OM AT VISE ALLE PRODUKTER I MODALEN
// const array = [1, 2, 3, 4, 5];


// document.querySelector(".myProducts").innerHTML = stringy;
// console.log(shoppingCart);

function renderCart (){ 
  // console.log( shoppingCart.getCartItems());
  shoppingCart.getCartItems().map((product) => {
    console.log(product);
  });
  }



renderCart();