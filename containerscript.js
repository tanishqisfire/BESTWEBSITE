document.getElementById("cool").addEventListener("click", coolthingy);

   function coolthingy() {
    setTimeout(function() {
   document.getElementById("thingy").style.color = "yellow";}, 1000);

    setTimeout(function() {

   document.getElementById("lowerthingy").style.color = "orange";}, 2000);

    }
    