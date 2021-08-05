// WORKSHOP https://github.com/sporto/planetproto

///010

// -> Create an object called 'robot' using an object literal
// -> robot should have a property 'smart' with value true

var robot = {
	smart:true
};

// // -> Claim the result robot.smart
claim(robot.smart,true);

// // ------------------------------------------------
// // Common JS exports for verification, don't modify
module.exports = {
	robot: robot
}

///020

// -> Create a machine object
//    with a property motors = 4

var machine = {
	motors : 4
};

// -> Create a robot object
//    with a property friendly = true

var robot = {
	friendly : true
};

// -> Create a robby object

var robby = {};

// -> Make machine the prototype of robot

robot.__proto__ = machine;

// -> Make robot the prototype of robby

robby.__proto__ = robot;

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}


///030

// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
var machine = {}
var vehicle = {}
var robot = {}

// -> Make machine the prototype of vehicle
// -> Make machine the prototype of robot

vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> What is `vehicle.motors`?
claim(vehicle.motors, undefined);

// -> What is `robot.motors`?
claim(robot.motors, undefined);

// -> Define a 'motors' property on machine, set this to 4

machine.motors = 4;

// -> What is `vehicle.motors` now?
claim(vehicle.motors, 4);

// -> What is `robot.motors`?
claim(robot.motors, 4);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}



///040

// -> Define three objects: 'machine', 'robot' and 'vehicle'
//    In the definition of machine add a property 'motors' set to null.

let machine = {
	motors : null
};

let robot = {};

let vehicle = {};

// -> Let's make machine the prototype of robot and vehicle
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> What are `machine.motors`, `robot.motors` and `vehicle.motors`?
claim(machine.motors, null);
claim(robot.motors, null);
claim(vehicle.motors, null);

// -> Set `robot.motors` to 4 by direct assignment

robot.motors = 4;

// -> What are `machine.motors`, `robot.motors` and `vehicle.motors` now?
claim(machine.motors, null);
claim(robot.motors, 4);
claim(vehicle.motors, null);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}


///050

// -> Create three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine set a property 'parts', set it to an 
//    empty array `[]`
// -> In the definition of machine set a property 'capabilities', set it to 
//    an empty object `{}`

let robot = {}

let vehicle = {}

let machine = {
	parts : [],
	capabilities: {}
}

// -> Let's set the prototype of both robot and vehicle to machine
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What is `robot.parts`?
claim(robot.parts, []);

// -> What is `vehicle.parts`?
claim(vehicle.parts, []);

// -> What is `robot.capabilities`?
claim(robot.capabilities, {});

// -> What is `vehicle.capabilities`?
claim(vehicle.capabilities, {});

// -> Let's add a 'core' part to robot
robot.parts.push('core');

// -> What is `robot.parts` now?
claim(robot.parts, ['core']);

// -> What is `vehicle.parts` now?
claim(vehicle.parts, ['core']);

// -> Let's set an ability to vehicle
vehicle.capabilities.fly = true;

// -> What is `robot.capabilities` now?
claim(robot.capabilities, {fly : true});

// -> What is `vehicle.capabilities` now?
claim(vehicle.capabilities, {fly: true});


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}

////060

const { robot } = require("./010");

// -> Let's create an object called 'machine'
var machine = {}

// -> Use Object.create to create another object called 'robot' with 'machine' 
//    set as the prototype

var robot = Object.create(machine);

// -> Use Object.create to create another object called 'robby' with 'robot' 
//    as the prototype

let robby = Object.create(robot);

// -> What is the result of `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> What is the result of `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> Which object is the direct prototype of robby?
claim.same(Object.getPrototypeOf(robby), robot);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}


///070


// -> Define an object called 'Robot'

let Robot = {
	new: () =>{
		let robby = Object.create(Robot);
		return robby;
	}
}

// -> Define a method called 'new' in Robot
// -> When Robot.new is called it should return a new object with Robot as its prototype 
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

let robby = Robot.new();


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}



///080


// -> Define a 'Robot' constructor function
// -> Inside the Robot constructor assign a property 'motors' on 'this',
//    set motors to 2
// -> Create an instance of Robot called 'robby'


function Robot () {
	this.motors = 2;
}

let robby = new Robot();

// -> What is the result of `(robby instanceof Robot)`?
claim((robby instanceof Robot),true);

// -> What is `robby.motors`?
claim(robby.motors, 2);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby
}



///090


// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

function Robot () {
	return this;
}

function Vehicle () {
	let obj = {
		car: 'Renault'
	}
	return obj;
}


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}



///100


// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first

function Robot () {
	this.parts = []
}

Robot.prototype.capabilities = [];

let robby = new Robot();
let cranky = new Robot();

// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must 
//    also have 'fly' without adding to it directly, so this property has to be 
//    shared

robby.parts.push('core');
robby.capabilities.push('fly');


// -> Claim the result of robby.parts
claim(robby.parts, ['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
