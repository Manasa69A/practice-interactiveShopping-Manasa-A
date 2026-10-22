const itemInput = document.getElementById("itemInput");
const addButton = document.querySelector("#addButton");
const shoppingList = document.getElementById("shoppingList");

// Add a new shopping list item
addButton.addEventListener("click", function () {
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Please enter an item!");
        return;
    }

    // Create a list item
    const li = document.createElement("li");

    // Create a span for the item text
    const span = document.createElement("span");
    span.textContent = itemText;

    // Create the Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("removeButton");

    removeButton.addEventListener("click", function () {
        li.remove();
    });

    // Create the Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");

    editButton.addEventListener("click", function () {
        if (editButton.textContent === "Edit") {
            // Replace text with an input field
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = span.textContent;

            li.insertBefore(editInput, span);
            span.remove();

            editButton.textContent = "Save";
            editInput.focus();
        } else {
            // Save the updated item
            const editInput = li.querySelector("input");
            const newText = editInput.value.trim();

            if (newText === "") {
                alert("Item cannot be empty!");
                editInput.focus();
                return;
            }

            span.textContent = newText;

            editInput.replaceWith(span);
            editButton.textContent = "Edit";
        }
    });

    // Add elements to the list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    // Add the list item to the page
    shoppingList.appendChild(li);

    // Clear the input field
    itemInput.value = "";
    itemInput.focus();
});