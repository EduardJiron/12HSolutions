let isDark = localStorage.getItem("isDark");

function toggleDarkmode() {
  const btn = document.getElementById("toggleDarkmode");
  const btn2 = document.getElementById("toggleDarkmode2");
  const menuitem = document.getElementById("menu-item");
  const obj = document.getElementById("slogan");
  const title = document.getElementById("dark");
  const header = document.querySelector('header');
  const elementosDark = document.querySelectorAll(".dark");

  btn.addEventListener("click", darkMode);
  btn2.addEventListener("click", darkMode);
  onloadDarkmode();

  function darkMode() {
    isDark = isDark === "true" ? "false" : "true";

    if (isDark === "true") {
      darkmodeOn();
    } else {
      darkModeOff();
    }

    localStorage.setItem("isDark", isDark);
  }

  function isDarkside(isDark) {
    let color = isDark === "true" ? "white" : "black";
    elementosDark.forEach((index) => {
      index.style.color = color;
    });
  }

  function darkmodeOn() {
    header.classList.add("darkBg");
    header.classList.remove("lightBg");
    btn.classList.add("toggle-darkmode-displace");
    btn2.classList.add("toggle-darkmode-displace");
    document.documentElement.style.backgroundColor = "rgb(33, 37, 41)";
    title.style.color = "white";
    menuitem.style.backgroundColor = "rgba(0, 0, 0, 1)";
    if (obj) {
      obj.style.color = "rgba(255, 255, 255, 0.55)";
    }
    isDarkside(isDark);
  }

  function darkModeOff() {
    header.classList.add("lightBg");
    header.classList.remove("darkBg");
    btn.classList.remove("toggle-darkmode-displace");
    btn2.classList.remove("toggle-darkmode-displace");
    document.documentElement.style.backgroundColor = "white";
    title.style.color = "black";
    if (obj) {
      obj.style.color = "rgba(0, 0, 0, 0.562)";
    }
    menuitem.style.backgroundColor = "white";
    isDarkside(isDark);
  }

  function onloadDarkmode() {
    if (isDark === "true") {
      darkmodeOn();
    } else {
      darkModeOff();
    }
  }
}