const divEle = document.querySelector(".card-container");

function display(userId){
// Create XMLHttpRequest
    const request=new XMLHttpRequest();

    // open Request
    request.open('GET',`https://dummyjson.com/products`);

    // Send Request
    request.send();

    // addEventListener on request
    request.addEventListener('load',function(){
        console.log(typeof this.responseText);
        let data=JSON.parse(this.responseText);
        console.log(data.products);

        data.products.forEach((products) => {
        // HTML element of the data
            let divEl=`<div class="user-card">
            <img src=${products.thumbnail} alt="Profile Image" />
                <img src=${products.images} alt="Profile Image" />
                <h3>${products.title}</h3>
                <h3>${products.price}</h3>
                <h3>${products.discountPercentage}</h3>
                <h3>${products.rating}</h3>
                <h3>${products.stock}</h3>
                <h3>${products.brand}</h3>    
                <p>${products.description}</p>
                
                <button class="btn">View Profile</button>
                </div>`;
            divEle.insertAdjacentHTML('beforebegin',divEl)          
        });

    });
}

display(30)
