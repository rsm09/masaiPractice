const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
{ name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

let output=[]
/*city and street name from the address.*/

for(let i=0;i<people.length;i++){
 let {name,address:{city,street:{name:sName}}}= people[i]
     
     output.push(`${name} lives in ${city} on ${sName}`)

}

console.log(output)
