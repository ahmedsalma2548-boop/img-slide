let slideImg = document.querySelectorAll(".slider img");
let imgNumber = slideImg.length;
let currentSlide = 1;

let slideNum = document.querySelector(".slide-num");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let firstBtn = document.querySelector(".button");
let lastBtn = document.querySelector(".button-last");

let numberBox = document.querySelector("#number");

let ul = document.createElement("ul");
numberBox.appendChild(ul);

/* create bullets */
for (let i = 1; i <= imgNumber; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    li.dataset.index = i;
    ul.appendChild(li);
}

let bullets = document.querySelectorAll("ul li");

/* load saved slide */
if (localStorage.getItem("slide")) {
    currentSlide = Number(localStorage.getItem("slide"));
}

function updateSlider() {
    slideImg.forEach(img => img.classList.remove("active"));
    bullets.forEach(b => b.classList.remove("active"));

    slideImg[currentSlide - 1].classList.add("active");
    bullets[currentSlide - 1].classList.add("active");

    slideNum.textContent = `Slide ${currentSlide} / ${imgNumber}`;

    localStorage.setItem("slide", currentSlide);
}

updateSlider();

/* next */
nextBtn.onclick = () => {
    if (currentSlide < imgNumber) {
        currentSlide++;
        updateSlider();
    }
};

/* prev */
prevBtn.onclick = () => {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlider();
    }
};

/* bullets */
bullets.forEach(b => {
    b.onclick = (e) => {
        currentSlide = Number(e.target.dataset.index);
        updateSlider();
    };
});

/* first */
firstBtn.onclick = () => {
    currentSlide = 1;
    updateSlider();
};

/* last */
lastBtn.onclick = () => {
    currentSlide = imgNumber;
    updateSlider();
};