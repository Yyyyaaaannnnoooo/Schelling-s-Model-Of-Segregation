<h1>Schelling's Model of Segregation <a href="https://Yyyyaaaannnnoooo.github.io/Schelling-s-Model-Of-Segregation/">Web APP</a></h1>
This web application takes the studies made by the economist Thomas Schelling, and translates them to an interactive model to be used in the browser. The model has been developed with <a href="https://p5js.org">p5.js</a>, a JavaScript library similar to <a href="https://processing.org">Processing</a>.
<h2>How it works</h2>
The application works with the same rules given for the "Schelling's Model of Segregation". You can think of the square nearby as a city. Each polygon represents a single citizen, that from now on we will call agent, the number of edges represents its social status. Each agent has a tolerance, at the beginning it is set to 30%, this means that the agent will feel confortable if at least 30% of his neighbours have his same social status. The neighbours are the 8 other agents sorrounding each agent. If the neighbours of the same social status are less than his tolerance, 30% in this case, than the agent will move to another part of the city. this will go one until the model finds an equilibrium, that means that each agent is satisfied with his neighbours.
An additional layer is given to this model by adding audio. The agent emit a sound based on how much distance they had to travel to find a better place to live.
<br><br>
<p>
  <img src="https://user-images.githubusercontent.com/17408277/31388131-4de53844-adcd-11e7-8d40-bd9f60be120a.png"/>
<p>
<h2>References</h2>
<li><a href="http://nifty.stanford.edu/2014/mccown-schelling-model-segregation/">Schelling's Model of Segregation</a> by Frank McCown</li>
<li><a href="https://www.stat.berkeley.edu/~aldous/157/Papers/Schelling_Seg_Models.pdf">Dynamic Models of Segregation</a> by Thomas C. Schelling</li>

