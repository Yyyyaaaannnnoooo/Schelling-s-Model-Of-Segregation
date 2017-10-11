let w, h, agent, SM, gridSize, menuSpace = 300,
	osc, env;
function setup(){
	w = windowWidth;
	h = windowHeight;
	gridSize = floor(h * 0.95);
	createCanvas(w, h);
	rectMode(CENTER);
	background(255);
	// initialize the sound library
	osc = new p5.Oscillator();
	osc.setType('sawtooth');
	env = new p5.Env();
	osc.start();
	env.setADSR(0.001, 0.5, 0.1, 0.5);
	env.setRange(1, 0);
	// volume0();
	SM = new SchellingsModel(40, 50, 10, 6, 50, false);
}

function draw(){	
	if(frameCount % 15 == 0){
		background(255);
		SM.checkNeighbour();
		SM.moveAgents();	
		SM.show();
	}
	//console.log(frameRate());
}

/**
AUDIO STUFF
*/
//THE FLLOWING FUNCTIONS TURN ON AND OFF THE SOUND
function volume0(){
	masterVolume(0, 0.5);
}
function volumeUp(){	
	masterVolume(1, 0.5);
}
//improve audio!!!!
function playSound(num){
	let midiValue = map(num, 0, gridSize / 2, 60, 100);
    var freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);
    env.play(osc, 0, 0.1);
}