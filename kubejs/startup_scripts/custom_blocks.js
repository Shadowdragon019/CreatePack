StartupEvents.registry(`block`, event => {
	// Mushy
	event.create(`uncooked_mushy_brick_mold`).box(2, 0, 0, 14, 5, 16).viewBlocking(false).fullBlock(false).transparent(true)

	event.create(`redstone`).unbreakable()
	event.create(`coal`).unbreakable()
})
