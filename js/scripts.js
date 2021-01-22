let userNumber = 10;
let count = 0;
const roboger = [];
function beepBoop(number){
  number=number.toString();
  const digits =[];
  digits.push(number.split(""));
  for (element of digits){
    if (element = "3"){
      return "Won't you be my neighbor?";
    }
    else if (element = "2"){
      return "Boop";
    }
    else if (element ="1"){
      return "Beep!";
    }
    else {
      while (count<=number) {
        roboger.push(count);
        count++;
      }
      return roboger.toString();
    }
  }
}

