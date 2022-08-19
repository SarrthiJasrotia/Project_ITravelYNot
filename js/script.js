
let searchInput = null;



let search = document.querySelector('input');
search.addEventListener("keyup", function(e){
    if (e.key === "Enter") {
        alert(e.target.value)
    }
})






//////////////////////////////////////////////////////////////////////////
//////////FUNCTIONS FOR THE DIVS to SHOW UP ON CARD CLICK AND    ////////
////////  CLOSE IF ANOTHER DIV IS ASKED TO BE OPENED BY THE USER////////
///////////////////////////////////////////////////////////////////////

document.getElementById('card1').addEventListener("click", function(){
    document.getElementById("weather").style.display = "block";
    document.getElementById("resturants").style.display = "none";
    document.getElementById("attractions").style.display = "none";
    document.getElementById("hotels").style.display = "none";

})

document.getElementById('card2').addEventListener("click", function(){
    document.getElementById("weather").style.display = "none";
    document.getElementById("resturants").style.display = "none";
    document.getElementById("attractions").style.display = "none";
    document.getElementById("hotels").style.display = "block";

})

document.getElementById('card3').addEventListener("click", function(){
    document.getElementById("weather").style.display = "none";
    document.getElementById("resturants").style.display = "block";
    document.getElementById("attractions").style.display = "none";
    document.getElementById("hotels").style.display = "none";

})


document.getElementById('card4').addEventListener("click", function(){
    document.getElementById("weather").style.display = "none";
    document.getElementById("resturants").style.display = "none";
    document.getElementById("attractions").style.display = "block";
    document.getElementById("hotels").style.display = "none";

})