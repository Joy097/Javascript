// window is the whole window and a function is under that
// this means the object the function is inside of

function calc(){
    console.log(this)
}
calc(); //returns window

const x = {
    a:function(){
    console.log(this)
}}
x.a(); //returns x

