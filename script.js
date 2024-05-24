
document.getElementById("userform").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(document.getElementById("userform"));
 
  window.location.href = "output.html?" + new URLSearchParams(formData).toString();
  
  

  
});
