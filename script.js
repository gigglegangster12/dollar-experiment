let contributions = 0;
const goal = 1000;

const total = document.getElementById("total");
const count = document.getElementById("count");
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const button = document.getElementById("contribute");

function update() {
  total.textContent = `$${contributions.toFixed(2)}`;
  count.textContent = contributions;
  const percentage = Math.min((contributions / goal) * 100, 100);
  progress.style.width = `${percentage}%`;
  percent.textContent = `${Math.round(percentage)}% of the goal`;
}

button.addEventListener("click", () => {
  contributions += 1;
  update();
});

update();
