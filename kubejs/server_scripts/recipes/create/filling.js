ServerEvents.recipes(event => {
	event.recipes.create.filling(Item.of(`ceramicbucket:ceramic_bucket`, `{Fluid:{Amount:1000,FluidName:"minecraft:water"}}`), [Fluid.of(`water`, 1000), `ceramicbucket:ceramic_bucket`])
	event.recipes.create.filling(Item.of(`ceramicbucket:ceramic_bucket`, `{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}`), [Fluid.of(`lava`, 1000), `ceramicbucket:ceramic_bucket`])
})
