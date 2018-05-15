
//CARUSEL 1

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 8000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
  var switchInterval = setInterval(nextSlide, slideInterval);

  $('#viewport').hover(function() {
      clearInterval(switchInterval);
  }, function() {
      switchInterval = setInterval(nextSlide, slideInterval);
  });

  $('#next-btn').click(function() {
      nextSlide();
  });

  $('#prev-btn').click(function() {
      prevSlide();
  });
});


function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$('#viewport').width() * (slideCount - 1);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow - 2);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow--;
  }
}

//CARUSEL 2

var slideNowWatchProgress = 1;
var slideCountWatchProgress = $('#slidewrapper__WatchProgress').children().length;
var slideIntervalWatchProgress = 8000;
var navBtnIdWatchProgress = 0;
var translateWidthWatchProgress = 0;

$(document).ready(function() {
  var switchIntervalWatchProgress = setInterval(nextSlideWatchProgress, slideIntervalWatchProgress);

  $('#viewport__WatchProgress').hover(function() {
      clearInterval(switchIntervalWatchProgress);
  }, function() {
      switchIntervalWatchProgress = setInterval(nextSlideWatchProgress, slideIntervalWatchProgress);
  });

  $('#next-btn__WatchProgress').click(function() {
      nextSlideWatchProgress();
  });

  $('#prev-btn__WatchProgress').click(function() {
      prevSlideWatchProgress();
  });

  $('.slide-nav-btn_WatchProgress').click(function() {
      navBtnIdWatchProgress = $(this).index();

    if (navBtnIdWatchProgress + 1 != slideNowWatchProgress) {
      translateWidthWatchProgress = -$('#viewport__WatchProgress').width() * (navBtnIdWatchProgress);
      $('#slidewrapper__WatchProgress').css({
        'transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      });
      slideNowWatchProgress = navBtnIdWatchProgress + 1;
    }
  });
});


function nextSlideWatchProgress() {
  if (slideNowWatchProgress == slideCountWatchProgress || slideNowWatchProgress <= 0 || slideNowWatchProgress > slideCountWatchProgress) {
    $('#slidewrapper__WatchProgress').css('transform', 'translate(0, 0)');
    slideNowWatchProgress = 1;
  } else {
    translateWidthWatchProgress = -$('#viewport__WatchProgress').width() * (slideNowWatchProgress);
    $('#slidewrapper__WatchProgress').css({
      'transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
    });
    slideNowWatchProgress++;
  }
}

function prevSlideWatchProgress() {
  if (slideNowWatchProgress == 1 || slideNowWatchProgress <= 0 || slideNowWatchProgress > slideCountWatchProgress) {
    translateWidthWatchProgress = -$('#viewport__WatchProgress').width() * (slideCountWatchProgress - 1);
    $('#slidewrapper__WatchProgress').css({
      'transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
    });
    slideNowWatchProgress = slideCountWatchProgress;
  } else {
    translateWidthWatchProgress = -$('#viewport__WatchProgress').width() * (slideNowWatchProgress - 2);
    $('#slidewrapper__WatchProgress').css({
      'transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthWatchProgress + 'px, 0)',
    });
    slideNowWatchProgress--;
  }
}

//CARUSEL 3

var slideNowTeam = 1;
var slideCountTeam = $('#slidewrapper__team').children().length;
var slideIntervalTeam = 8000;
var navBtnIdTeam = 0;
var translateWidthTeam = 0;

$(document).ready(function() {
  var switchIntervalTeam = setInterval(nextSlideTeam, slideIntervalTeam);

  $('#viewport__team').hover(function() {
      clearInterval(switchIntervalTeam);
  }, function() {
      switchIntervalTeam = setInterval(nextSlideTeam, slideIntervalTeam);
  });

  $('#next-btn__Team').click(function() {
      nextSlideTeam();
  });

  $('#prev-btn__Team').click(function() {
      prevSlideTeam();
  });

  $('.slide-nav-btn').click(function() {
      navBtnIdTeam = $(this).index();

    if (navBtnIdTeam + 1 != slideNowTeam) {
      translateWidthTeam = -$('#viewport__team').width() * (navBtnIdTeam);
      $('#slidewrapper__team').css({
        'transform': 'translate(' + translateWidthTeam + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidthTeam + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidthTeam + 'px, 0)',
      });
      slideNowTeam = navBtnIdTeam + 1;
    }
  });
});


function nextSlideTeam() {
  if (slideNowTeam == slideCountTeam || slideNowTeam <= 0 || slideNowTeam > slideCountTeam) {
    $('#slidewrapper__team').css('transform', 'translate(0, 0)');
    slideNowTeam = 1;
  } else {
    translateWidthTeam = -$('#viewport__team').width() * (slideNowTeam);
    $('#slidewrapper__team').css({
      'transform': 'translate(' + translateWidthTeam + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthTeam + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthTeam + 'px, 0)',
    });
    slideNowTeam++;
  }
}

function prevSlideTeam() {
  if (slideNowTeam == 1 || slideNowTeam <= 0 || slideNowTeam > slideCountTeam) {
    translateWidthTeam = -$('#viewport__team').width() * (slideCountTeam - 1);
    $('#slidewrapper__team').css({
      'transform': 'translate(' + translateWidthTeam + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthTeam + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthTeam + 'px, 0)',
    });
    slideNowTeam = slideCountTeam;
  } else {
    translateWidthTeam = -$('#viewport__team').width() * (slideNowTeam - 2);
    $('#slidewrapper__team').css({
      'transform': 'translate(' + translateWidthTeam + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthTeam + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthTeam + 'px, 0)',
    });
    slideNowTeam--;
  }
}

