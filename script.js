// Get necessary elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Function to create a new to-do item
function createTodoItem() {
  const todoText = todoInput.value;
  if (todoText !== "") {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    let emoji;
    if (todoText.toLowerCase().includes("positive")) {
      emoji = "😊"; // Happy emoji for positive items
    } else if (todoText.toLowerCase().includes("negative")) {
      emoji = "😞"; // Negative emoji for negative items
    } else {
      emoji = getRandomEmoji(); // Random emoji for other items
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = `${emoji} ${todoText}`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodoItem);

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    todoInput.value = "";
  }
}

// Function to delete a to-do item
function deleteTodoItem(event) {
  const listItem = event.target.parentElement;
  todoList.removeChild(listItem);
}

// Function to get a random emoji
function getRandomEmoji() {
  const emojis = ["😊", "🌟", "🎉", "✨", "📚", "🍔", "⚽️", "🎸"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Event listener for add button click
addButton.addEventListener("click", createTodoItem);

// Event listener for Enter key press
todoInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    createTodoItem();
  }
});
