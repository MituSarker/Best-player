document.getElementById("btn-calculate").addEventListener("click", function () {
    const perPlayerCost = getInputElementById("per-player-amount");
  
    //finding the total amount of players in list items
    var element = document.getElementById("player-list"),
      numElements = element.getElementsByTagName("li").length;
    const newPlayerCost = perPlayerCost * numElements;
  
    setValueById("player-total-expenses", newPlayerCost);
  });