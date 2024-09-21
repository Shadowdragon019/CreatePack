EntityEvents.hurt(event => {
	if (event.entity.type == "minecraft:player") {
		event.cancel()
	}
})
