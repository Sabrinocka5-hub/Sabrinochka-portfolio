console.log("Dashboard JS подключен ✅");

const usersCount = document.getElementById('users-count');
const salesCount = document.getElementById('sales-count');
const activeCount = document.getElementById('active-count');
const themeToggle = document.getElementById('theme-toggle');

document.querySelector('#start').addEventListener('change', updateStats);
document.querySelector('#end').addEventListener('change', updateStats);

function animateNumber(element, newValue, prefix = '') {
  let current = parseInt(element.textContent.replace(/\D/g, '')) || 0;
  const step = (newValue - current) / 20;
  let count = 0;
  const interval = setInterval(() => {
    current += step;
    element.textContent = prefix + Math.floor(current);
    element.style.transform = "scale(1.2)";
    element.style.color = "#ff6363";
    count++;
    if (count > 20) {
      clearInterval(interval);
      element.style.transform = "scale(1)";
      element.style.color = "";
    }
  }, 40);
}

function updateStats() {
  const users = Math.floor(Math.random() * 2000);
  const sales = Math.floor(Math.random() * 10000);
  const active = Math.floor(Math.random() * 500);

  animateNumber(usersCount, users);
  animateNumber(salesCount, sales, "$");
  animateNumber(activeCount, active);

  updateChart();
}

// Chart setup
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [1200, 1900, 3000, 5000, 2500],
        borderColor: '#111', // <-- светлая тема: чёрная
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Profit ($)',
        data: [800, 1500, 2800, 4000, 2000],
        borderColor: 'green',
        borderWidth: 2,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

function updateChart() {
  myChart.data.datasets.forEach(dataset => {
    dataset.data = dataset.data.map(() => Math.floor(Math.random() * 5000));
  });
  myChart.update();
}

// 🌙 Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');

  // Меняем иконку
  themeToggle.textContent = isDark ? '☀️' : '🌙';

  // ✅ Меняем цвет линии Sales на белый в тёмной теме
  myChart.data.datasets[0].borderColor = isDark ? '#fff' : '#111';
  myChart.update();
});
