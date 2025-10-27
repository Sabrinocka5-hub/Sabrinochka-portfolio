const menuData = [
  { id: 1, title: "Iced Coffee", category: "drinks", price: "$3.50", img: "https://avatars.mds.yandex.net/i?id=8a978ac567774294f2a48fcb829dd3c0745c159b-5858228-images-thumbs&n=13", desc: "Refreshing iced coffee with a hint of caramel." },
  { id: 2, title: "Cheeseburger", category: "food", price: "$8.00", img: "https://images.unsplash.com/photo-1550547660-d9450f859349", desc: "Juicy burger with melted cheese and crispy fries." },
  { id: 3, title: "Chocolate Cake", category: "dessert", price: "$4.50", img: "https://avatars.mds.yandex.net/i?id=968815a96acd1b2217c69dfb332bf93de4ad1361-12593143-images-thumbs&n=13", desc: "Rich, moist chocolate cake topped with ganache." },
  { id: 4, title: "Lemonade Fresh", category: "drinks", price: "$2.80", img: "https://avatars.mds.yandex.net/i?id=2b92af83d8036d3c0949995b5763312417901ccf-12511685-images-thumbs&n=13", desc: "Cold, tangy lemonade made from fresh lemons." },
  { id: 5, title: "Pasta Carbonara", category: "food", price: "$9.50", img: "https://avatars.mds.yandex.net/i?id=f586d8d10b504927dc72a93ca5ee5d946e2a97e0-10919913-images-thumbs&n=13", desc: "Creamy Italian pasta with bacon and parmesan." },
  { id: 6, title: "Strawberry Ice Cream", category: "dessert", price: "$3.20", img: "https://avatars.mds.yandex.net/i?id=89f3ddc7c84d4fa794441e9c8776781c43ade64f-5410274-images-thumbs&n=13", desc: "Homemade ice cream with fresh strawberries." }
];

const menuContainer = document.getElementById("menu");
const filterButtons = document.querySelectorAll(".filters button");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");
const toastContainer = document.getElementById("toast-container");

let count = parseInt(localStorage.getItem("cartCount")) || 0;
cartCount.textContent = count;

function displayMenu(items) {
  menuContainer.innerHTML = items.map(item => `
    <div class="menu-item">
      <img src="${item.img}" alt="${item.title}">
      <div class="menu-content">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <strong>${item.price}</strong><br><br>
        <button onclick="addToCart('${item.title}')">Add to cart</button>
      </div>
    </div>
  `).join("");
}

function addToCart(itemName) {
  count++;
  cartCount.textContent = count;
  localStorage.setItem("cartCount", count);

  // анимация корзины
  cartCount.parentElement.style.transform = "scale(1.2)";
  setTimeout(() => cartCount.parentElement.style.transform = "scale(1)", 200);

  // показать тост
  showToast(`✅ Added ${itemName} to cart!`);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Фильтрация по кнопкам
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    const filtered = category === "all" ? menuData : menuData.filter(i => i.category === category);
    displayMenu(filtered);
  });
});

// 🔍 Поиск по названию
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = menuData.filter(i => i.title.toLowerCase().includes(value));
  displayMenu(filtered);
});

// Первичная отрисовка
displayMenu(menuData);
