document.addEventListener("DOMContentLoaded", () => {
  //after the HTML and CSS files have loaded 
  let img = document.getElementById("imgcontainer")
  //selects the div that contains the slider 
  let slides = ["urus.jpg", "lambo.jpeg", "slide.jpeg", "slidecar.jpeg", "tesla.jpeg", "exp.jpg", "-jpg.webp"]
  //an array of the images that will be automatically changed in the slider 
  let start = 0
//the starting value is zero

//this function iterates through the array of images and changes the image source of the image tag in the slider
  function slider() {
    //if the starting value is less than the length of the array
    if (start < slides.length) {
      // the starting value is incremented by one
      start += 1
    } else {
      //if the starting value becomes greater than the length of the array, the value of the starting value is reset to one
      start = 1
    }
    //the image source depends on the value of the starting value less one since indexes begin from index zero
    img.innerHTML = "<img src=" + slides[start - 1] + ">"

  }
  setInterval(slider, 5000)
  //this function will be run after every 5 seconds 

//selects the button that will open the wishlist as a pop up window
  let wishListButton = document.getElementById("wishlist")
  //selects the div that contains the wishlist
  let wishListWindow = document.querySelector("#div-wishlist")
  //selctes the buttton that closes the wishlist
  let closeWishlist = document.getElementById("closeWishlist")

//displays the wish list as a pop up window
  wishListButton.addEventListener("click", (e) => {
    e.preventDefault() //prevents the page from refreshing once the button is clicked
    wishListWindow.style.display = "block"
  })
  //closes the wish list
  closeWishlist.addEventListener("click", () => {
    wishListWindow.style.display = "none"
  })

})