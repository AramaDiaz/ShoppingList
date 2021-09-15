let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let liItems = document.querySelectorAll("li");
let switchBtn = document.getElementById("choose");
let title = document.getElementById("title");
let p = document.getElementById("subTitle");
let div = document.getElementById("background");

switchBtn.onclick = () => {
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

const inputLength = () => input.value.length;

const createListElement = () => {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteBtn(li);
	ul.appendChild(li);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = (event) => {
	let target = event.target;
	target.classList.toggle("done")
}

const addDeleteBtn = (parent) => {
	const newButton = document.createElement("button");
	newButton.appendChild(document.createTextNode("Remove"));
	parent.appendChild(newButton);
	newButton.onclick = removeParent;
}
const removeParent = (event) => {
	if (event.target.parentElement.className === "done") {
		event.target.parentElement.remove();
	} 
}

liItems.forEach(item => {addDeleteBtn(item)});




