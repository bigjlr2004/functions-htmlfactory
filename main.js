



const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//define a function to convert the obect to a string
const computerHTMLMaker = (computerObject) => {
	//make some html to represent the phone.
	const computerHTMLSection = `<section id="computer--1"> 
	<h1>${computerObject.manufacturer} ${computerObject.make}</h1> 
	<div>Model: ${computerObject.model}</div>
	<div>Memory: ${computerObject.specs.memory} GB</div>
	<div>Hard drive space: ${computerObject.specs.hardDrive}</div>
	<div>Processor speed: ${computerObject.specs.processor} Ghz</div>
</section>`
	//return the html
	return computerHTMLSection;
}
//invoke the function and give the minion what it needs to do its job
const stringReturned = computerHTMLMaker(computer)

console.log(stringReturned)





