// VCE Project - Separtor class
//
// A simple class to store input/output information and apply
// various transformations to simulate a separation unit operation.
//
// Requires:
// - vce_utils.js
//
// Andrew D. McGuire 2018
// a.mcguire227@gmail.com
//----------------------------------------------------------

function Separator(x=null,y=null,z=null,L=null,V=null,F=null,T=null,
		   P=null,K=null) {

    /* Initialise the separator. 

    */
 

    // Separator attributes
    this.x = x;
    this.y = y;
    this.z = z;
    this.L = L;
    this.V = V;
    this.F = F;
    this.T = T;
    this.P = P;
    this.K = K;

    // Separator methods   
    this.solve_PTZF = function() {

	// Solve for/assing all ckomputable attributes given
	// pressure, temp, feed comp and feed flowrate
	// using the Rachford-Rice method.
	
	var beta_solution = newtonsMethod(RachfordRiceBeta,0.5,[this.z,this.K]);
	var beta = beta_solution[1];
	this.V = beta*this.F;
	this.L = this.F - this.V;
	this.x = getX(this.z,this.K,beta);
	this.y = getY(this.x,this.K);
	
    };

    function getY(x,K) {
	
	// Generate the vapour composition array
	
	var y = [];
	var arrayLength = x.length;
	for (var i = 0; i < arrayLength; i++) {
	    y[i] = K[i]*x[i];
	};
	return y;
    };


    function getX(z,K,beta) {

	// Generate the liquid composition array
	var x = [];
	var arrayLength = z.length;
	for (var i = 0; i < arrayLength; i++) {
	    x[i] = z[i]/(1+beta*(K[i]-1));
	};
	return x;
    };


    
} // end of Separator class


function RachfordRiceBeta(beta, args) {
    
    // Wrapper function for RachfordRiceSum
    // that ensure it has a fixed number of args
    // args = [z,k]
    
    return RachfordRiceSum(beta, args[0], args[1]);
}

function RachfordRiceElem(zi,Ki,beta) {
    
    /* Compute a single term of the rachford Rice sum
       
       args:
       beta - vapour liquid split (float)
       zi   - feed composition point
       Ki   - component equilibrium constant
    */
    var result = zi*(Ki-1)/(1+beta*(Ki-1));
    return result;
};

function RachfordRiceSum(beta,z,K) {
    
    /* Compute Rachford Rice sum
       http://folk.ntnu.no/skoge/bok/mer/flash_english_edition_2009
       
       args:
       beta - vapour liquid split (float)
       z    - feed composition array
       K    - component equilibrium constant array
    */
    
    var result = 0.0;
    var arrayLength = z.length;
    for (var i = 0; i < arrayLength; i++) {
	result = result + RachfordRiceElem(z[i],K[i],beta);
    };
    return result;
};


// testInput = new Input(0.5, 390.0, [0.5,0.3,0.2], [1.685,0.742,0.532],20);
// var expectedOutput = new Output([0.33940869696634357, 0.3650560590371706, 0.2955352439964858],
// 				[0.5719036543882889, 0.27087159580558057, 0.15722474980613044],
// 				    13.814605255477089, 6.185394744522911);
