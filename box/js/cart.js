let quantity = localStorage.getItem('quantity')
let idProduct = localStorage.getItem('id')
let detail = document.getElementById('detail')
let math = document.getElementById('math')
let countValue = localStorage.getItem('quantity')
let menu = document.getElementById('menu');
let img = document.getElementById('img')

console.log(quantity)
console.log(idProduct)



let setQuantity = quantity


let flowerBox = JSON.parse(localStorage.getItem('flowerBox'));
let flowerVase = JSON.parse(localStorage.getItem('flowerVase'));
let weddingFlower = JSON.parse(localStorage.getItem('weddingFlower'));
let grandFlower = JSON.parse(localStorage.getItem('grandFlower'));
let birthdayFlower = JSON.parse(localStorage.getItem('birthdayFlower'));


for (let item of flowerBox){
    if (item.id == idProduct) {
        detail.innerHTML+=`
        <h2 class="detail-name">${item.name}</h2>
        <p class="detail-price">${item.price}</p>
        `;
        img.innerHTML=`
        <img src="${item.image}" alt="" class="product-imgg">`
    }
}
for (let item of flowerVase){
    if (item.id == idProduct) {
        detail.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`;
    }
}
for (let item of weddingFlower){
    if (item.id == idProduct) {
        detail.innerHTML+=`
        <h2 class="product-name" id="name">${item.name}</h2>
        <h3 class="product-description" id="des">${item.description}</h3>
        <p class="product-price" id="price">${item.price}</p>`
    }
}






function saveQuantity(){
    menu.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
    <div class="number" id="cart">${countValue}</div>`;
}
saveQuantity()


function reloadCart(){
    math.innerHTML = `
    <div class="math">
    <button class="btn-math" id="minus" onclick="minus()">-</button>
    <div class="count">${countValue}</div>
    <button class="btn-math" id="plus" onclick="plus()">+</button>
    </div>
    `
}
reloadCart()

function minus(){
    countValue --;
    if (countValue < 1 ) {
        countValue = 1
        localStorage.setItem('quantity', countValue)
        return;
    }
    reloadCart()
    saveQuantity()
}

function plus(){
    countValue ++;
    localStorage.setItem('quantity', countValue)
    reloadCart()
    saveQuantity()
}
