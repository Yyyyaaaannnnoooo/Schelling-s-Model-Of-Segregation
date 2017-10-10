let w, h, agent, SM, gridSize;
function setup(){
	w = windowWidth;
	h = windowHeight;
	gridSize = floor(h * 0.75);
	createCanvas(w, h);
	rectMode(CENTER);
	background(51);
	SM = new SchellingsModel(50, 50, 10, 1, 50);
	// SM.checkNeighbour();
	// SM.moveAgents();	
	// SM.show();
}

function draw(){	
	if(frameCount % 30 == 0){
		background(51);
		SM.checkNeighbour();
		SM.moveAgents();	
		SM.show();
	}
}