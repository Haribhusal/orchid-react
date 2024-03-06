const handleSubmit = (event) => {
  event.preventDefault();
  let showDiv = document.getElementById("todos");
  let inputField = document.getElementById("userInput");
  let inputValue = inputField.value;
  let itemCreated = document.createElement("li");
  itemCreated.innerText = inputValue;
  showDiv.appendChild(itemCreated);
  inputField.value = "";
  //   console.log("Adding...", inputValue);
};

// localStorage.setItem("collegeName", "Orchid College");

// let stored = localStorage.getItem("collegeName");
// // console.log(stored);
// document.write(stored);
