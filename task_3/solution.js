function renderCartItem(item) {
    const product = item;

    let itemCountText = ""; 
    let sum = product.count * product.price; 

    itemCountText += product.count; 
    itemCountText += " × "; 
    itemCountText += product.price;
    itemCountText += " ₽ = "
    itemCountText += sum; 
    itemCountText += " ₽"; 

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}