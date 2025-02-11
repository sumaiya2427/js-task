var age = 30;
var price = 800;
if (age < 10) {
  console.log("free");
} else if (age >= 18 && age <= 30) {
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 60) {
  const discount = (price * 15) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
// console.log(typeof studentAge);
