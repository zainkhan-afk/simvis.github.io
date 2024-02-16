const numBoids = 500;
const protectedRadius = 25;
const visualRange = 100;
const borderMargin = 100;

const avoidFactor = 0.05;
const alignmentFactor = 0.05;
const centeringFactor = 0.005;
const turnFactor = 0.02;

const deltaT = 1;
const maxVel = 7;
const minVel = 3;

let graphics;
let logic;
let boids = [];
function setup() 
{
	createCanvas(windowWidth, windowHeight);


	for (let i = 0; i<numBoids; i++){
		let p = createVector(random(0, windowWidth), random(0, windowHeight));
		append(boids, new Boid(p, 0, minVel, maxVel));
	}

	graphics = new Graphics();
	logic = new Logic(protectedRadius, visualRange, borderMargin, avoidFactor, alignmentFactor, centeringFactor, turnFactor);
}

function draw()
{
	background(0);
	graphics.Draw(boids);
	logic.Step(boids, deltaT);
}