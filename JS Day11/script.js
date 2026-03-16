// If we have to use real api from backend
let api = "https://dummyjson.com/products"
const parent = document.querySelector("#parent")


async function getData() {
    let response = await fetch(api)
    let data = await response.json()
    console.log(data.products)

    data.products.forEach(element=>{
        const img = document.createElement("img")
        img.setAttribute("src", `${element.images[0]}`)
        img.classList.add("imgStyle")
        console.log(img)
        parent.append(img)
    })
}
getData()