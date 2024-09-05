function changeImage(newSrc) {
   let placeHolder = document.getElementById("largeImage")
    placeHolder.src = newSrc;
}





document.getElementById("donate-btn").addEventListener("click", function(){
    window.location.href = "https://account.venmo.com/u/Evan-Feldman-13";
});