function showNext(imageToHide, imageToShow) {
    console.log("shownext: ", imageToHide, imageToShow);
    if (imageToHide) {
        document.querySelector(imageToHide).style.display = "none";
    }
    if (imageToShow) {
        document.querySelector(imageToShow).style.display = "inline";
    }
}
