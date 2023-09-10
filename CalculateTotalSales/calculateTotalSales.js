const products = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

function calculateSale(products, tax) {
  const itemPrice = products.map((item) => item.price * item.quantity);
  const totalPrice = itemPrice.reduce((sum, n) => sum + n, 0);
  const taxedPrice = totalPrice + totalPrice * (tax / 100);

  return taxedPrice.toFixed(2);
}

//the best possible answer with better steps
function calculateSale2(product, tax){
    const totalPrice = product.reduce( (sum, num) => sum + num.price * num.quantity, 0);
    const taxedPrice = totalPrice + totalPrice * (tax / 100);

    return taxedPrice.toFixed(2);
}

console.log(calculateSale(products, 8));
