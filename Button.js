var toggleBtn = document.getElementById('toggleBtn');
var openCloseBtn = document.getElementById('open-close');

document.getElementById("control").addEventListener("click", function(e) {

  toggleBtn.classList.toggle('closedBtn');
  
  if (toggleBtn.classList.contains('closedBtn'))
    openCloseBtn.innerHTML = '&#10010;';
  else
    openCloseBtn.innerHTML = '&#10006;';
    
});
