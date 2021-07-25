var game = {
	
	hours: 0,
	
	setup: function() {
		console.log("game.setup");
		//castle.rooms.push(new_room("throne room"));
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
			//print the rooms!
			$('#roomsP').text("Default text: at least one room!");
		}
		
		var game_options = get_options(this.hours, castle);
		var game_options_html = "";
		for (i = 0; i < game_options.length; i += 1)
		{
			game_options_html += "<p><button onclick='select_option(" + game_options[i].name + ")'>"
			+ game_options[i].desc + "<br/>"
			+ "time: " + game_options[i].time + " hours"
			+ "</button></p>";
		}
		$("#optionDiv").html(game_options_html);
	}
};