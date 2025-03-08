function createCounter(){
  let count=0
  
  return {increment: function(){
    return count=count+1
  },
  getCount: function(){
    return count
  }
  }
}

const counter=createCounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getCount())
