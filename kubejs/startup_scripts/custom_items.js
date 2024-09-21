StartupEvents.registry(`item`, event => {
	// Trees
	event.create(`lumber`)
	event.create(`stripped_lumber`)
	event.create(`lubed_lumber`)
	event.create(`lubed_and_stripped_lumber`).displayName(`Lubed & Stripped Lumber`)
	event.create(`bark`)
	event.create(`planks`)
	event.create(`dowls`)
	event.create(`blob_of_lube`)

	// Other
	event.create(`incomplete_mushy_casing`, `create:sequenced_assembly`)
	event.create(`incomplete_rail`, `create:sequenced_assembly`)
})
