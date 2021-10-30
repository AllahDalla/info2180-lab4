"use strict";

window.onload = function() {
	buttonFunction();
}


function buttonFunction() {

	let searchButton = document.getElementById("btn-search");
	// searchButton.textContent = "Hello my friend";
	searchButton.addEventListener("click", async function(e){
		e.target.preventDefault;
		await fetch("superheroes.php")
			.then(async response => {
				if(response.ok) {

					return alert(await response.text())
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

