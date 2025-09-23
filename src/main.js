
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
}

(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }
})();

function openMenu() {
  document.getElementById("sideMenu").style.right = "0";
}


function closeMenu() {
  document.getElementById("sideMenu").style.right = "-256px";
}
