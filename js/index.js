

document.addEventListener("DOMContentLoaded", () => {


  // ------------------------------AOS.JS--------------------------------//
  AOS.init()

  // jquery
  function initJSON(){
    $.getJSON("../db/db.json",productFunc)
    

  }
  function productFunc(data){
    // let data = JSON.parse(data)
    console.log(data)
  }
  initJSON()

  // fetch("../db/db.json")
  // .then((response)=> console.log(response))



      
    // linksCardCLICK

//     const navigationLink = document.querySelectorAll(".navigation_item")
//     const productsCardContainer = document.querySelector(".cardrender")

//     const getCard = async () => {
//         const result = await fetch("db/db.json")
//         if (!result.ok) {
//             throw "it doesn't work" + result.status
//         }
//         return await result.json()
//     }

  //   const cteareCard = (optionCArd) => {
  //       const card = document.createElement("div")
  //       card.className = "productsCard"
  //       card.innerHTML = `
  //   <div class="product__container">
  //       <div class="container__card_product">
  //           <h2 class="product__name">${optionCArd.title}</h2>
  //           <a class="product__buy js-modal-open" href="#modal-1">купить</a>
  //           <a href="#modal-2" class="product__info js-modal-open">Подробно</a>
  //           <div class="product__circle"></div>
  //           <div class="product__Price0nlyModal" style="display: none;">${optionCArd.price}</div>
  //           <img class="product__img" src="${optionCArd.img}" alt="">
  //       </div>
  // </div>`
//         return card

//     }

//     const renderCartClick = (data) => {
//         productsCardContainer.textContent = ""
//         const cards = data.map(cteareCard)
//         productsCardContainer.append(...cards)

//         document.body.classList.add("show-goods")
//         cardt3D()

//     }


//     // getCard().then(renderCartClick)


//     // filter
//     const filterCards = (field, value) => {
//         getCard()
//             .then((data) => {
//                 const filteredCard = data.filter((card) => {
//                     return card[field] === value
//                 })
//                 return filteredCard
//             })
//             .then(renderCartClick)
//     }

//     // вывод по клику етих, как их там... карточек! 

//     navigationLink.forEach((item) => {
//         productsCardContainer.style.animation = ""
//         item.addEventListener("click", (event) => {
//             event.preventDefault()
//             const field = item.dataset.field
//             const value = item.textContent
//             filterCards(field, value)
//             productsCardContainer.style.animation = "fade 1.5s"

//         })
//     })



})
