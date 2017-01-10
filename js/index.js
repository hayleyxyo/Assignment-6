$(document).ready(function() {
	var cities = ["NYC","SF","LA","ATX","SYD"]; //change to citys

	$(cities).each(function(index, element){
		 $("select").append("<option value='" + this + "'>" + this + "</option>");
		//$("select").append("<option value='" + foo + "'>" + this + "</option>");
		//console.log("index:" + foo + " element: " + bar	 );

	});

	$("#city-type").change(changeBg);
});

	function changeBg(event) {
		event.preventDefault();
		var selectedCity = $("#city-type").val();
        //console.log(selectedCity);
		if ($("#city-type").val() == "NYC") {

			$("body").attr("class", "nyc");
		}

		else if ($("#city-type").val() == "SF" ) {
			$("body").attr("class", "sf");
		}

		else if ($("#city-type").val() == "LA") {
			$("body").attr("class", "la");
		}

		else if ($("#city-type").val() == "ATX") {
			$("body").attr("class", "austin");
		}

		else if ($("#city-type").val() == "SYD") {
			$("body").attr("class", "sydney");
		}
	}
