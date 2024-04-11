document.addEventListener("DOMContentLoaded",()=> {
    let img = document.getElementById("imgcontainer")
    let slides = ["urus.jpg","lambo.jpeg","slide.jpeg","slidecar.jpeg","tesla.jpeg","exp.jpg"]
    let start = 0

    function slider () {
        if (start < slides.length) {
            start += 1
        } else {
            start = 1
        }
        console.log(img)
        img.innerHTML = "<img src="+slides[start-1]+">"
        
    }
    setInterval(slider,5000)


  //  let popButton = document.getElementById("test")
  // let popWindow = document.querySelector("#payment-form")
  // let closeButton = document.getElementById("submit")
  // let submitButton = document.getElementById("submit-form")
  // console.log(submitButton)
  // // console.log (popButton)
  // // console.log (popWindow)
  // // console.log (closeButton)
  // popButton.addEventListener ("click", (event)=> { 
  //   event.preventDefault()
  // popWindow.style.display = "block"

  // })
  // closeButton.addEventListener ("click",(e)=> {
  // e.preventDefault()
  //   popWindow.style.display = "none"
  // })
//  popWindow.addEventListener ("submit", (e) => {
//   e.preventDefault() 
//   console.log("Hi")
//   console.log (e.target.name.value)
//form updates payment details in server
//  })

  let wishListButton = document.getElementById("wishlist")
  let wishListWindow = document.querySelector("#div-wishlist")
  let closeWishlist = document.getElementById ("closeWishlist")
  // console.log(wishListButton)
  // console.log(wishListWindow)
  // console.log(closeWishlist)

  wishListButton.addEventListener("click", (e)=> {
    e.preventDefault()
    wishListWindow.style.display = "block"
  })
  closeWishlist.addEventListener ("click", () => {
    wishListWindow.style.display = "none"
  }) 

})