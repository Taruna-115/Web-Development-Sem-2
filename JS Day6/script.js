// EVENT PROPOGATION : 1. Bubbling  2. Capturing


// BUBBLING
// If we add event on parent, then it will also be applied to child
// Event propogate krega : phle child pe chk krega ki event h ya nhi, fir parent me chk krega, fir body me chk krega...etc

// Event on child
const child = document.querySelector('#child')
child.addEventListener("click", ()=>{
    console.log("This is child")
    // event.stopPropagation() //...to stop propogation
})

// Event on parent
const parent = document.querySelector("#parent")
parent.addEventListener("click", ()=>{
    console.log("This is parent")
})



// CAPTURING
// It shows just opposite order execution : phle bda parent, fir chota parent, fir child...etc
// Ye bss parent pr lgta h
// const parent = document.querySelector("#parent")
// parent.addEventListener("parent", ()=>{
//     console.log("This is parent")
// },true)         ...or false bhi ho skta h