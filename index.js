document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(link.getAttribute("href").substring(1))
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  });

  const projects = document.querySelectorAll(".projet");
  projects.forEach((project) => {
    project.addEventListener(
      "mouseover",
      () => (project.style.transform = "scale(1.05)")
    );
    project.addEventListener(
      "mouseout",
      () => (project.style.transform = "scale(1)")
    );
  });

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (
      !name ||
      !email ||
      !message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      alert("Veuillez remplir tous les champs avec des informations valides.");
      return;
    }

    alert(`Merci pour votre message, ${name} ! Nous vous répondrons bientôt.`);
    e.target.reset();
  });
});
