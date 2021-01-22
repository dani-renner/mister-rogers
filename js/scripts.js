let userNumber = 10;
let count = 0;
const roboger = [];
function beepBoop(userNumber){
  number=userNumber.toString();
  const digits =[];
  digits.push(number.split(""));
  digits.forEach(function(element){
      if (element==="3"){
        roboger.push("Won't you be my neighbor?");
      }
      else if (element==="2"){
        roboger.push("Boop");
      }
      else if (element==="1"){
        roboger.push("Beep!");
      }
      else {
        roboger.push(count);
      }
      count++;
    });
  return roboger.toString();
}

