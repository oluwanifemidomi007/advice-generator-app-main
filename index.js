const adviceEl = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const buttonEl = document.getElementById("new-advice");

buttonEl.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      adviceEl.textContent = `${data.slip.id}`;
      adviceText.textContent = data.slip.advice;
    });
});
