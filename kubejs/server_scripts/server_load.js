ServerEvents.loaded(event => {
	let server = event.server
	server.runCommandSilent(`gamerule doMobSpawning false`)
	server.runCommandSilent(`gamerule doDaylightCycle false`)
	server.runCommandSilent(`gamerule doWeatherCycle false`)
	server.runCommandSilent(`gamerule doFireTick false`)
	server.runCommandSilent(`time set noon`)
})
