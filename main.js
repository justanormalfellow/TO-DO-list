const button = document.getElementById("submit");
button.addEventListener("click", submitChore);
var dict = {};

function submitChore() {
    const textChoreRaw = document.getElementById("chore");
    const textChore = textChoreRaw.value.trim();
    if (textChore == "") {
        alert("Please insert a non-empty value!");
        return
    } else if (textChore in dict) {
        alert("Chore already set.");
        return
    }

    dict[textChore] = "undefined";

    // Create a new table row
    const table = document.getElementById("choreTable");
    const newRow = table.insertRow();
 
    // Create two new cells in the row: one for the chore and one for the status
    const choreCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);

    const newButton = document.createElement('button');
    newButton.textContent = 'Click me!';

    choreCell.textContent = textChore;
    statusCell.appendChild(newButton); // Append child used to append an object to another. Container types have 

    newButton.onclick = function() {
        deleteRow(this, textChore);
    }

}

function deleteRow(r, c) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("choreTable").deleteRow(i);  
    delete dict[c]; 
}

// TODO:
// Find a way to delete the Chore entry.