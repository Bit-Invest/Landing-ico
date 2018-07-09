var resizeFunc = (function() {
  var pen = 0;
  var fp = {
    f1: (pr_px(100, 0) - (pr_px(120, 0) * .025)) - (pr_px(38.75, 0)),
    f2: (pr_px(100, 1) - (pr_px(120, 0) * .04 * .7) - (pr_px(6.6, 0))),
    f3: (pr_px(120, 0) * .025),
    f4: (pr_px(120, 0) * .04 * .7),
    m1: pr_px(120, 0),
    m2: pr_px(120, 0) * 0.44679191315088085,
    m3: pr_px(35, 0),
    m4: -((pr_px(120, 0) * 0.44679191315088085) - pr_px(100, 1)) + ((pr_px(120, 0) * 0.44679191315088085) / 100 * 3.7),
    fn1: (pr_px(120, 0) * .045),
    fn2: (pr_px(120, 0) * .04 * .9),
    fn3: (pr_px(100, 0) - (pr_px(120, 0) * .025)) - (pr_px(18.75, 0)),
    fn4: (pr_px(100, 1) - (pr_px(120, 0) * .04 * .7) - (pr_px(20.9, 0))),
    sn1: (pr_px(120, 0) * .080),
    sn2: (pr_px(120, 0) * .080 * 1),
    sn3: (pr_px(100, 0) - (pr_px(120, 0) * .025)) - (pr_px(28.75, 0)),
    sn4: (pr_px(100, 1) - (pr_px(120, 0) * .04 * .7) - (pr_px(4.9, 0))),
  };
  var animatesBlock = [{
      type: 'rect',
      style: {
        width: pr_px(100, 0),
        height: pr_px(100, 1),
        left: 0,
        top: 0,
        leftWidth: 0,
        topHeight: 0,
        gradient: {
          colors: ["#57298B", "#595D7B"],
          coord: [0, 0, 0, pr_px(100, 1)]
        },
        alpha: 1,
      },
      scroll: []
    }, {
      type: 'rect',
      style: {
        width: pr_px(100, 0),
        height: pr_px(100, 1),
        left: 0,
        top: 0,
        leftWidth: 0,
        topHeight: 0,
        gradient: {
          colors: ["#613CBE", "#6DC3DC"],
          coord: [0, 0, 0, pr_px(100, 1)]
        },
        alpha: 0,
      },
      scroll: [
        //alpha
        //alpha
        {
          type: 'alpha',
          start: 3000,
          end: 4000,
          valueStart: 0,
          valueEnd: 1
        },
      ]
    }, {
      type: 'image',
      src: 'media/5b05238fabbf26c7e7a31cdb_stars_mount.svg',
      style: {
        width: pr_px(100, 0),
        height: pr_px(100, 0) * .24,
        left: 0,
        top: 0,
        leftWidth: 0,
        topHeight: -pr_px(20, 1),
        alpha: .7,
      },
      scroll: [
        //alpha
        {
          type: 'alpha',
          start: 0,
          end: 1400,
          valueStart: .7,
          valueEnd: .5
        }, {
          type: 'alpha',
          start: 3500,
          end: 4000,
          valueStart: .2,
          valueEnd: 0
        }
      ],
    }, {
      type: 'image',
      src: 'media/Sun.svg',
      style: {
        width: fp.sn1,
        height: fp.sn2,
        left: fp.sn3,
        top: fp.sn4,
        leftWidth: 0,
        topHeight: 0,
        alpha: 0,
      },
      scroll: [
        //alpha
        {
          type: 'alpha',
          start: 3000,
          end: 3800,
          valueStart: 0,
          valueEnd: 1
        }, {
          type: 'top',
          start: 3000,
          end: 3800,
          valueStart: fp.sn4,
          valueEnd: fp.sn4 - (pr_px(26.1, 0))
        },
      ]
    }, {
      type: 'image',
      src: 'media/mountain_new23.70fbb83c.svg',
      style: {
        width: fp.m1,
        height: fp.m2,
        left: 0,
        top: 0,
        leftWidth: fp.m3,
        topHeight: fp.m4
      },
      scroll: [
        //left
        {
          type: 'left',
          start: 1000,
          end: 1500,
          valueStart: 0,
          valueEnd: -(pr_px(3.5, 0))
        }, {
          type: 'left',
          start: 1500,
          end: 2000,
          valueStart: -(pr_px(3.5, 0)),
          valueEnd: -(pr_px(8.2, 0))
        }, {
          type: 'left',
          start: 2000,
          end: 2500,
          valueStart: -(pr_px(8.2, 0)),
          valueEnd: -(pr_px(10.7, 0))
        },
        //top
        {
          type: 'top',
          start: 1000,
          end: 1500,
          valueStart: 0,
          valueEnd: (pr_px(4.5, 0))
        }, {
          type: 'top',
          start: 1500,
          end: 2000,
          valueStart: (pr_px(4.5, 0)),
          valueEnd: (pr_px(5.1, 0))
        }, {
          type: 'top',
          start: 2000,
          end: 2500,
          valueStart: (pr_px(5.1, 0)),
          valueEnd: (pr_px(8.5, 0))
        },
      ]
    }, {
      type: 'rect',
      style: {
        width: pr_px(100, 0),
        height: pr_px(100, 1),
        left: 0,
        top: 0,
        leftWidth: 0,
        topHeight: 0,
        color: 'rgba(0,0,0,1)',
        alpha: .4,
      },
      scroll: [
        //alpha
        {
          type: 'alpha',
          start: 0,
          end: 500,
          valueStart: .4,
          valueEnd: .2
        },
      ]
    }, {
      type: 'image',
      src: 'media/Sun.svg',
      style: {
        width: fp.sn1,
        height: fp.sn2,
        left: fp.sn3,
        top: fp.sn4 - (pr_px(26.1, 0)),
        leftWidth: 0,
        topHeight: 0,
        alpha: 0,
      },
      scroll: [
        //alpha
        {
          type: 'alpha',
          start: 3800,
          end: 4000,
          valueStart: 0,
          valueEnd: 1
        },
      ]
    }, {
      type: 'image',
      src: 'media/kabinka_2.1ee5cce3.svg',
      style: {
        width: fp.f3,
        height: fp.f4,
        left: fp.f1,
        top: fp.f2,
        leftWidth: 0,
        topHeight: 0,
        alpha: 1,
      },
      scroll: [
        //alpha
        {
          type: 'alpha',
          start: 0,
          end: 500,
          valueStart: 1,
          valueEnd: 1
        },
        //left
        {
          type: 'left',
          start: 0,
          end: 500,
          valueStart: fp.f1,
          valueEnd: fp.f1 + (pr_px(4.5, 0))
        }, {
          type: 'left',
          start: 500,
          end: 1000,
          valueStart: fp.f1 + (pr_px(4.5, 0)),
          valueEnd: fp.f1 + (pr_px(10.5, 0))
        }, {
          type: 'left',
          start: 2500,
          end: 3000,
          valueStart: fp.f1 + (pr_px(10.5, 0)),
          valueEnd: fp.f1 + (pr_px(11.5, 0))
        }, {
          type: 'left',
          start: 3000,
          end: 3500,
          valueStart: fp.f1 + (pr_px(11.5, 0)),
          valueEnd: fp.f1 + (pr_px(16.5, 0))
        }, {
          type: 'left',
          start: 3500,
          end: 4000,
          valueStart: fp.f1 + (pr_px(16.5, 0)),
          valueEnd: fp.f1 + (pr_px(18.45, 0))
        },
        //top
        {
          type: 'top',
          start: 0,
          end: 500,
          valueStart: fp.f2,
          valueEnd: fp.f2 - (pr_px(6.1, 0))
        }, {
          type: 'top',
          start: 500,
          end: 1000,
          valueStart: fp.f2 - (pr_px(6.1, 0)),
          valueEnd: fp.f2 - (pr_px(6.4, 0))
        }, {
          type: 'top',
          start: 2500,
          end: 3000,
          valueStart: fp.f2 - (pr_px(6.4, 0)),
          valueEnd: fp.f2 - (pr_px(7.5, 0))
        }, {
          type: 'top',
          start: 3000,
          end: 3500,
          valueStart: fp.f2 - (pr_px(7.5, 0)),
          valueEnd: fp.f2 - (pr_px(8.6, 0))
        }, {
          type: 'top',
          start: 3500,
          end: 4000,
          valueStart: fp.f2 - (pr_px(8.6, 0)),
          valueEnd: fp.f2 - (pr_px(11.45, 0))
        },
      ]
    }, {
      type: 'image',
      src: 'media/finish_guy.gif',
      style: {
        width: fp.fn1,
        height: fp.fn2,
        left: fp.fn3,
        top: fp.fn4,
        leftWidth: 0,
        topHeight: 0,
        alpha: 0,
      },
      scroll: [
        //alpha
        {
          type: 'alpha',
          start: 3900,
          end: 4000,
          valueStart: 0,
          valueEnd: 1
        },
      ]
    },
    /*{
    	type: 'html-image',
    	src: 'media/Guy.f182b798.gif',
    	style: {
    		width: fp.f3 * 1.1,
    		height: (fp.f3 * 1.1) * 1.2,
    		left: fp.f1 * .7,
    		top: pr_px(100, 1) - ((fp.f3 * 1.1) * 1.2),
    		leftWidth: 0,
    		topHeight: 0,
    		alpha: 1,
    	},
    	scroll: [

    		//alpha
    		{
    			type: 'alpha',
    			start: -100,
    			end: 0,
    			valueStart: 1,
    			valueEnd: 0
    		},

    		//left
    		{
    			type: 'left',
    			start: -500,
    			end: 0,
    			valueStart: fp.f1 * .7,
    			valueEnd: fp.f1 * .95
    		},

    		//top
    		{
    			type: 'top',
    			start: -500,
    			end: -0,
    			valueStart: pr_px(100, 1) - ((fp.f3 * 1.1) * 1.2),
    			valueEnd: fp.f2 * 1.03
    		},

    	]
    },*/
  ];
  var elems = [];
  var $canvas = document.getElementById('prlxCnvas2');
  var sizesCanvas = [pr_px(100, 0), pr_px(100, 1)];
  var ctx = $canvas.getContext('2d');
  $canvas.width = sizesCanvas[0];
  $canvas.height = sizesCanvas[1];

  function init() {
    animatesBlock.forEach(function(e1, index) {
      switch (e1.type) {
        case 'image':
          drawImage(e1, index);
          break;
        case 'rect':
          drawRect(e1, index);
          break;
        case 'html-image':
          drawHtmlImage(e1, index);
          break;
      }
    })
    window.requestAnimationFrame(animateDraw);
    /*window.onscroll = function() {
				pen = window.scrollY;

				document.getElementById('px').innerText = pen + 'px';
		  	window.requestAnimationFrame(animateDraw);
			}*/
  };

  function drawImage(data, key) {
    let newImg = new Image();
    newImg.src = data.src;
    newImg.onload = function() {
      window.requestAnimationFrame(animateDraw);
    };
    elems.push({
      type: 'image',
      style: data.style,
      key: key,
      target: newImg
    })
  };

  function drawRect(data, key) {
    elems.push({
      type: 'rect',
      style: data.style,
      key: key
    })
  }

  function drawHtmlImage(data, key) {
    let newImg = new Image();
    newImg.src = data.src;
    newImg.onload = function() {
      //window.requestAnimationFrame(animateDraw);
    };
    elems.push({
      type: 'html-image',
      style: data.style,
      key: key,
      target: newImg
    })
  }
  window.animateDraw = function() {
    ctx.clearRect(0, 0, sizesCanvas[0], sizesCanvas[1]);
    var imageDraw = function(elem) {
      ctx.save();
      ctx.rotate(0);
      var drawLeft = drawData('left', elem.key, pen);
      var drawTop = drawData('top', elem.key, pen);
      ctx.translate(typeof drawLeft !== 'undefined' ? drawLeft : elem.style.left, typeof drawTop !== 'undefined' ? drawTop : elem.style.top, );
      var getAlpaha = drawData('alpha', elem.key, pen);
      ctx.globalAlpha = typeof getAlpaha !== 'undefined' ? getAlpaha : elem.style.alpha;
      ctx.drawImage(elem.target, elem.style.leftWidth, elem.style.topHeight, elem.style.width, elem.style.height);
      ctx.restore();
    };
    var rectDraw = function(elem) {
      ctx.save();
      ctx.rotate(0);
      if (elem.style.gradient) {
        var coord = elem.style.gradient.coord;
        var grd = ctx.createLinearGradient(coord[0], coord[1], coord[2], coord[3]);
        elem.style.gradient.colors.forEach(function(e, i) {
          grd.addColorStop(i, e);
        })
        ctx.fillStyle = grd;
      } else {
        ctx.fillStyle = elem.style.color;
      }
      var getAlpaha = drawData('alpha', elem.key, pen);
      ctx.globalAlpha = typeof getAlpaha !== 'undefined' ? getAlpaha : elem.style.alpha;
      ctx.translate(drawData('left', elem.key, pen) || elem.style.left, drawData('top', elem.key, pen) || elem.style.top);
      ctx.fillRect(elem.style.leftWidth, elem.style.topHeight, elem.style.width, elem.style.height);
      ctx.restore();
    };
    var htmlImgDraw = function(elem) {
      let hasBl = document.getElementById('html-' + elem.key);
      let bl;
      if (!hasBl) {
        bl = elem.target;
        document.getElementById('animateHtml').appendChild(bl);
        bl.id = 'html-' + elem.key;
      } else {
        bl = hasBl;
      }
      let getLeft = drawData('left', elem.key, pen);
      let getTop = drawData('top', elem.key, pen);
      let getWidth = drawData('width', elem.key, pen);
      let getHeight = drawData('height', elem.key, pen);
      let getAlpaha = drawData('alpha', elem.key, pen);
      bl.width = typeof getWidth !== 'undefined' ? getWidth : elem.style.width;
      bl.style['left'] = typeof getLeft !== 'undefined' ? getLeft + 'px' : elem.style.left + 'px';
      bl.style['top'] = typeof getTop !== 'undefined' ? getTop + 'px' : elem.style.top + 'px';
      bl.style['opacity'] = typeof getAlpaha !== 'undefined' ? getAlpaha : elem.style.alpha;
      if (elem.style.height) {
        bl.height = typeof getHeight !== 'undefined' ? getHeight : elem.style.height;
      }
    };
    elems.forEach(function(e, i) {
      switch (e.type) {
        case 'image':
          imageDraw(e);
          break;
        case 'rect':
          rectDraw(e);
          break;
        case 'html-image':
          htmlImgDraw(e);
          break;
      }
    })
  };

  function pr_px(pr, diff) {
    var diffs = [
      window.innerWidth,
      window.innerHeight
    ];
    return pr * (diffs[diff] / 100);
  };

  function drawData(type, key, post) {
    var v;
    let ram = [];
    var $scrolls = animatesBlock[key].scroll;
    $scrolls.forEach(function(e, i) {
      if (e.type == type && e.start <= post) {
        v = e.end < post ? e.valueEnd : ((e.valueEnd - e.valueStart) / 100) * ((e.end - e.start) - (e.end - post)) / ((e.end - e.start) / 100) + e.valueStart;
      }
    });
    return v;
  };

  function html_rr() {
    var anm_blocks = document.getElementById('animateHtml');
    anm_blocks.innerHTML = null;
    var guy_anm_parent = document.createElement('div');
    guy_anm_parent.className = 'guy_anm_parent';
    guy_anm_parent.style['width'] = ((pr_px(120, 0) * .17)) + 'px';
    guy_anm_parent.style['height'] = ((pr_px(120, 0) * .04 * 1.2)) + 'px';
    guy_anm_parent.style['left'] = ((pr_px(100, 0) - (pr_px(120, 0) * .025)) - (pr_px(58.75, 0))) + 'px';
    guy_anm_parent.style['top'] = ((pr_px(100, 1) - (pr_px(120, 0) * .04 * .7) - (pr_px(2.8, 0)))) + 'px';
    var guyImage = new Image();
    guyImage.src = './media/Guy.f182b798.gif';
    var guy_anm_bl = document.createElement('img');
    guy_anm_bl.src = guyImage.src;
    guy_anm_bl.onload = function() {
      guy_anm_bl.className = 'guy_anm_bl';
      //start_time_anm[0]();
    };
    guy_anm_parent.appendChild(guy_anm_bl);
    anm_blocks.appendChild(guy_anm_parent);

    function timersAnimate(from, to, speed, callback) {
      var ram_pen = from;
      var frame = function() {
        ram_pen = ram_pen + ((to - from) / speed);
        pen = ram_pen;
        window.requestAnimationFrame(animateDraw);
        if (ram_pen < to) {
          window.requestAnimationFrame(frame);
        } else if (callback) {
          callback(pen);
        }
      };
      window.requestAnimationFrame(frame);
    };
    ////timers
    window.start_time_anm = [
      function() {
        setTimeout(function() {
          if (window.scrollY < 10) {
            timersAnimate(0, 800, 70, function() {
              //ready start!!!
              //readyDom();
            });
          }
        }, 4000);
      },
      function() {
        timersAnimate(800, 1800, 50);
      },
      function() {
        timersAnimate(1800, 4000, 40);
      },
    ];
  }
  (function() {
    //scroll window
    var ram_scroll = window.scrollY;
    var stop_scroll = false;
    var exit_scroll_animate = true;
    var menu_fixed = false;
    window.onscroll = function() {
      if (window.scrollY > 50 && !menu_fixed) {
        menu_fixed = true;

        //document.getElementsByClassName('guy_anm_parent')[0].style.display = 'none';
        //document.getElementsByClassName('menu_block')[0].classList.add("fixed");
        console.log(typeof $ !== 'undefined')
        if(typeof $ !== 'undefined'){
          $('.guy_anm_parent').hide();
          $('.menu_block').addClass('fixed');
        }
        
      } else if (window.scrollY < 50 && menu_fixed) {
        menu_fixed = false;

        if(typeof $ !== 'undefined'){
          $('.guy_anm_parent').show();
          $('.menu_block').removeClass('fixed');
        }
      }
      if (!!exit_scroll_animate) {
        if(typeof $ !== 'undefined'){
          var height_anima = $('animateWindows').height();
          pen = (window.scrollY * (4900 / (height_anima * 1.2)));
          window.requestAnimationFrame(animateDraw);
        }
        return false;
      }
      if (!!stop_scroll) {
        return false;
      };
      stop_scroll = true;
      var vh = window.innerHeight;
      var th_scroll = window.scrollY == 0 ? 1 : window.scrollY;
      var direction = ((th_scroll - ram_scroll) > 0);
      var next_str_key = ((Math.floor(th_scroll / vh))); //(direction); //Math.floor((th_scroll+1) / 600);
      var next_str = direction ? (next_str_key + 1) : (next_str_key == 0 ? 0 : next_str_key - 1);
      var $new_window = $(`.n-cour[n=${next_str}]`);
      var offset_top = next_str < 4 ? $new_window.offset().top : false;
      if (next_str > 1) {
        exit_scroll_animate = true;
      };
      if (!offset_top) {
        return false;
      } else {
        //start_time_anm[next_str]();
      }
      scrollBody(offset_top, 1000);
      //document.getElementById('px').innerText = window.scrollY + 'px';
      ram_scroll = th_scroll;
    };
    window.scrollBody = function(top, speed) {
      $("html").animate({
        scrollTop: top
      }, speed, function() {
        setTimeout(function() {
          stop_scroll = false;
        }, 500);
      });
    };
  })()

  function readyDom() {
    if(typeof $ !== 'undefined'){ 
      $('body').css('overflow', 'auto');
    }
  };

  init();
  html_rr();
});

resizeFunc();

/**/
var templateCodes = `
  <div class="windows-bl-full n-cour" n="3"><div class="block_1"><div class="size"><h1>What kinds of problems does CINDX solve?</h1><a class="sb" href="#" link="mvp">TEST MVP</a><div class="clear"></div><div class="cont_row"><div class="row"><h2>Time</h2><span>I have some money to put in the crypto game, but don’t have the time <br>to research and contact professional traders to manage my portfolio</span><img src="desktop/files/images/block_1_row_1.png"><h3>CINDX provides access to rated and trustworthy traders</h3><p>Traders on CINDX are rated according to their history of trading success. Choose the trader that’s right for you quickly</p></div><div class="row"><h2>Trust</h2><span>I have always felt uncomfortable <br>with the idea of handing my money over to someone else to make a profit</span><img src="desktop/files/images/block_1_row_2.png"><h3>On THE CINDX platform, your funds <br> will never leave your wallet</h3><p>Our decentralized system and smart contracts allow your funds to be managed without being transferred to another trader</p></div><div class="row"><h2>Uncertainty</h2><span>The technology surrounding crypto trading is not user-friendly. I can't figure out how to trade my coins</span><img src="desktop/files/images/block_1_row_3.png"><h3>You earn right along with the best traders on the market</h3><p>Every investor in CINDX has <br>the opportunity to have their funds managed by the most succesful traders on the market</p></div></div><div class="clear"></div></div></div><div class="block_2"><div class="size"><h2>In a Nutshell: How CINDX Works</h2><div class="cont_row"><div class="row"><h3>Investors</h3><p>increase their crypto earnings <br>with the portfolio management skills of top traders</p><div class="cloud"><span>I’m joining CINDX <br>with crypto assets that <br> I want to be traded</span></div><img src="desktop/files/images/block_2_img_1.png"></div><div class="row"><h3>Traders</h3><p>earn commissions <br>from the investors that follow them based on their performance and trade strategy</p><div class="cloud"><span>I’m joining CINDX <br>with trading expertise that will benefit investors</span></div><img src="desktop/files/images/block_2_img_2.png"></div><div class="row"><h3>Vendors</h3><p>sell advanced trading tools, <br>like trade robots and news widgets.</p><div class="cloud"><span>I'm joining CINDX <br>with trading apps <br>that will help investors</span></div><img src="desktop/files/images/block_2_img_3.png"></div><div class="row"><h3>CINDX</h3><p>collects commissions <br>and subscription fees</p><div class="cloud"><span>We’re here to make trading easy, secure, <br>and profitable</span></div><img src="desktop/files/images/block_2_img_4.svg"></div></div><div class="clear"></div></div></div><div class="block_3"><div class="size"><h2>Market Analytics</h2><div class="ico_block"><div class="row"><a link="wp"><img src="three/files/images/block_3_ico_1.png"><span>WHITEPAPER</span></a></div><div class="row"><a link="pr"><img src="three/files/images/block_3_ico_1.png"><span>PRESENTATION</span></a></div><div class="row"><a link="op"><img src="three/files/images/block_3_ico_1.png"><span>ONE PAGER</span></a></div><div class="row"><a link="fm"><img src="three/files/images/block_3_ico_2.png"><span >FINANCIAL MODEL</a></span></div></div><div class="clear"></div><div class="owl_1 owl-carousel owl-theme"><div class="item"><h3>Global AUM*</h3><a class="size" href="desktop/files/images/block_3_img_1@2x.png" data-fancybox="gallery" data-caption="Global Aum"></a><img src="desktop/files/images/block_3_img_1@2x.png"></div><div class="item"><h3>Investment</h3><a class="size" href="desktop/files/images/block_3_img_2@2x.png" data-fancybox="gallery" data-caption="Investment"></a><img src="desktop/files/images/block_3_img_2@2x.png"></div><div class="item"><h3>Growth of capital</h3><a class="size" href="desktop/files/images/block_3_img_3@2x.png" data-fancybox="gallery" data-caption="Rise of capital"></a><img src="desktop/files/images/block_3_img_3@2x.png"></div></div><div class="clear"></div><div class="other_text"><div class="cont_1">Since 2000, the global wealth management market has grown <br>by more than 250%. <br><br>This is the result of constant improvements in market tools <br>and the general development <br>of market structures.</div><div class="cont_2">Despite the explosive growth <br>of the cryptocurrency market in 2017, <br>the industry is still in its infancy. <br><br>The total market capitalization was $600 billion at the end of 2017 — just 1% of the wealth management industry total market capitalization.</div><img src="desktop/files/images/block_3_man.png" class="man"><div class="clear"></div></div><div class="other_geo"><h2>General metrics</h2><div class="cont_row"><div class="row">25 million potential blockchain wallets</div><div class="row">200,000 potential transactions every day</div><div class="row">More than 225 <br>potential partners,<br>each with $3-5 billion</div></div><div class="clear"></div></div></div></div><div class="block_4" elem="2"><div class="size"><div class="cont_1"><h2>ICO Details</h2><p>Token Name: <span>CINX</span></p><p>Token Pre-Sale start: <span>23.07.2018</span></p><p>Total Emission: <span>58.000.000</span></p><p>Price Per Token: <span>$ 1.00</span></p></div><a class="sb duo" href="#" link="joinpresale">buy tokens</a><div class="cont_2"><div class="process_bar"><div class="proc"></div><div style="font-size:13px;display:block;position:absolute;left:0px;bottom:-60px;">Private <br>round<br>is closed</div><div class="left">Soft Cap: $6m</div><div class="right">Hard Cap: $30m</div></div><h2>Token Deals</h2><p>Token Pre-Sale:</p><p><span>23.07.2018</span></p><p>Join the Token Pre-Sale to </p><p>receive a limited time 25% bonus</p><p><span>Token Sale Bonuses</span></p><p>Week One: 15% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Four: 5% Bonus</p><p>Week Two: 10% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Five: 3% Bonus</p><p>Week Three: 7% Bonus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Week Six: No Bonus</p></div><div class="cont_3"><h2>Token Allocation</h2><div class="row"><div class="process_bar"><div class="proc" style="width:14%"></div></div><div class="num">12%</div><p>Team</p></div><div class="row"><div class="process_bar"><div class="proc" style="width:8%"></div></div><div class="num">6%</div><p>Bounty</p></div><div class="row"><div class="process_bar"><div class="proc" style="width:8%"></div></div><div class="num">6%</div><p>Advisers</p></div><div class="row"><div class="process_bar"><div class="proc" style="width:9%"></div></div><div class="num">7%</div><p>Reserve</p></div><div class="row"><div class="process_bar"><div class="proc" style="width:5%"></div></div><div class="num">3%</div><p>Traders Recruitment Program</p></div><div class="row"><div class="process_bar"><div class="proc" style="width:7%"></div></div><div class="num">5%</div><p>Token Liquidity Support</p></div><div class="row"><div class="process_bar"><div class="proc" style="width:63%"></div></div><div class="num">61%</div><p>Available for Sale</p></div></div><div class="clear"></div><div class="cont_4"><h2>Use of Proceeds</h2><div class="graph"><ul><li><span></span> Marketing and PR 18%</li><li><span></span> Research and Development 44%</li><li><span></span> Legal expenses 9%</li><li><span></span> Operations 26%</li><li><span></span> Bonus for traders 3%</li></ul></div></div><div class="cont_5"><div class="row"><a link="wp"><img src="three/files/images/block_3_ico_1.png"><span>WHITEPAPER</span></a></div><div class="row"><a link="pr"><img src="three/files/images/block_3_ico_1.png"><span>PRESENTATION</span></a></div><div class="row"><a link="op"><img src="three/files/images/block_3_ico_1.png"><span>ONE PAGER</span></a></div><div class="row"><a link="fm"><img src="three/files/images/block_3_ico_2.png"><span >FINANCIAL MODEL</a></span></div><div class="row"><a link="ld"><img src="three/files/images/block_3_ico_1.png"><span>LEGAL DOCS</span></a></div></div><div class="clear"></div><a class="sb" href="#" link="joinpresale">BUY TOKENS</a><div class="clear"></div></div></div><div class="block_5"><div class="size"><h2>Legal Schedule</h2><div class="owl_2 owl-carousel owl-theme"><div class="item"><div class="cont_item"><img src="desktop/files/images/ico_check.png"><p>LICENSEFVR000110FOR PROVIDINGEXCHANGING<br>A VIRTUALCURRENCYAGAINSTA FIATSERVICES</p><div class="numb">4.18</div></div></div><div class="item"><div class="cont_item"><img src="desktop/files/images/ico_check.png"><p>SUBMISSIONFOR TRADEMARKREGISTRATIONIN ESTONIAAND EU</p><div class="numb">5.18</div></div></div><div class="item"><div class="cont_item"><img src="desktop/files/images/ico_check.png"><p>LICENSEFFA000254FOR OPERATINGAS A FINANCIALINSTITUTION</p><div class="numb">5.18</div></div></div><div class="item"><div class="cont_item"><img src="desktop/files/images/ico_check.png"><p>WORKINGWITH PROGRESSORÕIGUSBÜROO ON WPTO CLAIM FSA LICENSE</p><div class="numb">6.18</div></div></div><div class="item"><div class="cont_item"><p>LICENSEFOR PROVIDINGA VIRTUALCURRENCYWALLETSERVICE</p><div class="numb">6.18</div></div></div><div class="item"><div class="cont_item"><p>SUBMISSIONFOR TRADEMARKREGISTRATIONIN CHINAAND RUSSIA</p><div class="numb">7.18</div></div></div><div class="item"><div class="cont_item"><p>CHANGINGOWNERSHIPOF THE COMPANYFROM LLCTO JSC</p><div class="numb">7.18</div></div></div><div class="item"><div class="cont_item"><p>THE APPOINTMENTOF THE BOARDMEMBERSAND MANAGEMENTBOARDIN CINDX AS</p><div class="numb">7.18</div></div></div><div class="item"><div class="cont_item"><p>REGISTRATIONEXEMPTIOND IN SEC</p><div class="numb">8.18</div></div></div><div class="item"><div class="cont_item"><p>A PERSONALDATA MANAGERAPPOINTMENT</p><div class="numb">9.18</div></div></div><div class="item"><div class="cont_item"><p>OBTAININGTHE FSALICENSE</p><div class="numb">10.18</div></div></div><div class="item"><div class="cont_item"><p>REGISTRATION OF THEPROSPECTUSEU 809-2004 ISSUEOF SECURITY TOKENS</p><div class="numb">10.18</div></div></div></div></div></div><div class="block_6"><div class="size"><h2>Feedback On Our Project</h2><div map_arr="0" class="owl_3 owl-carousel owl-theme"><div class="item"><img src="desktop/files/images/block_6_ava.png"><div class="right"><div class="name"><h3>Borisov ivan </h3><h4>Advisor</h4><a href="#" class="sb">Watch Video</a><hr></div><p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p></div></div><div class="item"><img src="desktop/files/images/block_6_ava.png"><div class="right"><div class="name"><h3>Borisov ivan </h3><h4>Advisor</h4><a href="#" class="sb">Watch Video</a><hr></div><p>Investor joins the crypto exchange and best traders to sync the transactions with the most successful players on the market</p></div></div></div></div></div><div class="block_7"><div class="size"><h2>Media</h2><div class="owl_4 owl-carousel owl-theme"><div class="item"><div class="txt"><img src="desktop/files/images/block_7_ava_1.png"><h3>Introduction to CINDX Platform with Revolutionary Approach to Management</h3><div class="clear"></div><p>The landscape of investment management is changing rapidly: most of the financial services that were popular a few years ago have become obsolete and irrelevant...</p><a target="blank" href="https://medium.com/cindx/introduction-to-cindex-investment-platform-5b6414f40813">www.medium.com</a></div></div><div class="item"><div class="txt"><img src="desktop/files/images/block_7_ava_1.png"><h3>How CINDX Will Revolutionise Crypto Trading</h3><div class="clear"></div><p>The last few years have seen thousands of people enter the cryptocurrency market, from complete novice to seasoned professional, everybody seems to want a piece of the bit-cake...</p><a target="blank" href="https://medium.com/cindx/how-cindx-will-revolutionise-crypto-trading-a76afc237277">www.medium.com</a></div></div><div class="item"><div class="txt"><img src="desktop/files/images/block_7_ava_1.png"><h3>The Message from the CEO. Upcoming Changes</h3><div class="clear"></div><p>The world of technology is affecting more and more aspects of our daily lives and the industries surrounding them. Some of the most prominent disruptions are taking place in the financial sector...</p><a target="blank" href="https://medium.com/cindx/message-from-ceo-upcoming-changes-877fb8241c83">www.medium.com</a></div></div></div><hr><h2>News</h2><div class="owl_5 owl-carousel owl-theme" map_arr="4"><div class="item"><img src="desktop/files/images/block_7_ava_bg.png" class="ava_bg"><div class="txt"><h3>New office!</h3><div class="clear"></div><p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль, Тестовая Интеграция с биржами. Закрытое альфа тестирование</p><a href="#">read more</a></div></div><div class="item"><img src="desktop/files/images/block_7_ava_bg.png" class="ava_bg"><div class="txt"><h3>New office!</h3><div class="clear"></div><p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль, Тестовая Интеграция с биржами. Закрытое альфа тестирование</p><a href="#">read more</a></div></div><div class="item"><img src="desktop/files/images/block_7_ava_bg.png" class="ava_bg"><div class="txt"><h3>New office!</h3><div class="clear"></div><p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль, Тестовая Интеграция с биржами. Закрытое альфа тестирование</p><a href="#">read more</a></div></div><div class="item"><img src="desktop/files/images/block_7_ava_bg.png" class="ava_bg"><div class="txt"><h3>New office!</h3><div class="clear"></div><p>Разработка: UX / UI интерфейсы, Веб-платформа, Агрегатор котировок, KYC/AML модуль, Тестовая Интеграция с биржами. Закрытое альфа тестирование</p><a href="#">read more</a></div></div></div></div></div><div class="block_8" elem="4"><div class="size"><h2>Team of 30+ members</h2><div class="owl_6 owl-carousel owl-theme" map_arr="3"><div class="item"><img src="desktop/files/images/ava_1.png"><h3>Igor Okatiev</h3><p>Chief Financial Officer</p><hr><p><span>5</span> years in entrepreneurship</p><p><span>7</span> years in BRM</p><p><span>10</span> years in financial markets</p></div><div class="item"><img src="desktop/files/images/ava_1_2.png"><h3>Yury Avdeev</h3><p>Chief Executive Officer</p><hr><p><span>13</span> years in entrepreneurship</p><p><span>9</span> ventures</p><p><span>$2m</span> for crypto management </p><a href=""><div src="../images/in.png" class="in"></div></a></div><div class="item"><img src="desktop/files/images/ava_1_3.png"><h3>Artur Shamalov</h3><p>Investment Director</p><hr><p><span>15</span> years in entrepreneurship</p><p><span>5000</span> mixcart.ru clients</p><p><span>$6.5 bn</span> investor in dc-daily.ru</p><a href="#" class="in"></a></div><div class="item"><img src="desktop/files/images/ava_1_4.png"><h3>Denis Eskenazi</h3><p>Product Director</p><hr><p><span>7</span> years in entrepreneurship</p><p><span>3</span> buisness degrees</p><p><span>10</span> years in prezentation design</p><a href="#" class="in"></a></div><div class="item"><img src="desktop/files/images/ava_1.png"><h3>Igor Okatiev</h3><p>Chief Financial Officer</p><hr><p><span>5</span> years in entrepreneurship</p><p><span>7</span> years in BRM</p><p><span>10</span> years in financial markets</p><a href="#" class="in"></a></div></div><br><br><h2>Advisers</h2><div class="owl_7 owl-carousel owl-theme" map_arr="2"><div class="item"><div class="left"><img src="desktop/files/images/ava_1_6.png"><h3>Austin Kimm</h3><p>International Financial Services CEO</p><p>30+ years of financial service experience</p><p>Created companies with a worth of $500m</p></div><div class="right"><p>"As a co-founder of Crypterium I am constantly on the lookout for leading edge Crypto companies that will help take Crytocurrencies into mainstream adoption. One problem all new prospective cryptoowners face is the increadble complexity of buying cryptocurrencies. Most people that go to an establised exchange will be immediately turned off by what appears to be tranding platform aimed at professional buyers.</p><p>People need another route, something that it simpler to understand, something that can let other people do the hard work for them.<p>At the same time, there are many fantastic cryptomanagers out there that could fulfil this need if there was only a simpler and much cheaper way to reach customers.</p><p>That's why I really like CINDX as it targets fixing both problems with one solution, providing an ecosystem for both token buyers and token managers in an easy to use format. Where would share ownership be without similar solutions. If CINDX gets this right, it could have a huge impact on the next stage of cryptocurrency adoption.</p></div><div class="clear"></div></div><div class="item"><div class="left"><img src="desktop/files/images/ava_1_5.png"><h3>Austin Kimm</h3><p>International Financial Services CEO</p><p>30+ years of financial service experience</p><p>Created companies with a worth of $500m</p></div><div class="right"><p>"As a co-founder of Crypterium I am constantly on the lookout for leading edge Crypto companies that will help take Crytocurrencies into mainstream adoption. One problem all new prospective cryptoowners face is the increadble complexity of buying cryptocurrencies. Most people that go to an establised exchange will be immediately turned off by what appears to be tranding platform aimed at professional buyers.</p><p>People need another route, something that it simpler to understand, something that can let other people do the hard work for them.<p>At the same time, there are many fantastic cryptomanagers out there that could fulfil this need if there was only a simpler and much cheaper way to reach customers.</p><p>That's why I really like CINDX as it targets fixing both problems with one solution, providing an ecosystem for both token buyers and token managers in an easy to use format. Where would share ownership be without similar solutions. If CINDX gets this right, it could have a huge impact on the next stage of cryptocurrency adoption.</p></div><div class="clear"></div></div><div class="item"><div class="left"><img src="desktop/files/images/ava_1_6.png"><h3>Austin Kimm</h3><p>International Financial Services CEO</p><p>30+ years of financial service experience</p><p>Created companies with a worth of $500m</p></div><div class="right"><p>"As a co-founder of Crypterium I am constantly on the lookout for leading edge Crypto companies that will help take Crytocurrencies into mainstream adoption. One problem all new prospective cryptoowners face is the increadble complexity of buying cryptocurrencies. Most people that go to an establised exchange will be immediately turned off by what appears to be tranding platform aimed at professional buyers.</p><p>People need another route, something that it simpler to understand, something that can let other people do the hard work for them.<p>At the same time, there are many fantastic cryptomanagers out there that could fulfil this need if there was only a simpler and much cheaper way to reach customers.</p><p>That's why I really like CINDX as it targets fixing both problems with one solution, providing an ecosystem for both token buyers and token managers in an easy to use format. Where would share ownership be without similar solutions. If CINDX gets this right, it could have a huge impact on the next stage of cryptocurrency adoption.</p></div><div class="clear"></div></div></div><br><br><h2>Our Partners</h2><div class="owl_8 owl-carousel owl-theme" map_arr="1"><div class="item"><img src="desktop/files/images/ava_1.png"><h3>Progressor</h3><p>Legal support</p><hr><p style="cursor:pointer;text-decoration:underline;" href="https://progressor.ee/">progressor.ee</p></div><div class="item"><img src="desktop/files/images/ava_1_2.png"><h3>Yury Avdeev</h3><p>Chief Executive Officer</p><hr><p><span>13</span> years in entrepreneurship</p><p><span>9</span> ventures</p><p><span>$2m</span> for crypto management </p><a href="#" class="in"></a></div><div class="item"><img src="desktop/files/images/ava_1_3.png"><h3>Artur Shamalov</h3><p>Investment Director</p><hr><p><span>15</span> years in entrepreneurship</p><p><span>5000</span> mixcart.ru clients</p><p><span>$6.5 bn</span> investor in dc-daily.ru</p><a href="#" class="in"></a></div><div class="item"><img src="desktop/files/images/ava_1_4.png"><h3>Denis Eskenazi</h3><p>Product Director</p><hr><p><span>7</span> years in entrepreneurship</p><p><span>3</span> buisness degrees</p><p><span>10</span> years in prezentation design</p><a href="#" class="in"></a></div><div class="item"><img src="desktop/files/images/ava_1.png"><h3>Igor Okatiev</h3><p>Chief Financial Officer</p><hr><p><span>5</span> years in entrepreneurship</p><p><span>7</span> years in BRM</p><p><span>10</span> years in financial markets</p><a href="#" class="in"></a></div></div></div></div><div class="block_9"><div class="size"><h2>Join Token<br>Pre-Sale now!</h2><a href="#" class="sb" link="joinpresale">JOIN PRE-SALE</a><a href="#" class="sb_2" link="mvp">TEST MVP</a><form><input type="text" name="" placeholder="Your email"><button>SUBSCRIBE</button><div style="font-size:10px;padding-top:15px;">I agree with the processing of my personal data</div></form><div class="footer-block"><div><div class="footer-block-left"><div class="name">Head Office</div><div>Harjumaa, Erika 14, <br> Talinn, 10416, Estonia</div></div><div class="footer-block-right"><div class="name">Development and Marketing</div><div>Presnenskaya naberezhnaya, 8 building 1, <br> Moscow, 123112, Russia</div></div></div></div><div class="feedback-info"><div class="inquiries-block">For inquiries, please contact us at<a href="hello@cindx.io" target="_blank">hello@cindx.io</a></div><div><a class="small" href="#" link="ld">Legal Disclaimer</a></div></div></div></div></div></div><popup video><div class="rgba"></div><div class="th_video"><div class="close">close</div><div class="th_iframe"><iframe src="https://www.youtube.com/embed/Mjia-cv1QL0" allow="autoplay; encrypted-media"></iframe></div></div></popup>
  
  <link rel="stylesheet" type="text/css" href="desktop/files/css/style.css?v=1.1">
  <link rel="stylesheet" href="desktop/files/css/owl.carousel.min.css">
  <link rel="stylesheet" href="desktop/files/css/owl.theme.default.min.css">
  <link rel="stylesheet" href="desktop/files/css/jquery.fancybox.min.css">
`;

document.getElementById('codes-ajax').innerHTML = templateCodes;