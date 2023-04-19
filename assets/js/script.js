function getProducts() {
    return fetch("https://dummyjson.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }
  
  // const containerElement = document.querySelector(".product-container");
  const containerElement = document.querySelector("#products");
  
  function addProductTooDom(products) {
    const productElement = document.createElement("div");
  
    productElement.classList.add("product");
  
    productElement.innerHTML = `
    <header>
            <h2 class="product-title">${products.title}</h2>
            <p class="product-description">${products.description}</p>
          </header>
          <img
            class="product-img"
            src="${products.thumbnail}"
            alt="${products.title}"
          />
  
          <section class="purshare">
            <p class="product-price">$${products.price}</p>
            <button onclick="shoppingCart.increaseCartQuantity(${products.id}, '${products.title}', ${products.price}, '${products.thumbnail}')" class="add-to-cart">Add to cart</button>
           <button onclick="shoppingCart.setDeleteItems(${products.id})">Slet produkt</button>
           </section>
    
    
    `;
  
    containerElement.appendChild(productElement);
  }
  
  getProducts().then((data) => {
    console.log(data);
    data.products.map((product) => {
      addProductTooDom(product);
    });
  });

  function getStorage(id, a) {
    let intialStorage = { id: id, title: a };
    localStorage.setItem("product", JSON.stringify(intialStorage));
  
    // document.getElementById("lastname").innerHTML = localStorage.getItem("name");
  }
  
  function parseStorage() {
    let name = JSON.parse(localStorage.getItem("product"));
  
    console.log(name);
  }