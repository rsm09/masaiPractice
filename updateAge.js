const userProfile = {

  name: "Alice",

  age: 28,

  details: function() {

  return `${this.name} is ${this.age} years old.`; 
    
  },

  updateAge(newAge) {

  if (newAge <= 0) {

    console.log("Invalid age.");

    return; 
    
  } else{
    
     this.age = newAge;
  }

  console.log(this.details()); 
    
  } 
  
};

userProfile.updateAge(25);

console.log(userProfile.details());
