document.addEventListener("DOMContentLoaded", async () => {
  const faqDivs = document.querySelectorAll(".faq");
  const data = await (await fetch("./data.json")).json();
  const nameDivs = document.querySelectorAll(".c-temp");
  nameDivs.forEach((nameDiv) => {
    nameDiv.innerHTML = data.name;
  });
  const borderDivs = document.querySelectorAll(".temp-image");
  borderDivs.forEach((borderDiv) => {
    borderDiv.style.backgroundColor = data.colorCode;
  });
  const imageDivs = document.querySelectorAll(".temp-image");
  imageDivs.forEach((imageDiv) => {
    imageDiv.firstElementChild.firstElementChild.src = data.imageLink;
  });

  const data_faq = data.faq;
  faqDivs.forEach((faqDiv, index) => {
    faqDiv.addEventListener("click", () => {
      const others = document.querySelectorAll(".faq");
      others.forEach((other) => {
        other.classList.remove("shadow-left");
        if (other.children[0].children[1])
          other.children[0].children[1].remove();
      });
      faqDiv.classList.add("shadow-left");
      if (data_faq[index]) {
        const ansDiv = document.createElement("div");
        ansDiv.style = "font-size: 15px";
        ansDiv.innerHTML = data_faq[index];
        faqDiv.firstElementChild.append(ansDiv);
      }
    });
  });
});
