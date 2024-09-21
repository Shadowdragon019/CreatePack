ServerEvents.tags(`worldgen/biome`, event => {
	event.get(`has_structure/village_plains`).removeAll()
	event.removeAllTagsFrom(`plains`)
})

ServerEvents.tags(`worldgen/flat_level_generator_preset`, event => {
	event.get(`visible`).removeAll()
	event.get(`visible`).add(`kubejs:default`)
})

ServerEvents.tags(`block`, event => {
	event.add(`create:wrench_pickup`, `stonecutter`)
	event.add(`mushroom_grow_block`, `dirt`)
})


ServerEvents.tags(`item`, event => {
	/*
	for (let item of global.disabledItems) {
		event.removeAllTagsFrom(item)
	}
	*/

	event.add(`dry_lumber`, [`kubejs:lumber`, `kubejs:stripped_lumber`])
	event.add(`lubed_lumber`, [`kubejs:lubed_lumber`, `kubejs:lubed_and_stripped_lumber`])
})
