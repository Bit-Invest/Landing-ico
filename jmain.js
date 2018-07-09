
function linkScroll(elem) {
	var sc_top = $(`[elem=${elem}]`).offset().top;
	scrollBody(sc_top - 85, 1000);
};

window.popupVideo = function(src) {
	$('popup[video] .th_iframe').html(`<iframe src="${src}" allow="autoplay; encrypted-media"></iframe>`);
	//$('popup[video] iframe').attr('src', src);
	$('popup[video]').show();ы
}

$('[anchor]').on('click', function(e) {
	e.preventDefault();
	var anchor = $(this).attr('anchor');
	linkScroll(anchor)
})

$('popup[video] .close').on('click', function() {
	
})

window.addEventListener("resize", function() {
  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout(function() {
    console.log('Resized finished.');
    resizeFunc();
  }, 250);
}, false);