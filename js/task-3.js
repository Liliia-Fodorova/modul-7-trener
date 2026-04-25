const text = document.getElementById("text");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (text.style.display === "none") {
        text.style.display = "block";
        button.textContent = "Скрыть";
    } else {
        text.style.display = "none";
        button.textContent = "Показать";
   }
});