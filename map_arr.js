
/*var $map_arr0 = $('[map_arr="0"]').html(null);
feedbackOnOurProject.forEach(function(e, i){
	$(`
		<div class="item">
	    <img src="desktop/files/images/block_6_ava.png">
	    <div class="right">
        <div class="name">
          <h3>${e.name}</h3>
          <h4>${e.position}</h4><a href="#" class="sb">Watch Video</a>
          <hr>
        </div>
        <p>
        	${e.text}
        </p>
	    </div>
		</div>
	`)
		.appendTo($map_arr0);
})*/

/*var $map_arr1 = $('[map_arr="1"]').html(null);
ourPartners.forEach(function(e, i){
	$(`
		<div class="item"><img src="desktop/files/images/ava_1.png">
	    <h3>${e.name}</h3>
	    <p>${e.position}</p>
	    <hr>
	    <p style="cursor:pointer;text-decoration:underline;" href="https://progressor.ee/">${e.href}</p>
		</div>
	`)
		.appendTo($map_arr1);
})*/

var $map_arr2 = $('[map_arr="2"]').html(null);
advisers.forEach(function(e, i){
	$(`
		<div class="item">
          <div class="names">
              <div class="border">
                <img src="${e.img}" alt="" class="ava">
              </div>
              <div class="clear"></div>
              <div class="na">${e.name}</div>
              <h4>${e.position}</h4>
              <hr>
              <div class="txt">
                  <span>${e.fackt1}<br>
                  <span>${e.fackt2}<br>
                  <span>пусто<br>
              </div>
              <a href="#" class="soc">
                  <img src="files/images/footer_soc_6.png" >
              </a>
          </div>
        </div>
	`)
		.appendTo($map_arr2);
})


var $map_arr3 = $('[map_arr="3"]').html(null);
teams.forEach(function(e, i){
	$(`
		<div class="item">
          <div class="names">
              <div class="border">  
                <img src="${e.img}" alt="" class="ava">
              </div>
              <div class="clear"></div>
              <div class="na">${e.name}</div>
              <h4>${e.position}</h4>
              <hr>
              <div class="txt">
                  <span>${e.fackt1}<br>
                  <span>${e.fackt2}<br>
                  <span>${e.fackt3}<br>
              </div>
              <a href="#" class="soc">
                <img src="files/images/footer_soc_6.png" >
              </a>
          </div>
      </div>
	`)
		.appendTo($map_arr3);
})

var $map_arr4 = $('[map_arr="4"]').html(null);
news.forEach(function(e, i){
  $(`
    <div class="item news">
      <div class="video" style="background-image: url(${e.screen})"></div>
      <div class="names">
        <div class="clear"></div>
        <div class="na">${e.name}</div>
        <h4>${e.source}</h4>
        <hr>
        <p>${e.text}</p>
      </div>
  </div>
  `)
    .appendTo($map_arr4);
})

feedbackOnOurProject.forEach(function(e, i){
  $(`
    <div class="item">
      <div class="video" style="background-image: url(${e.img})">
        <a href="#" class="play" video-id="${i}">
          <img src="files/images/sb_watch_video.png">
        </a>
      </div>
      <div class="names">
        <div class="clear"></div>
        <div class="na">${e.name}</div>
        <h4>${e.position}</h4>
        <hr>
        <p>${e.text}</p>
      </div>
  </div>
  `)
    .appendTo($map_arr4);
})