let s="this is javascript"
count=0
for(let i=0;i<s.length;i++){
  if(s[i]==" "){
    count++
  }
}
if(s.length==0){
  console.log("0")
}else{
  console.log(count+1)
}