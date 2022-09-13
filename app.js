'use strict';

const options=document.getElementsByTagName('option');
const select=document.querySelector('select');
const add=document.querySelector('.upper--add');
[...options].forEach(opt=>{
    if(opt.value==='all'){
        opt.style.color='orange';
        }
    if(opt.value==='complete'){
        opt.style.color='green';
        }
    if(opt.value==='incomplete'){
        opt.style.color='red';
        }
})

add.addEventListener('click',function(e){
  
  const text=e.target.previousElementSibling.value
    const show=document.querySelector('.show')
   const item=document.createElement('div');
    item.classList.add('show--item');
    const para=document.createElement('p');
    para.classList.add('show--para');
    para.textContent=text
    const check=document.createElement('div');
    check.classList.add('show--check');
    check.innerHTML='&#x2714;'
    const del=document.createElement('div');
    del.classList.add('show--delete');
    del.textContent='X'
    item.append(para)
    item.append(check);
    item.append(del);
    show.append(item)
    check.addEventListener('click',function(e){
        const parent=e.target.parentElement
            if(parent.classList.contains('blur')){
      parent.classList.remove('blur');
   
       }
     else { 
         parent.classList.add('blur');
      }
    })
    del.addEventListener('click',function(e){
             const parent=e.target.parentElement
      parent.remove()
    })
})

select.addEventListener('click',function(e){
    const target=e.target;
    const items=document.getElementsByClassName('show--item');
   if(target.value==='complete'){
    [...items].forEach(item=>{
        if(item.classList.contains('blur')){
            item.style.display='flex'
        }
        if(!item.classList.contains('blur')){
             item.style.display='none'
        }
    })
   }
   if(target.value==='incomplete'){
    [...items].forEach(item=>{
        if(item.classList.contains('blur')){
            item.style.display='none'
        }
        if(!item.classList.contains('blur')){
             item.style.display='flex'
        }
    })
   }
 
   if(target.value==='all'){
    [...items].forEach(item=>{
    item.style.display='flex'
    })
   }
 
})


