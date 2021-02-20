
function Increase (param) {
   var button = document.getElementById(param).value
   if(button==15){
      button=15
      alert('You can buy maximum 15 form 1 product')
   }
   document.getElementById(param).value= ++button
   
}
function Decrease (param){
      var button = document.getElementById(param).value
      if(button==1){
         button=2
      }
      document.getElementById(param).value = --button
}