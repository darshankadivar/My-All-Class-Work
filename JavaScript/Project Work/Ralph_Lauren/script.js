let slider = document.getElementById('slider');

  let scrollStep = 1;

  function autoScroll() {
    slider.scrollLeft += scrollStep;
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }

  setInterval(autoScroll, 15);

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

let products = [
  {
    id: 1,
    name: "Custom Slim Fit Jersey Crewneck T-Shirt",
    category: "Polo Ralph Lauren",
    price:  8400.00,
    gender : "men",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1279327_alternate10?$plpDeskRF$"
  },
  {
    id: 2,
    name: "Logo Double-Knit Mesh Hoodie",
    category: "Polo Ralph Lauren",
    price: 20900.00,
    gender : "men",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710964438001_alternate10?$plpDeskRF$"
  },
  {
    id: 3,
    name: "Vintage Fit Logo Fleece Sweatshirt",
    category: "Polo Ralph Lauren",
    price: 19900.00,
    gender : "men",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710964988001_alternate10?$plpDeskRF$"  
  },
  {
    id: 4,
    name: "Striped Cotton Seersucker Jacket",
    category:"Polo Ralph Lauren",
    price:  36700.00,
    gender : "women",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI211964776001_alternate1?$plpDeskRF$"
  },
  {
    id: 5,
    name: "Cotton Voile Shirt",
    category: "Polo Ralph Lauren",
    price: 31400.00,
    gender : "women",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI211965846001_alternate10?$plpDeskRF$"
  },
  {
    id: 6,
    name: "Cotton Chino Short",
    category: "Polo Ralph Lauren",
    price: 15700.00,
    gender : "women",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI211963798002_alternate10?$rl_4x5_pdp$"
  },
  {
    id: 7,
    name: "The Bayport Cotton Poplin Jacket",
    category: "Polo Ralph Lauren",
    price: 16700.00,
    gender : "kids",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1506541_alternate10?$plpDeskRF$"
  },
  {
    id: 8,
    name: "Ripstop Down Hooded Jacket",
    category: "Polo Ralph Lauren",
    price: 28300.00,
    gender : "kids",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI323969861002_alternate10?$plpDeskRF$"
  },
  {
    id: 9,
    name: "Cable-Knit Cotton Jumper",
    category: "Polo Ralph Lauren",
    price: 12500.00,
    gender : "kids",
    image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1507370_alternate10?$plpDeskRF$"
  },
];

localStorage.setItem("products",JSON.stringify(products));

function displayData(data) {
  let allData = JSON.parse(localStorage.getItem("products")) || [];

  let productList = document.querySelector("#productList");
  productList.innerHTML ="";
  
  data.forEach((product) => {
    let box = document.createElement("div");
    box.classList.add("product-box");

    box.innerHTML = `<img src="${product.image}"> 
                    <h3 class="title">${product.name}</h3>
                    <p class="para">${product.category}</p> 
                    <P>${product.price}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to cart</button>`;

    productList.append(box);
  });
}
displayData(products);

function filterProducts(gender) {
  let allData = JSON.parse(localStorage.getItem("products")) || [];

  if(gender == "all") {
    filter = allData;
  } else {
    filter = allData.filter(product => product.gender == gender);
  }

  localStorage.setItem("filteredProducts", JSON.stringify(filter));

  displayData(filter);

  document.querySelector("#productList").scrollIntoView({behavior: "smooth"});
}


let iconshopping = document.querySelector(".iconshopping");
let cartBox = document.querySelector(".cartBox");
let cartCloseBtn = document.querySelector(".bi-x");

iconshopping.addEventListener("click", () => {
  cartBox.classList.add("active");
  renderCart();
});

cartCloseBtn.addEventListener("click", () => {
  cartBox.classList.remove("active");
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let product = products.find(p => p.id === productId);
  let existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function renderCart() {
  let cartItems = document.querySelector("#cartItems");
  cartItems.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;

    cartItems.appendChild(div);
  });
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
