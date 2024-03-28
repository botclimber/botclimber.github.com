"use strict";


    document.addEventListener("DOMContentLoaded", function() {
        var countries = document.querySelectorAll(".country");

        countries.forEach(function(country) {
			
            // Click action
            country.addEventListener("click", function() {
                var countryId = this.id;
                
				// perform action
                alert("You clicked on " + countryId);
            });
        });
    });
