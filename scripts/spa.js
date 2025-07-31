<script src="./products.js"></script>

async function loadHomePageAndDisplayProducts() {
    try {
        const response = await fetch(home.html);
        const htmlContent = await response.text();
        document.getElementById('products').innerHTML = htmlContent;

        displayProducts('produts');
    } catch (error) {
        console.error('Error loading home page or displaying products:', error);
    }
}

function loadPage() {
    const route = location.hash.slice(1) || "home";
    const content = document.getElementById('content');

    fetch(`${route}.html`)
        .then(res => {
            if (!res.ok) throw new Error('Page not found')
            return res.text();
        })
        .then(data => {
            content.innerHTML = data;
            // Only call renderProducts if on home page and the function exists
            if (route === "home" && typeof window.renderProducts === "function") {
                window.renderProducts();
            }
        })
        .catch(err => content.innerHTML = '<h1>404 - Page not found</h1>')
}
window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage)
window.addEventListener('loadHomePageAndDisplayProducts', renderProducts)