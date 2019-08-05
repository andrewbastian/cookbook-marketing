# Secret Family Recipes Cookbook

index.html: this page uses the less files for its style. The script for the nav is in index.js. -needs async.

-.body wraps the whole page. Line-height, font-family, and color is set here. It is also used for margins @ 500px.

-.navBox wraps the whole top nav bar and ends before the .navbtn. .navBox centers the text. Adds padding and margin. @500px it changes the top margin.

-#myNav is the id used for DOM function

-.overlay aligns content inside of the nav and sets the background of the nav bar.

-A .closebtn uses JS:void(0) to keep the page from refreshing. This is the close btn for the navbar. It uses inline JS (bad practice). This could be changed by adding an ID to the close and open buttons.
-.overlay-content sets the position and some other styling of the link to the about.html.

h1Mission aligns the h1 and p tag bellow.

.midPageTxt styles the h2

.artsBox holds all of the articles below. It is used for alignment.

.photoBox holds the img, h3, and p tags. This class is used 3times bellow.

.btn-center holds the button and link to our app. The button is styled using a mixin.

.fullImgTxt holds the image and text that lays over the image.

<footer> has social media links that are styled using font awesome.


About.html:

This  page uses vanilla CSS and the JS functions are written at the bottom of the HTML.

This page works much the same way that the homepage does. The image/text overlay that was at the bottom of the homepage has been moved to the top of the about page with the img and copy changed.

The big difference in the about page is the .sidenav for the team profiles. There is only one sidebar for the page. The <p> in this sidebar has the id #biotext. This ID is used to collect the values for the variable profileData.


JS for Sidebar:

Each of the “.profilebtn”s that follow are made into an array at the start of the script for this part of the page. Now each profile can be referenced.
The Var “sidebar is set to the id “#mySidenav.
The Var “mains” array is used to move all of the profile buttons to the left of the page when the sidebar is activated by a click event.
Var “profileData” is used to store the values used on the “#biotext”

Our anonymous function iterates over each .profile and  creates a function to apply to each profile. Then an event listener is added to every profile. The event the listener is looking for is a “click”. When the event listener is triggered on one of the profile elements, #biotext uses the “innerText” to set itself equal to profileData for the corresponding profile.id.
The click event also triggers the sidebar width to move in 250px and all of the other profile btns to move to the right 250px.

The close function we create  2 array variables for the classes .closeX and .sidenav, the array variables are from an old function before this was changed to just go over one side bar. The page still works, but this could be changed to just call for the ID like the nav at the top of the page.
