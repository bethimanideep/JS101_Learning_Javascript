const actualusername="bethimanideep@gmail.com"
const actualpassword="manideep"
const prompt=require('prompt-sync')();
const a=prompt('username?: ');
const promp=require('prompt-sync')();
const b=promp('password?: ');
if (actualusername==a && actualpassword==b){
  console.log('YOU CAN LOGIN')
}
else {
  console.log('YOU CANNOT LOGIN')
}