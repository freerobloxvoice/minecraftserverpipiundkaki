document.addEventListener("DOMContentLoaded",()=>{
    let card = JSON.parse(localStorage.getItem("card")) || [];
    let container = document.querySelector(".card-items");
    let totalEl = document.querySelector(".total");
    function rendercard(){
        container.innerHTML=""
        let total = 0
        if (card.length === 0){
            container.innerHTML = "<h3>Cart is empty</h3>"
            totalEl.textContent = ""
            return
        }
        card.forEach(element => {
            total += element.price*item.qty
            container.innerHTML += `
            <div style="border:1px solid #ccc; padding:10px; margin:10px 0;">
                <h3>${item.name}</h3>
                <p>${item.price} $</p>

                <button onclick="changeQty(${item.id}, -1)">-</button>
                ${item.qty}
                <button onclick="changeQty(${item.id}, 1)">+</button>

                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
            `;
        });}
        window.removeItem = function(id){
            card = card.filter(i => i.id!==id)
            save()
        }
        function save(){
            localStorage.setItem("card",JSON.stringify(card))
            rendercard()
        }
        window.openCheckout = function() {
        document.querySelector(".checkout").style.display = "block";
    }

    window.confirmOrder = function() {
        alert("Замовлення оформлено!");
        localStorage.removeItem("cart");
        location.reload();
    }

    renderCart();
    
})