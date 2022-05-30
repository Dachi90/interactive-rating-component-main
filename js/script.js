const $Numbers = document.querySelectorAll(".ratingWrapper__number"),
  $ButtonSubmit = document.querySelector(".buttonSubmit"),
  $WrapperRatting = document.querySelector(".ratingState");

window.addEventListener("click", (e) => {
  $Numbers.forEach((el) => {
    el.classList.remove("ratingWrapper__number-selected");
    if (e.target === el) {
      el.classList.add("ratingWrapper__number-selected");
    }
  });

  if (e.target === $ButtonSubmit) {
    $WrapperRatting.style.display = "none";
  }
});
