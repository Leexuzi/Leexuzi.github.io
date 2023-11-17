$(document).ready(function(){
    $(".nav-placeholder").load("navbar.html");
    $(".footerPlaceholder").load("footer.html");
    
    //on load, it checks the size of the screen, then displays the specified media. this way, on bigger screens the video is not replaced, even if window is resized
    if(screen.width<800){
        $(".background-media").html('<img src="img/dung_beetle.jpeg"></img>');
    }
    else{
        $(".background-media").html('<video class="background blur" autoplay muted loop><source src="vid/video_town.mp4" type="video/mp4"></video>');
    }

    $(window).scroll(function(e) {
        let s = $(window).scrollTop();
        if(s<200){
            filterVal = Math.ceil(s / 50);
            $('.blur').css({
                'filter': 'blur(' + filterVal + 'px)'
            });
        }
    });

    
})
