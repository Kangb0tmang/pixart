console.log('PIxart');
// Set Color
var $brush = $('.brush');
var $color_field = $('#color-field');
var $set_color = $('#set-color');

$set_color.on('click', function(e)
{
  e.preventDefault();
  $brush.css("background", $color_field.val());
});
