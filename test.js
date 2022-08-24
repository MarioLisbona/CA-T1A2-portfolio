//create variable for all elements with class .blog-page-photos
const blogPhoto = document.querySelector('.blog-page-photos');
const btnClose = document.querySelector('.close');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

const thumbOne = document.getElementById('thumb-1');
const thumbTwo = document.getElementById('thumb-2');
const thumbThree = document.getElementById('thumb-3');
const thumbFour = document.getElementById('thumb-4');
const thumbFive = document.getElementById('thumb-5');
const thumbSix = document.getElementById('thumb-6');

const photoArray = [thumbOne, thumbTwo, thumbThree, thumbFour, thumbFive, thumbSix];

photoArray.forEach(function(e) {
    e.addEventListener('click', () => {
        // console.log(e.dataset.pos);
        currentSlide(e.dataset.pos);
    })
})

// console.log(thumbTwo.dataset.pos);


btnClose.addEventListener('click', () => {
    closeModal();
})

btnPrev.addEventListener('click', () => {
    plusSlides(-1);
})

btnNext.addEventListener('click', () => {
    plusSlides(1);
})

// Callback function on blogphoto nodelist. Returns an event (e) when one of the blog photo's is clicked
//openModal is called
//currentSlide is passed an integer which is the position of the photo that is clicked.
blogPhoto.addEventListener('click', function(e) {
    openModal();
    currentSlide(getPhotoPosition(e.target));
});




// function to find the photo position of the photo that is clicked
function getPhotoPosition(x) {
    var y = 0;
    var children = x.parentNode.children;
    while (children[y] !== x) y++;
    y++;
    return y;
  }


// ///////////////////////IMG MODAL ////////////////////////
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }








  //blogPhoto.addEventListener('click', function(e) {
//     console.log(e.srcElement.currentSrc);
//     console.log(e);
//     console.log(e.target);
//     Funk(e.target);
// })

