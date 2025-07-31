// list of products to be shown in the products section
const product = [
    {
        productImg: './assets/products-images/image-removebg-preview-(1).png',
        productTitle: 'Carbin Biscuit',
        productQuantity: 'pack of 10',
        productPrice: 2000
    },
    {
        productImg: './assets/products-images/crayfish.jpeg',
        productTitle: 'Crayfish',
        productPrice: 1500
    },
    {
        productImg: './assets/products-images/Catfish.jpeg',
        productTitle: 'Catfish',
        productPrice: 3500
    },
    {
        productImg: './assets/products-images/NestleMilo.jpeg',
        productTitle: 'Nestle Milo',
        productPrice: 6500
    },
    {
        productImg: './assets/products-images/PowderedMilk.jpeg',
        productTitle: 'Peak Milk Powdered',
        productPrice: 8400
    },
    {
        productImg: './assets/products-images/Plantains.jpeg',
        productTitle: 'Yellow Plantain',
        productPrice: 9500
    },
    {
        productImg: './assets/products-images/Cheeseballs.jpeg',
        productTitle: 'Cheeseball small',
        productQuantity: 'pack of 10',
        productPrice: 200
    },
    {
        productImg: './assets/products-images/PalmOil.jpeg',
        productTitle: 'Red Oil',
        productPrice: 4300
    },
    {
        productImg: './assets/products-images/MoimoiPouch.jpeg',
        productTitle: 'Moimoi Pouch Pack',
        productQuantity: 'pack of 10',
        productPrice: 1200
    },
    {
        productImg: './assets/products-images/Beans.jpeg',
        productTitle: 'Beans',
        productPrice: 6500
    },
    {
        productImg: './assets/products-images/IJEBUPOMODry.jpeg',
        productTitle: 'Pomo Ijebu',
        productPrice: 700
    },
    {
        productImg: './assets/products-images/Driedcatfish.jpeg',
        productTitle: 'Stockfish Head',
        productPrice: 1300
    },
    {
        productImg: './assets/products-images/Garri-Cassavaflakes.jpeg',
        productTitle: 'Garri',
        productPrice: 3200
    },
    {
        productImg: './assets/products-images/SpicyKilishi.jpeg',
        productTitle: 'Kilishi',
        productPrice: 500
    }
]

/// Function to render products
function renderProducts() {
    // getting the dom object where the products will be displayed
    const products = document.getElementById('products');
    if (!products) {
        console.error(`Container with ID '${products} not found for product display`);
        return;
    };
    products.innerHTML = '';



    // mapping the products from the product array list
    product.forEach(product => {
        // creating a div thatt will hold the object list from the mapped array
        const div = document.createElement('div');
        div.className = 'productCard';
        div.innerHTML = `
            <img src="${product.productImg}" alt="${product.productTitle}" />
            <h4>${product.productTitle}</h4>
            <span>${product.productPrice}</span>
            <button>Select option</button>
        `;
        // appending the contents of the div to the div
        products.appendChild(div);
    });
}

// Make the function available globally for SPA usage
window.renderProducts = renderProducts;