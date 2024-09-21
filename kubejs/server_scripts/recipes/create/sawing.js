ServerEvents.recipes(event => {
	event.recipes.create.cutting([`kubejs:stripped_lumber`, `kubejs:bark`], `kubejs:lumber`)
	event.recipes.create.cutting([`kubejs:lubed_and_stripped_lumber`, `2x kubejs:bark`], `kubejs:lubed_lumber`)
})
