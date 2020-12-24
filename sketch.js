var Engine = Matter.Engine, World = Matter.World, Events = Matter.Events, Bodies = Matter.Bodies;


var ground

var particles = [];
var plinkos = [];
var divisions  = [];

var divisionHeight = 300

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 790, 800, 10);
  //create divisions
  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  //create plinkos
  for(var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j, 75));
  }

  for(var j = 50; j <= width-10; j = j + 50) {
    plinkos.push(new Plinkos(j, 175));
  }

  for(var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j, 275));
  }

  for(var j = 50; j <= width-10; j = j + 50) {
    plinkos.push(new Plinkos(j, 375));
  }

}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  for(var k = 0; k<divisions.length; k++) {
    divisions[k].display();
  }




//display plinko, particles and divisions
for(var j = 0; j<particles.length; j++) {
  particles[j].display();
}



    for(var m = 0; m<plinkos.length; m++) {
      plinkos[m].display();
    }

    if(frameCount%60 === 0) {
      particles.push(new Particle(random(width/2-30, width/2+30), 10, 10))
    }
}