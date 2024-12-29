//1.用按鈕撥放圖片2.加入點3.自動撥放
var slideIndex=0;
var mytimer=null;
//showSlides(slideIndex);
autoplay(true);

function currentSlide(n){
  showSlides(slideIndex=n);
}


function plusSlides(n){
  showSlides(slideIndex+=n);
}

function showSlides(n){
  clearTimeout(mytimer);
  var slides=document.getElementsByClassName("mySlides");
  var dots=document.getElementsByClassName("dot")

  if (n>=slides.length){
    slideIndex=0;
  }
  if (n<0){
    slideIndex=slides.length-1;
  }
  for (var i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }

  slides[slideIndex].style.display="block";

  for(var i=0;i<dots.length; i++){
    dots[i].className=dots[i].className.replace("active","")
  }
  dots[slideIndex].className+=" active";
}

function autoplay(isFirst){
  var slides=document.getElementsByClassName("mySlides");
  if(isFirst){
    slideIndex=0;
  }
  else{
    slideIndex++;
  }

  if(slideIndex>slides.length){
    slideIndex=0;
  }
  showSlides(slideIndex);
  mytimer=setTimeout("autoplay()",3000);
    

}
//-----------------------------hottop---------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const leftButton = document.getElementById('left-button');
  const rightButton = document.getElementById('right-button');
  const container = document.querySelector('.hottop');

  // Rotate images to the right
  function rotateRight() {
      const images = document.querySelectorAll('.hottop img');
      const lastImage = images[images.length - 1];
      
      // 插入到最前面
      container.insertBefore(lastImage, images[0]);

      // 更新圖片大小樣式
      updateClasses();
  }

  // Rotate images to the left
  function rotateLeft() {
      const images = document.querySelectorAll('.hottop img');
      const firstImage = images[0];
      
      // 插入到最後面
      container.appendChild(firstImage);

      // 更新圖片大小樣式
      updateClasses();
  }

  // 更新圖片的 class
  function updateClasses() {
      const images = document.querySelectorAll('.hottop img');
      
      images.forEach((img, index) => {
          img.classList.remove('large', 'small');
          if (index === 1) {
              img.classList.add('large'); // 中間圖片
          } else {
              img.classList.add('small'); // 左右兩側圖片
          }
      });
  }

  // 按鈕點擊事件
  leftButton.addEventListener('click', rotateLeft);
  rightButton.addEventListener('click', rotateRight);

  // 初始更新圖片樣式
  updateClasses();
});


