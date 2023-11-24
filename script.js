document.addEventListener('DOMContentLoaded', function () {
    const chocolate = document.querySelectorAll('.chocolate');
    const selectedLists = document.querySelector('.selected-list');
    const total_Prices = document.querySelector('.total-price');

    let selectedChocolate = [];
    let totalItemCount = [];

    chocolate.forEach(chocolate => {
        chocolate.addEventListener('click', () => {
            const name = chocolate.dataset.name;
            const price = parseFloat(chocolate.dataset.price);

            // Check if the chocolate is already selected
            const index = selectedChocolate.findIndex(item => item.name === name);

            if (index !== -1) {
                
                selectedChocolate[index].quantity += 1;
            } else {
                selectedChocolate.push({ name, price, quantity: 1 });
            }
            if ( selectedChocolate.length<7 ){
                console.log(totalItemCount[totalItemCount.length-1])
                updateSelectedLists();

            
            }

            if (selectedChocolate.length<7 ){
                updateTotalPrice();

            }
            

                  
        });
    });

    function updateSelectedLists() {
        selectedLists.innerHTML = '';
        selectedChocolate.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity}`;
            let allCount=0
            const finalItemCount=selectedChocolate.map(x=>x.quantity) 
            console.log(finalItemCount)       
            //finalItemCount[0].forEach(x=>allCount+x)
            totalItemCount.push(finalItemCount[0])
            selectedLists.appendChild(li);
           console.log('item.quantity');
        });
    }

    function updateTotalPrice() {
        const total = selectedChocolate.reduce((acc, item) => acc + item.price * item.quantity, 0);
        total_Prices.textContent = total.toFixed(2);
    }
});