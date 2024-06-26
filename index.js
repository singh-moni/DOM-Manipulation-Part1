
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//1.Getting Started


const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.background = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"
mainEl.classList.add("flex-ctr");

//2.Menu Bar
const topMenuE1 = document.getElementById("top-menu");
topMenuE1.style.height = "100%";
topMenuE1.style.backgroundColor = "var(--top-menu-bg)";
topMenuE1.classList = "flex-around";

//3. Addding Menu Buttons
// Menu data structure

menuLinks.forEach((link, i) => {
  const a = document.createElement("a");
  a.setAttribute("href", menuLinks[i].href);
  a.textContent = menuLinks[i].text;
  topMenuE1.appendChild(a)
});