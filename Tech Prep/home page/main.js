const paragraphs = document.querySelectorAll(".section__paragraph");
const headerTitle = document.querySelector(".header__title");

document.addEventListener("DOMContentLoaded", function() {
  // Fade in the header title
  headerTitle.classList.add("header__title--visible");
});

document.addEventListener("scroll", function(){
  paragraphs.forEach(paragraph => {
    if(isInView(paragraph)){
      paragraph.classList.add("section__paragraph--visible")
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}

/* Arrow for website */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var arrow = document.querySelector(".scroll-down-arrow");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.classList.add("hide-arrow"); /* Hide arrow when scrolled down */
  } else {
    arrow.classList.remove("hide-arrow"); /* Show arrow when at the top */
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var arrow = document.querySelector(".scroll-down-arrow2");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.classList.add("hide-arrow"); /* Hide arrow when scrolled down */
  } else {
    arrow.classList.remove("hide-arrow"); /* Show arrow when at the top */
  }
}
