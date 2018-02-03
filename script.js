var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.createElement("button")
	button.innerHTML = "Random Color";
body.appendChild(button);

var btn = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";";
}

function colorRandom() {
	var letters = '0123456789ABCDEF';
	var col1 = '#';
	var col2 = '#';
	for (var i = 0; i < 6; i++) {
		col1 += letters[Math.floor(Math.random() * 16)];
		col2 += letters[Math.floor(Math.random() * 16)];
	}

	body.style.background = "linear-gradient(to right, " + col1 + ", " + col2 + ")";

	css.textContent = body.style.background + ";";

	color1.value = col1;
	color2.value = col2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", colorRandom);
