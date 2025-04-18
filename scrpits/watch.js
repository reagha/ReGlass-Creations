const pln=document.querySelector(".gve");
const wed=document.querySelector(".hve");
const door=document.querySelector(".me");
const wd=document.querySelector(".he");

let  nam= function (){
  pln.style.display="none";
  wed.style.display="block";

}

let  game= function (){
  wed.style.display="none";
  pln.style.display="block";

}

let  time= function (){
  door.style.display="none";
  wd.style.display="block";

}

let  fire= function (){
  wd.style.display="none";
  door.style.display="block";

}
