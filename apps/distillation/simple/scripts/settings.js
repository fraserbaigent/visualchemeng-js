var settings = {

    // identifier
    id : 'distillation-test',


    // componentns
    components : [
	{
	    name : 'a',
	    colour : '#cc6600',
	    h : 100.0,
	    h_unit : 'J/mol'
	},
	{
	    name : 'b',
	    colour : '#006699',
	    h : 200.0,
	    h_unit : 'J/mol'
	},
    ],

    // particle feed options
    feed_options : {
	feed : {
	    init_force : { x : 0.0003, y : 0.0},
	    buoyancy : 0.0,
	},
	tops : {
	    init_force : { x : 0.0002, y : 0.0},
	    buoyancy : 1.05,
	    perturbation : { x : 2, y : 2 },
	},
	bottoms : {
	    init_force : { x : 0.0003, y : 0.0},
	    buoyancy : 0.0,
	}
    },

    
    // particle graphics
    particles : [
	{
	    type: 'single-body',
	    shape : {type:'polygon', sides:6},
	    radius : 3,
	    colour : '#cc6600',
	    matter_options : {
		friction: 0,
		restitution: 0.5,
	    }
	},
	{
	    type: 'single-body',
	    shape : {type:'polygon', sides:6},
	    radius : 3,
	    colour : '#006699',
	    matter_options : {
		friction: 0,
		restitution: 0.5,
	    }
	},
    ],

    // boundaries
    levee_position : {"x_scaling":0.8731233248606424,"y_scaling":1.3642847390066726,"w_scaling":0.05,"h_scaling":0.3675459453124999,"a":0},
    feed_positions : [{"x_scaling":-1.1275273547635363,"y_scaling":0.21894175015711917,"w_scaling":0.12612276107909576,"h_scaling":0.13696974850908034,"a":0},
    {"x_scaling":-0.942281921465001,"y_scaling":0.2874055273980731,"w_scaling":0.11411106954775331,"h_scaling":0.28016061924194147,"a":1.5707963267948968},
    {"x_scaling":-0.942281921465001,"y_scaling":0.11196689826074094,"w_scaling":0.11411106954775331,"h_scaling":0.28016061924194147,"a":1.5707963267948968}],
    boundary_positions : [{"x_scaling":0.9175822288522913,"y_scaling":-0.7538154301706623,"w_scaling":0.07411146039067018,"h_scaling":0.07888960739411338,"a":0}] // [{"x_scaling":0.020960711504707574,"y_scaling":-0.18276834875587528,"w_scaling":0.0637800660679885,"h_scaling":0.5,"a":0},{"x_scaling":-0.5346087877877282,"y_scaling":-0.08188028135613902,"w_scaling":0.0637800660679885,"h_scaling":0.798300184981946,"a":0},{"x_scaling":0.5884974346956735,"y_scaling":0.4481449747473246,"w_scaling":0.0637800660679885,"h_scaling":0.24383748955776485,"a":0},{"x_scaling":0.5559666315097109,"y_scaling":-0.645280608673814,"w_scaling":0.0637800660679885,"h_scaling":0.31512470486230454,"a":1.5707963267948968},{"x_scaling":0.4035697383750212,"y_scaling":0.30265930936435476,"w_scaling":0.0637800660679885,"h_scaling":0.2993684696191894,"a":1.5707963267948968},{"x_scaling":0.1931347735963488,"y_scaling":0.4481449747473246,"w_scaling":0.0637800660679885,"h_scaling":0.1617667724868546,"a":1.5707963267948968},{"x_scaling":0.8882078390774193,"y_scaling":-0.7884831810079175,"w_scaling":0.0637800660679885,"h_scaling":0.24383748955776485,"a":1.5707963267948968},{"x_scaling":0.48581479803299893,"y_scaling":-1.0346687294042258,"w_scaling":0.063779132701168,"h_scaling":0.1966285230000997,"a":1.5707963267948968},{"x_scaling":-0.04351267274583003,"y_scaling":-0.9833208475043542,"w_scaling":0.063779132701168,"h_scaling":0.1966285230000997,"a":1.5707963267948968},{"x_scaling":0.17969770649825426,"y_scaling":-0.7907662903798356,"w_scaling":0.063779132701168,"h_scaling":0.16858437990721048,"a":1.5707963267948968},{"x_scaling":0.01388428191693487,"y_scaling":-0.8506721525963525,"w_scaling":0.063779132701168,"h_scaling":0.14454003272294458,"a":1.5707963267948968},{"x_scaling":-0.06902243037372482,"y_scaling":0.8438079664224634,"w_scaling":0.063779132701168,"h_scaling":0.1966285230000997,"a":1.5707963267948968},{"x_scaling":0.020261721323908747,"y_scaling":0.6940432945581191,"w_scaling":0.063779132701168,"h_scaling":0.15138761677319404,"a":1.5707963267948968},{"x_scaling":-0.3687620825014956,"y_scaling":0.7881810780412171,"w_scaling":0.063779132701168,"h_scaling":0.13869478656091686,"a":0},{"x_scaling":0.36464344930049597,"y_scaling":0.5485576291751495,"w_scaling":0.063779132701168,"h_scaling":0.13869478656091686,"a":0},{"x_scaling":0.026639160730882627,"y_scaling":0.5228836882252137,"w_scaling":0.063779132701168,"h_scaling":0.10571961895946916,"a":0},{"x_scaling":0.7791770107537952,"y_scaling":0.7582281469329586,"w_scaling":0.063779132701168,"h_scaling":0.11891344262766607,"a":-5.551115123125783e-17},{"x_scaling":0.7855544501607691,"y_scaling":-0.9362519557628053,"w_scaling":0.063779132701168,"h_scaling":0.13012126108362632,"a":0},{"x_scaling":-0.36238464309452173,"y_scaling":-0.9448099360794505,"w_scaling":0.063779132701168,"h_scaling":0.13869478656091686,"a":0},{"x_scaling":0.5177019950678683,"y_scaling":0.9465037138991547,"w_scaling":0.063779132701168,"h_scaling":0.0920129551177879,"a":0},{"x_scaling":0.3391336916726005,"y_scaling":0.9037138123159283,"w_scaling":0.063779132701168,"h_scaling":0.13869478656091686,"a":1.5707963267948968},{"x_scaling":0.8812160412653764,"y_scaling":0.882318861524315,"w_scaling":0.063779132701168,"h_scaling":0.13869478656091686,"a":1.5707963267948968},{"x_scaling":0.27535929760286243,"y_scaling":0.6469743977156163,"w_scaling":0.063779132701168,"h_scaling":0.1019534128728952,"a":3.9269908169872396},{"x_scaling":0.7409123743119526,"y_scaling":1.0449204875405753,"w_scaling":0.063779132701168,"h_scaling":0.18586427884769952,"a":1.5707963267948968},{"x_scaling":-0.09453218800162033,"y_scaling":-0.8078822510131262,"w_scaling":0.063779132701168,"h_scaling":0.052336977361627485,"a":2.2252947962927703},{"x_scaling":-0.4580462341991292,"y_scaling":0.64697440281657,"w_scaling":0.063779132701168,"h_scaling":0.11296777049628276,"a":2.4870941840919194},{"x_scaling":-0.011625475710960642,"y_scaling":0.6255794520249569,"w_scaling":0.063779132701168,"h_scaling":0.12330616003437139,"a":3.9269908169872396},{"x_scaling":-0.4516687947921553,"y_scaling":-0.786487300221513,"w_scaling":0.063779132701168,"h_scaling":0.1019534128728952,"a":3.9269908169872396},{"x_scaling":0.721780056091031,"y_scaling":0.6683693485072295,"w_scaling":0.063779132701168,"h_scaling":0.1019534128728952,"a":2.0943951023931957},{"x_scaling":-0.30498768843175683,"y_scaling":0.8181340254725276,"w_scaling":0.063779132701168,"h_scaling":0.11296777049628276,"a":2.4870941840919194},{"x_scaling":0.2179623429400975,"y_scaling":0.8823188778473672,"w_scaling":0.063779132701168,"h_scaling":0.06763797713952795,"a":2.4870941840919194},{"x_scaling":0.5623440709166847,"y_scaling":1.0064095924387235,"w_scaling":0.063779132701168,"h_scaling":0.06763797713952795,"a":2.4870941840919194},{"x_scaling":0.7600446925328735,"y_scaling":-0.8314166805608486,"w_scaling":0.063779132701168,"h_scaling":0.057991110650002765,"a":3.796091123087665},{"x_scaling":0.23071722175404527,"y_scaling":-0.8356956707191713,"w_scaling":0.04231237972385122,"h_scaling":0.038472487638356555,"a":2.356194490192345}]

};
