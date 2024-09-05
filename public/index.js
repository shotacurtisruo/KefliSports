function changeImage(newSrc) {
   let placeHolder = document.getElementById("largeImage")
    placeHolder.src = newSrc;
}





document.getElementById("donate-btn").addEventListener("click", function(){
    console.log("this works bruh");
    window.location.href = "https://account.venmo.com/u/Evan-Feldman-13";
});