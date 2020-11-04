var message="Mikir su asu, due utek pa ora";
function clickIE4(){
  if(event.button==2){
    alert(message);
    return false;
  }
}
function clickNS4(e){
  if(document.layers||document.getElementById&&!document.all){
    if(e.which==2||e.which==3){
      alert(message);
      return false;
    }
  }
}
if(document.layers){
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown=clickNS4;
}else if(document.all&&!document.getElementById){
  document.onmousedown=clickIE4;
}
$(".class").keydown(function(event) {
return false;
});
document.oncontextmenu=new Function("alert(message);return false");
$ (document).ready(function(){

  setInterval(newActivity, 5000);

  function newActivity() {
    var prof = [    'https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png',
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                    'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                    'https://i.pinimg.com/564x/04/56/86/0456869906dfa906c494b2b63aa67f2a.jpg',
                    'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlQBG3l--K5nc9j9Q2rOI3F2aLBlGlkMUZAg&usqp=CAU',
                    'https://i.pinimg.com/736x/71/d5/6b/71d56b3f757dc66b81f2264ece77bed7.jpg',
                    'https://i.pinimg.com/736x/2f/22/6d/2f226d95f8e6c85948742d62c2121d89.jpg',
                    'https://i.pinimg.com/736x/88/63/6e/88636e05ef6ef31c0a218023bdf093c0.jpg',
                    'https://i.pinimg.com/736x/9c/91/e0/9c91e06b6538e8bb941314a25207835f.jpg',
                    'https://appamatix.com/wp-content/uploads/2015/09/Zweihander-450x446.png',
                    'https://ignitehq.com/wp-content/uploads/2019/03/caleb-e1553614949231.jpeg',
                    'https://pbs.twimg.com/profile_images/889369871951122432/_QmrInAN_400x400.jpg'];

    var comm = ['Wow, super dobrze, już wziąłem pieniądze, dziękuję! Bóg cię błogosławi','prawdziwe wydarzenie','Wygrałem 5000 po rejestracji','bardzo słuszne ... niech Bóg błogosławi',
                'dzięki za ludzkość','Skończyłem się zarejestrować','wierzę, ponieważ gotowe otrzymałem moje 5000','bardzo Ci dziękuję',
                'kocham Cię','twoja najlepsza para ludzkości','lubię to wydarzenie','naprawdę dostałem moje 5000','niesamowita ludzkość para',
                'Niech cię Bóg błogosławi','zarejestrowałem się i otrzymałem moje 5000'];

    var user = ['carlos stuff','ben yamin', 'taylor dumet','jhon cena','the rock','curioso rael','mael lee','kunyuk beter','buadjing hael','georgia masera','Tukiminate','Ramos swaede', 'Fernando cess','Thunder yeyt'];

    var pic = [ 'https://bit.ly/39tzIyJ',
                'https://bit.ly/38onFBf',
                'https://bit.ly/2PUJm5R',
                'https://bit.ly/2wrGKVU',
                'https://bit.ly/2wlFYdb',
                'https://bit.ly/39kcLxN',
                'https://bit.ly/2W0RVzA',
                'https://bit.ly/38gvb17',
                'https://bit.ly/3anVFPJ',
                'https://bit.ly/38hF7rf'];

    var profs = prof[Math.floor(Math.random()*prof.length)];
    var comms = comm[Math.floor(Math.random()*comm.length)];
    var pics = pic[Math.floor(Math.random()*pic.length)];
    var users = user[Math.floor(Math.random()*user.length)];

    $('.fb_comment_wrapper').last().remove();
    $('.activityContent').hide().prepend('<div class="fb_comment_wrapper">'+
    '<div class="fb_image_block"><img src="'+profs+'" class="fb_pic"/></div>'+
  '<div class="fb_comment_block"><div class="fb_name">'+users+'</div><div class="fb_comment">'
  +comms+'<img src="'+pics+
  '" class="img-responsive img_comment"></div></div><div class="fb_meta"><a onclick="JavaScript:alert("You must create an account before commenting."")" class="fb_like fb_meta_item">Like</a> •<a onclick="JavaScript:alert("You must create an account before commenting.")" class="fb_like fb_meta_item">Reply</a> •<img class="fb_like_button fb_meta_item" src="https://www.facebook.com/images/ufi/fbfeed/like.png"><span class="like_count fb_meta_item">190</span> •<span class="fb_timestamp"><div class="fb_image_block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>just a few seconds</span></div></div>').fadeIn();
  }
});
