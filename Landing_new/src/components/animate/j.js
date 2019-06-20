import star_moun from '../../images/5b05238fabbf26c7e7a31cdb_stars_mount.svg';
import mouns from '../../images/mountain_new23.70fbb83c.svg';
import sun from '../../images/Sun.svg';
import kabinka_2 from '../../images/kabinka_2.1ee5cce3.svg';
import finish_guy_gif from '../../images/finish_guy.gif';
import guy_gif from '../../media/Guy.f182b798.gif';

var resizeFunc = (function() {
  var pen = 0;

  var rfbcue;
  var rfbcue_top;
  var loaded_canvas;

  var animateDraw = function() {
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
        default: 
          break;
      }
    })

    loaded_canvas();
  };

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
      src: star_moun,
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
      src: sun,
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
      src: mouns,
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
      src: sun,
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
      src: kabinka_2,
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
      src: finish_guy_gif,
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
  ];

  var elems = [];
  var $canvas = document.getElementById('prlxCnvas2');
  var sizesCanvas = [pr_px(100, 0), pr_px(100, 1)];
  var ctx = $canvas.getContext('2d');
  var loaded_files = 0;

  loaded_canvas = function() {
    if(++loaded_files === 5){
      $canvas.width = sizesCanvas[0];
      $canvas.height = sizesCanvas[1];
    }
  }

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
        default:
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
      getOffsetExitAnimate();
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
      getOffsetExitAnimate();
      //window.requestAnimationFrame(animateDraw);
    };
    elems.push({
      type: 'html-image',
      style: data.style,
      key: key,
      target: newImg
    })
  }
  
  function pr_px(pr, diff) {
    var diffs = [
      window.innerWidth,
      window.innerHeight
    ];
    return pr * (diffs[diff] / 100);
  };

  function drawData(type, key, post) {
    var v;
    var $scrolls = animatesBlock[key].scroll;
    $scrolls.forEach(function(e, i) {
      if (e.type === type && e.start <= post) {
        v = e.end < post ? e.valueEnd : ((e.valueEnd - e.valueStart) / 100) * ((e.end - e.start) - (e.end - post)) / ((e.end - e.start) / 100) + e.valueStart;
      }
    });
    return v;
  };

  function getOffsetExitAnimate() {
    rfbcue = document.getElementById('exitAnimate');
    rfbcue_top = rfbcue.offsetTop;
  }

  getOffsetExitAnimate();

  var anm_blocks = document.getElementById('animateHtml');

  (function() {
    var menu_fixed = false;
    window.onscroll = function() {
      if(window.scrollY>50&&!menu_fixed){
        menu_fixed = true;
        anm_blocks.style.display = 'none';
      }else if(window.scrollY<50&&menu_fixed){
        menu_fixed = false;
        anm_blocks.style.display = 'block';
      }

      var vh = window.innerHeight;
      var th_scroll = window.scrollY === 0 ? 1 : window.scrollY;

      pen = (4000/((rfbcue_top-vh)/(th_scroll)));

      if (pen < 4200) {
        window.requestAnimationFrame(animateDraw);
      }
    };
  })();

  function html_rr() {
    anm_blocks.innerHTML = null;
    var guy_anm_parent = document.createElement('div');
    guy_anm_parent.className = 'guy_anm_parent';
    guy_anm_parent.style['width'] =   ((pr_px(120, 0) * .17)) + 'px';
    guy_anm_parent.style['height'] = ((pr_px(120, 0) * .04 * 1.2)) + 'px';
    guy_anm_parent.style['left'] =  ((pr_px(100, 0) - (pr_px(120, 0) * .025)) - (pr_px(58.75, 0))) + 'px';
    guy_anm_parent.style['top'] =     ((pr_px(100, 1) - (pr_px(120, 0) * .04 * .7) - (pr_px(2.8, 0)))) + 'px';
    var guyImage = new Image();
    guyImage.src = guy_gif;
    var guy_anm_bl = document.createElement('img');
    guy_anm_bl.src = guyImage.src;
    guy_anm_bl.onload = function() {
      guy_anm_bl.className = 'guy_anm_bl';
      //start_time_anm[0]();
    };
    guy_anm_parent.appendChild(guy_anm_bl);
    anm_blocks.appendChild(guy_anm_parent);
  };

  html_rr();
  init();
});

export default {
  resizeFunc
};

