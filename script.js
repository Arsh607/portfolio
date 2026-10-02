const sections = document.querySelectorAll(
  ".inventory, .calculator, .taskops, .pixell-river, .jobtrack"
);

const observer = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }

    });

  },
  {
    threshold: 0.2
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});