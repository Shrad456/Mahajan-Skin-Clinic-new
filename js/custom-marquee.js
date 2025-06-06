$(function(){
    $('.de-marquee-list').marquee({
        direction: 'left',
        duration: 50000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });

    $('.wm-carousel').marquee({
        direction: 'left',
        duration: 20000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('myModal').style.display = 'block';
    }, 5000); // 50 seconds = 50000 milliseconds
  });


  let typeJsText = document.querySelector(".typeJsText");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;

typeJsText.innerHTML = "";

function typeJs() {
  if (counter < typeJsText.dataset.typetext.length) {
    counter++;
    typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
    textArray = typeJsText.dataset.typetext.split("");
  } else {
    textArray.pop();
    
  }
}

setInterval(() => {
  typeJs();
}, 100);




const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const close = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }


