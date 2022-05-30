const $Numbers = document.querySelectorAll(".ratingWrapper__number"),
  $ButtonSubmit = document.querySelector(".buttonSubmit"),
  $WrapperRatting = document.querySelector(".ratingState"),
  $WrapperThanks = document.querySelector(".thanksState"),
  $ThanksStateP = document.querySelector(".thanksState__p");

let ratting = 0;

window.addEventListener("click", (e) => {
  $Numbers.forEach((el) => {
    el.classList.remove("ratingWrapper__number-selected");
    if (e.target === el) {
      el.classList.add("ratingWrapper__number-selected");
      ratting = el.textContent;
    }
  });

  if (e.target === $ButtonSubmit) {
    $WrapperRatting.classList.add("display-none");
    $WrapperThanks.classList.remove("display-none");
    $ThanksStateP.innerHTML += `You selected ${ratting} out of 5`;
  }
});
