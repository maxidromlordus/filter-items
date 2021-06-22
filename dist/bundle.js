(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Selectors
var filterButtons = document.querySelector('.sortBtn');
var searchItem = document.getElementById('search-item');
var searchButton = document.getElementById('search-icon');
var lightBoxContainer = document.querySelector('.lightbox-container');
var allContainer = document.getElementById('store');
var allStoreElements = document.querySelectorAll('.store-item');
var allStoreImgs = document.querySelectorAll('.store-img');
var imgArray = [];
searchButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (searchItem.value) {
    //console.log(allStoreElements);
    allStoreElements.forEach(function (element) {
      element.classList.remove('hide');

      if (element.dataset.item !== searchItem.value) {
        element.classList.add('hide');
      }
    });
  }
}); // filter by buttons

filterButtons.addEventListener('click', function (e) {
  e.preventDefault();
  var selectedFilter = e.target.text;

  if (selectedFilter) {
    //console.log(allStoreElements);
    allStoreElements.forEach(function (element) {
      element.classList.remove('hide'); //console.log(element.dataset);

      switch (selectedFilter) {
        case 'cakes':
          if (element.dataset.item !== selectedFilter) {
            element.classList.add('hide');
            break;
          }

        case 'all':
          if (element.dataset.item !== selectedFilter) {
            element.classList.remove('hide');
            break;
          }

        case 'cupcakes':
          if (element.dataset.item !== selectedFilter) {
            element.classList.add('hide');
            break;
          }

        case 'sweets':
          if (element.dataset.item !== selectedFilter) {
            element.classList.add('hide');
            break;
          }

        case 'doughnuts':
          if (element.dataset.item !== selectedFilter) {
            element.classList.add('hide');
            break;
          }

      }
    });
  }
});
allStoreImgs.forEach(function (element) {
  imgArray.push(element.getAttribute('src'));
}); //Modal window show on click

allStoreImgs.forEach(function (element, index) {
  element.addEventListener('click', function (e) {
    console.log(imgArray[index]);
    lightBoxContainer.classList.add('show');
    lightBoxContainer.style.backgroundImage = "url(".concat(imgArray[index], ")");
  });
});
lightBoxContainer.addEventListener('click', function () {
  if (lightBoxContainer.classList.contains('show')) {
    lightBoxContainer.classList.remove('show');
  }
});
},{}]},{},[1]);
