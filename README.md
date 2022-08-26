# PROJECT "ITravelYNot":
[ITravelYNot.com](https://itravelynot.com/) is a website that provides general travel information such as weather, nearby lodging, eating and entertainment options based of the the destination input by the user.

## BUILD STATUS:
This is a project I plan on to keep updating with better features as my coding skills develop more and more. 
At the moment the site is fully function with all the basic features such as providing the weather, name of nearby places and their addresses. 
#### IN-PROGRESS
Right now I am working on making the results also include pictures of the places provided as results. Pictures are already being displayed, just arent positioned in the right areas yet.
#### BUGS 
* The weather api doesnt work on some occasions due to the json being returned on non http (only if the site is deployed, doesnt occur if the code is being used in ide), probally could be fixed by using a differnt api for weather
* The background video glitches/stutters on load(only on the deployed website, doesnt occur if using the code through a ide/locally), most like caused due the bandwidth restrictions from the platform the site is being hosted on

## SCREENSHOTS:
### screenshot#1 is how the site look on load
![image](https://user-images.githubusercontent.com/60264331/186812872-de551d75-e80f-41ed-941b-0058a8c3f266.png)
### screenshot#2 are options provided by the site once the user has entered the destination name
![image](https://user-images.githubusercontent.com/60264331/186813536-d60509ed-7284-4b43-9d3e-a62daa277ccf.png)
### screenshot#3 is an example of the info the weather tab provides when clicked
![image](https://user-images.githubusercontent.com/60264331/186813578-ec786004-5489-439c-96d8-1af7feba8bbe.png)
### screenshot#4 is an example of the results provided for the nearby lodging options
![image](https://user-images.githubusercontent.com/60264331/186813650-466ea308-0263-41c0-bd40-74adee0fbd45.png)

## LANGUAGES/TECH USED:
* Javascript
* JQuery
* CSS
* HTML
* multiple APIs(names and links provided below)
## API REFERENCES
* For the weather info: OPENWEATHERMAP.ORG (https://openweathermap.org/)
* For the nearby Places Search info: FOURSQUARE PLACES SEARCH API (https://developer.foursquare.com/docs/places-api-overview)
* For the Photos of the places: FOURSQUARE PLACES PHOTO SEARCH API (https://developer.foursquare.com/reference/place-photos)




