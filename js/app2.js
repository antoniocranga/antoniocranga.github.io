function cursorMoveFunc() {
    var es = document.querySelector(".qc-cursor");

    $('body').on("mousemove", function (e) {
        es.style.position = 'fixed';
        es.style.left = e.clientX + -20 + 'px';
        es.style.top = e.clientY + -20 + 'px';
    });

    $( ".toggle" ).hover(function() {
        $('.qc-cursor-menu').show(500);
    });

    $('.toggle').mouseleave(function(){
        $('.qc-cursor-menu').hide(300);
    });

    var video = document.getElementById('video-cursor');

    $(".clown").hover(function() {
        $('.d-clown').show();
        $('.qc-cursor-media-box').addClass('opened');
    });

    $('.clown').mouseleave(function(){
      $('.d-clown').hide();
      $('.qc-cursor-media-box').removeClass('opened');
    });

    $(".design").hover(function() {
        $('.d-design').show();
        $('.qc-cursor-media-box').addClass('opened');
    });

    $('.design').mouseleave(function(){
        $('.d-design').hide();
        $('.qc-cursor-media-box').removeClass('opened');
    });

    $(".business").hover(function() {
        $('.d-business').show();
        $('.qc-cursor-media-box').addClass('opened');
    });

    $('.business').mouseleave(function(){
        $('.d-business').hide();
        $('.qc-cursor-media-box').removeClass('opened');
    });

    $( ".design-h" ).hover(function() {
        //let ids = document.querySelector(".design-h").getAttribute('data-video');
        $('.meqe').show();
        let ids = $(this).attr('data-video');
        video.setAttribute("src", ids);
        $('.qc-cursor-media-box').addClass('opened');
    });

    $('.design-h').mouseleave(function(){
        $('.qc-cursor-media-box').removeClass('opened');
        $('.meqe').hide();
    });
}

var brandCount = 1;
while(brandCount<4){

  $('#brand'+brandCount).removeClass('slide-out-top').addClass('slide-out-top');
  $('#brand'+(brandCount+4)).removeClass('slide-in-top').addClass('slide-in-top');
  brandCount++;

}
brandCount = 1;
setInterval(function(){


  if($('#brand'+brandCount).hasClass('slide-out-top')){


    $('#brand'+brandCount).removeClass('slide-out-top').removeClass('slide-in-top').addClass('slide-in-top');

    $('#brand'+(brandCount+4)).removeClass('slide-in-top').removeClass('slide-out-top').addClass('slide-out-top');




  }
  else{
    $('#brand'+brandCount).removeClass('slide-in-top').removeClass('slide-out-top').addClass('slide-out-top');

    $('#brand'+(brandCount+4)).removeClass('slide-out-top').removeClass('slide-in-top').addClass('slide-in-top');


  }
  brandCount++;
  if(brandCount>4){
    brandCount=1;
  }

},800);

cursorMoveFunc();

$( ".qc-menu-backdrop" ).on("click", function (e) {
    $('.toggle').removeClass('is-open');
    $(".qc-menu-content").animate({  opacity: 1 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','translate(100%, 0px)'); 
      },
      duration: 'slow'
  },'linear');
    $(".menu-rights").animate({  opacity: 1 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','translate(100%, 0px)'); 
      },
      duration: 'slow'
  },'linear');
    setTimeout(function(){
      $('.qc-menu-box').hide();
  }, 700);
});

$( ".qc-menu-nav-item" ).on("click", function (e) {
    $('.toggle').removeClass('is-open');
    $(".qc-menu-content").animate({  opacity: 1 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','translate(100%, 0px)'); 
      },
      duration: 'slow'
  },'linear');
    $(".menu-rights").animate({  opacity: 1 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','translate(100%, 0px)'); 
      },
      duration: 'slow'
  },'linear');
    setTimeout(function(){
      $('.qc-menu-box').hide();
  }, 700);
});

$( ".toggle" ).on("click", function (e) {
    if($('.is-open').length !== 0){
        $(this).removeClass('is-open');
        $(".qc-menu-content").animate({  opacity: 1 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','translate(100%, 0px)'); 
          },
          duration: 'slow'
      },'linear');

        $(".menu-rights").animate({  opacity: 1 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','translate(100%, 0px)'); 
          },
          duration: 'slow'
      },'linear');

        setTimeout(function(){
          $('.qc-menu-box').hide();
      }, 700);

    }
    else{
        $(this).addClass('is-open');
        $('.qc-menu-box').show();
        $(".qc-menu-content").animate({  opacity: 1 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','translate(0%, 0px)'); 
          },
          duration: 'slow'
      },'linear');

        $(".menu-rights").animate({  opacity: 1 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','translate(0%, 0px)'); 
          },
          duration: 'slow'
      },'linear');
    }
});

let mm = new MagnetMouse({
  magnet: {
    element: '.magnetize',
    position: 'center',
    distance: 5
  }
});

mm.init();
