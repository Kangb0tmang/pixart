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
$color_field.keypress(function(e)
{
  var key = e.which;
  if (key == 13)
  {
    $brush.css("background", $color_field.val()).click();
    return false;
  }
});
