let slideImg = document.querySelectorAll(".slider img");
let imgNumber = slideImg.length;
let currentSlide = 1;
let slideNumberelemant = document.querySelector(".slide-num");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let FirstSlide = document.querySelector(".button")
let lastSlide = document.querySelector(".button-last")
let ulElemant = document.createElement('ul');
ulElemant.setAttribute('id', 'ulslide');

for (let i = 1; i <= imgNumber; i++) {
  let liElemant = document.createElement('li');
  liElemant.setAttribute('data-index', i);
  liElemant.appendChild(document.createTextNode(i));
  ulElemant.appendChild(liElemant);
}
document.getElementById('number').appendChild(ulElemant);

let imgButton = document.querySelectorAll("#ulslide li");

/* تعريف الدوال */
function removeAllactive() {
  slideImg.forEach(img => img.classList.remove("active"));
  imgButton.forEach(button => button.classList.remove("active"));
}

// استرجاع السلايد من localStorage لو موجود
if (localStorage.getItem("current-slide")) {
  currentSlide = parseInt(localStorage.getItem("current-slide"), 10);
}


function check() {
  // أول حاجة نشيل أي active قديم
  removeAllactive();
  

  // نعرض رقم الشريحة
  slideNumberelemant.innerHTML = `Slide #${currentSlide} Of ${imgNumber}`;

  // نضيف active للشريحة الحالية ولزرها
  slideImg[currentSlide - 1].classList.add("active");
  ulElemant.children[currentSlide - 1].classList.add("active");

  // نحدّث حالة الأزرار
  if (currentSlide === 1) {
    prevButton.classList.add("disable");
  } else {
    prevButton.classList.remove("disable");
  }

  if (currentSlide === imgNumber) {
    nextButton.classList.add("disable");
  } else {
    nextButton.classList.remove("disable");
  }

  localStorage.setItem("current-slide", currentSlide);


}

/* استدعاء مبدئي */
check();

/* أحداث الأزرار */
nextButton.onclick = function () {
  if (currentSlide < imgNumber) {
    currentSlide++;
    check();
  }
};

prevButton.onclick = function () {
  if (currentSlide > 1) {
    currentSlide--;
    check();
  }
};

/* (اختياري) حدث للنقر على الـ bullets عشان ينقلك لشريحة رقمية */
imgButton.forEach(btn => { 
  btn.addEventListener("click", (e) => {
    currentSlide = parseInt(e.target.dataset.index, 10);
    check();
  });
});

FirstSlide.onclick = function(){
  if(currentSlide !== 1){
    currentSlide = 1
    check()
  }
}
lastSlide.onclick = function(){
  if(currentSlide < imgNumber){
    currentSlide = slideImg.length
    check()

  }
}