// teste.js

const countries = Array.from(document.getElementsByClassName("js-change-page"));

countries.map( element => {
	const countryName = element.getAttribute("data-country")
	
	element.addEventListener("click", (event) => {
		alert(`Selecionaste o pais: ${countryName}`)
	});
})