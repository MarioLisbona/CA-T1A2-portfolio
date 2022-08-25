//create variable for all elements with class .blog-page-photos
const blogPhoto = document.querySelector('.blog-page-photos');
const btnClose = document.querySelector('.close');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

//Creating variables for each tuhmbnail with a unique id. 
//not sure why but I couldnt access all the thumbnails that have the class .demo with the one const like i did above with the blogPhoto variable
const thumbOne = document.getElementById('thumb-1');
const thumbTwo = document.getElementById('thumb-2');
const thumbThree = document.getElementById('thumb-3');
const thumbFour = document.getElementById('thumb-4');
const thumbFive = document.getElementById('thumb-5');
const thumbSix = document.getElementById('thumb-6');

//creating an array of each thumbnail html element
const photoArray = [thumbOne, thumbTwo, thumbThree, thumbFour, thumbFive, thumbSix];


// Callback function on blogphoto object. Returns an event (e) when one of objects children (the blog photo's) is clicked
//openModal is called
//currentSlide is passed an integer which is the position of the photo that is clicked.
blogPhoto.addEventListener('click', function(e) {
  openModal();
  currentSlide(getPhotoPosition(e.target));
});

//event listening on the close button to call the closeModal function
btnClose.addEventListener('click', () => {
  closeModal();
})

//event listening on the prev button to call the plusSlides function
btnPrev.addEventListener('click', () => {
  plusSlides(-1);
})

//event listening on the prev button to call the plusSlides function
btnNext.addEventListener('click', () => {
  plusSlides(1);
})

//for each element of photo array, have an event listener and when clicked pass the dataset from that element (photo number) to the currentSlide function
photoArray.forEach(function(e) {
    e.addEventListener('click', () => {
        currentSlide(parseInt(e.dataset.pos));
    })
})


/////////////////////////////////Function definitions///////////////////////////////

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

//initialising the showSlides function??
var slideIndex = 1;
showSlides(slideIndex);

// function to find the photo position of the photo that is clicked
function getPhotoPosition(x) {
  var y = 0;
  var children = x.parentNode.children;
  while (children[y] !== x) y++;
  y++;
  return y;
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


//logic fo showing thumbnails
//just noticed the use of getElementsByClassName method. will investigate whether this can be used instead of ther ID's and array for thumbnail images
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

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
