const activePage = window.location.pathname;

const navLinks = document.querySelectorAll(".topnav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add(`active`);
  }
});
