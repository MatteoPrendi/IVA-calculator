const input = document.querySelector("input");
const errorText = document.querySelector(".error-text");
const IVA = document.querySelector("#IVA");
const commission = document.querySelector("#commission");
const profit = document.querySelector("#profit");

input.addEventListener("input", () => {
  if (input.value.length > 7) {
    input.value = input.value.slice(0, 7);
    errorText.classList.add("show");
  } else {
    errorText.classList.remove("show");
  }

  function output(element, percentage) {
    element.textContent = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      input.value * (percentage / 100)
    );
  }

  output(IVA, 22);
  output(commission, 8);
  output(profit, 70);
});

input.addEventListener("input", () => {});
