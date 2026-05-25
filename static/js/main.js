document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("js-enabled");

    const sections = document.querySelectorAll(".section");

    if (!("IntersectionObserver" in window)) {
        sections.forEach((section) => section.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));
});
