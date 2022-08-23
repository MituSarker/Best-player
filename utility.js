function getTextElementById(textId) {
    const textElement = document.getElementById(textId);
  
    const textValueString = textElement.innerText;
  
    const totalTextValue = parseFloat(textValueString);
  
    console.log("From utility", totalTextValue);
  
    return totalTextValue;
  }
  
  function getInputElementById(inputId) {
    const inputElement = document.getElementById(inputId);
  
    const inputValueString = inputElement.value;
  
    const totalInputValue = parseFloat(inputValueString);
  
    inputElement.value = "";
  
    return totalInputValue;
  }
  
  function setValueById(inputId, newValue) {
    const inputElement = document.getElementById(inputId);
  
    inputElement.innerText = newValue;
  }