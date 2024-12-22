const productList = document.getElementById('products');


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(productsArray=> {
                
                displayCard(productsArray)
            })
            .catch(error => console.error('Error fetching products:', error));

    

function displayCard(productsArray){
        productsArray.forEach(product => {
            console.log(product)
            
            const articleTag = document.createElement('article')
            articleTag.classList.add('product')
            const productImage = document.createElement('img')
            productImage.src = product.image
            articleTag.appendChild(productImage)
            console.log(articleTag)
            const cardBody = document.createElement('div')
            cardBody.classList.add('card-body')
            const productTitle = document.createElement('h5')
            productTitle.classList.add('title-text')
            cardBody.appendChild(productTitle)
            productTitle.textContent = product.title
            const productPrice = document.createElement('p')
            productPrice.classList.add('price-text')
            cardBody.appendChild(productPrice);
            productPrice.textContent = product.price
            const productDescription = document.createElement('p')
            productDescription.classList.add('price-text')
            cardBody.appendChild(productDescription)
            productDescription.textContent = product.description
            const cardButton = document.createElement('button')
            cardButton.classList.add('card-button')
            articleTag.appendChild(cardBody)
            
            productList.appendChild(articleTag)
            console.log(articleTag)



        });
}