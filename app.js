"use strict";

window.onload = function() {
	buttonFunction();
}


function buttonFunction() {

	let searchButton = document.getElementById("btn-search");
	// searchButton.textContent = "Hello my friend";
	searchButton.addEventListener("click", async function(e){
		e.target.preventDefault;
		await fetch("superheroes.php?q=Ironman")
			.then(async response => {
				if(response.ok) {
					
					return console.log(await response.text())
				}else {
					return Promise.reject("Something went wrong!")
				}
			})
			.catch(e => {
				console.log("An error occured ". e);
			})
		
	});
	// alert("Hello, I am starting this lab's first alert");
}

function getSearch() {
	var input = document.getElementById("search-field-input");
	var value = input.value;
	console.log(value);

}

