// VCE Project - mt_frontend.js
//
// Mccbabe theile testing.
//
//
// Requires:
//
// Andrew D. McGuire 2019
// a.mcguire227@gmail.com
//
//----------------------------------------------------
var options = {
    xf : 0.5,
    xd : 0.95,
    xb : 0.05,
    P : 101.3e3, // Pa
    q : 7.0/6.0,
    R : 2.0, //1.8,//6.692,
    x_eq_data : data.equilibrium_data.x,
    y_eq_data : data.equilibrium_data.y,
    F : 100.0,
};
var column = new DistMcCabeTheile(options);
column.solve();
plot_mccabe_thiele_diagram(column, 'mccabe_thiele_container');
console.log("R_min = ", column.R_min());

