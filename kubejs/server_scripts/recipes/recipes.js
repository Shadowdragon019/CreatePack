ServerEvents.recipes(event => {
	event.remove({not: {output: `bedrock`}})
})
