module.exports = function(array){
var min = Math.min.apply(null, array);
var max = Math.max.apply(null, array);
if (min === max){ 
 return [min];
}
return [min, max ];
}