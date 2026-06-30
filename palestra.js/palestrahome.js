console.log("PowerGym online 💪");

document.documentElement.style.scrollBehavior = "smooth";

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".price-card, .card, .info-box").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});