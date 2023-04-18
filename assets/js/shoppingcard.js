function createShoppingCard() {
    const cart = JSON.parse(localStorage.getItem("myShoppingCart")) || {cardItem : {}};

    function saveCard() {
        localStorage.setItem("myShoppingCart", JSON.stringify(cart));
    }

    return {
        getCartItems: function(){
            return cart. cartItems;
        },

        increaseCartQuantity: function(id, price, title) {

            let existingItem = cart.cartItems.find(function(item) {
                return item.id == id;
            });

            if(existingItem){
                existingItem.amount += 1;

            } else {
                cart.cartItems.push({id: id, price: price, amount:1, title: title });

            }

            saveCart();
        },

    };

}