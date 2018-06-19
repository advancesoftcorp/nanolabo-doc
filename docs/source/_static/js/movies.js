$(function (){
    var movies = [];
    var images = [];
   
    $('.youtube iframe').each(function(index, element) {
        var movie_src = $(this).attr('src');
        movies[index] = movie_src
        images[index] = 'http://i.ytimg.com/vi' + movie_src.substring(movie_src.lastIndexOf("/")).replace(/\?[^\?]*$/, "") + '/maxresdefault.jpg'
        $(this).after('<div class="youtube_play"><img src="' + images[index] + '"><div class="youtube_btn"></div></div>').remove();
    });
   
    $('.youtube_play').each(function(index, element) {
        $(this).click(function(){
            $(this).after('<iframe src="' + movies[index].replace(/(?:\?([^\?]*))?$/, "?autoplay=1&$1") + '" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>').hide();
        });
        $(this).hover(function(){
            $(".youtube_btn").eq([index]).css("background-image","url('_static/youtube_social_icon_white.png')");
        },function(){
            $(".youtube_btn").eq([index]).css("background-image","");
        });
    });
});