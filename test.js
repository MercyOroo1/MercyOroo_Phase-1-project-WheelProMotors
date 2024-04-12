document.addEventListener("DOMContentLoaded", () => {
    // after the Dom content has loaded
    let listProduct = document.querySelector(".card")
    // grab the div which contains the infomation about the cars that will be displayed in the server
    let listProducts = []
    //create an empty array that will hold the car data once it is fetched from the server
    let wishlistSUV = []
    //another array that will hold the cars that will be added to your wishlist
    let wishlistHTML = document.querySelector("#div-wishlist")

// this function adds the fetched data to the webpage where it will be visible to ther user
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
            <div> Category : ${car.category} </div>
            <div class = "price"> Price : KSH ${car.price}  </div>
            <div> Brand : ${car.brand} <div>
            <div>  Availabilty : In stock </div>
            <button class= "wishlist"> Add to Wish list </button>
            <button class= "payment"> Get Payment Details </button>`


                listProduct.appendChild(newProduct)

            })
        }
    }
//This function fetches data from the server and takes a callback function which appends the fetched data to the DOM
    const initSuv = () => {
        fetch("http://localhost:3000/SUV")
            .then(res => res.json())
            .then(data => {
                listProducts = data

                addDataToHtml()
            })

    }
    initSuv()

// grabs the div that contains the wishlist form that will be used to add cars to the wishlist
    let wishlistForm = document.querySelector(".wishlist-form")
//grabs the button that will be used to close the wishlist form
    let closeWishlistForm = document.querySelector("#close-wishlist-form")
    // adds an event listener within the div that contains the fetched data
    listProduct.addEventListener("click", (event) => {
        event.preventDefault() //prvents the page from refreshing
        let positionClick = event.target //targets the button that is clicked

// if the button contains a class name of wishlist, then the wish list form will be displayed as a popup window
        if (positionClick.classList.contains("wishlist")) {
            wishlistForm.style.display = 'block'
        }
//the close wishlist form makes the form to disappear
        closeWishlistForm.addEventListener("click", (e) => {
            e.preventDefault()
            wishlistForm.style.display = "none"
        })
// selects the wish list form itself and adds a submit event to it
        let form = document.querySelector("#wishlist-form")
        form.addEventListener("submit", (e) => {
            e.preventDefault() //prevents the page from refreshing
            const input = document.querySelector("input#wishlisttitle") //selects the input to the user and assigns it a value
            let id = input.value
            //if an id is input by the user, it fetches the corresponding record from the server
            if (id) {

                fetch(`http://localhost:3000/SUV/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        // takes two callback functions
                        addWishlistItem(data, id)
                        renderWishlistItem(data)
                    }
                    )
                form.reset() //resets the form after submission

            }
        })
    })
    //this function takes an object and an id, it apppends the fetched data to the webpage 
    function addWishlistItem(wishlistObj, id) {
        console.log(id)
        let objname = document.createElement("div")
        objname.innerHTML = `
      <img src = "${wishlistObj.image}">
        <div class = "carName"> ${wishlistObj.name}  </div>
        <div class = "price"> ${wishlistObj.price} </div>
        `
        //it also creates a delete buttton for each record and perform a removes the deleted cars from the wishlist server
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

    // this functions posts the fetched data from the suv server to the wishlist server
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
    //selects the payment button on each card 
    let paymentButton = document.querySelector(".test")
    //selects the div containing the payment form 
    let popForm = document.querySelector("#payment-form")
   //selects the close form button on the payment form
    let closeForm = document.querySelector("#submit")
    let form2 = document.querySelector("#main-payment-form")
    
//adds an event listener within the div that contains fetched data from the server
    listProduct.addEventListener("click", (event) => {
        event.preventDefault() //prevents the page from refreshing
        let positionClick2 = event.target
        //targets the button that is clicked
        //if the button contains a class of payment, the payment form is displayed as a pop up window
        if (positionClick2.classList.contains("payment")) {
            popForm.style.display = 'block'

        }
//closes the pop up window
        closeForm.addEventListener("click", (e) => {
            e.preventDefault()
            popForm.style.display = "none"
        })
    })
//adds a submit event to the pop up form
form2.addEventListener("submit", (e) => {
        e.preventDefault() //prevernts form from refreshing
 //selects the each of the inputs that are entered by the user 
        const input1 = e.target.name.value
        const input2 = e.target.email.value
        const input3 = e.target.car_id.value

//ensures that each value in the form has been entered before submitting the form
if (input1) { if (input2) { if (input3) {
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
 form2.reset ()}}}
    })





})
