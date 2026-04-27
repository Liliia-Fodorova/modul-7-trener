const form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

     if (firstName.trim() === "" ||
        lastName.trim() === "" ||
        phone.trim() === "" ||
        !email.includes("@") 
        
    ) {
        alert("Заполните все поля!");
    } else {
        alert("Регистрация прошла успешно!");
    }
  
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(email.includes("@"));
  console.log(phone);
});

