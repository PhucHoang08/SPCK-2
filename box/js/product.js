
let div = document.getElementById('data')
let root = document.getElementById('number')
let count = document.getElementById('count')
let cart = document.getElementById('cart')
let menu = document.getElementById('menu')
let screen = document.getElementById('screen')
let html = ''
let countValue = 0
let total = 0




let urlParams = new URLSearchParams(window.location.search);
let idProduct = urlParams.get('id');
localStorage.setItem('id', idProduct)

console.log(idProduct);

let flowerBox = JSON.parse(localStorage.getItem('flowerBox'));
let flowerVase = JSON.parse(localStorage.getItem('flowerVase'));
let weddingFlower = JSON.parse(localStorage.getItem('weddingFlower'));
let grandFlower = JSON.parse(localStorage.getItem('grandFlower'));
let birthdayFlower = JSON.parse(localStorage.getItem('birthdayFlower'));
console.log(flowerBox)

for (let item of flowerBox){
    console.log(item.id)
    if (item.id == idProduct) {

        div.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`
        ;
        screen.innerHTML=`
        
        <img src="${item.image}" alt="" class="imgp">
        `

    }
}

for (let item of flowerVase){
    console.log(item.id)
    if (item.id == idProduct) {
        div.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`;
        screen.innerHTML=`
        
        <img src="${item.image}" alt="" class="imgp">
        `
    }
}
for (let item of weddingFlower){
    console.log(item.id)
    if (item.id == idProduct) {
        div.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`
        screen.innerHTML=`
        
        <img src="${item.image}" alt="" class="imgp">
        `
    }
}
for (let item of grandFlower){
    console.log(item.id)
    if (item.id == idProduct) {
        div.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`
        screen.innerHTML=`
        
        <img src="${item.image}" alt="" class="imgp">
        `
    }
}
for (let item of birthdayFlower){
    console.log(item.id)
    if (item.id == idProduct) {
        div.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`
        screen.innerHTML=`
        
        <img src="${item.image}" alt="" class="imgp">
        `
    }
}
function checkCart(){
    html=`
    <div class="number">
        <button onclick="minus()" class="math" >-</button>
        <div class="count" id="count" >${countValue}</div>
        <button onclick="plus()" class="math" >+</button>
    </div>
    <button class="buy-now" onclick="saveQuantity()">
        <span>Buy now</span>
    </button>`;
    root.innerHTML = html
}
checkCart()



function saveQuantity(){
    menu.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
    <div class="number" id="cart">${countValue}</div>`;

}
saveQuantity()





function minus(){
    countValue --;
    if (countValue < 1 ) {
        countValue = 1
        return;
    }
    localStorage.setItem('quantity', countValue)
    checkCart()
}

function plus(){
    countValue ++;
    localStorage.setItem('quantity', countValue)
    checkCart()
}


