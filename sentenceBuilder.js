let sentenceBuilder = {

subject: "I",

verb: "am",

object: "coding",

buildSentence: function() {

let s=this.subject
let v=this.verb
let o=this.object

if(s=="" || v=="" || o=="" || s==undefined || v==undefined || o==undefined){
  console.log("Incomplete sentence")
} else{
  console.log(`${s} ${v} ${o}`)
}


},

updateProperty: function(property, value) {
  
  sentenceBuilder[property]?sentenceBuilder[property]=value:console.log("Invalid property")
  

} 
  
}

sentenceBuilder.updateProperty("verb","am learning")
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("mood", "happy");
