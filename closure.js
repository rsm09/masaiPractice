function outerFunction(){
  let message="Hello world"
  
  return function innerFunction(){
    console.log(message)
  }
}

let result=outerFunction()
result()
