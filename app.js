"use strict";

window.onload = function() {
	buttonFunction();
}


function buttonFunction() {

	let searchButton = document.getElementById("btn-search");
	
	searchButton.addEventListener("click", async function(e){
		e.target.preventDefault;
		var query = document.getElementById("search-field-input").value;
		var url = "superheroes.php?".concat(query);
		var result_area = document.getElementById("result");

		result_area.innerHTML = "";
		
		await fetch(url)
			.then(async response => {
				if(response.ok) {
					var data = await response.json();
					var alias = document.createElement("h3");
					var super_name = document.createElement("h4");
					var biography = document.createElement("p");

					var aliasNode = document.createTextNode(data[0]);
					var super_nameNode = document.createTextNode(data[1]);
					var biographyNode = document.createTextNode(data[2]);

					alias.appendChild(aliasNode);
					super_name.appendChild(super_nameNode);
					biography.appendChild(biographyNode);

					result_area.appendChild(alias);
					result_area.appendChild(super_name);
					result_area.appendChild(biography);

					return console.log(data[0]);
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


