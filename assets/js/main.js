const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("#close-bar");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    btn.classList.toggle("bx-x");
});
