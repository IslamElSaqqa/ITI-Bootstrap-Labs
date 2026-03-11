const products = [
{img:"https://picsum.photos/200?1", name:"Product 1", stock:25, price:10000},
{img:"https://picsum.photos/200?2", name:"Product 2", stock:40, price:30000},
{img:"https://picsum.photos/200?3", name:"Product 3", stock:20, price:20000},
{img:"https://picsum.photos/200?4", name:"Product 4", stock:25, price:10000},
{img:"https://picsum.photos/200?5", name:"Product 5", stock:40, price:30000},
{img:"https://picsum.photos/200?6", name:"Product 6", stock:20, price:20000},
{img:"https://picsum.photos/200?7", name:"Product 7", stock:20, price:20000},
{img:"https://picsum.photos/200?8", name:"Product 8", stock:20, price:20000}
];

const container = document.getElementById("productList");

products.forEach(product => {

        container.innerHTML += `

        <div class="col-md-6 col-lg-3">

        <div class="card shadow-sm border-0">
        <div class="row g-0 align-items-center">

        <div class="col-5">
        <img src="${product.img}" class="img-fluid rounded-start">
        </div>

        <div class="col-7">
        <div class="card-body p-2">

        <h6 class="mb-1">${product.name}</h6>

        <p class="text-success fw-bold mb-1">
        Price: $${product.price}
        </p>

        <small class="text-muted">
        Stock: ${product.stock}
        </small>

        </div>
        </div>

        </div>
        </div>

        </div>

        `;
});