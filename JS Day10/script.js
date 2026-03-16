//Fetch() is asynchronus and returns a promise
// So we will use .then and .catch (becoz of promise)

let api = "./data.json"
fetch(api)
.then((response)=>{
    // console.log(response)
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("error in api calling")
})


// One more method
async function getData(){
    try{
        let response = await fetch(api)
        let data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log();
        
    }
}

getData()


// If we have to fetch data from actual backend
