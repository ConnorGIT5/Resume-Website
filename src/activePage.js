const activePage = window.location.pathname;

setTimeout(function () {
  //do what you need here
}, 2000);

const navLinks = document.querySelectorAll(".topnav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add(`active`);
  }
});
