function startUp() {

    let donePageLoading = document.readyState; //NOTE! Denna ser till att allt laddats in innan den går vidare.
    //Klickar på knappen med id readMore
    var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    document.getElementById("readMore").dispatchEvent(clickEvent);
}