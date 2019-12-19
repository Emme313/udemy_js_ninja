// function declaration - priority in hoisting
function greet(){
    console.log('hello there');    
}

// function expression - not hoisted like a typical function
const speak = function(){
    console.log('good day');
    
};

greet();
speak();