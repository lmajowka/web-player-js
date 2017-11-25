(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)){ return; }
js = d.createElement(s); js.id = id;
js.onload = function(){
    // remote script has loaded
};
js.src = "https://s3.amazonaws.com/web-player-js/web_player.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'web-player-js'));

