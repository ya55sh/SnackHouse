let flag = 0;
let btnNav = document.querySelector(".btn-mobile-nav");
console.log(btnNav);

let headerEl = document.querySelector(".header");
console.log(headerEl);

btnNav.addEventListener("click", exe);

function exe() {
  headerEl.classList.toggle("nav-open");
}

// nav-open

let allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

/**********************************************/
/* STICKY NAVIGATION */
/**********************************************/

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "-80px" }
);

obs.observe(sectionHeroEl);
