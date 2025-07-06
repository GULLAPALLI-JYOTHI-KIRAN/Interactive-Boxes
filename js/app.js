(() => {
  const section = document.querySelector(".interactive-section");
  const priceSelect = document.querySelector(".cost-select");
  section.addEventListener("click", (e) => {
    for (let children of section.children) {
      if (children.lastElementChild.classList.contains("display-content")) {
        children.lastElementChild.classList.remove("display-content");
      }
      children.firstElementChild.firstElementChild.removeAttribute("checked");
      children.firstElementChild.firstElementChild.removeAttribute("disabled");
    }
    if (e.target.dataset?.cost) {
      e.target?.childNodes[5].classList.toggle("display-content");
      e.target.firstElementChild.firstElementChild.setAttribute(
        "checked",
        true
      );
      e.target.firstElementChild.firstElementChild.setAttribute(
        "disabled",
        true
      );

      priceSelect.innerText = `${e.target.dataset?.cost}`;
    }
  });
})();
