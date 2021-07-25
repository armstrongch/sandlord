var game = {
	
	hours: 0,
	
	setup: function() {
		console.log("game.setup");
		//castle.rooms.push(new_room("Throne Room"));
		this.draw();
	},
	
	draw: function() {
		console.log("game.draw");
		
		$('#seashellsP').text("Shells: " + castle.shells);
		if (castle.tools.length == 0)
		{
			$('#toolsP').text("Tools: None");
		}
		else
		{
			//print the tools!
			$('#toolsP').text("Default text: at least one tool!");
		}
		if (castle.rooms.length == 0)
		{
			$('#roomsP').text("Rooms: None");
		}
		else
		{
			var rooms_string = "";
			for (let i = 0; i < castle.rooms.length; i += 1)
			{
				rooms_string += castle.rooms[i].room_type;
				if (i < castle.rooms.length - 1)
				{
					rooms_string += ", ";
				}
			}
			//print the rooms!
			$('#roomsP').html("Rooms: " + rooms_string);
		}
		
		$('#timeP').text("Time: " + this.get_time_string());
		
		var game_options = get_options(this.hours, castle);
		var game_options_html = "";
		for (i = 0; i < game_options.length; i += 1)
		{
			game_options_html += "<p><button onclick='select_option(\"" + game_options[i].name + "\")'>"
			+ game_options[i].desc + "<br/>"
			+ "time: " + game_options[i].time + " hours"
			+ "</button></p>";
		}
		$("#optionDiv").html(game_options_html);
	},
	
	get_time_string()
	{
		console.log("game.get_time_string");
		
		var hour = 10 + Math.floor(this.hours);
		var am = "AM";
		if (hour > 12)
		{
			hour -= 12;
			am = "PM";
		}
		var time_string = hour.toString() + ":";
		var hour_fragments = Math.floor((this.hours - Math.floor(this.hours))*100);
		switch(hour_fragments)
		{
			case 25:
				time_string += "15";
				break;
			case 50:
				time_string += "30";
				break;
			case 75:
				time_string += "45";
				break;
			default:
			case 0:
				time_string += "00";
				break;
		}
		
		return time_string + " " + am;
	}
};