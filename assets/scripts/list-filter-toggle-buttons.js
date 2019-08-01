		var filter_options_1 = document.getElementsByName("filter_options_1");
		var filter_options_2 = document.getElementsByName("filter_options_2");
		var filter_options_3 = document.getElementsByName("filter_options_3");

		var current_filter_array_3 = current_filter_array_2 = current_filter_array_1 = [];

		alertx("onload");

		document.getElementById('filter_options_1').onchange = function(){
			for (i = 0; i < filter_options_1.length; i++) {
				if (filter_options_1[i].checked) {
					var options_selected= filter_options_1[i].value;
				}
			}
			alertx(options_selected)
		}
		document.getElementById('filter_options_2').onchange = function(){
			for (i = 0; i < filter_options_2.length; i++) {
				if (filter_options_2[i].checked) {
					var options_selected= filter_options_2[i].value;
				}
			}
			alertx(options_selected)
		}
		document.getElementById('filter_options_3').onchange = function(){
			for (i = 0; i < filter_options_3.length; i++) {
				if (filter_options_3[i].checked) {
					var options_selected= filter_options_3[i].value;
				}
			}
			alertx(options_selected)
		}

		function alertx(id){
			var current_filter_array = ["filterDiv", "show"];
			var filter_array_1 = ["tools","guidance"];
			var filter_array_2 = ["publishers","users"];
			var filter_array_3 = ["technical", "non-technical"];
			var id_split =  id.split("_");
			if (id_split[0] == "tools" || id_split[0] == "guidance"){
				current_filter_array_1 = [];
				current_filter_array_1.push(id_split[0], id_split[1]);
			}

			else if (id_split[0] == "publishers" || id_split[0] == "users"){
				current_filter_array_2 =[];
				current_filter_array_2.push(id_split[0], id_split[1]);
			}

			else if (id_split[0] == "technical" || id_split[0] == "non-technical"){
				current_filter_array_3 = [];
				current_filter_array_3.push(id_split[0], id_split[1]);
			}
			else if (id_split[0] == "onload"){
				current_filter_array_1 = ["tools","guidance"];
				current_filter_array_2 = ["users","publishers"];
				current_filter_array_3 = ["technical", "non-technical"];
			}

			var x = document.getElementsByClassName("filterDiv");

			current_filter_array_1 = current_filter_array_1.filter(item => item !== undefined);
			current_filter_array_2 = current_filter_array_2.filter(item => item !== undefined);
			current_filter_array_3= current_filter_array_3.filter(item => item !== undefined);

			for (var i = 0; i < x.length; i++) {
				x_array = x[i].classList["value"].split(" ");
				if(x_array.indexOf("no_show") !== -1) x_array.splice(x_array.indexOf("no_show"),1);
				if(x_array.indexOf("show") !== -1) x_array.splice(x_array.indexOf("show"),1);
				if(x_array.indexOf("filterDiv") !== -1) x_array.splice(x_array.indexOf("filterDiv"),1);

				if( x_array.some(r=> current_filter_array_1.indexOf(r) >= 0) && x_array.some(r=> current_filter_array_2.indexOf(r) >= 0) &&  x_array.some(r=> current_filter_array_3.indexOf(r) >= 0)){
					x[i].classList.remove("no_show");
					x[i].classList.add("show");
				}
				else{
					x[i].classList.remove("show");
					x[i].classList.add("no_show");
				}
			}

		}