let user1 = { name: "Alice", role: "admin", active: false };

let user2 = { name: "Bob", role: "user", active: true };

function access(user){
    if(user["role"]=="admin"){
      if(user["active"]){
      console.log("Admin Access Granted!")
      } else{
        console.log("Admin Access Revoked!")
      }
    } else if(user["role"]=="user"){
      if(user["active"]){
        console.log("User Access Granted!")
      }else{
        console.log("User Access Revoked!")
      }
    } else{
      console.log("Access Denied")
    } 
}

access(user2)
