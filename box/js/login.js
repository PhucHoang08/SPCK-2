

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


    function getnameandpassword(){
   na = document.getElementById("email").value;
   password = document.getElementById("password").value;
   
   if(check(na) && check(password)){
    if(na == localStorage.getItem("email") && password == localStorage.getItem("password")){
        alert('Welcom' + " " + na)
        localStorage.setItem("email", na)
        localStorage.setItem("password", password)
        location.href="./house.html"
    }else{
        alert('Email or Password is wrong')
    }
   }else{
    alert('Email or Password is wrong')}
}



function check(data){
    if(data != ""){
        return true
}return false
}                     






function saveQuantity(){
    menu.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
    <div class="number" id="cart">${countValue}</div>`;
}
saveQuantity()