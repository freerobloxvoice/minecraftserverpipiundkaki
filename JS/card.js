let card = JSON.parse(localStorage.getItem("card"))||[]

function addtocard(id,name,price,img){
    let item = card.find(p => p.id === id)
    if(item){
        item.qty+=1
    }
    else{
        card.push(
            {
                id,name,price,img,qty:1
            }
        )
    }
    savecard()
}

function savecard(){
    localStorage.setItem("card",JSON.stringify(card))
}
