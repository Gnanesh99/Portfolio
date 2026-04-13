// Smooth scroll enhancement (future-proof)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function() {
        document.body.style.opacity = "0.95";
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 150);
    });
});
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