
question = prompt("Tu veux parler de quoi ?");

if (question === ""){
  console.log("T'es en PLS ?")
} 

else if (question.toLocaleLowerCase().includes("fortnite")) {
  console.log("On s' fait une partie soum-soum ?")
}

else if (question == question.toUpperCase()){
  console.log("Pwa calme toi !")
}

else if (question.endsWith("?")) {
  console.log("Ouais Ouais...")
}

else {
  console.log("balek")
}