const buttons=document.querySelectorAll(".btn")
const boxs=document.querySelectorAll(".box")
const searchBox=document.getElementById("search")

/*--------------------search product using by search box--------------------------- */
// first
searchBox.addEventListener('keyup',(e)=>{
searchText=e.target.value.toLowerCase().trim()
boxs.forEach((box)=>{
    const data=box.dataset.item
    if(data.includes(searchText)){
        box.style.display='block'
    }else{
         box.style.display='none'
    }
});
buttons.forEach((button)=>{ // useing clear button view
    button.classList.remove('btn-clicked') //classlist is name of the class it use to edit class name 
});
buttons[1].classList.add('btn-clicked')  //search the iteam button "All" all ways selected
});

/*--------------- search product using by button ---------------------------- */
//second
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault() //not affect in anther work, like page reloading.
        setActiveBtn(e) // setActiveBtn is function
//fourth
        const btnfilter=e.target.dataset.filter; //button filter 
        boxs.forEach((box=>{
            if(btnfilter=='all'){           //select button 'all'=='all' select button ,'red'=='all' go to else
                box.style.display="block"; //display  all iteam
            }
            else{
                const boxfilter=box.dataset.item; //boxfilter "store" the box.dataset.item,  ex:boxfilter='red'
                if(btnfilter==boxfilter){ // red==red
                    box.style.display="block" //display  all red iteam
                }
                else{
                     box.style.display="none" //block the not red iteam
                }
            }
        }))
    })
})
//thired
function  setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked') //classlist is name of the class it use to edit class name
    })
    e.target.classList.add('btn-clicked') //add the button view
}