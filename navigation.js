/*_____________________________________Byt sida funktioner________________________________*/
function showStart(){
    document.getElementById("start").style.display = "block";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("products").style.display = "none";
}
function showProductInfo(){
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "block";
    document.getElementById("products").style.display = "none";
}
function showProducts(){
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("products").style.display = "block";
}




/*_____________________________________Historik funktion________________________________*/

function setupHistory(){
  window.onpopstate = function(event) { historyChange(event); };
}

function historyChange(event){
  document.getElementById("outputValue").innerHTML+=JSON.stringify(event.state);
  if(event.state=="start"){
    showStart();
  }else if (event.state=="productInfo") {
    showProductInfo();
  }else if (event.state=="products") {
    showProducts();
  }else{

  }
}
function updateHistory(token){
  history.pushState(token, "Titel: "+token);
  console.log("sparat historik",token);
}