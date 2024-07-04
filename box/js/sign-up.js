

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


let countValue = localStorage.getItem('quantity')
let menu = document.getElementById('menu');



function getNameAndPassword(){
   let na = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let confirm = document.getElementById('confirm').value;
   if(isNull123(na) && isNull123(password) && isNull123(confirm)){
    if( check(na) && check(password) && check(confirm)){
        if(password == confirm){
            alert("ok")
            localStorage.setItem('email',na)
            localStorage.setItem('password', password)
            location.href="./login.html"
            return true
        }
    
   }
}else{
    alert('Errol')
    document.getElementById('errol').style.color = "red"
    return false
}}


// ham kiem tra rong~
function isNull123(data) {
    if(data != ""){
        return true
    } else{
        return false
    }
}

function check(value){
    if (value.length >= 8  ) {
        return true;
    }else{
        alert("Errol")
        return false
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









// function generatePassword() {
//     let password = "";
//     let length = 16;

//     const chars =`0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
//     const arr = new Uint32Array(length)
//     window.crypto.getRandomValues(arr);
//     for (let i = 0; i < length; i++) {
//         password += chars[arr[i] % chars.length]
        
//     }
//     return password;
// }


