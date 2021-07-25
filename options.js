var options = {
	build_throne_room: {
		name: "build_throne_room",
		desc: "build throne room description",
		time: 0.25,
		rooms: ["throne room"],
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
		//we always need to build a throne room first
		option_selection.push(options.build_throne_room);
	}
	
	return option_selection;
}

function select_option(option_name)
{
	console.log(select_option);
}