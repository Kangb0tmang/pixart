console.log('PIxart');
// Set Color
var $brush = $('.brush');
var $color_field = $('#color-field');
var $set_color = $('#set-color');

// $set_color.on('click', function(e)
// {
//   e.preventDefault();
//   $brush.css("background", $color_field.val());
// });

// Set Color on 'Enter key'
// $color_field.keypress(function(e)
// {
//   var key = e.which;
//   if (key == 13)
//   {
//     $brush.css("background", $color_field.val()).click();
//     return false;
//   }
// });

// Append 1000 divs (a bit excessive, but ok...)
$(document).ready(function()
{
  for (var i = 0; i <= 1000; i++)
  {
    var div = document.createElement('div');
    $(div).addClass('square');
    $('body').append(div);
  }
});
