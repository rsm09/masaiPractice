let Input= [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 3, rating: 2.8 }

]

let arr=Input.filter(ele=>ele.tasksCompleted>5).map(ele=>{
  let performance = ele.rating>4.5 ? "Excellent" : ele.rating >3 ? "Good" : "Needs Improvement"
  return {
    name : ele.name,
    performance : performance
  }
}).sort((a,b)=>{
  if (a.performance > b.performance) {
    return 1;
  }
  if (a.performance < b.performance) {
    return -1;
  }
  return 0;
})
console.log(arr)
