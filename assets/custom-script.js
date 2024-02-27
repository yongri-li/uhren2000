document.querySelector(".horizontal-nav:nth-child(2) > .sub:first-child").addEventListener("mousemove",function(){
  document.documentElement.classList.add("nav-hover");
});
document.querySelector(".horizontal-nav:nth-child(2) > .sub:first-child").addEventListener("mouseout",function(){
  document.documentElement.classList.remove("nav-hover");
});