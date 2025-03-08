Input=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let obj = Input.reduce((acc,curr)=>{
   acc[curr] ? acc[curr]++ : acc[curr]=1
   return acc;
},{})
console.log(obj)
console.log(Object.entries(obj).sort((a,b)=>b[1]-a[1]))
