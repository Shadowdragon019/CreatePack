ServerEvents.recipes(event => {
	let trans = ` `

	trans = `kubejs:incomplete_mushy_casing`
	event.recipes.create.sequenced_assembly([`create:andesite_casing`], `kubejs:planks`, [
		event.recipes.createCutting(trans, trans),
		event.recipes.createDeploying(trans, [trans, `create_pack_tweaks:mushy_brick`]),
	]).transitionalItem(trans).loops(1)

	trans = `kubejs:incomplete_mushy_casing`
	event.recipes.create.sequenced_assembly([`3x create:andesite_casing`], `kubejs:planks`, [
		event.recipes.createDeploying(trans, [trans, `kubejs:dowls`]),
		event.recipes.createDeploying(trans, [trans, `create_pack_tweaks:mushy_brick`]),
		event.recipes.createCutting(trans, trans),
	]).transitionalItem(trans).loops(1)

	trans = `kubejs:incomplete_rail`
	event.recipes.create.sequenced_assembly([`4x rail`], `kubejs:planks`, [
		event.recipes.createDeploying(trans, [trans, `create_pack_tweaks:mushy_brick`]),
		event.recipes.createDeploying(trans, [trans, `redstone`]),
		event.recipes.createCutting(trans, trans),
	]).transitionalItem(trans).loops(1)
})
