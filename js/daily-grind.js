//alert("can you see this?");



/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that
    rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The
    content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on
    the page for each day of the week.
    All of the above must occur within one page.

    pic = image src 
    alt = an alt tag for the image
    desc - descripption of item
    day - the highlighted day of the week
    color = color to match pic
    name - the name of the coffee

*/

function coffeeTemplate (coffee){
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
</p>
    `;

}


let myDate = new Date ();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

//convert to an integer
myDay = parseInt(myDay);


//console.log(myDay);

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            pic:"images/bubble-tea.jpg",
            alt:"a pic of bubble tea",
            desc:`i like me some bubble tea.`,
            day:"Sunday",
            color:'pink',
            name:"Bubble Tea"
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            pic:"images/cold-brew.jpg",
            alt:"a pic of cold-brew coffee",
            desc:`start your monday off strong with a cup of cold-brew!`,
            day:"Monday",
            color:'violet',
            name:"cold-brew"
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            pic:"images/frappaccino.jpg",
            alt:"a pic of frappaccino",
            desc:`get frapped up on a tuesday!`,
            day:"Tuesday",
            color:'Gold',
            name:"Frappaccino"
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            pic:"images/drip.jpg",
            alt:"a pic of drip coffee",
            desc:`best drip in the nation, right here.`,
            day:"Wednesday",
            color:'brown',
            name:"drip"
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            pic:"images/mocha.jpg",
            alt:"pic of a mocha",
            desc:`who doesn't love a tasty mocha?`,
            day:"Thursday",
            color:'Magenta',
            name:"mocha"
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"pic of a pumpkin spice latte",
            desc:`tis the season, pumpkin spice season!`,
            day:"Friday",
            color:'Orange',
            name:"pumpkin-spice-latte"
        };
    break;
    
    case 6:
        today = "Saturday";
        coffee = {
            pic:"images/caramel-latte.jpg",
            alt:"pic of a carmel latte",
            desc:`you made it to Saturday, now for your reward - a caramel latte!`,
            day:"Saturday",
            color:'turcoise',
            name:"caramel-latte"
        };
    break;

    default:
        today = "Something went wrong!";


}


//let coffeeData = coffeeTemplate(coffee);

//alert(coffeeData);

//Inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//custom color
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);