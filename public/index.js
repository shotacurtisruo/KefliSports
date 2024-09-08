function changeImage(newSrc) {
   let placeHolder = document.getElementById("largeImage")
    placeHolder.src = newSrc;
}





document.getElementById("donate-btn").addEventListener("click", function(){
    console.log("this works bruh");
    window.location.href = "https://account.venmo.com/u/Evan-Feldman-13";
});
let donorName = document.getElementById("donor-name");
//add a star icon next to tthe donors name for each donation make it into  a loop
// also make sure to add as special star for first donation 
