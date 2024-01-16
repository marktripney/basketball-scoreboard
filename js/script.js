const btns = document.querySelectorAll(".btn");
const homeScoreCount = document.querySelector(".home-score");
const guestScoreCount = document.querySelector(".guest-score");
let homeScore = 0;
let guestScore = 0;

const highlightLeader = () => {
  const homeScoreInt = parseInt(homeScoreCount.textContent);
  const guestScoreInt = parseInt(guestScoreCount.textContent);
  if (homeScoreInt > guestScoreInt) {
    homeScoreCount.classList.add("leader-border");
    guestScoreCount.classList.remove("leader-border");
  }
  if (guestScoreInt > homeScoreInt) {
    guestScoreCount.classList.add("leader-border");
    homeScoreCount.classList.remove("leader-border");
  }
  if (guestScoreInt === homeScoreInt) {
    homeScoreCount.classList.remove("leader-border");
    guestScoreCount.classList.remove("leader-border");
  }
};

const updateScore = (scorer) => {
  if (scorer === "home") {
    homeScoreCount.textContent = homeScore;
  } else {
    guestScoreCount.textContent = guestScore;
  }
  highlightLeader();
};

const getScorer = (btn) => {
  // Find parent with .score-div class...
  const closestDiv = btn.closest(".score-div");
  // ... then get its child .score span
  const score = closestDiv.querySelector(".score");
  // Look for .home-score class on the .score span
  if (score.classList.contains("home-score")) {
    // parseInt the characer following the buttons's '+' character
    homeScore += parseInt(btn.textContent[1]);
    updateScore("home");
  } else {
    guestScore += parseInt(btn.textContent[1]);
    updateScore("guest");
  }
};

btns.forEach((btn) => btn.addEventListener("click", () => getScorer(btn)));
