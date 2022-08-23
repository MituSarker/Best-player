document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    const managerCost = getInputElementById("manager-amount");

    const coachCost = getInputElementById("coach-amount");

    const playerTotalCost = getTextElementById("player-total-expenses");

    const totalAmountOfCoast = managerCost + coachCost + playerTotalCost;

    console.log(totalAmountOfCoast);

    setValueById("total-cost", totalAmountOfCoast);
  });