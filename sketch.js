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
	// SM = new SchellingsModel(30, 50, 10, 6, 30, false);
}

function draw(){	
	if(SM != null){
		if(frameCount % 15 == 0){
			background(255);
			SM.checkNeighbour();
			SM.moveAgents();	
			SM.show();
		}
	}
	//console.log(frameRate());
}

function initModel(){
	let input1 = document.getElementById("kind").value;
	let input2 = document.getElementById("size").value;
	let input3 = document.getElementById("thershold").value;
	let input4 = document.getElementById("freeCell").value;
	SM = new SchellingsModel(input2, 50, input4, input1, input3, false);
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
function playSound(num, divider){
	let midiValue = map(num, 0, gridSize / divider, 60, 100);
    var freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);
    env.play(osc, 0, 0.1);
}