"use strict";


    document.addEventListener("DOMContentLoaded", function() {
        var countries = document.querySelectorAll(".country");

        countries.forEach(function(country) {
            // Hover effect
            country.addEventListener("mouseenter", function() {
                this.setAttribute("fill", "#aaa");
            });

            country.addEventListener("mouseleave", function() {
                this.setAttribute("fill", "#ccc");
            });

            // Click action
            country.addEventListener("click", function() {
                var countryId = this.id;
                // Perform your action here, e.g., display information about the country
                alert("You clicked on " + countryId);
            });
        });
    });
