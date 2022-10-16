const prompt=require('prompt-sync')();
const a=prompt('A value?: ');
const promp=require('prompt-sync')();
const b=promp('B value?: ');
if (a==b){
  console.log('both equal')
}
if (a>b){
  console.log('a is greater')
}
if (a<b){
  console.log('b is greater')
}