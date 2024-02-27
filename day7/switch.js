let date = new Date();

let day = date.getDay();

switch (day) {
  case 0:
    console.log("Today is sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wed");
    break;
  case 4:
    console.log("Today is Thu");
    break;
  case 5:
    console.log("Today is Fri");
    break;
  default:
    console.log("Today is Sat");
}
