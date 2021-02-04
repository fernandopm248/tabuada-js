
function tabuada(){
   let utab = document.getElementById('tab')
  let ltab =document.getElementById('seltab')
 
if(utab.value.length==0){
    window.alert('erro')
}else{
    let ntab = Number(utab.value)
    let mtp = 0
    let tabx = 0
    ltab.innerHTML=""

    
        while(mtp<=10){
tabx = ntab * mtp
let item = document.createElement('option')
item.text =`${ntab} x ${mtp} = ${tabx}`
ltab.appendChild(item)
mtp++
        }

        }
    
}















