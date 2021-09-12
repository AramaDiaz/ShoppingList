var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll("li");
var switchBtn = document.getElementById("choose");
var title = document.getElementById("title");
var p = document.getElementById("subTitle");
var div = document.getElementById("background");

switchBtn.onclick = function() {
	div.classList.toggle("switch");
	title.classList.toggle("switch");
	p.classList.toggle("switch");
	if (title.className === "switch") {
		title.innerHTML = "To-Do List";
		p.innerHTML = "Get it done today!"
		switchBtn.innerHTML = "Groceries";
	} else {
		title.innerHTML = "Grocery List";
		switchBtn.innerHTML = "To-Do List";
		p.innerHTML = "Go to Supermarket"
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteBtn(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event) {
	var target=event.target;
	target.classList.toggle("done")
}

function addDeleteBtn(parent) {
	var newButton = document.createElement("button");
	newButton.appendChild(document.createTextNode("Remove"));
	parent.appendChild(newButton);
	newButton.onclick = removeParent;
}
function removeParent(event){
	if (event.target.parentElement.className === "done") {
		event.target.parentElement.remove();
	} 
}

liItems.forEach(item => {addDeleteBtn(item)});




