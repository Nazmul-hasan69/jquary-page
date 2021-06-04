$ (function (){
    var elem = $('#elem');
    $ ('#toggle').click(function (){
        elem.toggle('slow');
    })

    
    var fade = $('#fade');
    $ ('#fadeIn').click(function (){
        fade.fadeIn('slow');
    })
    $ ('#fadeOut').click(function (){
        fade.fadeOut(1000);
    })
    $ ('#fadeToggle').click(function (){
        fade.fadeToggle(1000);
    })
    $ ('#fadeTo').click(function (){
        fade.fadeTo(1000,.5);
    })

    var slide = $('#slide')
    $ ('#slideUp').click(function (){
        slide.slideUp(1000);
    })
    $ ('#slideDown').click(function (){
        slide.slideDown(1000);
    })


    $('#animate').click(function () {
        $('#animation').animate({
           height: "500px",
           width:'500px'
        },2000)
    })
    $('#stopAnimate').click(function () {
       $('#animation').stop();
    })
})