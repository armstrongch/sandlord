var options = {
	build_throne_room: {
		name: "build_throne_room",
		desc: "Build a throne room: the first room in any sand castle worth building!",
		hist: "Built a throne room.",
		time: 0.25,
		rooms: ["Throne Room"],
		tools: [],
		shells: 0
	}
};

function get_options(hours, castle)
{
	console.log("get_options");
	
	var option_selection = [];
	
	if (hours == 0)
	{
		//we always need to build a Throne Room first
		option_selection.push(options.build_throne_room);
	}
	
	return option_selection;
}

function select_option(option_name)
{
	console.log(select_option);
	
	var selected_option = options[option_name];
	
	for (let i = 0; i < selected_option.rooms.length; i += 1)
	{
		castle.rooms.push(new_room(selected_option.rooms[i]));
	}
	
	for (let i = 0; i < selected_option.tools.length; i += 1)
	{
		castle.tools.push(selected_option.tools[i]);
	}
	
	castle.shells += selected_option.shells;
	
	$('#historyP').html(
		game.get_time_string() + ": " + selected_option.hist + "<br/>" +
		$('#historyP').html()
	);
	
	game.hours += selected_option.time;
	
	game.draw();
}