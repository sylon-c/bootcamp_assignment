module.exports = function (arry) {
if(arry.length === 0){return 0;}

var diff = arry[1] - arry[0];
var ratio = arry[1] / arry[0];

var arith = true;
var geo = true;

for(var i = 0; i < arry.length - 1; i++)
{
    if( arry[i + 1] - arry[i] !== diff )
      arith = false;
    if(arry[i + 1] / ratio !== arry[i])
      geo = false;
}

if(arith === true)
    return "Arithmetic";
else if(geo === true)
    return "Geometric";
else
    return -1;


}



