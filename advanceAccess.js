let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
let person3 = { role: "user", experience: 2, active: true, department: "Support" };
let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };


function access(person){
    if(person["role"]=="admin"){
      if(person["active"]){
        if(person["experience"]>5){
          if(person["department"]=="IT"){
             console.log("Full IT Admin Access Granted!")
          } else{
            console.log("Full General Admin Access Granted!")
          }
        } else{
          console.log("Limited Admin Access")
          } 
      } else{
        console.log("Admin Access Revoked!")
      }
      
      
    } else if(person["role"]=="manager"){
        if(person["active"]){
        if(person["experience"]>3){
          if(person["department"]=="Sales"){
             console.log("Full Sales Manager Access")
          } else{
            console.log("Full Manager Access Granted!")
          }
        } else{
          console.log("Limited Manager Access")
          } 
      } else{
        console.log("Manager Access Revoked!")
      }
      
      
    } else if(person["role"]=="user"){
        if(person["active"]){
          if(person["department"]=="Support"){
             console.log("Priority Support Access")
          }else{
            console.log("User Access")
          }
        } else{
        console.log("User Access Revoked!")
      }
      
      
    } else{
      console.log("Invalid Role")
    }
}

access(person4)
