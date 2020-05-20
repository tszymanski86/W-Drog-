document.addEventListener("DOMContentLoaded", function () {
	viewButtons();
  });
  
  function viewButtons() {
	const showThingsButton = document.getElementById("addSectionButton");
	const showLuggageButton = document.getElementById("luggageSectionButton");
	showThingsButton.addEventListener("click", function () {
	  document.getElementById("things").classList.remove("hidden");
	  document.getElementById("luggage").classList.add("hidden");
	});
	showLuggageButton.addEventListener("click", function () {
	  document.getElementById("things").classList.add("hidden");
	  document.getElementById("luggage").classList.remove("hidden");
	});
  }