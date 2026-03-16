// console.log("first")

// setTimeout(()=>{
//     console.log("second")
// },0)

// console.log("third")

// The question is why async code runs always after the sync code(even when here time is 0)
// So let's see how js runs the sync and async code behind the screen:
// ...refer to ppts


// Example2:
console.log("first")

setTimeout(()=>{
    console.log("second")
},0)

console.log("third")

new Promise((resolve,reject)=>{         //this promise will never be rejected
    resolve()
})
.then(()=>{
    console.log("forth")
})

// Imp Rule: after resolving the promise...it will be an async code
// working...see from ppt and photo clicked
// microtask code (promise) will run before than macrotask code (setTimeout)

// One more method to write above wala promise code:
// Promise.resolve().then(()=>{
//     console.log("fourth")
// })