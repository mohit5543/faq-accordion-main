document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".toggle-icon");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all accordion items
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        const otherIcon = otherItem.querySelector(".toggle-icon");
        otherIcon.src = "./assets/images/icon-plus.svg";
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
        icon.src = "./assets/images/icon-minus.svg";
      }
    });
  });
});
