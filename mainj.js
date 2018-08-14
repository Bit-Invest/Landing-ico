define(function(){
  function add(arr){

  	var getGAID = function(){
	    var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
	    var raw = (match) ? decodeURIComponent(match[1]) : null;
			if (raw) {
				match = raw.match(/(\d+\.\d+)$/);
			}

			var gacid = (match) ? match[1] : 'default';
			if (gacid) {
			  return gacid;
			}
		}

  	arr.links_landing['joinpresale'] += `?clickid=${linkSearch['clickid']}&gaid=${getGAID()}`;

   $('[link]').each(function(){
			var link = $(this).attr('link');
			$(this).attr({
				target: '__blank',
				href: arr.links_landing[link]
			})
		});

  		function linkScroll(elem) {
  			var sc_top = $(`[elem=${elem}]`).offset().top;
  			scrollBody(sc_top - 85, 1000);
  		};

		window.popupVideo = function(src) {
			$('popup[video] .th_iframe').html(`<iframe src="${src}" frameborder="0" allow="autoplay; encrypted-media"></iframe>`);
			//$('popup[video] iframe').attr('src', src);
			$('popup[video]').show();
		}
        
    $('[anchor]').on('click', function(e) {
			e.preventDefault();
			var anchor = $(this).attr('anchor');
			linkScroll(anchor)
		})

		$('[showvideopopup]')
			.on('click', function(e) {
				e.preventDefault();
				var srcvideo = $(this).attr('srcvideo');
				popupVideo(srcvideo);
			})

		$('popup[video] .close, popup[video] .rgba')
			.on('click', function() {
				$(this).closest('popup')
					.hide()

				$(this).closest('popup')
					.find('iframe')
					.remove()
			})
  }
  
  return {
    add: add
  };
});
