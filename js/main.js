var form=document.querySelector('.form');
var box=document.querySelector('.box');
var button=document.querySelector('.button');
var hajm=document.querySelector('.hajm');


form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var elinput=(box.value).split(' ');
    box.value=null;
  var max=elinput[0];
      for(var qiymat of elinput) {
         if(qiymat.length>max.length) {
            max=qiymat;
         }
     
      }

  
  hajm.textContent=max;

})