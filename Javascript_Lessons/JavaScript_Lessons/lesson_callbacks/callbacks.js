/**
 * Created by pk on 11/14/2015.
 */
/*
* What is a callback? A callback is a function to be executed after another function is executed.
* Sounds tongue-twisted? Normally if you want to call function do_b after function do_a the code looks something like
*
* or   A reference to executable code, or a piece of executable code, that is passed as an argument to other code.
*
* */

/*
 //step#1
 function do_a()
 {
 console.log("Do_a first job");
 }
 function do_b(){
 console.log("Do_b second job");
 }

 do_a();
 do_b();
 */

//step#2
//However javascript is an event driven language. If first_job takes longer than second_job,
// the result of second_job comes out first than first_job;
/*
function first_job(){
    setTimeout(function(){
        console.log("first job");
    },3000)
}
function second_job(){
    console.log("second job");
}
first_job();
second_job();*/


//step#3
// So how do we make sure second_job comes out after first_job in that situation? This is where callbacks comes in handy.

//function first_job(callback_second_job){
//    setTimeout(function(){
//
//        console.log("first job");
//        callback();
//
//    },3000)
//
//}
//function callback(){
//    console.log("second job");
//}
//first_job(callback);
//second_job();



//step#4
/*
function demo(job1,job2,callback_job){
    console.log(job1+" "+job2);
    callback_job();

}
demo("Helo","world",function(){
    console.log("callback_job")
});
*/


//strict check.... callback/*
/*
function demo(job1,job2,callback_job){
    console.log(job1+" "+job2);
    if(callback_job && typeof callback_job==="function") {
        callback_job();
    }

}
demo("Helo","world",function(){
    console.log("callback_job")
});

demo("Helo","IT"," world");

*/
/*demo("first_job","second_job",callback);

function demo(a,b,c){
    console.log(a,b);
    c("callback");
}

demo("first_job","second_job",callback);

function callback(callback){
    console.log("here is callback"+callback);

}

demo("first_job","second_job",callback);*/
