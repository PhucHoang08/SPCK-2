let alerts =document.querySelectorAll('.alert')
alerts.forEach(item=>{
    item.addEventListener('click', (event)=>{
        if(event.target.classList.contains('close')){
            item.style.display = 'none'
            item.style.cursor = 'pointer'
        }
    })
})
window.addEventListener('offline',()=>{
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'grid'
})
window.addEventListener('online',()=>{
    document.getElementById('success').style.display = 'grid'
    document.getElementById('error').style.display = 'none'
})





document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  






let html = ""
let mid = document.getElementById('data');
let menu = document.getElementById('menu');
let countValue = localStorage.getItem('quantity')

let myProducts = [
    {
        id: 1,
        name: 'Little Love',
        price: "13 $",
        description: "5 Red roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New-July/little-love-4-500x500.jpg',

    }
    ,
    {
        id: 2,
        name: 'Love Forever',
        price: "19 $",
        description: "15 Red roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New%20Sep/mai-mot-tinh-yeu-500x500.jpg',
    }
    ,
    {
        id: 3,
        name: 'Passionate Red',
        price: "30 $",
        description: "15 Red roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New_Aug/do-nong-nan-500x500.jpg',
    }
    ,
    {
        id: 4,
        name: 'Little Tana',
        price: "15 $",
        description: "Chrysanthemum Tana",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New%20Jan%202021/litle-tana-500x500.jpg',
    }
    ,
    {
        id: 5,
        name: 'Morning Bouquet',
        price: "25 $",
        description: "15 Pastel roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New%20Sep/ban-mai-500x500.jpg',
    }
    ,
    {
        id: 6,
        name: 'Pure Flower',
        price: "15 $",
        description: "White Heather",
        image: 'https://www.flowercorner.vn/image/catalog/Blogs/bo-hoa-thach-thao-trang.jpg',
    }
    ,
    {
        id: 7,
        name: 'Simple',
        price: "29 $",
        description: "9 strawberry cream roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New%20Sep/simple-2-500x500.jpg',
    }
    ,
    {
        id: 8,
        name: 'Pink Moon',
        price: "45 $",
        description: "7 pastel cream roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New%20Sep/pink-moon-new-500x500.jpg',
    }
    ,
    {
        id: 9,
        name: 'Fun',
        price: "20 $",
        description: "7 cream roses",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New%20Sep/niem-vui-1-500x500.jpg',
    }
    ,
    {
        id: 10,
        name: 'My lady',
        price: "50 $",
        description: "Tana Chrysanthemum",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New_Nov/1-500x500.jpg',
    },
    {
        id: 11,
        name: 'Best Wishes',
        price: "35 $",
        description: "Tana Chrysanthemum",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New_Product_March/bo-hoa-best-wishes-500x500.jpg',
    },
    {
        id: 12,
        name: 'Perfect',
        price: "35 $",
        description: "20 pastel cream rosesr",
        image: 'https://8384f2fb97.vws.vegacdn.vn/image/cache/catalog/New_Product_March/BOUQUET-4271-500x500.png',
    }
]





for (let i = 0; i < myProducts.length; i++) {
    html+=`
    <a class="product" href="./product.html?id=${myProducts[i].id}">
    <img src="${myProducts[i].image}" class="img" alt="">
        <div class="group">
            <h2>${myProducts[i].name}</h2>
            <p>${myProducts[i].price}</p>
        </div>
    </a>
    `  }
    mid.innerHTML = html;


function saveQuantity(){
    menu.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
    <div class="number" id="cart">${countValue}</div>`;
}
saveQuantity()




