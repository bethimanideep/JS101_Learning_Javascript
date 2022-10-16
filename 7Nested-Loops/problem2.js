for(j=1;j<=50;j++){
  c=0
  for(i=1;i<=j;i++){
    if(j%i==0){
      c++
    }
  }
  if(c==2){
    console.log(j, "is a prime")
  }else(
    console.log(j,"is not prime")
  )
}