const model=document.createElement('div')
model.setAttribute('id','model')
document.body.appendChild(model)
const image=document.querySelectorAll(".img")
image.forEach(image=>{
    image.addEventListener("click",()=>{
        model.classList.add('active')
        const img=document.createElement('img')
        img.src=image.src
        img.id='img'
        while(model.firstChild){
            model.removeChild(model.firstChild)
        }
        model.append(img)
        
    })
})
model.addEventListener('click',()=>{
    model.classList.remove('active')
})



