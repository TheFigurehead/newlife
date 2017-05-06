window.onload = function(){
  var modal = null;
  var modalOverlay = document.querySelector("#modal-overlay");;
  var openBtn = document.getElementsByClassName("modal-trigger");
  var cardElement = document.getElementsByClassName("card-element");
  var openModal = function() {

      var attribute = this.getAttribute("data-form");
      modal = document.querySelector("#"+attribute);
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      modal.classList.toggle("modal-runAnimation");
      for (var i = 0; i < cardElement.length; i++) {
        cardElement[i].classList.toggle('card-element-app');
      }

  };
  for (var i = 0; i < openBtn.length; i++) {
      openBtn[i].addEventListener('click', openModal, false);
  };
  var closeBtn = document.getElementsByClassName("modal-close");
  var closeModal = function() {
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      modal.classList.toggle("modal-runAnimation");
      for (var i = 0; i < cardElement.length; i++) {
        cardElement[i].classList.toggle('card-element-app')
      }
  };
  for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener('click', closeModal, false);
  };

  modalOverlay.addEventListener("click", function() {
    if(modal !== null){
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      modal.classList.toggle("modal-runAnimation");
      for (var i = 0; i < cardElement.length; i++) {
        cardElement[i].classList.toggle('card-element-app')
      }
    };
  });


}

 $(document).on('ready', function() {    

    //События на мобильный версии при свайпе

    $("body").swipe({

      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if(direction == "right"){
          $("#nav").animate({ "left": "0" }, "slow" ).addClass("active");
          $(".media-wrapper").addClass("dark");
        };
        if(direction == "left"){
          $("#nav").removeClass("active").animate({ "left": "-50%" }, "slow" );
          $(".media-wrapper").removeClass("dark");
        };
      },
       threshold:0
    });

    //События на мобильный версии при клике на бургер

    $("body").mouseup(function (e) { 
        var div = $('#nav');
        if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('active')) {
          div.animate({ "left": "-50%" }).removeClass("active");
          $(".media-wrapper").removeClass("dark");
        }
    });

    $(".mobile-menu-wrapper").on('click', function() {
        $("#nav").animate({ "left": "0" }).addClass("active");
        $(".media-wrapper").addClass("dark");        
    });

    // LightBOX
    
    baguetteBox.run('.main_carousel_list', {
        captions: false,
        animation: 'fadeIn'
    });

    //Slick-slider в футере

     $(".slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        respondTo: 'slider',
        arrows: false,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              draggable: false
            }
          }
        ]
      });

      $(".main_carousel_list").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        respondTo: 'slider',
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }

          ]      
        // centerMode: true
      });
      $('.main_carousel_nav_item.prev').click(function(){
        $(".main_carousel_list").slick('slickPrev');
      });
      $('.main_carousel_nav_item.next').click(function(){
        $(".main_carousel_list").slick('slickNext');
      });

      //GOOGLE MAP

      var map, map2;
      
      function initialize() {
        var myMap = {
          center: {lat: 46.483354, lng: 30.736293},
          zoom: 18,
          draggable: false,
          scrollwheel: false,
          disableDefaultUI: true
        }

        map = new google.maps.Map(document.getElementById("map"),myMap);
          var marker = new MarkerWithLabel({
            position: {lat: 46.483354, lng: 30.736293},
            map: map,
            title: 'ул.Греческая 44, офис 39',
            labelClass: "custom-class-for-label",
            labelContent: "Language School New Life",
            labelAnchor: new google.maps.Point(-10, 15),
          });      

        var myMap2 = {
          center: { lat: 46.402135, lng: 30.714938},
          zoom: 18,
          draggable: false,
          scrollwheel: false,
          disableDefaultUI: true
        }   

        map2 = new google.maps.Map(document.getElementById("map2"), myMap2); 
          var marker2 = new MarkerWithLabel({
            position: {lat: 46.402135, lng: 30.714938},
            map: map2,
            title: 'ул.Ильфа и Петрова 13-Б',
            labelClass: "custom-class-for-label",
            labelContent: "Language School New Life", 
            labelAnchor: new google.maps.Point(-10, 15),         
          }); 
      }
      initialize();
        
      $('.map-1').click(function(){
        $("#map2").css('display', 'none');
        if (!$("#map").is(':visible')) {
            $("#map").css('display', 'block');
            initialize();
        }
      });
      
      $('.map-2').click(function(){
        $("#map").css('display', 'none');
        if (!$("#map2").is(':visible')) {
            $("#map2").css('display', 'block');
            initialize();
        }
      }); 


  });

  //YOUTUBE 

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player, 
  videoid = $("#main_video").attr("data-video");
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('main_video', {
      playerVars: {
                autoplay: 0,
                loop: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                rel: 0,
                vq: 'hd1080'
      },
      videoId: videoid,
      events: {
        'onStateChange': onPlayerStateChange,
        'onReady': onPlayerReady,
      }
    });
  }

  onPlayerStateChange = function (event) {
      if (event.data == YT.PlayerState.PLAYING) {
          $('.preview-img-wrapper').fadeOut('normal');
      }
      if (event.data == YT.PlayerState.PAUSED) {
          $('.preview-img-wrapper').fadeIn(400);
      }
      if (event.data == YT.PlayerState.ENDED) {
          $('.preview-img-wrapper').fadeIn(400);
      }
  }

  onPlayerReady = function (event) {
      $('.main_video').on('click', function() {
          player.playVideo();
      });
  }