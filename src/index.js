const allTabs = document.querySelectorAll(".tabs li");
const allContents = document.querySelectorAll(".main div");
allTabs.forEach(function(element) {
  element.addEventListener("click", function(e) {
    //remove "is-active" class from all the tabs
    allTabs.forEach(function(innerElement) {
      innerElement.classList.remove("is-active");
    });
    element.classList.add("is-active");
    allContents.forEach(function(content) {
      content.classList.remove("isactive");
      content.classList.add("isinactive");
    });
    allContents[element.dataset.tab].classList.add("isactive");
    allContents[element.dataset.tab].classList.remove("isinactive");
  });
});
