let x = 1;
sum=0
count=0
while(x<=100){
  if (x%2==0){
    sum=sum+x
    count++
  }
  x++
}
av=sum/count
console.log("avg value is",av)