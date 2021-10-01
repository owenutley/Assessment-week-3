const trailHeads = ['Bell Canyon', 'Rock Mouth', 'Hidden Valley', 'Little Willow Canyon', 'Draper Alpine', 'Dimple Dell', 'Temple Quarry', 'Alpenbock Loop']


const pathBtn = document.querySelector("#path-finder")
function pathFinder(){
	alert("You should Try " + trailHeads[Math.floor(Math.random() * trailHeads.length)] + " Trail")
}

pathBtn.addEventListener('click', pathFinder)