class Agent{
	constructor(satisfaction, type, threshold){
		this.sat = satisfaction;
		this.type = type;
		this.t = threshold;
	}
	show(x, y, r){
		strokeWeight(2);
		stroke(this.sat * 255);
		fill(agentColors[this.type]);
		ellipse(x, y, r);
	}
}