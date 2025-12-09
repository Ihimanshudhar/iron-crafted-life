const products = [
    {
        name: "Product One",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+1",
        buy: "https://example.com/product1"
    },
    {
        name: "Product Two",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+2",
        buy: "https://example.com/product2"
    },
    {
        name: "Product Three",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+3",
        buy: "https://example.com/product3"
    },
    {
        name: "Product Four",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+4",
        buy: "https://example.com/product4"
    },
    {
        name: "Product Five",
        img: "https://via.placeholder.com/600x400?text=Me+with+Product+5",
        buy: "https://example.com/product5"
    }
];

const container = document.getElementById("product-container");

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

    container.appendChild(card);
});
