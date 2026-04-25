// const box = document.getElementById("box");
const btn = document.getElementById("colorBtn");

// btn.addEventListener("click", () => {
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     box.style.backgroundColor = randomColor;
//     btn.style.backgroundColor = randomColor;
// });

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});
// console.log("ckick");
