let sampleData = [];
let storedTodos = localStorage.getItem("todos");
console.log(typeof storedTodos);

let wrapper = document.getElementById("todos");
// const handleShowTodos = () => {
//   let created = document.createElement("li");
//   sampleData.map((item) => {
//     created.innerText = item;
//     wrapper.appendChild(created);
//   });
//   console.log("while show", sampleData);
// };

const handleShowTodos = () => {
  storedTodos.map((item) => {
    let created = document.createElement("li");
    created.innerText = item;
    wrapper.appendChild(created);
  });
};
handleShowTodos();

const handleAddTodo = (event) => {
  event.preventDefault();
  let inputField = document.getElementById("userInput");
  let inputValue = inputField.value;
  sampleData.push(inputValue);
  console.log("inside add to do", sampleData);
  inputField.value = "";

  handleShowTodos();
  localStorage.setItem("todos", JSON.stringify(sampleData));
};
