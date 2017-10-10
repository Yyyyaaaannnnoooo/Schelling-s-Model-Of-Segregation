// let agentColors = [];
class Agent{
	constructor(satisfaction, type, threshold){
		this.sat = satisfaction;
		this.type = type;
		this.t = threshold;
		this.alpha = map(parseFloat(this.t), 10, 80, 25, 255);
		this.agentColors = [color(255, 0, 0, this.alpha), color(0, 255, 0, this.alpha), color(0, 0, 255, this.alpha), 
				   color(255, 255, 0, this.alpha), color(0, 255, 255, this.alpha), color(255, 0, 255, this.alpha),
				   color(0, this.alpha), color(255, this.alpha)];
	}
	show(x, y, r){
		strokeWeight(2);
		fill(this.agentColors[this.type]);
		// fill(color());
		ellipse(x, y, r);
		// if(this.type == 0)
		// 	else rect(x, y, r, r);
	}
}