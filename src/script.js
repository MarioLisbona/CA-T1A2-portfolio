//Variable for the scroll up button element
const btnScrollUp = document.getElementById('btn-scrollup');

// As soon as th window loads set the display to none.
//This was needed as the button was showing when the window loaded
window.onload = btnScrollUp.style.display = 'none';

//call the showHideButton everytime the user srolls the window
window.onscroll = function() {
    showHideButton()
};

//checks to see whether the page has been scrolled more than 30px from the top of the body or the document and shows the button if either is trure
function showHideButton() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btnScrollUp.style.display = "block";
      } else {
        btnScrollUp.style.display = "none";
      }
}

//event listener on the scroll up button. When clicked it will set the scroll value to 0 on the body and document elements.
btnScrollUp.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
