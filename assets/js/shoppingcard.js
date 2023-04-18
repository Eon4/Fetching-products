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
    // Metode to get the items in the shopping cart
    getCartItems: function () {
      return cart.cartItems;
    },

    setDeleteItems : function(id) {
        cart.cartItems = cart.cartItems.filter( function(item){
            return item.id !== id;
        });
        saveCart();
    },

    // Metode to increase the quantity of an item in the shopping cart
    increaseCartQuantity: function (id, price, title) {
      // Find the existing item in the cart
      let exisitingItem = cart.cartItems.find(function (item) {
        return item.id === id;
      });

      if (exisitingItem) {
        // If the item already exist in the cart, increase its quantity
        exisitingItem.amount += 1;
      } else {
        // If the item does not exist in the cart, add it
        cart.cartItems.push({ id: id, price: price, amount: 1, title: title });
      }
      // Save the changes to the cart
      saveCart();
    },
  };
}

const shoppingCart = createShoppingCart();