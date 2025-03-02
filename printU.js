let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]]

function printU(N,arr){
  let temp=""
  for(let i=N-1;i>=0;i--){
    temp=temp+arr[i][0]+" "
  }
  
  for(let j=1;j<N;j++){
     temp=temp+arr[0][j]+" "
  }
  
  for(let i=1;i<N;i++){
    temp=temp+arr[i][N-1]+" "
  }
  
  for(let j=N-2;j>=1;j--){
    temp=temp+arr[N-1][j]+" "
  }
  
  console.log(temp)
}

printU(3,arr)
