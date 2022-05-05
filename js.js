const btn = document.querySelector(".belowhead button");
const cercle = document.querySelector(".cercle");
const prices = [19.99, 24.99, 39.99];
// const [price1, price2, price3] = prices;

console.log(cercle, btn);

btn.addEventListener("click", function () {
  cercle.classList.toggle("active");
  for (let i = 0; i < prices.length; i++) {
    if (cercle.classList.contains("active")) {
      document.querySelector(`.price-${i + 1}`).textContent =
        Math.trunc(prices[i] * 10) + ".99";
    } else {
      document.querySelector(`.price-${i + 1}`).textContent = prices[i];
    }
  }
});
console.log(cercle.className.includes("active"));
