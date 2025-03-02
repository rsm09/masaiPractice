let arr = [[1,2],[3,4],[5,6]]
function printArray(N,M,arr){
  for(let i=0;i<N;i++){
    let temp=""
    for(let j=0;j<M;j++){
      let sum=i+j
      temp=temp+" "+sum
    }
    console.log(temp)
    
  }
}

printArray(3,2,arr)
