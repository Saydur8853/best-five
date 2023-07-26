
const playerList = document.getElementById("selected-player-list");
const pressedButton = document.querySelectorAll(".select-button");
const playerCostBtn = document.getElementById("player-cost");
const calcTotalBtn = document.getElementById("calc-total-btn");
const warningArea = document.getElementById("warningArea");

let counter = 0;

function addPlayerToList(playerName) {
  const li = document.createElement("li");
  li.innerText = playerName;
  playerList.appendChild(li);
}

function disableButton(btn) {
  btn.setAttribute("disabled", true);
  btn.classList.add("disabled-btn");
  btn.parentNode.parentNode.classList.add("border-red");
}

function showWarning() {
  warningArea.style.display = "block";
}

function getTextFromInput(id) {
  const getText = document.querySelector(`#${id}`).value;
  const convertNumber = parseInt(getText);
  if (isNaN(convertNumber)) {
    alert("Please Input Number Only");
    return;
  } else {
    return convertNumber;
  }
}

function getValueFromText(id) {
  const text = document.querySelector(`#${id}`).innerText;
  const textToNumber = parseInt(text);
  return textToNumber;
}

function setTextById(id, value) {
  document.querySelector(`#${id}`).innerText = value;
}

pressedButton.forEach((btnSelect) => {
  btnSelect.addEventListener("click", (event) => {
    if (counter < 5) {
      counter++;
      disableButton(event.target);
      const playerName = event.target.parentNode.firstElementChild.innerText;
      addPlayerToList(playerName);
    } else {
      showWarning();
    }
  });
});

playerCostBtn.addEventListener("click", () => {
  const perPlayerCost = getTextFromInput('per-player-cost');
  const playerCount = playerList.querySelectorAll("li").length;
  setTextById("player-expenses", perPlayerCost * playerCount);
});

calcTotalBtn.addEventListener("click", () => {
  const playerTotalCost = getValueFromText("player-expenses");
  const coachCost = getTextFromInput("coach-cost");
  const managerCost = getTextFromInput("manager-cost");
  const totalCost = playerTotalCost + coachCost + managerCost;
  setTextById('total', totalCost);
});
