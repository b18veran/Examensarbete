var startTime = new Date().getTime();
var counter = parseInt(localStorage.getItem("Counter", 0));

function startUp() {
     /* Om det är första gången det startas sätts start värdet till 0 och med,
     ett ',' efter för tydlighet. */
    if (localStorage.getItem("Page Loading") == null) {
        localStorage.setItem("Page Loading", 0 + ",\n");
    }
    // Om countern är null sätts den till 0. 
    if (localStorage.getItem("Counter") == null) {
        localStorage.setItem("Counter", 0);
    }
    // Ser till att den itereras endast 5 gånger.
    if (counter <= 4) {
        var endTime = new Date().getTime();
        var theTime = endTime - startTime;
        endTime = localStorage.setItem("Tid", JSON.stringify(theTime)); 
        counter++;
        logo();
        localStorage.getItem(startTime);
        var delta = localStorage.getItem("Page Loading");
        var measureDiff = theTime;
        delta += measureDiff + "\n";
        localStorage.setItem("Page Loading", delta);
    }
}
function logo() {
    let donePageLoading = document.readyState; //NOTE! Denna ser till att allt laddats in innan den går vidare.
    //Klickar på knappen med id logo
    var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    document.getElementById("logo").dispatchEvent(clickEvent);
    localStorage.setItem('Counter', counter);
}
