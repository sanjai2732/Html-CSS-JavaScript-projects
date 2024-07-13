document.querySelectorAll(".link").forEach(link=>{
    link.addEventListener("click",()=>{
        document.querySelectorAll('.link').forEach(el=>{
            el.classList.remove('selected')
        });
        link.classList.add('selected')
    })
})


document.getElementById('meau').addEventListener('click',()=>{
    document.getElementById('lgNav').classList.toggle('nav_active')
})
//     setInterval(function(){
       
//     document.querySelectorAll(".link").forEach(link=>{
//        link.addEventListener('click',()=>{
//         document.getElementById('lgNav').style.display='none'
//        })
//        link.style.display='flex'
      
//     })
    
// },100)



