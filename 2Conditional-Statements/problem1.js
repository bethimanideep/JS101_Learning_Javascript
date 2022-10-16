const prompt = require('prompt-sync')();

const name = prompt('provide a number?');
if (name%3==0){
  console.log("multiple of 3")
}
else {
  console.log("not multiple of 3")
}