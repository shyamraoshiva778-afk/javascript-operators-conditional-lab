// LANDING PAGE

function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

function animateCounters() {
  const counters = document.querySelectorAll(".stat-num[data-target]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.getAttribute("data-target"));
      const suffix = el.textContent.includes("%") ? "%" : "";
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 28);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}

function initAOS() {
  const elements = document.querySelectorAll("[data-aos]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute("data-aos-delay") || "0");

        setTimeout(() => {
          el.classList.add("aos-animate");
        }, delay);

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach((el) => observer.observe(el));
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const noResults = document.getElementById("noResults");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      document.getElementById("searchInput").value = "";

      applyFilter(filter, cards, noResults);
    });
  });
}

function applyFilter(filter, cards, noResults) {
  let visible = 0;

  cards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const show = filter === "all" || category === filter;

    if (show) {
      card.classList.remove("hidden");
      visible++;
    } else {
      card.classList.add("hidden");
    }
  });

  noResults.style.display = visible === 0 ? "flex" : "none";
}

function filterProjects() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".project-card");
  const noResults = document.getElementById("noResults");

  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-filter") === "all");
  });

  let visible = 0;

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const desc = card.querySelector(".card-desc").textContent.toLowerCase();
    const concepts = card.querySelector(".card-concepts").textContent.toLowerCase();
    const num = card.querySelector(".card-num").textContent.toLowerCase();

    const match = (
      title.includes(query) ||
      desc.includes(query) ||
      concepts.includes(query) ||
      num.includes(query) ||
      query === ""
    );

    if (match) {
      card.classList.remove("hidden");
      visible++;
    } else {
      card.classList.add("hidden");
    }
  });

  noResults.style.display = visible === 0 ? "flex" : "none";
}

function openProject(path) {
  window.location.href = path;
}

function initBackTop() {
  const btn = document.getElementById("backTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

function initCardKeyboard() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "";
      const href = link.getAttribute("href").replace("#", "");
      if (href === current) {
        link.style.color = "var(--accent)";
      }
    });
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initAOS();
  animateCounters();
  initFilters();
  initBackTop();
  initSmoothScroll();
  initCardKeyboard();
  initActiveNav();

  setTimeout(() => {
    document.querySelectorAll("[data-aos]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const delay = parseInt(el.getAttribute("data-aos-delay") || "0");
        setTimeout(() => el.classList.add("aos-animate"), delay);
      }
    });
  }, 100);
});
