const products = [
    {
        name: "Product One",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+1",
        buy: "https://example.com/product1",
        category: "lifestyle"
    },
    {
        name: "Product Two",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+2",
        buy: "https://example.com/product2",
        category: "beauty"
    },
    {
        name: "Product Three",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+3",
        buy: "https://example.com/product3",
        category: "gym"
    },
    {
        name: "Product Four",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+4",
        buy: "https://example.com/product4",
        category: "category4"
    },
    {
        name: "Product Five",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+5",
        buy: "https://example.com/product5",
        category: "category5"
    }
];

const categoryContainers = {
    lifestyle: document.getElementById("lifestyle-products"),
    beauty: document.getElementById("beauty-products"),
    gym: document.getElementById("gym-products"),
    category4: document.getElementById("category4-products"),
    category5: document.getElementById("category5-products")
};

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <div class="product-info">
            <h3>${product.name}</h3>
            <a href="${product.buy}" target="_blank">Buy Now</a>
        </div>
    `;

    categoryContainers[product.category].appendChild(card);
});
