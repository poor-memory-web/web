let fa = document.querySelector(".fa");
let eng = document.querySelector(".eng");
let farsi = document.querySelector(".fa__language");
let english = document.querySelector(".eng__language");

eng.addEventListener("click", function () {
  farsi.classList.add("d-none");
  english.classList.remove("d-none");
});

fa.addEventListener("click", function () {
  farsi.classList.remove("d-none");
  english.classList.add("d-none");
});

let themes = document.querySelectorAll(".theme-option");

themes.forEach((themeOption) => {
  themeOption.addEventListener("click", function () {
    let theme = themeOption.dataset.theme; // ← مقدار درست
    document.documentElement.setAttribute("data-theme", theme);
  });
});
