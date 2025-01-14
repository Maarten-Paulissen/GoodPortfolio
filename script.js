document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animated-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });
});
