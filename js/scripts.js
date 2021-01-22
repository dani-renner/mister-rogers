let userNumber = 10;
let count = 0;
const roboger = [];
function beepBoop(){
  while (count<=userNumber) {
    roboger.push(count);
    count++;
  };
return roboger.toString();
}

