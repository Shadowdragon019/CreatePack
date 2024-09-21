REIEvents.hide('item', event => {
	// Hiding items that refuse to be hidden by REI's config
	event.hide(/banner/)
	event.hide(/stew/)
	event.hide(/chromatic/)
	event.hide(/recipe_card/)
	event.hide(/badge/)
})
