$(function() {
  // $("#portfolio").addClass("active");
  $(".opacityClass").click(function() {
      var modal = document.getElementById(this.parentElement.id + "Modal");
      modal.style.display = "block";

      $(".close").click(function() {
          modal.style.display = "none";
      })

      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  })


  var oldURL = document.referrer;
  if (oldURL.includes("alfeng6.github.io") || oldURL.includes("localhost:8010")) {
    var preloadGif = document.getElementsByClassName("preload")
    var allContent = document.getElementsByClassName("allContent")
    preloadGif[0].style.display = "none"
    allContent[0].style.display = "block"
  } else {
    $(".preload").fadeOut(2000, function() {
        $(".allContent").fadeIn(1000);
    });
  }


});
