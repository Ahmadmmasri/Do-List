//jshint esversion:6

//module.exports == exports
exports.getDate=function(){
    const date= new Date();
    
    const options={ weekday: "long" };
        return date.toLocaleDateString("en-US",options);
     };

exports.getDay=function (){
    const date= new Date();
    
    const options={ day: "numeric" ,month: "long"};
        return date.toLocaleDateString("en-US",options);
    };

// function getDate(){
//     let date= new Date();
    
//     var options={ weekday: "long" ,day: "numeric" ,month: "long"};
//     var dayName= date.toLocaleDateString("en-US",options);
//     return dayName;
// }



