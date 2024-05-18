let btn_1= document.querySelector('.btn-1');
let btn_2= document.querySelector('.btn-2');
let input= document.querySelector('.input')



btn_1.addEventListener('click',()=>{

   input.type = "text";
   btn_1.style.display = "none";
   btn_2.style.display = "block"
});



btn_2.addEventListener('click',()=>{

    input.type = "password";
    btn_2.style.display = "none";
    btn_1.style.display = "block"
 });

