(function () {
  'use strict';

  var section = document.querySelectorAll('.sec');

  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition + 100) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
    if (scrollPosition >= 200) {
      document.querySelector('header').classList.add('shrink');
    } else {
      document.querySelector('header').classList.remove('shrink');
    }
  };
})();
