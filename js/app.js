/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var divRating1 = document.getElementById("rating1");
divRating1.innerHTML = "Rating: 5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Address: 525 Kapahulu Ave, Honolulu, HI 96815*/

var divPrice2 = document.getElementById("price2");
divPrice2.innerHTML = "Price: $$$";

var divAddy2 = document.getElementById("addy2");
divAddy2.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura	
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var divHours3 = document.createElement("div");
divHours3.id = "hours3";
divHours3.innerHTML = "Hours: 6pm - 12am Sun - Sat";
document.getElementById("text3").appendChild(divHours3);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$*/

var divPrice4 = document.createElement("div");
divPrice4.id = "price4";
divPrice4.innerHTML = "Price: $$$";

/*Append this element to the div with the id of 
"text4"*/

document.getElementById("text4").appendChild(divPrice4);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var divAddy4 = document.createElement("div");
divAddy4.id = "addy4";
divAddy4.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
document.getElementById("text4").appendChild(divAddy4);


/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var divHours4 = document.createElement("div");
divHours4.id = "hours4";
divHours4.innerHTML = "Hours: 9am - 10pm Sun - Sat";
document.getElementById("text4").appendChild(divHours4);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var pUpdate4 = document.createElement("p");
pUpdate4.id = "update4";
pUpdate4.innerHTML = "I'd leave a blank space for this oxtail soup!";
document.getElementById("comment4").appendChild(pUpdate4);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

