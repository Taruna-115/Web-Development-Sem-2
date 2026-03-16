// Method to make async code:
setTimeout(()=>{
    console.log("1st")
})


console.log("2nd")
console.log("3rd")
// Now firstly, sync code will run and then async code will run
// Async code runs parallely in backend


// We can also set time:
// setTimeout(()=>{
//     console.log("first")
// },5000)                     // 5 sec

// setTimeout(()=>{
//     console.log("second")
// },3000)                     // 3 sec

// setTimeout(()=>{
//     console.log("third")
// },1000)                     // 1 sec


// We can also set interval...like i want to print "hi beautiful" again and again in 2sec
// setInterval(()=>{
//     console.log("hi beautiful")
// },2000)

// clearTimeout...used to stop time


//Async code in fxns:
// function first(){
//     setTimeout(()=>{
//     console.log("first")
// },5000)
// }

// function second(){
//     setTimeout(()=>{
//     console.log("second")
// },3000) 
// }

// function third(){
//     setTimeout(()=>{
//     console.log("third")
// },1000)
// }

// first()
// second()
// third()



// If i want that above vale fxn line wise print ho...then use callback fxn:
function first(callback){
    setTimeout(()=>{
    console.log("first")
    callback();
},5000)
}

function second(callback){
    setTimeout(()=>{
    console.log("second")
    callback();
},3000) 
}

function third(){
    setTimeout(()=>{
    console.log("third")
},1000)
}

first(()=>{
    second(()=>{
        third()
    })
})