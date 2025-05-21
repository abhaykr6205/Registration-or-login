const container = document.querySelector(".container");
const RegisterBtn = document.querySelector(".register-btn");
const LogInBtn = document.querySelector(".login-btn");

RegisterBtn.addEventListener("click", () => {
    container.classList.add('active');
})

LogInBtn.addEventListener("click", () => {
    container.classList.remove('active');
})
