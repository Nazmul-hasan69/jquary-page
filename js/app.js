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
})