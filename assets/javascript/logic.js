//Setup variables
var apiKey = "Z0wYO4KzueVupwRXOVBmc2K5VNaAZS6w";
var buttonArray = ["Dad reflexes", "Karate chop", "Back flip", "Vince Young", "Dallas Cowboys", "Jet Engine"];

//Functions
	
	//When you click a button, ajax get the images
//Main function
	//populate page with buttons
$(document).ready(function(){
	function displayPlayerInfo(){
		var player = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + player + "&limit=10&offset=0&rating=G&lang=en";		
		$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(choice){
				console.log(choice.data[0]);
				for(i= 0; i<choice.data.length; i++){
					$('#players').prepend("<img src=" + choice.data[i].images.original.webp +" style = 'height = 400px'>");
				}
				})

	}
	function showButtons(){
		$("playerBtns").empty();
		for(i=0; i< buttonArray.length; i++){
			var getBtn = $('<button>');
			getBtn.addClass("playa");
			getBtn.attr("data-name", buttonArray[i]);
			getBtn.text(buttonArray[i]);
			$(".playerBtns").append(getBtn);
		}
	}
	//When you click a button, ajax get the images
	$(document).on("click", ".playa", displayPlayerInfo);
	showButtons();

})