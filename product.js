function processProduct(Input){
  let arr=Input.map(({name}) =>name)
  Input.forEach(({name,price})=>{ price>50? console.log (`${name} is above $50`): console.log (`${name} is below $50`)})
}

let Input=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProduct(Input)
