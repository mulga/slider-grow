const images = document.querySelectorAll(".image");

function removeActiveClass() {
  images.forEach((del) => {
    del.classList.remove("active");
  });
}

images.forEach((del) => {
  del.addEventListener("click", () => {
    removeActiveClass();
    del.classList.add("active");
  });
});
