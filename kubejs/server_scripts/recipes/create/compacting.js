ServerEvents.recipes(event => {
	event.recipes.create.compacting(`create_pack_tweaks:mushy_paste`, `#forge:mushrooms`).heated()
	event.recipes.create.compacting(`3x create_pack_tweaks:mushy_paste`, [`red_mushroom`, `brown_mushroom`]).heated()
	event.recipes.create.compacting(`4x create_pack_tweaks:mushy_paste`, [`red_mushroom`, `brown_mushroom`, `kubejs:bark`]).heated()

	event.recipes.create.compacting(`slime_ball`, `2x oak_sapling`)

	event.recipes.create.compacting(`create:belt_connector`, `2x kubejs:blob_of_lube`)
})
