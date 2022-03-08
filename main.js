// Data

const products = [
    {
        id: 1,
        img: "./images/product-1.jpg",
        name: "Shoe",
        Price: 750
    },
    {
        id: 2,
        img: "./images/product-2.jpg",
        name: "Bag",
        Price: 368
    },
    {
        id: 3,
        img: "./images/product-3.jpg",
        name: "Shirt",
        Price: 150
    },
    {
        id: 4,
        img: "./images/product-4.webp",
        name: "t-shirt",
        Price: 80
    },
    {
        id: 5,
        img: "./images/product-5.jfif",
        name: "Watch",
        Price: 250
    },
    {
        id: 6,
        img: "./images/product-6.webp",
        name: "Belt",
        Price: 355
    }
];


// Display data on UI
products.map(product => {
    const container = document.querySelector(".products-container");
    const col = document.createElement("div");
    col.className = "col-12 col-md-12 col-lg-6";
    col.innerHTML = `
            <div class="card">
                <img src='${product.img}' class="card-img-top" alt="product-1">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">This is a longer card with supporting text below.</p>
                    <h6 class="d-inline">Price: $</h6><span class="fs-3" id="shoe-price">${product.Price}</span>
                    <button class="btn btn-primary d-block m-auto buttn" id="t-shirt-btn">Add to
                        cart</button>
                </div>
            </div>
    `
    container.appendChild(col);





});