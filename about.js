console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function complimentUser () {
	alert(compliment)
}

let compliment = "You have Great Taste Buds"
let img1 = document.querySelector('img#img1')
img1.addEventListener("mouseover", complimentUser)


// const trailHeads = ['Bell Caonyon', 'Rock Mouth', 'Hidden Valley']


// const pathBtn = document.querySelector("#path-finder")
// function pathFinder(){
// 	console.log(trailHeads[Math.floor(Math.random() * array.length)])
// }

// pathBtn.addEventListener('click', pathFinder)