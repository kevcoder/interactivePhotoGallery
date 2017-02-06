var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add overlay
$overlay.append($image);
//Add caption after overlay dispay's image
$overlay.append($caption);
//Add overlay
$("body").append($overlay);
//Capture the click event on a link to an image
$("#image-gallery a").click(function(event){
	event.preventDefault();
	//Update overlay with the image linked in the link
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	//show overlay
	$overlay.show();
	

	//Get child's alt attribute and set caption
	 var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

	$overlay.click(function(){
		$overlay.hide();
	});