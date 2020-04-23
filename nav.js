(function () {
  'use strict';

  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    moveBarToActiveMenu();
    if (scrollPosition >= 200) {
      setTimeout(() => {
        document.querySelector('header').classList.add('shrink');
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector('header').classList.remove('shrink');
      }, 300);
    }
  };

  var navMenu = document.querySelector('.nav-menu');
  var bar = document.querySelector('.bar');

  navMenu.querySelectorAll('li').forEach(function (item) {
    item.onmouseover = function () {
      bar.setAttribute('style', `width: ${item.firstChild.clientWidth}px;left: ${item.firstChild.offsetLeft}px`);
    };
    item.onmouseout = function () {
      moveBarToActiveMenu();
    };
    item.onclick = function () {
      resetActiveMenu();
      item.firstChild.classList.add('active');
      moveBarToActiveMenu();
    };
  });

  function resetActiveMenu() {
    navMenu.querySelectorAll('li a').forEach(function (item) {
      item.classList.remove('active');
    });
  }

  function moveBarToActiveMenu() {
    navMenu.querySelectorAll('li a').forEach(function (item) {
      if (item.classList.contains('active')) {
        bar.setAttribute('style', `width: ${item.clientWidth}px;left: ${item.offsetLeft}px`);
      }
    });
  }
  bar.setAttribute('style', `width: ${navMenu.firstChild.firstChild.clientWidth}px;left: ${navMenu.firstChild.firstChild.offsetLeft}px`);
})();
