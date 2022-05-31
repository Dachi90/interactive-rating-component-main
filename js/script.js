const $Numbers = document.querySelectorAll(".ratingWrapper__number"),
  $ButtonSubmit = document.querySelector(".buttonSubmit"),
  $WrapperRatting = document.querySelector("#ratingCard"),
  $WrapperThanks = document.querySelector("#thankyouCard"),
  $ThanksStateP = document.querySelector(".thanksCard__rating");

let rating = 0;

window.addEventListener("click", (e) => {
  selectRating(e);

  if (e.target === $ButtonSubmit) {
    $WrapperRatting.classList.remove("cardShape");
    $WrapperRatting.classList.add("display-none");
    $WrapperThanks.classList.remove("display-none");
    $WrapperThanks.classList.add("cardShape");
    $WrapperThanks.classList.add("align-center");
    $ThanksStateP.innerHTML += `You selected ${rating} out of 5`;
  }
});

const selectRating = (e) => {
  $Numbers.forEach((el) => {
    el.classList.remove("ratingWrapper__number-selected");
    if (e.target === el) {
      el.classList.add("ratingWrapper__number-selected");
      rating = el.textContent;
      console.log(rating);
    }
  });
};
