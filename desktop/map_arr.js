define(function() {

  function render(arr, callback){
    var $map_arr0 = $('[map_arr="0"]').html(null);
    arr.feedbackOnOurProject.forEach(function(e, i) {
      $(`
      <div class="item">
      <div class="mid_img_advisers" style="background-image: url(${e.img})"></div>
        <div class="right">
          <div class="name">
            <h3>${e.name}</h3>
            <h4>${e.position}</h4><a href="#" class="sb" srcvideo="${e.video}" showvideopopup>Watch Video</a>
            <hr>
          </div>
          <p>
            ${e.text}
          </p>
        </div>
      </div>
    `).appendTo($map_arr0);
    })

    var $map_arr1 = $('[map_arr="1"]').html(null);
    arr.ourPartners.forEach(function(e, i) {
      $(`
      <div class="item"><img src="${e.img}">
        <h3>${e.name}</h3>
        <p>${e.position}</p>
        <hr>
        <a style="cursor:pointer;text-decoration:underline;color:white;" href="${e.href}" target="__blank">${e.href.replace('http://','').replace('https://','').replace('/','').replace('www.','')}</a>
      </div>
    `).appendTo($map_arr1);
    })

    var $map_arr2 = $('[map_arr="2"]').html(null);
    arr.advisers.forEach(function(e, i) {
      $(`
      <div class="parentAdvisersItem"> 
        ${e.video?`<div class="play-button-advisers" srcvideo="${e.video}" showvideopopup></div>`:''}
        <div class="item">
              <div class="left">
                <div class="mid_img_advisers" style="background-image: url(${e.img})"></div>
                <a href="${e.src}" target='blank'>
                  <div src="../images/in.png" class="in"></div>
                </a>
                <h3>${e.name}</h3>
                <p>${e.position}</p>
                <p>${e.fackt1}</p>
                <p>${e.fackt2}</p>
              </div>
           <div class="right">
            ${
              (function(){
                var arr_p='';
                e.text.forEach(function(e){
                  arr_p += `<p>${e}</p>`
                }) 

                return arr_p;
              })()
              }
              </div>
          <div class="clear"></div>
        </div> 
      </div>
    `).appendTo($map_arr2);
    })

    var $map_arr3 = $('[map_arr="3"]').html(null);
    arr.teams.forEach(function(e, i) {
      $(`
      <div class="item">
        <div class="mid_img_advisers" style="background-image: url(${e.img})"></div>
        <h3>${e.name}</h3>
        <p>${e.position}</p>
            <hr>
        <p><span></span> ${e.fackt1}</p>
        <p><span></span> ${e.fackt2}</p>
        <p><span></span> ${e.fackt3}</p>
        <a href="${e.src}" target='blank'>
          <div src="../images/in.png" class="in"></div>
        </a>
      </div>
    `).appendTo($map_arr3);
    })

    var $map_arr4 = $('[map_arr="4"]').html(null);
    arr.news.forEach(function(e, i) {
      $(`
      <div class="item">
            <a href="${e.videoSrc}" target="_blank">
              <div class="mid_img_advisers ava_bg" style="background-image: url(${e.screen})"></div>
            </a>
            <div class="txt">
            <h3>${e.name}</h3>
            <div class="clear"></div>
            <p>${e.text}</p>
            <a href="${e.videoSrc}" target="__blank">${e.source}</a>
            </div>
      </div>
    `).appendTo($map_arr4);
    })

    if(callback)
      callback();
  };

  return {
    render: render
  };

});