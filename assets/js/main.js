! function() {
    function e() { document.querySelector(".preloader").style.opacity = "0", document.querySelector(".preloader").style.display = "none" }
    window.onload = function() { window.setTimeout(e, 500) }, (new WOW).init(), window.onscroll = function() {
        var e = document.querySelector(".navbar-area"),
            t = e.offsetTop;
        window.pageYOffset > t ? e.classList.add("sticky") : e.classList.remove("sticky")
    };
    let t = document.querySelector(".mobile-menu-btn");
    t.addEventListener("click", function() { t.classList.toggle("active") })
}();
const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll("nav ul li");

function active() {
    let e = "";
    sections.forEach(function(t) {
        const o = t.offsetTop,
            n = t.clientHeight;
        pageYOffset >= o - n / 3 && (e = t.getAttribute("id"))
    }), navLi.forEach(function(t) { t.classList.remove("active"), t.classList.contains(e) && t.classList.add("active") })
}
window.addEventListener("scroll", active);
let card = document.querySelectorAll(".port");
card.forEach(e => { e.addEventListener("click", function() { e.classList.toggle("rotate") }) });
let loadMore = document.querySelector("#loadMore");
let currentItem = 3;

function seeMore() {
    let e = [...document.querySelectorAll(".container .image_container .port")];
    for (var t = currentItem; t < currentItem + 3; t++) e[t].style.display = "inline-block";
    (currentItem += 3) >= e.length && (loadMore.style.display = "none")
}
loadMore.addEventListener("click", seeMore);



function sendmail() {

    var name = $('#name').val();
    var email = $('#email').val();
    var mobile = $('#mobile').val();
    var extention = $('#extention').val();
    var message = $('#text').val();


    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Mobile: ' + mobile + '<br>Type: ' + extention + '<br>Message: ' + message;

    var spinner = `<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;


    $("#sendQuote").html(spinner);

    function sent() {
        let message = document.getElementById('message');
        console.log(message)
        message.innerHTML = `<span style="padding:8px; margin-top:8px;" class="badge bg-success">Thank you! We'll Get back to you soon.</span>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }

    function failed() {
        let message = document.getElementById('message');
        console.log(message)
        message.innerHTML = `<span style="padding:8px; margin-top:8px;" class="badge bg-danger">Try again.</span>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }
    var bookingForm = document.getElementById('bookingForm');

    Email.send({
        SecureToken: "d2d16b86-5e48-45fa-a179-438950376ff2",
        To: 'infocodecorex@gmail.com',
        From: "vampharsh@gmail.com",
        Subject: "Message from Client :- " + name,
        Body: Body
    }).then(
        message => {
            if (message == 'OK') {
                // alert('Your mail has been send. Thank you for connecting.');
                sent();
                $("#sendQuote").text("Send Us");
                bookingForm.reset();

            } else {
                // console.error(message);
                // alert('There is an error sending message.')
                failed();
                $("#sendQuote").text("Send Us");

            }

        }
    );
}