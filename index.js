AOS.init();

function loadNow(opacity) {
    if (opacity < 0) {
        loader.style.display = 'none';
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.04);
        }, 30);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById('loader');
    loadNow(1);
});


var countDownDate = new Date("Nov 24, 2022 15:37:25").getTime();

/* You can change date via countdownDate */

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("countdown-timer")[0].innerHTML = days + "Days " + hours + "H "
        + minutes + "Min " + seconds + "Sec ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("countdown-timer")[0].innerHTML = "EXPIRED";
        /* new link should be replace with '#' */
        $(".change-link").attr("href", "#");
    }
}, 1000);


function myFunction(x) {
    if (x.matches) {
        $(".remove").removeClass("active");
    } else {
        $(".carousel-item").addClass("active");
    }
}
var x = window.matchMedia("(max-width: 575px)");
myFunction(x);
x.addListener(myFunction)


const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
      });
};

backToTopButton.addEventListener("click", goToTop);
