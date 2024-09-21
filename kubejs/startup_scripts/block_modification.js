BlockEvents.modification(event => {
	for (var block of [`stone`, `dirt`, `gravel`]) {
		event.modify(block, modifiedBlock => {
			modifiedBlock.destroySpeed = -1
			modifiedBlock.explosionResistance = 999999
		})
	}

	for (var block of [`red_mushroom_block`, `mushroom_stem`, `brown_mushroom_block`, `oak_log`, `oak_leaves`]) {
		event.modify(block, modifiedBlock => {
			modifiedBlock.destroySpeed = 0.5
			modifiedBlock.explosionResistance = 0
		})
	}
})
