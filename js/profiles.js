//array of dom elements
        var profiles = Array.from(document.getElementsByClassName('profilebtn'));
//
        // let sidenavs = Array.from(document.getElementsByClassName('sidenav'));
//
        var sidebar = document.getElementById('mySidenav');
        let mains = Array.from(document.getElementsByClassName('mains'));
//
        // let order = 1;
        var profileData = {"andrew": "I'm Andrew. Ejoyed this 1st build week a lot. It has been satifying to dig into a bigger project.",
        "barbara": "Hey there, I'm Barbara. I am a student studying Full Stack Web Development at Lambda School. Our team created this landing page and the Secret Family Recipes Cookbook app.",
        "juan" : 'Juan has worked as a skydive instructor and is at Lambda because he can do it from home',
        "spencer" : 'Grew up in Blaine WA and is at Lambda because of the no upfront cost'};
//      interating over profile pictures and creating a function and applying it to each profile using an anon function
        profiles.forEach((profile, i) => {
//adding an event addEventListener to every picture. when there is a click addEventListener calls your function "event" - (object with some data about event)
          profile.addEventListener('click', (event) => {
//
document.getElementById('biotext').innerText = profileData[profile.id];
//sidenav = array "i" indexes into array
            sidebar.style.width = "250px";
//incrementing by 1 and setting new zindex
            // sidenavs[i].style.zIndex = order++;
//moves all profile pictures over. anon function, arg = element, changes margin left.
            mains.forEach(element => element.style.marginLeft = "250px")
          })
        })


        var ex = Array.from(document.getElementsByClassName("closeX"));
        let sidenav = Array.from(document.getElementsByClassName('sidenav'));
        // let main = Array.from(document.getElementsByClassName('mains'));

        ex.forEach((x, i) => {
          x.addEventListener('click', (event) => {
            sidenav[i].style.width = "0";
            // sidenav[i].style.zIndex = order++;
            mains.forEach(element => element.style.marginLeft = "0")
          })
        })
