function new_room(room_type)
{	
	console.log("new_room");
	
	var desc = "default description";
	
	switch(room_type)
	{
		case "Throne Room":
			desc = "The most important room in the castle. Don't allow this to be washed away by the tide!";
			break;
	}
	
	return {
		room_type: room_type,
		desc: desc
	}
}