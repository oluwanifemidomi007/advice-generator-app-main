const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const newAdviceBtn = document.getElementById("new-advice");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const data = await response.json();
    adviceId.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = "Failed to load advice. Try again.";
    console.error(error);
  }
}

newAdviceBtn.addEventListener("click", getAdvice);

// Fetch advice on initial load
getAdvice();
