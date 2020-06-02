var numberinput = prompt("write a number", "");
const oddnumber = 2 * numberinput - 1;
let stars = "";
for (i = 0; i < oddnumber; i++) {
  stars = stars + "*";
  if (stars.length % 2) {
    console.log(stars);
  }
}
