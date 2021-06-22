// Selectors

const filterButtons = document.querySelector('.sortBtn');
const searchItem = document.getElementById('search-item');
const searchButton = document.getElementById('search-icon');
const lightBoxContainer = document.querySelector('.lightbox-container');
const allContainer = document.getElementById('store');
const allStoreElements = document.querySelectorAll('.store-item');
const allStoreImgs = document.querySelectorAll('.store-img');
const imgArray = [];

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (searchItem.value) {
    //console.log(allStoreElements);
    allStoreElements.forEach((element) => {
      element.classList.remove('hide');
      if (element.dataset.item !== searchItem.value) {
        element.classList.add('hide');
      }
    });
  }
});

// filter by buttons
filterButtons.addEventListener('click', (e) => {
  e.preventDefault();
  const selectedFilter = e.target.text;
  if (selectedFilter) {
    //console.log(allStoreElements);
    allStoreElements.forEach((element) => {
      element.classList.remove('hide');
      //console.log(element.dataset);
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

allStoreImgs.forEach((element) => {
  imgArray.push(element.getAttribute('src'));
});

//Modal window show on click
allStoreImgs.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    console.log(imgArray[index]);
    lightBoxContainer.classList.add('show');
    lightBoxContainer.style.backgroundImage = `url(${imgArray[index]})`;
  });
});

lightBoxContainer.addEventListener('click', () => {
  if (lightBoxContainer.classList.contains('show')) {
    lightBoxContainer.classList.remove('show');
  }
});
