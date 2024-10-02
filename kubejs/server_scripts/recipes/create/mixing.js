ServerEvents.recipes(event => {
	event.recipes.create.mixing(`3x create_pack_tweaks:small_pile_of_mushy_paste`, `create_pack_tweaks:mushy_paste`)

	event.recipes.create.mixing(`kubejs:blob_of_lube`, `slime_ball`).heated()
})
