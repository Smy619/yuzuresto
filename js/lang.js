export function lang(){
  const langBtn = document.querySelectorAll(".lang-btn");
  langBtn.forEach(btn => {
    btn.addEventListener("click",function(e){
      e.preventDefault();
    
  langBtn.forEach(el => el.classList.remove("active"));
    this.classList.add("active");
   });
  });
}
