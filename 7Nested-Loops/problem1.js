let da;
for(m=1;m<=12;m++){
  if(m==2){
    da=28
  }else if(m==4||m==6||m==9||m==11){
    da=30
  }else{
    da=31
  }for(h=1;h<=da;h++){
    console.log(h+"-"+m)
  }
}