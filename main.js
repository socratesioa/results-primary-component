let scores = [];

fetch("./data.json")
  .then((response) => {
    if (!response.ok) return console.log("Oops! Something went wrong.");
    return response.json();
  })
  .then((data) => {
    console.log(data);
    scores = data;
    renderCards("score-summary");
  });

function renderCards() {
  const scoreCard = document.getElementById("scores-container");
  const averageDiv = document.getElementById("average");
  scoreCard.innerHTML = "";

  let totalScore = 0;

  scores.forEach((item) => {
    const { category, score, icon } = item;
    const categoryClass = category.toLowerCase().replace(/\s+/g, "-");
    const row = document.createElement("div");
    row.className = `result-row ${categoryClass}`;

    row.innerHTML = `
    <div class="score-category">
    <img src="${icon}"/>
    <p>${category}</p>
    </div>
    <p class="score-text">${score}<span> / 100</span></p>
    `;

    scoreCard.appendChild(row);

    totalScore += score / scores.length;
  });

  const averageScore = totalScore;
  averageDiv.innerHTML = `${Math.round(averageScore)}`;
}
