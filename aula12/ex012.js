var now = new Date()
var hour = now.getHours() 
console.log(`now is ${hour} hours`);
if(hour < 12){
    console.log('Good Mornig');
} else{
    if(hour < 18){
        console.log('Good afternoon');
    }else{
        console.log('good evening');
    }
}