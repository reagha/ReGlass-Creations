
const bin=document.querySelector(".like");
const din=document.querySelector(".like2");
const ein=document.querySelector(".like3");
const fin=document.querySelector(".like4");
const gin=document.querySelector(".like5");
let cin=true;
let hin=true;
let iin=true;
let jin=true;
let kin=true;


let tiles= function(){
if(cin){
  bin.style.display="block";
  cin=false;
}
else{
  bin.style.display="none";
  cin=true;
}


}

let a= function(){
if(hin){
  din.style.display="block";
  hin=false;
}
else{
  din.style.display="none";
  hin=true;
}


}

let b= function(){
if(iin){
  ein.style.display="block";
  iin=false;
}
else{
  ein.style.display="none";
  iin=true;
}


}

let c= function(){
if(jin){
  fin.style.display="block";
  jin=false;
}
else{
  fin.style.display="none";
  jin=true;
}


}

let d= function(){
if(kin){
  gin.style.display="block";
  kin=false;
}
else{
  gin.style.display="none";
  kin=true;
}


}
