let api = "https://dummyjson.com/products"
const parent = document.querySelector("#parent")

async function getData() {
    try {
        let response = await fetch(api)
        let data = await response.json()

        console.log(data.products)

        data.products.forEach(element => {

            // Card create
            const card = document.createElement("div")
            card.classList.add("card")

            // Image
            const img = document.createElement("img")
            img.setAttribute("src", element.images[0])
            img.classList.add("imgStyle")

            // Brand
            const brand = document.createElement("h3")
            brand.innerText = "Brand: " + element.brand

            // Title
            const title = document.createElement("p")
            title.innerText = "Title: " + element.title

            // Append all inside card
            card.append(img)
            card.append(brand)
            card.append(title)

            // Append card inside parent
            parent.append(card)
        })

    } catch (error) {
        console.log("Error fetching data:", error)
    }
}

getData()