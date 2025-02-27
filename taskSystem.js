taskArray =["t1","t2","t3","t4","t5"]
let newArray=[]
for(let i=0;i<taskArray.length-1;i++){
  newArray[i]=taskArray[i+1]
}
console.log(newArray)
let newA=[]
newA[0]="h1"
newA[1]="h2"

for(let i=0;i<newArray.length;i++){
  newA[i+2]=newArray[i]
  
}
newA[newA.length-1]="new Task"
console.log(newA)
