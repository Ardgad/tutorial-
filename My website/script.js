function showProductDetail(productId) {
    const product = getProductById(productId);

    document.getElementById('product-detail-image').src = product.image;
    document.getElementById('product-detail-name').innerText = product.name;
    document.getElementById('product-detail-price').innerText = `$${product.price.toFixed(2)}`;
    document.getElementById('product-detail-description').innerText = product.description;

    document.getElementById('product-detail').classList.remove('hidden');
}

function hideProductDetail() {
    document.getElementById('product-detail').classList.add('hidden');
}

function getProductById(productId) {
    // Replace this with your data or fetch from a server/database
    const products = [
        { id: 1, name: 'Nike Air Max', price: 99.99, image: 'shoe1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Adidas Ultraboost', price: 89.99, image: 'shoe2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
        // Add more products as needed
    ];

    return products.find(product => product.id === productId);
}