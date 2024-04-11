document.addEventListener("DOMContentLoaded", () => {
    let listProduct = document.querySelector(".card")
    let listProducts = []
    let wishlistSUV = []
    let wishlistHTML = document.querySelector("#div-wishlist")
    console.log(wishlistHTML)


    const addDataToHtml = () => {
        listProduct.innerHTML = ""
        if (listProducts.length > 0) {
            listProducts.forEach(car => {
                let newProduct = document.createElement("div")
                newProduct.classList.add("card")
                newProduct.innerHTML = `
            <h1> CAR ID: ${car.id} </h1>
                <img src = ${car.image}
            <h5> Name : ${car.name} </h5>
            <div class = "price"> Price : KSH ${car.price}  </div>
            <div> Brand : ${car.brand} <div>
            <div>  Availabilty : In stock </div>
            <button class= "wishlist"> Add to Wish list </button>
            <button class= "payment"> Get Payment Details </button>`


                listProduct.appendChild(newProduct)

            })
        }
    }

    const initSuv = () => {
        fetch("http://localhost:3000/SUV")
            .then(res => res.json())
            .then(data => {
                listProducts = data

                addDataToHtml()
            })

    }
    initSuv()


    let wishlistForm = document.querySelector(".wishlist-form")

    let closeWishlistForm = document.querySelector("#close-wishlist-form")
    listProduct.addEventListener("click", (event) => {
        event.preventDefault()
        let positionClick = event.target

        if (positionClick.classList.contains("wishlist")) {
            wishlistForm.style.display = 'block'
        }

        closeWishlistForm.addEventListener("click", (e) => {
            e.preventDefault()
            wishlistForm.style.display = "none"
        })

        let form = document.querySelector("#wishlist-form")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const input = document.querySelector("input#wishlisttitle")
            let id = input.value
            console.log(id)
            if (id) {

                fetch(`http://localhost:3000/SUV/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        addWishlistItem(data, id)
                        renderWishlistItem(data)
                    }
                    )
                form.reset()

            }
        })
    })
    function addWishlistItem(wishlistObj, id) {
        console.log(id)
        let objname = document.createElement("div")
        objname.innerHTML = `
      <img src = "${wishlistObj.image}">
        <div class = "carName"> ${wishlistObj.name}  </div>
        <div class = "price"> ${wishlistObj.price} </div>
        `
        let delbtn = document.createElement("button")
        delbtn.textContent = ` X`
        delbtn.className = "delbtn"
        delbtn.style.backgroundColor = "red"
        delbtn.style.color = "white"
        objname.className = "div-item"

        delbtn.addEventListener("click", (e) => {
            e.target.parentNode.remove()
            fetch(`http://localhost:3000/wishlist/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': "application.json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))






        })
        objname.appendChild(delbtn)

        let mainWishlist = document.querySelector("#wishlist-container")
        mainWishlist.appendChild(objname)
    }
    function renderWishlistItem(wishlistObj) {
        fetch("http://localhost:3000/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(wishlistObj)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    }
    function handledelete(id) {
        fetch(`http://localhost:3000/wishlist/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application.json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))




    }

    let paymentButton = document.querySelector(".test")
    console.log(paymentButton)
    let popForm = document.querySelector("#payment-form")
    console.log(popForm)
    let closeForm = document.querySelector("#submit")
    console.log(closeForm)

    listProduct.addEventListener("click", (event) => {
        event.preventDefault()
        let positionClick2 = event.target
        console.log(positionClick2)
        if (positionClick2.classList.contains("payment")) {
            popForm.style.display = 'block'

        }

        closeForm.addEventListener("click", (e) => {
            e.preventDefault()
            popForm.style.display = "none"
        })
    })

    popForm.addEventListener("submit", (e) => {
        e.preventDefault()



        const input1 = e.target.name.value
        const input2 = e.target.email.value
        const input3 = e.target.car_id.value



        fetch("http://localhost:3000/Buyers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: input1,
                email: input2,
                car_id: input3
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))

    })





})
