let userNumber = 10;
let count = 0;
const roboger = [];
function beepBoop(input){
  for(i = 0; i <= input; i++) {
    let iString = i.toString();
    const digits = iString.split("");
    let has1 = false;
    let has2 = false;
    let has3 = false;
    for (element of digits) {
      if (element === "3"){
        has3 = true;
      }
      else if (element === "2"){
        has2 = true;
      }
      else if (element === "1"){
      has1 = true;
      }
    } //end of for of loop
    if (has3){
      roboger.push("Won't you be my neighbor?");
    }
    else if (has2){
      roboger.push("Boop!");
    }
    else if (has1){ 
      roboger.push("Beep!");
    }
    else{
      roboger.push(i);
    } 
  }
  //end of for i loop
  return roboger.toString();
}


