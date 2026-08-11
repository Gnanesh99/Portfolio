// Page transition visual feedback
const navLinks = document.querySelectorAll(".navbar a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        document.body.style.opacity = "0.95";
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 150);

        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        const activeLink = document.querySelector(`.navbar a[href='#${id}']`);

        if (entry.isIntersecting && activeLink) {
            navLinks.forEach(link => link.classList.remove("active"));
            activeLink.classList.add("active");
        }
    });
}, { threshold: 0.35 });

sections.forEach(section => sectionObserver.observe(section));

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".progress div");
  const skillsSection = document.querySelector(".skills");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            skill.style.width = skill.dataset.width;
          }, index * 150);
        });
        observer.disconnect();
      }
    });
  });

  if (skillsSection) {
    observer.observe(skillsSection);
  }
});