//this will exports value in another file which use require function
/*
exports.perimeter = (x,y) =>(2*(x+y));
exports.area = (x,y) => (x*y);
*/
// for callbacks
module.exports= (x,y,callback) => {
    if (x<= 0|| y<=0) {
        setTimeout(() => 
        //1parameter will be an error 2 parameter will be null and 2000 is 2000 mcrosecond that is 2 sec that is delay before the cllback comes in i.e setTimeout function
        //when callback function is applied then either it will pass an error or it will pass a function of perimeter and area in else part
        callback(new Error("Rectangle dimensions should be greater than 0 : l= "+ x+ "and b =" + y),null),
         2000);
        
    }
    else{
        setTimeout(() => 
        callback(null,
        {
            perimeter: () =>(2*(x+y)),
            area: () => (x*y)
        }), 
        2000);   
    }    
}



