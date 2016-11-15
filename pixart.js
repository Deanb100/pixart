


//
// $("p").click(function(){
//     alert("The paragraph was clicked.");
// });
//
// $(".stileone").on("click", function() {
//     $(this).css("background", "red");
// })

$("#set-color").on("click",function(e) {
  // e.prevent.default();
  $('.brush').css("background-color",'#color-field')
});
