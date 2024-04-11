document.addEventListener("DOMContentLoaded", () => {
  let img = document.getElementById("imgcontainer")
  let slides = ["urus.jpg", "lambo.jpeg", "slide.jpeg", "slidecar.jpeg", "tesla.jpeg", "exp.jpg", "-jpg.webp"]
  let start = 0

  function slider() {
    if (start < slides.length) {
      start += 1
    } else {
      start = 1
    }
    console.log(img)
    img.innerHTML = "<img src=" + slides[start - 1] + ">"

  }
  setInterval(slider, 5000)


  let wishListButton = document.getElementById("wishlist")
  let wishListWindow = document.querySelector("#div-wishlist")
  let closeWishlist = document.getElementById("closeWishlist")


  wishListButton.addEventListener("click", (e) => {
    e.preventDefault()
    wishListWindow.style.display = "block"
  })
  closeWishlist.addEventListener("click", () => {
    wishListWindow.style.display = "none"
  })

})