const prompt = require('prompt-sync')();
const age = prompt('what is your age: ');
if (age >= 18) {
  console.log("Apply for license")
}
else {
  console.log("NA")
}