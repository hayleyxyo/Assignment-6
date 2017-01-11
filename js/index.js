$(document).ready(function() {
	var cities = ["NYC","SF","LA","ATX","SYD"]; //change to citys

	$(cities).each(function(index, element){ //index can be anything here see below comments
		 $("select").append("<option value='" + this + "'>" + this + "</option>");
		//$("select").append("<option value='" + foo + "'>" + this + "</option>");
		//console.log("index:" + foo + " element: " + bar	 );

	});

	$("#city-type").change(changeBg); //city change accordingly
});

	function changeBg(event) {           //stopping brower to refresh
		event.preventDefault();
		var selectedCity = $("#city-type").val();
        //console.log(selectedCity);
		if ($("#city-type").val() == "NYC") {   //when user select nyc,
			$("body").attr("class", "nyc");      // nyc picture appears
		}

		else if ($("#city-type").val() == "SF" ) {   //when user select sf,
			$("body").attr("class", "sf");           //sf picture appears
		}

		else if ($("#city-type").val() == "LA") {   //when user select la,
			$("body").attr("class", "la");			// la picture appears
		}

		else if ($("#city-type").val() == "ATX") {   //when user select atx,
			$("body").attr("class", "austin");		//austin picture appears
		}

		else if ($("#city-type").val() == "SYD") {	//when user select syd,
			$("body").attr("class", "sydney");		//sydney picture appears
		}
	}
