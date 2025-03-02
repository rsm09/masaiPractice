let studentScores = {
  John: 85,
  Emma: 92,
  Sam: 67,
  Bob: 45
};

function grades(obj){
  for(let key in obj){
    let grade = obj[key]>=90?"A":obj[key]>=80?"B":obj[key]>=70?"C":obj[key]>=60?"D":"F"
    console.log(key+" - "+grade)
  }
}

grades(studentScores)
