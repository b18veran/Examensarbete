/*_____________________________________Byt sida funktioner________________________________*/
function showStart() {
    document.getElementById("start").style.display = "block";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("productsJuice").style.display = "none";
    document.getElementById("productsShot").style.display = "none";
    document.getElementById("productsSmoothie").style.display = "none";
    document.getElementById("productsMilkshake").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }
  function showProductInfo() {
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "block";
    document.getElementById("productsJuice").style.display = "none";
    document.getElementById("productsShot").style.display = "none";
    document.getElementById("productsSmoothie").style.display = "none";
    document.getElementById("productsMilkshake").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }
  function showProductsJuice() {
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("productsJuice").style.display = "block";
    document.getElementById("productsShot").style.display = "none";
    document.getElementById("productsSmoothie").style.display = "none";
    document.getElementById("productsMilkshake").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }
  function showProductsShot() {
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("productsJuice").style.display = "none";
    document.getElementById("productsShot").style.display = "block";
    document.getElementById("productsSmoothie").style.display = "none";
    document.getElementById("productsMilkshake").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }
  function showProductsSmoothie() {
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("productsJuice").style.display = "none";
    document.getElementById("productsShot").style.display = "none";
    document.getElementById("productsSmoothie").style.display = "block";
    document.getElementById("productsMilkshake").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }
  function showProductsMilkshake() {
    document.getElementById("start").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("productsJuice").style.display = "none";
    document.getElementById("productsShot").style.display = "none";
    document.getElementById("productsSmoothie").style.display = "none";
    document.getElementById("productsMilkshake").style.display = "block";
    document.getElementById("cart").style.display = "none";
  }
  function showCart() {
    document.getElementById("cart").style.display = "block";
  }
  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }
  function addsToCart() {
    document.getElementById("cartEmpty").style.display = "none";
    document.getElementById("addsToCart").style.display = "block";
  }
  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }
  /*_____________________________________Historik funktion________________________________*/
  
  function setupHistory() {
    window.onpopstate = function (event) { historyChange(event); };
  }
  
  function historyChange(event) {
    document.getElementById("outputValue").innerHTML += JSON.stringify(event.state);
    if (event.state == "start") {
      showStart();
    } else if (event.state == "productInfo") {
      showProductInfo();
    } else if (event.state == "productsJuice") {
      showProductsJuice();
    } else if (event.state == "productsSmoothie") {
      showProductsSmoothie();
    }else if (event.state == "productsShot") {
      showProductsShot();
    }else if (event.state == "productsMilkshake") {
      showProductsMilkshake();
    }else {
  
    }
  }
  function updateHistory(token) {
    history.pushState(token, "Titel: " + token);
    console.log("sparat historik", token);
  }