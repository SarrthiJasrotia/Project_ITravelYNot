

//////////////////////////////////////////////////////////////////
///TAKES THE INPUT AND ON PRESS OF ENTER PUSHES TO THE FUNCTIONS///
///////////////////////////////////////////////////////////////////

let search = document.getElementById('ask-input');
let hotelDiv = document.getElementById("hotels");
let resturantDiv = document.getElementById("resturants");
let entertainmentDiv = document.getElementById("entertainment")
search.addEventListener("keyup", function (e) {

  if (e.key === "Enter") {
    $("#cardContainer").show()
    searchInput = e.target.value
    submit()
    testA()

    hotelDiv.innerHTML = '';
    resturantDiv.innerHTML = '';
    entertainmentDiv.innerHTML = '';
    HotelFsqID =[];
    
  }
});
/////////////////////////////////////////////////////////////////
//ARRAYS AND CONSTANTS FOR API DATA TO PUSHED AND PULLED FROM ///
/////////////////////////////////////////////////////////////////

let searchInput = null;




///////////////////////////////////////////////////////////////////////
//////////FUNCTIONS FOR THE DIVS to SHOW UP ON CARD CLICK AND    //////
////////  CLOSE IF ANOTHER DIV IS ASKED TO BE OPENED BY THE USER///////
///////////////////////////////////////////////////////////////////////

//makes the weather content show while hiding the other tabs
$("#card1").click(function () {
  $("#weather").show();
  $("#resturants").hide();
  $("#entertainment").hide();
  $("#hotels").hide();
  $("#exit").show();
  
})

//makes the hotels content show while hiding the other tabs
$("#card2").click(function () {
  $("#weather").hide();
  $("#resturants").hide();
  $("#entertainment").hide();
  $("#hotels").show();
  $("#exit").show();
  
})

//makes the resturants content show while hiding the other tabs
$("#card3").click(function () {
  $("#weather").hide();
  $("#resturants").show();
  $("#entertainment").hide();
  $("#hotels").hide();
  $("#exit").show();
})

//makes the attractions content show while hiding the other tabs
$("#card4").click(function () {
  $("#weather").hide();
  $("#resturants").hide();
  $("#entertainment").show();
  $("#hotels").hide();
  $("#exit").show();
})


////////////////////////////////////////////////////////////////
////Function to make the close content button close the div/////
////////////////////////////////////////////////////////////////

$("#exit").click(function () {
  $("#weather").hide();
  $("#resturants").hide();
  $("#entertainment").hide();
  $("#hotels").hide();
  $("#exit").hide();
})

////////////////////////////////////////////////////////
//////////////////// API STUFF /////////////////////////
////////////////////////////////////////////////////////

//weather api constants
let $temp = $("#temp");
let $description = $("#wDescription");
let $winds = $("#winds")
let $humid = $("#humid")
let $feelsLike = $("#feelsLike")
let $location = $("#wLocation")
let $date =$("#wDate")



//weather api data pull functions
function renderForecast(forecastData) {
  
  let icon = (forecastData.list[0].weather[0].icon)
  let weatherIcon  = document.getElementById('weatherIcon')
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
  $temp.text(forecastData.list[0].main.temp + "°F")
  $description.text(forecastData.list[0].weather[0].description)
  $winds.text("Wind-speed: " + forecastData.list[0].wind.speed)
  $humid.text("Humidity: " + forecastData.list[0].main.humidity)
  $feelsLike.text("Feels like: "+ forecastData.list[0].main.feels_like+"°F")
  $date.text("Date/Time: "+forecastData.list[0].dt_txt)
  $location.text("Location: "+forecastData.city.name+", "+forecastData.city.country)
}


//foursquare places api constants and function



/////////////////////////////////////////////////////////////////////////////////////////////
////TAKES THE INPUT FROM THE USER AND PULLS lodging OPTIONS AND THEIR ADDRESS FROM THE API //
//// AND CREATES DIVS BASED ON HOW MANY RESULTS AND PUTS THE DATA IN THEM      //////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function renderLodging(lodgingSearch) {

  for (let i = 0; i < lodgingSearch.results.length; i++) {

    function makeDiv() {

      const mainContainer = document.getElementById("hotels")
      const newDiv = document.createElement("div")
      const HImageDiv = document.createElement("div")
      HImageDiv.setAttribute("class","HImageDiv")
      const contentDiv = document.createElement("div")
      newDiv.setAttribute("class", "holder")
      const headingDiv = document.createElement('h1')
      headingDiv.setAttribute("class", "lodgeHeading")
      const contentList = document.createElement("p")
      const img = document.createElement("img")
      img.src = "HotelIcon.png"


      mainContainer.appendChild(newDiv)
      newDiv.appendChild(HImageDiv)
      newDiv.appendChild(contentDiv)
      contentDiv.appendChild(headingDiv)
      contentDiv.appendChild(contentList)
      HImageDiv.appendChild(img)
      let $placeName = (lodgingSearch.results[i].name)
      let $address = (lodgingSearch.results[i].location.formatted_address)
      let $area = (lodgingSearch.results[i].location.neighborhood)
      let $fsqID = (lodgingSearch.results[i].fsq_id)


      HotelFsqID.push($fsqID)

      headingDiv.innerHTML = ($placeName)
      contentList.innerHTML = (`ADDRESS: ${$address}` + "<br>" + `AREA: near ${$area}`)

    };
    makeDiv()


  }

};

/////////////////////////////////////////////////////////////////////////////////////////////
////TAKES THE INPUT FROM THE USER AND PULLS resturant OPTIONS AND THEIR ADDRESS FROM THE API //
//// AND CREATES DIVS BASED ON HOW MANY RESULTS AND PUTS THE DATA IN THEM      //////////////
/////////////////////////////////////////////////////////////////////////////////////////////
function renderResturants(resturantsSearch) {

  for (let i = 0; i < resturantsSearch.results.length; i++) {

    function makeDiv() {

      const mainContainer = document.getElementById("resturants")
      const newDiv = document.createElement("div")
      const RImageDiv = document.createElement("div")
      RImageDiv.setAttribute("class","RImageDiv")
      const contentDiv = document.createElement("div")
      newDiv.setAttribute("class", "holder")
      const headingDiv = document.createElement('h1')
      headingDiv.setAttribute("class", "lodgeHeading")
      const contentList = document.createElement("p")
      const img = document.createElement("img")
      img.src = "restaurantIcon.png"


      mainContainer.appendChild(newDiv)
      newDiv.appendChild(RImageDiv)
      newDiv.appendChild(contentDiv)
      contentDiv.appendChild(headingDiv)
      contentDiv.appendChild(contentList)
      RImageDiv.appendChild(img)

      let $placeName = (resturantsSearch.results[i].name)
      let $address = (resturantsSearch.results[i].location.formatted_address)
      let $area = (resturantsSearch.results[i].location.neighborhood)
      let $fsqID = (resturantsSearch.results[i].fsq_id)


     ResturantFsqID .push($fsqID)

      headingDiv.innerHTML = ($placeName)
      contentList.innerHTML = (`ADDRESS: ${$address}` + "<br>" + `AREA: near ${$area}`)

    };
    makeDiv()


  }

};


//////////////////////////////////////////////////////////////////////////////////////////////////
////TAKES THE INPUT FROM THE USER AND PULLS entertainment OPTIONS AND THEIR ADDRESS FROM THE API /
//// AND CREATES DIVS BASED ON HOW MANY RESULTS AND PUTS THE DATA IN THEM      ///////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function renderEntertainment(entertainmentSearch) {

  for (let i = 0; i < entertainmentSearch.results.length; i++) {

    function makeDiv() {

      const mainContainer = document.getElementById("entertainment")
      const newDiv = document.createElement("div")
      const EImageDiv = document.createElement("div")
      EImageDiv.setAttribute("class","EImageDiv")
      const contentDiv = document.createElement("div")
      newDiv.setAttribute("class", "holder")
      const headingDiv = document.createElement('h1')
      headingDiv.setAttribute("class", "lodgeHeading")
      const contentList = document.createElement("p")
      const img = document.createElement("img")
      img.src = "ticket.png"


      mainContainer.appendChild(newDiv)
      newDiv.appendChild(EImageDiv)
      newDiv.appendChild(contentDiv)
      contentDiv.appendChild(headingDiv)
      contentDiv.appendChild(contentList)
      EImageDiv.appendChild(img)

      let $placeName = (entertainmentSearch.results[i].name)
      let $address = (entertainmentSearch.results[i].location.formatted_address)
      let $area = (entertainmentSearch.results[i].location.neighborhood)
      let $fsqID = (entertainmentSearch.results[i].fsq_id)


      EntertainmentFsqID.push($fsqID)

      headingDiv.innerHTML = ($placeName)
      contentList.innerHTML = (`ADDRESS: ${$address}` + "<br>" + `AREA: near ${$area}`)

    };
    makeDiv()


  }

};



//FOURSQUARE PHOTOS API FUNCTIONS AND CONSTANT

function submit() {

  /////////////// OPENWEATHERMAP API//////////////////
  const apiURL =
    `http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=12aabd14ed21e79a7e16a28c625739e7&units=imperial`;
  console.log("weather results = " + apiURL)
  $.ajax({
    url: apiURL
  }).then(
    (forecastData) => {
      renderForecast(forecastData)

    },
    error => {
      console.log("bad request", error);
    }
  );

  //////// FOURSQUARE PLACES SEARCH API for lodging///////////
  $.ajax({
    async: true,
    crossDomain: true,
    url: `https://api.foursquare.com/v3/places/search?categories=19009&near=${searchInput}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3leczGJ0j3aTZkQ+Nk6SxGDfYxO+9D7JkB+vE0q4rW3c='
    }
  }).then(
    (lodgingSearch) => {
      renderLodging(lodgingSearch)

    },
    error2 => {
      console.log("it didnt work", error2)

    }
  );

  //////// FOURSQUARE PLACES SEARCH API for resturants///////////

  $.ajax({
    async: true,
    crossDomain: true,
    url: `https://api.foursquare.com/v3/places/search?categories=13065&near=${searchInput}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3leczGJ0j3aTZkQ+Nk6SxGDfYxO+9D7JkB+vE0q4rW3c='
    }
  }).then(
    (resturantsSearch) => {
      renderResturants(resturantsSearch)

    },
    error3 => {
      console.log("it didnt work", error3)

    }
  );

//////// FOURSQUARE PLACES SEARCH API for entertainment///////////

  $.ajax({
    async: true,
    crossDomain: true,
    url: `https://api.foursquare.com/v3/places/search?categories=10000&near=${searchInput}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3leczGJ0j3aTZkQ+Nk6SxGDfYxO+9D7JkB+vE0q4rW3c='
    }
  }).then(
    (entertainmentSearch) => {
      renderEntertainment(entertainmentSearch)

    },
    error4 => {
      console.log("it didnt work", error4)

    }
  );
}


//////// FOURSQUARE PHOTOS API ////////////////////
let combinedUrl = null;
let picNo = null;
let HotelFsqID = [];
let ResturantFsqID = [];
let EntertainmentFsqID = [];
function testA() {

  console.log("the fsq ids " + HotelFsqID)
  var i = 0;                 
function photoUrl() {         
  setTimeout(function() {   

    $.ajax({
      async: true,
      crossDomain: true,
      url: `https://api.foursquare.com/v3/places/${HotelFsqID[i]}/photos?sort=NEWEST&classifications=outdoor%2Cindoor`,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3NIv2q1lvpmrzH4jYCQBTdVfl4bc7dtrTHR5bdTIu6Ms='
      }
    }).then(
      (photosSearchH) => {
        renderPhotosH(photosSearchH)
  
      },
      error => {
        console.log("photos didnt work", error)
  
      }
    );
    
    picNo = i
    console.log(i);
    
    
    i++;                    
    if (i < HotelFsqID.length) {           
      photoUrl();             
    }                       
  }, 500)
}

photoUrl();    
///////////////////////////////////////////////////////////
var r = 0;                 
function photoUrlR() {         
  setTimeout(function() {   

    $.ajax({
      async: true,
      crossDomain: true,
      url: `https://api.foursquare.com/v3/places/${ResturantFsqID[r]}/photos?sort=NEWEST&classifications=food%2Cmenu`,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3NIv2q1lvpmrzH4jYCQBTdVfl4bc7dtrTHR5bdTIu6Ms='
      }
    }).then(
      (photosSearchR) => {
        renderPhotosR(photosSearchR)
    
      },
      error => {
        console.log("photos didnt work", error)
    
      }
    );
    
    
    r++;                    
    if (r < ResturantFsqID.length) {           
      photoUrlR();             
    }                       
  }, 500)
}

photoUrlR();    
/////////////////////////////////////////////////////////////////
var ent = 0;                 
function photoUrlE() {         
  setTimeout(function() {   

    $.ajax({
      async: true,
      crossDomain: true,
      url: `https://api.foursquare.com/v3/places/${EntertainmentFsqID[ent]}/photos?sort=NEWEST&classifications=outdoor%2Cindoor`,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3NIv2q1lvpmrzH4jYCQBTdVfl4bc7dtrTHR5bdTIu6Ms='
      }
    }).then(
      (photosSearchE) => {
        renderPhotosE(photosSearchE)
    
      },
      error => {
        console.log("photos didnt work", error)
    
      }
    );
    ent++;                    
    if (ent < EntertainmentFsqID.length) {           
      photoUrlE();             
    }                       
  }, 500)
}

photoUrlE();    

}




///////////////////////////////////////////////////////////





    
    function renderPhotosH(photosSearchH) {
      let combinedUrl = (photosSearchH[1].prefix   + '300x300' + photosSearchH[1].suffix)
      let testC = document.getElementById("hotels");
      let imgTag = document.createElement("img");
      imgTag.src = combinedUrl
      testC.appendChild(imgTag)
      
    }
    function renderPhotosR(photosSearchR) {
      let combinedUrl = (photosSearchR[1].prefix   + '300x300' + photosSearchR[1].suffix)
      let testC = document.getElementById("resturants");
      let imgTag = document.createElement("img");
      imgTag.src = combinedUrl
      testC.appendChild(imgTag)
      
    }

    function renderPhotosE(photosSearchE) {
      let combinedUrl = (photosSearchE[1].prefix   + '300x300' + photosSearchE[1].suffix)
      let testC = document.getElementById("entertainment");
      let imgTag = document.createElement("img");
      imgTag.src = combinedUrl
      testC.appendChild(imgTag)
      
    }




///////////////////////////////////////////


//4bc3321adce4eee1287c719d,4eaf21a68b81d80bd7a1922b,4af2f201f964a52056e921e3,4b0679d2f964a52027ec22e3,4ae73132f964a52045a921e3,4b31855bf964a520630825e3,4ae8f5e8f964a520b5b321e3,4d73f2df9a296ea8cf424fa9,4a6e9885f964a520edd41fe3,4b4d1aeaf964a52027cb26e3

  //"fsq_id": "4bc3321adce4eee1287c719d",
  // 4b7085c2f964a520af1f2de3
  // 4bd5c2b99649ce722da1511d


  // fsq3MCnwDwY4yhkQdx3SrPE9HNMgwrp1eJ1Wvz/FePWbGS0=




// // for (let i = 0; i < HotelFsqID.length; i++) {
    
//   const options = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       Authorization: 'fsq3MCnwDwY4yhkQdx3SrPE9HNMgwrp1eJ1Wvz/FePWbGS0='
//     }
//   };
//   let dataPhotos = async ()=>{
//     try{
//     let res = await fetch(`https://api.foursquare.com/v3/places/${HotelFsqID[i]}/photos?sort=NEWEST&classifications=outdoor`, options)
//     let res2 = await res.json()
//     console.log(res2) 
//   }
//     catch (err){
//       console.error(err)
//     }
   
//   }
 
//   dataPhotos()
  
    
// }