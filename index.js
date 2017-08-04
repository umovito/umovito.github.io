$(function() {
    
        var basiccards = ['개구리', '기습', '넘치는 마나', '달빛섬광', '동전 한 닢', '동전의 화신', '선인의 치유력', '정신 자극', '토템의 힘', '환영 복제', '희생의 서약', '겸손', '공허방랑자', '냉기 충격', '돌발톱 토템', '돌엄니멧돼지', '돌진', '마음의 눈', '맹독', '멀록 약탈꾼', '멀록 정찰병', '멧돼지', '보호의 손길', '부두교 의술사', '부패', '북녘골 성직자', '불타는 토템', '사냥꾼의 징표', '사악한 일격', '성난비늘 수련사', '성스러운 일격', '소용돌이', '소형 기계용', '신비한 사격', '신비한 화살', '신의 권능: 보호막', '양', '엘프 궁수', '영혼의 불꽃', '은빛 성기사단 신병', '죽음의 고리', '천벌의 토템', '추적', '치유 토템', '할퀴기', '해골', '환영 복제', '황금골 보병', '회갈색 늑대', '힘의 축복', '급속 성장', '대지의 무기', '독칼', '마무리 일격', '멀록 바다사냥꾼', '민물악어', '불꽃의 토템', '붉은늪지랩터', '산성 늪수액괴물', '서리늑대 그런트', '서큐버스', '성스러운 빛', '신비한 폭발', '안 돼애애애애애', '야생의 징표', '어둠의 권능: 고통', '얼음 화살', '영웅의 일격', '정신 분열', '질풍', '천상의 정신', '코볼트 흙점쟁이', '푸른아가미 전사', '풋내기 기술자', '혼절시키기', '회전베기', '가시덩굴 사냥꾼', '공격대장', '늑대기수', '달라란 마법사', '레오크', '무너진 태양 성직자', '무쇠가죽 불곰', '미샤', '방패 막기', '사술', '살상 명령', '생명력 흡수', '신비한 지능', '아이언포지 소총병', '야생의 벗', '야생의 포효', '어둠의 권능: 죽음', '어둠의 화살', '얼음 회오리', '용암 광전사', '은빛털고릴라 우두머리', '전쟁노래 사령관', '치유의 손길', '칼날 부채', '킁킁이', '기계용 정비사', '노움 발명가', '물의 정령', '바람예언자', '변이', '사냥개조련사', '서리바람 설인', '센진 방패대가', '스톰윈드 기사', '신성화', '오아시스 무쇠턱거북', '오우거 마법사', '왕의 축복', '일제 사격', '지옥의 불길', '천벌의 망치', '코르크론 정예병', '화염구', '휘둘러치기', '구루바시 광전사', '굶주린 대머리수리', '무법항 경호원', '서리늑대 전쟁군주', '스톰파이크 특공대', '신성한 폭발', '암살', '암흑칼날', '어둠비늘 치유사', '툰드라 코뿔소', '피의 욕망', '공포의 지옥불정령', '대마법사', '돌주먹 오우거', '못 말리는 로켓병', '별빛섬광', '불의 정령', '소멸', '투기장의 제왕', '불기둥', '스톰윈드 용사', '심장부 사냥개', '왕의 수호자', '전력 질주', '전쟁 골렘', '무쇠껍질 수호정령', '정신 지배'];
        $("#button").click(function(e){
          e.preventDefault();
          $("#img").attr('src', '');
          $("#name").text('');
          $("#cardSet").text('');
          $("#type").text('');
          $("#rarity").text('');
          $("#desc").text('');
          NProgress.start();
          var requrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/' + basiccards[Math.floor(Math.random()*basiccards.length)];
          requrl += '?locale=koKR';
          $.ajax({
            method: "GET",
            beforeSend: function(request) {
              request.setRequestHeader("X-Mashape-Key", 'JffA8g8glAmsh2NPH79UZNpC40xbp1V4Y2njsnOsAsnikSS5x2');
            },
            async: true,
            url: requrl,
            dataType: 'json'
          }).done(function(data){
            $("#img").attr('src', data[0]['imgGold'] || data[1]['imgGold']);
            $("#name").text(data[0]['name']);
              $("#cardSet").text('베이직 카드');
              if(data[0]['type'] == 'Minion') {
              $("#type").text("하수인");  
              }
              else if(data[0]['type'] == 'Spell'){
              $("#type").text("주문");
              }
              else {
              $("#type").text("무기");
              }
              switch(data[0]['rarity']) {
                case 'Free':
                  $("#rarity").text("기본 카드")
                break;
                case 'Common':
                  $("#rarity").text("일반 카드")
                  break;
                case 'Rare':
                  $("#rarity").text("희귀 카드")
                  break;
                case 'Epic':
                  $("#rarity").text("영웅 카드")
                  break;
                case 'Legendary':
                  $("#rarity").text("전설 카드")
                  break;
              }
              if (data[0]['text'] == null) {
                $("#desc").html('');
              }
              else {
                var desc = data[0]['text'];
                desc = desc.replace(/\\n/g,' ')
                       .replace('[x]','')
                       .replace('#','')
                       .replace('$','');
                $("#desc").html(desc);
              }
              NProgress.done();      
          });
        });
        
      });

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'linear',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleSpeed: 200,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else if(n > 1) {
      return;
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.2) { amount = 0.1; }
        else if (n >= 0.2 && n < 0.5) { amount = 0.04; }
        else if (n >= 0.5 && n < 0.8) { amount = 0.02; }
        else if (n >= 0.8 && n < 0.99) { amount = 0.005; }
        else { amount = 0; }
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc();
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');

    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;

    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop,
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});

var smokemachine = function (context, color){
    color = color || [24, 46.8, 48.2]
    var polyfillAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var lastframe;
    var currentparticles = []
    var pendingparticles = []

    var buffer = document.createElement('canvas'),
        bctx = buffer.getContext('2d')

    buffer.width = 20
    buffer.height = 20

    var opacities = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,3,5,5,7,4,4,1,1,0,1,0,0,0,0,0,1,0,0,17,27,41,52,56,34,23,15,11,4,9,5,1,0,0,0,0,0,0,1,45,63,57,45,78,66,52,41,34,37,23,20,0,1,0,0,0,0,1,43,62,66,64,67,115,112,114,56,58,47,33,18,12,10,0,0,0,0,39,50,63,76,87,107,105,112,128,104,69,64,29,18,21,15,0,0,0,7,42,52,85,91,103,126,153,128,124,82,57,52,52,24,1,0,0,0,2,17,41,67,84,100,122,136,159,127,78,69,60,50,47,25,7,1,0,0,0,34,33,66,82,113,138,149,168,175,82,142,133,70,62,41,25,6,0,0,0,18,39,55,113,111,137,141,139,141,128,102,130,90,96,65,37,0,0,0,2,15,27,71,104,129,129,158,140,154,146,150,131,92,100,67,26,3,0,0,0,0,46,73,104,124,145,135,122,107,120,122,101,98,96,35,38,7,2,0,0,0,50,58,91,124,127,139,118,121,177,156,88,90,88,28,43,3,0,0,0,0,30,62,68,91,83,117,89,139,139,99,105,77,32,1,1,0,0,0,0,0,16,21,8,45,101,125,118,87,110,86,64,39,0,0,0,0,0,0,0,0,0,1,28,79,79,117,122,88,84,54,46,11,0,0,0,0,0,0,0,0,0,1,0,6,55,61,68,71,30,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,23,25,20,12,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,9,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,2,0,0,0,0,0,0,0,0]

    var data = bctx.createImageData(20,20)
    var d = data.data

    for(var i=0;i<d.length;i+=4){
        d[i]=color[0]
        d[i+1]=color[1]
        d[i+2]=color[2]
        d[i+3]=opacities[i / 4]
    }

    bctx.putImageData(data,0,0)

    var imagewidth = 20 * 5
    var imageheight = 20 * 5

    function particle(x,y,l){
        this.x = x
        this.y = y
        this.age = 0
        this.vx = (Math.random()*8-4)/100
        this.startvy = -(Math.random()*30+10)/100
        this.vy = this.startvy
        this.scale = Math.random()*.5
        this.lifetime = Math.random()*l+l/2
        this.finalscale = 5+this.scale+Math.random()

        this.update = function(deltatime){
            this.x+=this.vx*deltatime
            this.y+=this.vy*deltatime
            var frac = Math.pow((this.age)/this.lifetime,.5)
            this.vy = (1-frac)*this.startvy
            this.age+=deltatime
            this.scale=frac*this.finalscale
        }

        this.draw = function(){
            context.globalAlpha = (1-Math.abs(1-2*(this.age)/this.lifetime))/8
            var off = this.scale*imagewidth/2
            var xmin = this.x-off
            var xmax = xmin+this.scale*imageheight
            var ymin = this.y-off
            var ymax = ymin+this.scale*imageheight
            context.drawImage(buffer, xmin, ymin, xmax-xmin, ymax-ymin)
        }
    }


    function addparticles(x,y,n,lifetime){
        lifetime = lifetime || 4000
        n = n || 10
        if(n < 1) return Math.random() <= n && pendingparticles.push(new particle(x,y,lifetime));
        for (var i = 0; i < n; i++) {
            pendingparticles.push(new particle(x,y,lifetime))
        };
    }

    function updateanddrawparticles(deltatime){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);   
        deltatime = deltatime || 16
        var newparticles = []
        currentparticles = currentparticles.concat(pendingparticles)
        pendingparticles = []

        currentparticles.forEach(function(p){
            p.update(deltatime)
            if (p.age<p.lifetime){
                p.draw()
                newparticles.push(p)
            }
        })
        currentparticles = newparticles
    }

    function frame(time){
        if(running){
            var deltat = time-lastframe
            lastframe = time;

            updateanddrawparticles(deltat)

            polyfillAnimFrame(frame)
        }
    }

    var running = false
    function start(){
        running = true
        polyfillAnimFrame(function(time){
            lastframe = time
            polyfillAnimFrame(frame)
        })
    }

    function stop(){
        running = false
    }

    return {
        start:start,
        stop:stop,
        step: updateanddrawparticles,
        addsmoke: addparticles
    }

}