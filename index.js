document.addEventListener("DOMContentLoaded",() => {
    fetch ("http://localhost:3000/SUV")
    .then (res => res.json())
    .then (data => {
        // function addData (data,title) {
        //     let carName = document.createElement("h5")
        //     carName.textContent = data.name
        //     title.appendChild(carName)
        //     let carImage = document.createElement("img")
        //     carImage.src= data.image
        //     console.log (carImage)
        //     title.appendChild(carImage)
        //     let carBrand = document.createElement("p")
        //     carBrand.textContent = data.brand
        //     title.appendChild(carBrand)
        //     let carPrice = document.createElement ("p")
        //     carPrice.textContent = data.price
        //     title.appendChild(carPrice)
        // }
        console.log(data)
        let parent = document.querySelector("#suv-title1")
       console.log (data[0].name)
       addData(data[0],parent)
       let parent2 = document.querySelector("#suv-title2")
       addData(data[1],parent2)
       let parent3 = document.querySelector("#suv-title3")
        addData(data[2],parent3)
        let parent4 = document.querySelector("#suv-title4")
      addData(data[3],parent4)
      let parent5 = document.querySelector("#suv-title5")
     addData(data[4],parent5)
       

    //    let car1 = document.createElement("h5")
    //    car1.textContent=data[0].name
    //    title.appendChild(car1)
    //   let carImg = document.createElement("img")
    //   carImg.src = data[0].image
    //   title.appendChild(carImg)
    //   let brand = document.createElement("p")
    //   brand.textContent = data[0].brand
    //   let price = document.createElement("p")
    //   price.textContent =data[0].price
    //   title.appendChild(brand)
    //   title.appendChild(price)

    })
    

    fetch ("http://localhost:3000/Sports")
    .then (res => res.json())
    .then (data => {
        let parent6 = document.querySelector("#sports-title1")
        console.log (data[0].name)
        addData(data[0],parent6)
        let parent7 = document.querySelector("#sports-title2")
        addData(data[1],parent7)
        let parent8= document.querySelector("#sports-title3")
         addData(data[2],parent8)
         let parent9 = document.querySelector("#sports-title4")
       addData(data[3],parent9)
       let parent10 = document.querySelector("#sports-title5")
      addData(data[4],parent10)})
    //include a for each method


    function addData (car,parent) {
        let carName = document.createElement("h5")
        carName.textContent =car.name
        parent.appendChild(carName)
        let carImage = document.createElement("img")
        carImage.src= car.image
        parent.appendChild(carImage)
        let carBrand = document.createElement("p")
        parent.textContent = car.brand
        parent.appendChild(carBrand)
        let carPrice = document.createElement ("p")
        parent.appendChild(carPrice)
    }

    function addData (data,title) {
        let carName = document.createElement("h5")
        carName.textContent = data.name
        title.appendChild(carName)
        let carImage = document.createElement("img")
        carImage.src= data.image
        console.log (carImage)
        title.appendChild(carImage)
        let carBrand = document.createElement("p")
        carBrand.textContent = data.brand
        title.appendChild(carBrand)
        let carPrice = document.createElement ("p")
        carPrice.textContent = data.price
        title.appendChild(carPrice)
    }

    //wishlist button 
    function addWishList (car) {
        fetch ("http://localhost:3000/wishlist", {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(car)
        }) 
        .then (res => res.json())
        .then (data => {
            let title = document.querySelector("#wishlist-container")
            let p = document.createElement("p")
            p.textContent = data.name
            title.appendChild(p)
        })
    }
    let btn = document.querySelector("#btn-wishlist1")
    btn.addEventListener ("click", ()=> { 
        fetch ("http://localhost:3000/SUV/1") 
        .then (res => res.json())
        .then (obj => {
            addWishList( {
                name : obj.name
            })
        })
    })

    let btn2 = document.querySelector("#btn-wishlist2")
    btn2.addEventListener ("click", ()=> { 
        fetch ("http://localhost:3000/SUV/2") 
        .then (res => res.json())
        .then (obj => {
            addWishList( {
                name : obj.name
            })
        })
    })

    let btn3 = document.querySelector("#btn-wishlist1")
    btn3.addEventListener ("click", ()=> { 
        fetch ("http://localhost:3000/SUV/3") 
        .then (res => res.json())
        .then (obj => {
            addWishList( {
                name : obj.name
            })
        })
    })

    let btn4 = document.querySelector("#btn-wishlist4")
    btn4.addEventListener ("click", ()=> { 
        fetch ("http://localhost:3000/SUV/4") 
        .then (res => res.json())
        .then (obj => {
            addWishList( {
                name : obj.name
            })
        })
    })

    let btn5 = document.querySelector("#btn-wishlist5")
    btn5.addEventListener ("click", ()=> { 
        fetch ("http://localhost:3000/SUV/1") 
        .then (res => res.json())
        .then (obj => {
            addWishList( {
                name : obj.name
            })
        })
    })
})