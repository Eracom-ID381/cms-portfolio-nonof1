$(window).on("mousemove", function(event) {
    var x = event.pageX,
        y = event.pageY,
        wW = $(window).width(),
        wH = $(window).height(),
        dY = ((y / wH) * 135) - 67.5,
        dX = ((x / wW) * 360) - 180;
    $('#carte').css('transform', 'translate3d(-50%, -50%, 0) rotateY(' + dX + 'deg) rotateX(' + dY + 'deg)');
});
$('#carte').on('click', function() {
    $(this).toggleClass('flip');
});