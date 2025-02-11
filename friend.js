var myScore = 82;
var friendScore = 83;
if (myScore > 80) {
  if (friendScore > 80) {
    console.log("then go for a lunc");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time");
  } else if (friendScore < 60 && friendScore <= 40) {
    console.log("friend's message unseen");
  } else if (friendScore < 40) {
    console.log("block your friend");
  }
} else {
  console.log(" go to home and sleep and act sad");
}
