// Selectors

const filterButtons = document.querySelector(".sortBtn");
const searchItem = document.getElementById("search-item");
const searchButton = document.getElementById("search-icon");

console.log(searchItem.innerText);

//filter by find button

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (searchItem.value) {
    const allStoreElements = document.querySelectorAll(".store-item");
    //console.log(allStoreElements);
    allStoreElements.forEach((element) => {
      element.classList.remove("hide");
      if (element.dataset.item !== searchItem.value) {
        element.classList.add("hide"); ////
      }
    });
  }
});

// filter by buttons
filterButtons.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedFilter = e.target.text;
  if (selectedFilter) {
    const allStoreElements = document.querySelectorAll(".store-item");
    //console.log(allStoreElements);
    allStoreElements.forEach((element) => {
      element.classList.remove("hide");
      //console.log(element.dataset);
      switch (selectedFilter) {
        case "cakes":
          if (element.dataset.item !== selectedFilter) {
            console.log(element);
            element.classList.add("hide");
          }
        case "all":
          if (element.dataset.item !== selectedFilter) {
            element.classList.remove("hide");
          }
        case "cupcakes":
          if (element.dataset.item !== selectedFilter) {
            console.log(element);
            element.classList.add("hide");
          }
        case "sweets":
          if (element.dataset.item !== selectedFilter) {
            console.log(element);
            element.classList.add("hide");
          }
        case "doughnuts":
          if (element.dataset.item !== selectedFilter) {
            console.log(element);
            element.classList.add("hide");
          }
      }
    });
  }
});
