ServerEvents.recipes(event => {
	function makeAssemblyItemInfo(object, removeOutputs) {
		if (typeof object == `object`) {
			return object
		} else if (typeof object == `string`) {
			return {
				item: object,
				removeOutputs: removeOutputs
			}
		} else {
			throw `Did not recognize type. Type was "${typeof object}" instead of string or object. Given was "${object}."`
		}
	}

	function makeAssemblyInfo(defaultRemoveOutputs, items) {
		let arrayToReturn = []
		for (let item of items) {
			arrayToReturn.push(makeAssemblyItemInfo(item, defaultRemoveOutputs))
		}
		return arrayToReturn
	}

	// Assembling
	for (let info of [
		makeAssemblyInfo(true, global.mushy),
		makeAssemblyInfo(true, global.woodConstruct),
		makeAssemblyInfo(true, global.rail),
		makeAssemblyInfo(true, global.mushyBrick),
		makeAssemblyInfo(true, global.redstoneDevices),
		makeAssemblyInfo(true, global.unnels),
	]) {
		for (let first of info) {
			let firstItem = Item.of(first.item)
			if (first.removeOutputs) {
				event.remove({output: firstItem})
			}
			for (let second of info) {
				let secondItem = Item.of(second.item)
				if (firstItem.count == 1) {
					event.stonecutting(secondItem, firstItem)
				}
			}
		}
	}

	for (var item of Ingredient.of(`#dry_lumber`).itemIds) {
		event.stonecutting(`kubejs:planks`, item)
	}
	for (var item of Ingredient.of(`#lubed_lumber`).itemIds) {
		event.stonecutting(`2x kubejs:planks`, item)
	}
	event.stonecutting(`2x kubejs:dowls`, `kubejs:planks`)
})
