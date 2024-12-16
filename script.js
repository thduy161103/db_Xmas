const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");

showButton.addEventListener("click", () => {
  if (christmasMessage.style.display === "none") {
    christmasMessage.style.display = "block";
  } else {
    christmasMessage.style.display = "none";
  }
});

document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("as").style.display = "block";
});

document.getElementById("showButton").addEventListener("click", function () {
  document.getElementById("guideInfo").style.display = "block";
  document.getElementById("showButton").style.display = "none";
  document.getElementById("closeButton").style.display = "inline-block";
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("guideInfo").style.display = "none";
  document.getElementById("showButton").style.display = "inline-block";
  document.getElementById("closeButton").style.display = "none";
});

const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", () => {
  treeIcon.classList.add("shake-animation");

  treeIcon.addEventListener("animationend", () => {
    treeIcon.classList.remove("shake-animation");
  });
});

function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const shape = Math.random();
    if (shape < 0.33) {
      snowflake.classList.add("star");
    } else if (shape < 0.66) {
      snowflake.classList.add("diamond");
    }

    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    snowflakesContainer.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;
