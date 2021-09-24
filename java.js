//loader for 2 seconds
const loader = document.querySelector(".loader");

window.onload = function () {
	setTimeout(function () {
		loader.style.opacity = "0";
		setTimeout(function () {
			loader.style.display = "none";
		}, 500);
	}, 2000);
};

setInterval(myTimer, 1000);

function myTimer() {
	const d = new Date();
	document.getElementById("clock").innerHTML = `Clock is tickin ${d.toLocaleTimeString()}`;
}

// add item to shopping list table from input
function addItem() {
	// get value from input item and input qty
	const qty = document.getElementById("inputQty").value;
	const item = document.getElementById("inputItem").value;

	// if input item is empty focus on input item field
	if (item === "") {
		document.getElementById("inputItem").focus();
		return;
	}

	// if input qty is empty focus on input qty field
	if (qty === "") {
		document.getElementById("inputQty").focus();
		return;
	}

	// create html tag <td> and append value from input item to td
	const newItemCol = document.createElement("td");
	newItemCol.append(item);

	// create html tag <td> and append value from input qty to td
	const newQtyCol = document.createElement("td");
	newQtyCol.append(qty);

	// create html tag <tr> and append both columns (td with item value and td with qty value) to row
	const newRow = document.createElement("tr");
	newRow.append(newItemCol, newQtyCol);

	// add newRow element to shoppingList element
	document.getElementById("shoppingList").append(newRow);

	// restart input fields
	document.getElementById("inputItem").value = "";
	document.getElementById("inputQty").value = 1;

	//focus on input item after adding item
	document.getElementById("inputItem").focus();
}

// Eventlisteners for Enter key for adding items to list:

// listen for eventListener keypress on input item if key is "Enter" then trigger addItem function
document.querySelector("#inputItem").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addItem();
	}
});

// listen for eventListener keypress on input qty if key is "Enter" then trigger addItem function
document.querySelector("#inputQty").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addItem();
	}
});

// function to export table as PDF
// FYI I did not spend time on styling the PDF is only exports RAW html table with values
function exportPdf() {
	const doc = new jsPDF(); //create jsPDF object

	doc.fromHTML(
		document.getElementById("table"), // element by ID which you want to print as PDF
		15,
		15,
		{
			width: 500, //set width
		},
		function (a) {
			doc.save("ShoppingList.pdf"); // save file name as ShoppingList.pdf
		}
	);
}
