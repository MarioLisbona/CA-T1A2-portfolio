const btnScrollUp = document.getElementById('btn-scrollup');

window.onload = btnScrollUp.style.display = 'none';

window.onscroll = function() {
    ShowHideButton()
};

function ShowHideButton() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btnScrollUp.style.display = "block";
      } else {
        btnScrollUp.style.display = "none";
      }
}

btnScrollUp.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})