//=================================================================
// vce_utils.js
//
// This file serves as a library of useful functions for the
// visualchemgeng project
//
// Andrew D. McGuire 2017
// amcguire227@gmail.com
//
// ================================================================


function newtonsMethod(f,x0,args) {

    // basic implmentation of newtons root finder method
    //based on https://en.wikipedia.org/wiki/Newton%27s_method
    //
    // args:
    // f - function in x, args to be evaluated (2 inputs)
    // x0 - intial guess
    //
    // returns an array of the form [bool passed_log, double xsoln]
    
    var epsilon = 10e-14;
    var tolerance = 1e-7;
    var maxIterations = 20;
    var solution_found_log = false;
    var x1 = x0
    
    for (i = 0; i < maxIterations; i++) {

	var x0 = x1
	var y = f(x0,args);
	var yprime = derivative(f,x0,args)
	
	// Don't want to divide by too small of a number denominator
	// is too small
	if (Math.abs(yprime) < epsilon) {
	    break; //Leave the loop
	}

	var x1 = x0 - y/yprime //Do Newton's computation

	//console.log("x=",x0,"y=",f(x0));

	if (Math.abs(x1 - x0) <= tolerance * Math.abs(x1)) {
	    //If the result is within the desired tolerance
	    solution_found_log = true;
	    break; //Done, so leave the loop
	}
    }

    var result = [solution_found_log,x1]
    return result	
    
}

function derivative(f,x,args) {

    // numerical derivative approximation of a function f
    // evaluated at x
    
    var h = 0.001;
    return (f(x + h,args) - f(x - h,args)) / (2 * h); 
}


function P_Antoine(T,coeffs) {

    // return the pressue in mmHg based on Antoine coefficients where
    // T is in [K]
    // http://ddbonline.ddbst.com/AntoineCalculation/
    // AntoineCalculationCGI.exe?component=Ethanol
    
    var A = coeffs[0];
    var B = coeffs[1];
    var C = coeffs[2];
    var exponent = A - (B/(C+T));
    return Math.pow(10,exponent);   
}

function sleep (time) {
  // time delay functionality  
  return new Promise((resolve) => setTimeout(resolve, time));
}
