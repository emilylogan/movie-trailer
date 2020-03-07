console.log('OK');

// Initialize Plyr player
const player = new Plyr( '#player', {
  
  // Turn on/off conrols  
  controls : [ 'play', 'current-time', 'progress' ],
  
  // Turn    
  keyboard : { focused: true, global: true },
  
  seekTime : 15

});

// Read More/ Read Less JS from: https://www.w3schools.com/howto/howto_js_read_more.asp

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//Walle & Eve
gsap.fromTo( "#Eve3", {
  x: 0,
  y: 0,
}, {
  x: 200,
  y: 0,
  repeat: -1,
  duration: 5,
 // delay: 3
  });