// VCE Project - Constraint class
//
// A wrapper around the matter.js constraint class.
//
// Requires:
// - matter.js
// - p5.js 
// 
// Andrew D. McGuire 2018
// a.mcguire227@gmail.com
//----------------------------------------------------------

function PhysEngineConstraint(world, options) {
    
    this.width = options.width;
    this.colour = options.colour;
    this.constraint = Constraint.create(options.matter_options);
    if (world != null) {
	World.add(world, this.constraint);
    };

    this.show = function() {
	var a = this.constraint.bodyA.position;
	var b = this.constraint.bodyB.position;
	push()
	strokeWeight(this.width);
	stroke(this.colour);
	line(a.x, a.y, b.x, b.y);
	pop()
    };
    
};