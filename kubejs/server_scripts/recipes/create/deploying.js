ServerEvents.recipes(event => {
	event.recipes.create.deploying(`3x kubejs:uncooked_mushy_brick_mold`, [`create_pack_tweaks:mushy_paste`, `create_pack_tweaks:mushy_brick`])

	event.recipes.create.deploying(`kubejs:lubed_lumber`, [`kubejs:lumber`, `kubejs:blob_of_lube`])

	event.recipes.create.deploying(`redstone_torch`, [`kubejs:planks`, `redstone`])
	event.recipes.create.deploying(`lever`, [`redstone_torch`, `create_pack_tweaks:mushy_brick`])
	event.recipes.create.deploying(`create:powered_toggle_latch`, [`create:andesite_casing`, `lever`])

	event.recipes.create.deploying(`create:super_glue`, [`slime_ball`, `create_pack_tweaks:mushy_brick`])

	event.recipes.create.deploying(`create:cogwheel`, [`petrolsparts:coaxial_gear`, `create:shaft`])
	event.recipes.create.deploying(`create:large_cogwheel`, [`petrolsparts:large_coaxial_gear`, `create:shaft`])

	event.recipes.create.deploying(`create:andesite_funnel`, [`create:andesite_casing`, `create:belt_connector`])
})
