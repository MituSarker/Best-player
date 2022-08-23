document.getElementById("btn-neymer").addEventListener("click", function () {
    addPlayerName("Neymar Jr");
  
    const submitButton = document.getElementById("btn-neymer");
  
    submitButton.disabled = true;
    checkList();
  });
  document.getElementById("btn-machado").addEventListener("click", function () {
    addPlayerName("Vítor Machado");
    const submitButton = document.getElementById("btn-machado");
  
    submitButton.disabled = true;
    checkList();
  });
  document.getElementById("btn-ramos").addEventListener("click", function () {
    addPlayerName("Sergio Ramos");
    const submitButton = document.getElementById("btn-ramos");
  
    submitButton.disabled = true;
    checkList();
  });
  document.getElementById("btn-mbappe").addEventListener("click", function () {
    addPlayerName("Kylian Mbappé");
    const submitButton = document.getElementById("btn-mbappe");
  
    submitButton.disabled = true;
    checkList();
  });
  document.getElementById("btn-renato").addEventListener("click", function () {
    addPlayerName("Renato Sanches");
    const submitButton = document.getElementById("btn-renato");
  
    submitButton.disabled = true;
    checkList();
  });
  document.getElementById("btn-messi").addEventListener("click", function () {
    addPlayerName("Lionel Messi");
    const submitButton = document.getElementById("btn-messi");
  
    submitButton.disabled = true;
    checkList();
  });
  
  /*  here It will calculate the players cost by clicking a function
   */
  
  document.getElementById("btn-calculate").addEventListener("click", function () {
    const perPlayerCost = getInputElementById("per-player-amount");
  
    //finding the total amount of players in list items
    var element = document.getElementById("player-list"),
      numElements = element.getElementsByTagName("li").length;
    const newPlayerCost = perPlayerCost * numElements;
  
    setValueById("player-total-expenses", newPlayerCost);
  });
  
  /*  Total cost  */
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