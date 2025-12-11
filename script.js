const products = [
    // Cosmetics (priority)
    {
        name: "Cosmetic One",
        img: "https://via.placeholder.com/600x400?text=Cosmetic+1",
        buy: "#",
        category: "cosmetics"
    },
    {
        name: "Cosmetic Two",
        img: "https://via.placeholder.com/600x400?text=Cosmetic+2",
        buy: "#",
        category: "cosmetics"
    },
    // ... other categories
    {
        name: "Lifestyle One",
        img: "https://via.placeholder.com/600x400?text=Lifestyle+1",
        buy: "#",
        category: "lifestyle"
    },
    {
        name: "Beauty One",
        img: "https://via.placeholder.com/600x400?text=Beauty+1",
        buy: "#",
        category: "beauty"
    },
    {
        name: "Gym One",
        img: "https://via.placeholder.com/600x400?text=Gym+1",
        buy: "#",
        category: "gym"
    },
    {
        name: "Category 4",
        img: "https://via.placeholder.com/600x400?text=Cat+4",
        buy: "#",
        category: "category4"
    },
    {
        name: "Category 5",
        img: "https://via.placeholder.com/600x400?text=Cat+5",
        buy: "#",
        category: "category5"
    }
];

const sections = document.querySelectorAll('.product-section');
const tabs = document.querySelectorAll('.tab');

// insert products
products.forEach(p => {
    const container = document.getElementById(p.category);
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
            <h3>${p.name}</h3>
            <a href="${p.buy}" target="_blank">Buy Now</a>
        </div>
    `;
    if (container) container.appendChild(card);
});

// switch tab
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        sections.forEach(s => {
            s.classList.remove("active");
        });
        const cat = tab.getAttribute("data-cat");
        document.getElementById(cat).classList.add("active");
    });
});

// auto open cosmetics
document.getElementById("exploreBtn").addEventListener("click", () => {
    const firstTab = document.querySelector('.tab[data-cat="cosmetics"]');
    firstTab.click();
});
