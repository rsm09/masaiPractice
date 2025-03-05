const checkout = {

items: [],

total: 0,

addItem(item) {

if (typeof item.price !== 'number'){
  item.price=parseFloat(item.price)
}

if(isNaN(item.price)) {

console.log("Invalid price.");


} else{
  this.items.push(item);

this.total += item.price;
  
}



},

getTotal() {

return this.total.toFixed(2) 
  
} };

checkout.addItem({ name: "Coffee Maker", price: "99.95" });

checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal());
