let flowerb = ""
let flowerv = ""
let flowerw = ""
let flowerg = ""
let flowerbi = ""
let menu = document.getElementById('menu');
let countValue = localStorage.getItem('quantity')




let box = document.getElementById('box');
let vase = document.getElementById('vase');
let wedding = document.getElementById('wedding');
let GO = document.getElementById('GOflower');
let birthday = document.getElementById('birthday');

let flowerBox = [
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
    
]

let flowerVase = [
    {
        id: 7,
        name: 'Hello Sweetheart',
        price: "60 $",
        description: "10 Red roses",
        image:"https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Binh/z3811416010711_832abee8b96f360ea8bf539676f04468-min-1-800x800.jpg"

    }
    ,
    {
        id: 8,
        name: 'Heavy Petal',
        price: "70 $",
        description: "15 Pastel roses",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Binh/z4226700141279_d4dd6d2e7d6617818a01405fee6e6c64-800x800.jpg',
    }
    ,
    {
        id: 9,
        name: 'Autumn Lover',
        price: "100 $",
        description: "Autumn",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Binh/DSCF5039-pts-min-800x800.jpg',
    }
    ,
    {
        id: 10,
        name: 'Festive Floral',
        price: "59 $",
        description: "15 Red roses",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Binh/DSCF5421-pts-min-800x800.jpg',
    }
    ,
    {
        id: 11,
        name: 'Sea Whisper',
        price: "30 $",
        description: "10 Blue roses",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Binh/DSCF5339-pts-done-min-800x800.jpg',
    },
    {
        id: 12,
        name: 'My Beloved',
        price: "70 $",
        description: "15 Red roses",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Binh/z3944782077590_4622043492ef790b8b5a9bbfa160edff-800x800.jpg',
    }
 
]

let weddingFlower = [
    {
        id: 13,
        name: 'The Best Moment',
        price: "15 $",
        description: "15 Red roses",
        image:"https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04092022/Part%202/492a-800x800.jpg"

    }
    ,
    {
        id: 14,
        name: 'Stand By Me',
        price: "70 $",
        description: "15 Red roses",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04192022/4192-800x800.jpg',
    }
    ,
    {
        id: 15,
        name: 'Wild Love',
        price: "49 $",
        description: "Description: This is flower",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04092022/Part%202/DSCF6043-800x800.jpg',
    }
    ,
    {
        id: 16,
        name: 'Sweet Commitment',
        price: "30 $",
        description: "Description: flower",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04092022/Part%202/491a-800x800.jpg',
    }
    ,
    {
        id: 17,
        name: 'Pursuit of Happiness',
        price: "50 $",
        description: "Description: flower",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04092022/DSCF6001-1100x1100.jpg',
    },
    {
        id: 18,
        name: 'Happy Marriage',
        price: "40 $",
        description: "Description: flower",
        image: 'https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04082022/499-800x800.jpg',
    }
 
]

let grandFlower = [
    {
        id: 19,
        name: 'Product: Product 19',
        price: "Price: " + 90 + "$",
        description: "Description: flower",
        image:"https://images.pexels.com/photos/7354760/pexels-photo-7354760.jpeg?auto=compress&cs=tinysrgb&w=1600"

    }
    ,
    {
        id: 20,
        name: 'Product: Product 20',
        price: "Price: " + 380 + "$",
        description: "Description: Not a flower :))",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
    ,
    {
        id: 21,
        name: 'Product: Product 21',
        price: "Price: " + 210 + "$",
        description: "Description: This is flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
    ,
    {
        id: 22,
        name: 'Product: Product 22',
        price: "Price: " + 200 + "$",
        description: "Description: flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
    ,
    {
        id: 5,
        name: 'Product: Product 23',
        price: "Price: " + 90 + "$",
        description: "Description: flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        id: 24,
        name: 'Product: Product 24',
        price: "Price: " + 350 + "$",
        description: "Description: flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
 
]

let birthdayFlower = [
    {
        id: 25,
        name: 'Product: Product 25',
        price: "Price: " + 250 + "$",
        description: "Description: flower",
        image:"https://images.pexels.com/photos/7354760/pexels-photo-7354760.jpeg?auto=compress&cs=tinysrgb&w=1600"

    }
    ,
    {
        id: 26,
        name: 'Product: Product 26',
        price: "Price: " + 390 + "$",
        description: "Description: Not a flower :))",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
    ,
    {
        id: 27,
        name: 'Product: Product 27',
        price: "Price: " + 270 + "$",
        description: "Description: This is flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
    ,
    {
        id: 28,
        name: 'Product: Product 28',
        price: "Price: " + 990 + "$",
        description: "Description: flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
    ,
    {
        id: 29,
        name: 'Product: Product 29',
        price: "Price: " + 90 + "$",
        description: "Description: flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        id: 30,
        name: 'Product: Product 30',
        price: "Price: " + 350 + "$",
        description: "Description: flower",
        image: 'https://images.pexels.com/photos/2512281/pexels-photo-2512281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
 
]



localStorage.setItem('flowerBox', JSON.stringify(flowerBox))
localStorage.setItem('flowerVase', JSON.stringify(flowerVase))
localStorage.setItem('weddingFlower', JSON.stringify(weddingFlower))
localStorage.setItem('grandFlower', JSON.stringify(grandFlower))
localStorage.setItem('birthdayFlower', JSON.stringify(birthdayFlower))


for (let item of flowerBox) {
    flowerb+=`
    <a class="product" href="./product.html?id=${item.id}">
    <img src="${item.image}" class="img" alt="">
        <div class="group">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        </div>
    </a>
    `  }
    box.innerHTML = flowerb;


for (let item of flowerVase) {
    flowerv+=`
    <a class="product" href="./product.html?id=${item.id}"">
    <img src="${item.image}" class="img" alt="">
        <div class="group">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        </div>
    </a>
    `  
}
vase.innerHTML = flowerv;


for (let item of weddingFlower) {
    flowerw+=`
    <a class="product" href="./product.html?id=${item.id}">
        <img src="${item.image}" class="img" alt="">
        <div class="group">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        </div>
    </a>
    `  
}
wedding.innerHTML = flowerw;






function saveQuantity(){
    menu.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
    <div class="number" id="cart">${countValue}</div>`;
}
saveQuantity()