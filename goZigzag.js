let arr = [[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]

function printArray(N,M,arr){
  let temp=""
  for(let i=0;i<N;i++){
    if(i%2==0){
      for(let j=M-1;j>=0;j--){
        temp=temp+arr[i][j]+" "
      }
    } else{
       for(let j=0;j<M;j++){
       temp=temp+arr[i][j]+" "
      }
    }
   
   
  }
   console.log(temp)
}

printArray(4,5,arr)
