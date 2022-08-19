
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


//makes the weather content show while hiding the other tabs
$("#card1").click(function(){
    $("#weather").show();
    $("#resturants").hide();
    $("#attractions").hide();
    $("#hotels").hide();
    $("#exit").show();
})

//makes the hotels content show while hiding the other tabs
$("#card2").click(function(){
    $("#weather").hide();
    $("#resturants").hide();
    $("#attractions").hide();
    $("#hotels").show();
    $("#exit").show();
})

//makes the resturants content show while hiding the other tabs
$("#card3").click(function(){
    $("#weather").hide();
    $("#resturants").show();
    $("#attractions").hide();
    $("#hotels").hide();
    $("#exit").show();
})

//makes the attractions content show while hiding the other tabs
$("#card4").click(function(){
    $("#weather").hide();
    $("#resturants").hide();
    $("#attractions").show();
    $("#hotels").hide();
    $("#exit").show();
})


//////////////////////////////////////////////////////////////////
////Function to make the close content button close the div//////
////////////////////////////////////////////////////////////////

$("#exit").click(function(){
    $("#weather").hide();
    $("#resturants").hide();
    $("#attractions").hide();
    $("#hotels").hide();
    $("#exit").hide();
})

