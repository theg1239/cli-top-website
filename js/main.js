const about = document.querySelector('#about')
const download = document.querySelector('#download')
const setup = document.querySelector('#setup')
const setupContent = document.querySelector('#setup-content')
const aboutContent = document.querySelector('#about-content')
const downloadContent = document.querySelector('#download-content')

let aboutBoxOpen = false;
let downloadBoxOpen = false;
let setupBoxOpen = false;

about.addEventListener('click', () => {
  if (!aboutBoxOpen) {
    aboutBoxOpen = true;

    const isMobile = window.innerWidth < 427;
    const width = isMobile ? '100%' : '400px';
    const height = isMobile ? '300px' : '400px';
    const x = isMobile ? 'center' : ((window.innerWidth / 4 - 200) > 0) ? `${window.innerWidth / 4 - 200}px` : '0px';
    const y = 'center';

    const aboutBox = new WinBox({
      title: 'About',
      width: width,
      height: height,
      x: x,
      y: y,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777');
      },
      onclose: function () {
        aboutBoxOpen = false;
      },
    });
  }
});

download.addEventListener('click', () => {
  if (!downloadBoxOpen) {
    downloadBoxOpen = true;
    const isMobile = window.innerWidth < 427;
    const width = isMobile ? '100%' : '400px';
    const height = isMobile ? '300px' : '400px';
    const x = isMobile ? 'center' : 'center';
    const y = isMobile ? 'center' : '325';

    const downloadBox = new WinBox({
      title: 'Download',
      background: '#00aa00',
      width: width,
      height: height,
      x: x,
      y: y,
      mount: downloadContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777');
      },
      onclose: function () {
        downloadBoxOpen = false;
      },
    });
  }
});



setup.addEventListener('click', () => {
  if (!setupBoxOpen) {
    setupBoxOpen = true;
    const setupContainer = document.getElementById('setup-content');
    const isMobile = window.innerWidth < 427;
    const width = isMobile ? '100%' : '400px';
    const height = isMobile ? '300px' : '400px';
    const x = isMobile ? 'center' : (((window.innerWidth - (3 * (window.innerWidth / 4) - 200))) > 400) ? `${3 * (window.innerWidth / 4) - 200}px` : `${(window.innerWidth - 400)}px`;
    const y = 'center';

    const setupBox = new WinBox({
      title: 'Setup',
      background: '#00aa00',
      width: width,
      height: height,
      x: x,
      y: y,
      mount: setupContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777');
      },
      onclose: function () {
        setupBoxOpen = false;
      },
    });
  }
});




// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 70 + 100 *
        Math.random())
    };
    e()
  });
  return this
};
$(".terminal").typewriter();


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
};