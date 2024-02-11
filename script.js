const input = document.querySelector("input");
const ivaText = document.querySelector("#iva");
const commissionText = document.querySelector("#cms");
const profitText = document.querySelector("#pft");
const formatter = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 2 });

input.addEventListener("keydown", e => {
  if (
    (isNaN(e.key) && e.key !== "Backspace" && e.key !== "Delete") ||
    (e.target.value.length > 6 && e.key !== "Backspace" && e.key !== "Delete")
  )
    e.preventDefault();
});

input.addEventListener("input", e => {
  input.value = formatTotal(input.value);
  formatCards(ivaText, 22);
  formatCards(commissionText, 8);
  formatCards(profitText, 70);
});

function formatTotal(total) {
  if (total[0] === "0") return "";
  if (total.length < 4) return total;

  total = stripDots(total);
  return total.toLocaleString("it-IT", { maximumFractionDigits: 0 });
}

function formatCards(element, percentage) {
  number = stripDots(input.value);
  element.textContent = formatter.format(number * (percentage / 100));
}

function stripDots(number) {
  return parseInt(number.replace(/[\.]/g, ""));
}
