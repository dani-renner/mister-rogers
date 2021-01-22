let userNumber = 10;
let count = 0;
const roboger = [];
function beepBoop(number){
  number=number.toString();
  const digits =[];
  digits.push(number.split(""));
  
  while (count<=number) {
    roboger.push(count);
    count++;
  };
return roboger.toString();
}

