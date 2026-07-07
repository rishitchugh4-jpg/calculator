const display=document.querySelector(".nums");
const button=document.querySelectorAll(".r1");


button.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(display.innerText==="0"){
            display.innerText=btn.innerText;
        }
        else{
            display.innerText=display.innerText+btn.innerText;
        }
        if(btn.innerText==="AC"){
            display.innerText="0";
        }
        if(btn.innerText==="DEL"){
            let res=display.innerText;
            display.innerText=res.slice(0,-4);
        }
        if(btn.innerText==="="){

            
            let result=display.innerText;
            display.innerText=eval(result.slice(0,-1));
        }
    })
})

