// tooltip
$(function () {
    $('#inicio').tooltip({ title: "Inicio", placement: "bottom" });
    $('#quienesSomos').tooltip({ title: "Quienes Somos", placement: "bottom" });
    $('#destacadosNav').tooltip({ title: "Destacados", placement: "bottom" });
    $('#contactoNav').tooltip({ title: "Contacto", placement: "bottom" });
});

// scroll
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var scrollPosition = target.offset().top - 50;
            $('html, body').stop().animate({
                scrollTop: scrollPosition
            }, 1000);
        }
    });
});

// alert
$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        alert('Mensaje enviado!');
    });
});
