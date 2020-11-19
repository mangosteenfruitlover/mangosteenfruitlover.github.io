/* slider func */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function plusSlideMobile() {
    showSlidesMobile(slideIndexMobile += 1);
}
function minusSlideMobile() {
    showSlidesMobile(slideIndexMobile -= 1);
}
function currentSlideMobile(n) {
    showSlidesMobile(slideIndexMobile = n);
}
function showSlidesMobile(n) {
    let i;
    let slidesMobile = document.getElementsByClassName("mobileitem");
    let dotsMobile = document.getElementsByClassName("slider-dots-mobile_item");
    if (n > slidesMobile.length) {
        slideIndexMobile = 1
    }
    if (n < 1) {
        slideIndexMobile = slidesMobile.length
    }
    for (i = 0; i < slidesMobile.length; i++) {
        slidesMobile[i].style.display = "none";
    }
    for (i = 0; i < dotsMobile.length; i++) {
        dotsMobile[i].className = dotsMobile[i].className.replace(" activemobile", "");
    }
    slidesMobile[slideIndexMobile - 1].style.display = "block";
    dotsMobile[slideIndexMobile - 1].className += " activemobile";
}


/* calculator */

function calc() {
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    let describe = document.getElementById('describe').value;
    if (height == "") {
        alert("Вы не указали высоту!");
    } else if (width == "") {
        alert("Вы не указали ширину!");
    } else if (describe == "") {
        alert("Вы не указали описание!");
    } else {
        {
            let pricePerCm = 15;
            let size = (height) * Math.pow(width, 2);
            document.getElementById('size').innerHTML = "Объем: " + size + " см в кубе";
            let price = size * pricePerCm;
            document.getElementById('price').innerHTML = "Стоимость равна: " + price + " р.";
            document.getElementById('description').innerHTML = "Описание:  " + describe;
        }
    }
}

function order() {
    let email = document.getElementById('email').value;
    if (email == "") {
        alert("Вы не указали свой email!");
    } else {
        alert("Заказ отправлен, ждите ответа на свой e-mail!");
    }
}