const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
