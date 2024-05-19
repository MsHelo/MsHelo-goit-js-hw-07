const input = document.getElementById("name-input");
const ouput = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  const inputTrimer = event.target.value.trim();
  ouput.textContent = inputTrimer || "Anonymous";
});
