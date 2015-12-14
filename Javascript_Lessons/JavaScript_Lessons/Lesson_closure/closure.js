/**
 * Created by pk on 11/14/2015.
 */

/*
What is a closure?
    A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
    The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets),
    it has access to the outer function’s variables, and it has access to the global variables.

    The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.
    Note that the inner function cannot call the outer function’s arguments object, however, even though it can call
    the outer function’s parameters directly

*/

//step#1
/*function demo()
{
    var greet="helo";
    function _closure() //this is closure
    {
        alert(greet);

    }
    _closure();
}

demo();*/

//step#2
/*function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
};

var myFunc = makeFunc();
console.log(myFunc);
myFunc();*/

//step#3
/*
function adder(x){
    function demo(y){
        return x+y;
    }
    return demo(5);
}

var result=adder(1);
console.log(result);*/

/*
function makeAdder(x) {
    return function(y) {
        console.log("value of x: "+x);
        console.log("value of y: "+y);
        return x + y;
    };
};

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
*/


//step#4
/*function display_name(firstname,secondname) {
    var name="Your full name is:";
    function fullname()
    {
        var completeName=name + firstname+" " + secondname;
        return completeName;
    }
    return fullname;
}

var myfun=display_name("parkash","kumar");
console.log(myfun());*/
window.onload=function(){
    function showHelp(help) {
        document.getElementById('help').innerHTML = help;
    }

    function setupHelp() {
        var helpText = [
            {'id': 'email', 'help': 'Your e-mail address'},
            {'id': 'name', 'help': 'Your full name'},
            {'id': 'age', 'help': 'Your age (you must be over 16)'}
        ];

        for (var i = 0; i < helpText.length; i++) {
            var item = helpText[i]
            var focus= document.getElementById(item.id);
            console.log(focus)

            document.getElementById(item.id).onfocus = function() {
                showHelp(item.help);
            }

        }

    }

    setupHelp();
}
