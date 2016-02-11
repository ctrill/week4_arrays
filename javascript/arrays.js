var myThumbDiv = document.getElementById("thumbs");

var imageListA = new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [];
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = [];
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
//hook onto the thumbs div
var thumbsDiv = document.getElementById("thumbs");
//create an output variable
var output = ""; 

output += '</div>' + '<h2>Drawings';
output += '<div class="thumbs_block"> ';//+= adds to whatever the previous output was. USES CSS!
  
for(var i=0; i < imageListA.length; i++)
{
//concatenation assignment operator..
output += '<img src="' + imageListA[i] + '" />';
}
output += '</div>' + '<h2>Oil Paintings';
output += '<div class="thumbs_block"> ';
for(var j=0; j < imageListB.length; j++)
{
//concatenation assignment operator..
output += '<img src="' + imageListB[j] + '" />';
}
output += '</div>' + '<h2>Watercolor Paintings';
output += '<div class="thumbs_block"> ';
for(var k=0; k < imageListC.length; k++)
{
//concatenation assignment operator..
output += '<img src="' + imageListC[k] + '" />';
}
output += '</div>';
thumbsDiv.innerHTML = output;
// thumbsDiv.innerHTML =
// '<img src="' + imageList[0] + '" />' +
// '<img src="' + imageList[1] + '" />' +
// '<img src="' + imageList[2] + '" />' +
// '<img src="' + imageList[3] + '" />' +
// '<img src="' + imageList[4] + '" />'
// ;
}
window.onload = function()
{
buildThumbnails();//use or "fire off" this function
//or invoke the function
};
//create a new array (list) to hold the purchased images
var purchasedImages = [];
//attach a click event to the DIV with id="thumbs"
myThumbDiv.addEventListener("click", onImageClick, false);

//*************************************************************
//false makes it not capture before it bubbles back.
//Useful of this is an event has happened, i'm going through elements, hey prepare for something, this element has been clicked
//on...the click has happened, bubble back up to the top.  Basically, false, means we're just going up...true would have the other
//elements state be checked before this click element is done.
//**************************************************************

//the function handler
function onImageClick(evt)
{
//we only want the src attribute of the image so we need to get the "src" attribute of the image tag we click on
var onlyPath = evt.target.getAttribute("src");

//*******************
//console.log(onlyPath);
//the indexOf array method searchs for a match in the array and if it finds the data, it sends back (or returns) the index position in the array
//**********************

var imageIndex = imageListA.indexOf(onlyPath);
//**************************
//console.log(evt.target); //bring back just the element that gets clicked!!!
//evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg");
//evt.target.setAttribute("style", "display: none");
//console.log(imageIndex);
//get the element you click on OUT of the iamgeListA array and save the clicked iamge path to a variable so we can use it later.
//***********************
var selectedImage = imageListA.splice(imageIndex, 1);
//console.log(selectedImage);

//add this image path to the purchasedImage.array
purchasedImages.push(selectedImage);

//push adds the element to a new array
update_shopping_cart();
buildThumbnails();
}

function update_shopping_cart()
{
//make a shortcut to the div id
var cart = document.getElementById("shopping_cart_div");

//create an output variable so we can buld it up over the following lines
var output = "";
  
//create a for loop
for(var i=0; i <= purchasedImages.length -1; i++)
//console.log(selectedImage[0]);
//use a -1 so the condition is always one less
{
output += '<img src="' + purchasedImages[i] + '" width="70" height="50" />';
}
cart.innerHTML = output;
//send the imageList array to the console for debugging
//console.log(imageList.length)
thumbs.innerHTML = "this used to be the images";
}