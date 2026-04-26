const input = document.querySelector("#nameInput");
const form = document.querySelector("#nameForm");
const result = document.querySelector("#result");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    result.textContent = `Привет, ${input.value} 👋`;
    input.value = "";
    
});