let w, h, agent, SM,
	agentColors = [], gridSize;
function setup(){
	w = windowWidth;
	h = windowHeight;
	gridSize = floor(h * 0.75);
	createCanvas(w, h);
	agentColors = [color(255, 0, 0), color(0, 0, 255)];
	background(51);
	SM = new SchellingsModel(50, 50, 10, 1, 30);
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