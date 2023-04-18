function createShoppingCard() {
    const cart = JSON.parse(localStorage.getItem("myShoppingCart")) || {cardItem : {}};

    function saveCard() {
        localStorage.setItem("myShoppingCart", JSON.stringify(cart));


    }

    return {
        getCartItems: function(){
            return cart. cartItems;
        },

        

    };

}