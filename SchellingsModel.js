let agents = [];
class SchellingsModel{
	/**
	* @param {int} size - number of colums and rows of the grid
	* @param {int} percentage - percentage of agents of one type or another
	* @param {int} freeCells - percentage of free cells in the grid
	* @param {float} satisfaction - float bewtween 0 - 1 that determines
	* the satisfaction of a single agent 
	* @param {int} threshold - maximum amount of "fremd" neighbour the agent can have
	*/
	constructor(size, percentage, freeCells, satisfaction, threshold){
		this.cols = this.rows = size + 1;
		this.r = floor(gridSize / size + 1);
		agents = matrix(this.rows, this.cols, null);
		//initialize the model by filling the 2D array with agents
		for (let y = 1; y < this.rows - 1; y++){
			for (let x = 1; x < this.cols - 1; x++){
				if(floor(random(100)) > freeCells)agents[x][y] = new Agent(satisfaction, random(100)>percentage?0:1, floor(random(1, 9)) * 10);//set to common threshold
			}
		}
	}

	show(){		
		for (let y = 1; y < this.rows - 1; y++){
			for (let x = 1; x < this.cols - 1; x++){
				if(agents[x][y] != null) agents[x][y].show(x * this.r, y * this.r, this.r);
			}
		}
	}

	moveAgents(){
		let freeSpots = emptySpots(agents);
		for (let y = 1; y < this.rows - 1; y++){
			for (let x = 1; x < this.cols - 1; x++){
				if(agents[x][y] != null){
					if(agents[x][y].sat < 1)moveAgent(x, y, freeSpots);
				}
			}
		}
		//checks for empty spots to move the agent
		function emptySpots(arr2D){
			let spots = [];
			for (let row = 1; row < arr2D.length - 1; ++row){
				for (let col = 1; col < arr2D[row].length - 1; ++col){
					if(arr2D[row][col] == null)spots.push(createVector(row, col));
				}
			}
			return spots;
		}

		function moveAgent(x, y, arr){
			let d = 0, minD = gridSize,
				newX = 0, newY = 0;
			// for(let i = 0; i < arr.length; i++){
			// 	d = dist(x, y, arr[i].x, arr[i].y);
			// 	if(d < minD){//check the closest free spot in the grid
			// 		minD = d;
			// 		//assign the empty spot coordinates to temporary variables
			// 		newX = arr[i].x;
			// 		newY = arr[i].y;
			// 	}
			// }
			let index = floor(random(arr.length));
			newX = arr[index].x;
			newY = arr[index].y;
			agents[newX][newY] = agents[x][y];
			agents[x][y] = null;
			freeSpots = emptySpots(agents);
			// console.log(minD, newX, newY);
		}
	}

	checkNeighbour(){
		let totalNeighbour = 0;
		let totalSameType = 0;
		for (let y = 1; y < this.rows - 1; y++){
			for (let x = 1; x < this.cols - 1; x++){
				if(agents[x][y] != null){//always ignore the null spot
					//////////////////////
					for(let i = -1; i <= 1; i++){
						for(let j = -1; j <= 1; j++){
							if(agents[x + j][y + i] != null)totalNeighbour++;//here we check the number of neighbours
							if(agents[x + j][y + i] != null && agents[x + j][y + i].type == agents[x][y].type)totalSameType++;
						}
					}
					//here we check if the amount of unwanted neighbours surpasses the threshold
					if(totalSameType > 0){
						let percSameType = ((totalSameType - 1) / (totalNeighbour -1)) * 100;//we do minus 1 because the loop checks also the agent itself
						agents[x][y].sat = percSameType >= agents[x][y].t ? 1 : 0;//set the agent satisfaction accoding to the npercentage of same neighbours
					} else agents[x][y].sat = 0;// if there is none of the same type near than the agent is unsatisfied
					//reset the counters
					totalNeighbour = 0;
					totalSameType = 0;
				//////////////////////////	end of agents[x][y] !=null if
				}
			}
		}
	}
}

/**
* 2D array function
* from Douglas Crockford (JavaScript: The Good Parts, p.64)
* @param {int} rows - number of rows
* @param {int} cols - number of columns
* @param {int} initial - initial value
*/
let matrix = function(rows, cols, initial){
   let arr = [];
   for (let i = 0; i < rows; ++i){
      let columns = [];
      for (let j = 0; j < cols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
}