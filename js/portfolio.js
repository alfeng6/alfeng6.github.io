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
});
