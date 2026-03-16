const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav =
      siteNav.contains(event.target) || navToggle.contains(event.target);

    if (!clickedInsideNav) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 980) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]');

    if (!emailInput || !emailInput.value.trim()) {
      emailInput?.focus();
      return;
    }

    newsletterForm.reset();
    alert("Subscription flow placeholder. Connect your newsletter tool here.");
  });
}