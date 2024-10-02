ItemEvents.modification(event => {
	event.modify(`barrel`, item => {
		item.burnTime = 0
	})
	event.modify(`oak_sapling`, item => {
		item.burnTime = 0
	})
	event.modify(`lava_bucket`, item => {
		item.burnTime = 0
	})
})
