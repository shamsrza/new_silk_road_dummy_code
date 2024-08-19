$(document).ready(function(){

    document.getElementById("deskMenu").style.opacity = 0;
    history.scrollRestoration = "manual";
  
    $(window).on('beforeunload', function(){
          $(window).scrollTop(0);
  
    });
  
    
      // Footer 
      var getYear = (new Date).getFullYear();
      var footer = '<div class="footer-left"><div class="footer-logo"><a href="https://www.oliverwyman.com/index.html" target="_blank" class="footer-ow-logo"><img src="/images/logo.png" alt="" /></a></div><div class="footer-text"><p>© ' + getYear + ' Oliver Wyman, LLC. All Rights Reserved.</p></div></div><div class="footer-right"><div class="social-icons"><ul><li><a href="https://www.linkedin.com/company/oliver-wyman" target="_blank"><img src="/images/linkedin.svg" alt="linked in" /></a></li><li><a href="https://twitter.com/OliverWyman" target="_blank"><img src="/images/twitter.svg" alt="linked in" /></a></li><li><a href="https://www.facebook.com/oliverwyman" target="_blank"><img src="/images/facebook.svg" alt="linked in" /></a></li></ul></div><div class="footer-links"><ul><li><a href="https://www.oliverwyman.com/terms-of-use.html" target="_blank">Terms Of Use</a></li><li><a href="https://www.oliverwyman.com/policies/privacy-notice.html" target="_blank">Privacy Notice</a></li><li><a href="https://www.oliverwyman.com/policies/cookie-notice.html" target="_blank">Cookie Notice</a></li><li class="terms-e" id="teconsent" consent="0,1,2,3" aria-label="Open Cookie Preferences Modal" role="complementary" onclick="Osano.cm.showDrawer(`osano-cm-dom-info-dialog-open`)"><script src="https://consent.trustarc.com/asset/notice.js/v/v1.7-458" async="async" crossorigin importance="high"></script><a role="link" id="icon-id024835688121725585" tabindex="0" lang="en" aria-haspopup="true" aria-label="Manage Cookies" class="truste_cursor_pointer terms-e">Manage Cookies</a></li></ul><div class="footer-text-mobile"><p>© ' + getYear + ' Oliver Wyman LLC. All Rights Reserved.</p></div></div></div>';
     
      $(".footer-content").html(footer);
  
  
    // Animation
      $(window).scroll(function() {
        if (window.matchMedia('(max-width: 912px)').matches) {
          drawLine( $('#bx_a'),document.getElementById('path-mobile') );
        } else {
          drawLine( $('#bx_a'),document.getElementById('path') );
        }
        positionTheDot();
  
      });
    
      // init the line length
      if (window.matchMedia('(max-width: 912px)').matches) {
        drawLine( $('#bx_a'),document.getElementById('path-mobile') );
      } else {
        drawLine( $('#bx_a'),document.getElementById('path') );
      }
      positionTheDot();		
  
    
      function positionTheDot() {
        // What percentage down the page are we? 
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        // var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.body.clientHeight);
  
        // console.log(scrollPercentage);
        // console.log(document.documentElement.clientHeight);
        // console.log(document.documentElement.scrollTop + document.body.scrollTop);
        // console.log(document.documentElement.scrollHeight - document.documentElement.clientHeight);
        // Get path length
        var path;
        var pathLen;
        if (window.matchMedia('(max-width: 912px)').matches){
          path = document.getElementById("path-mobile");
          if (window.matchMedia('(min-height: 1024px)').matches){
           pathLen =  path.getTotalLength() + (document.documentElement.scrollTop * 0.1);
          }else{
            pathLen =  path.getTotalLength() + (document.documentElement.scrollTop * 1.7);
          }
        }else if(window.matchMedia('(max-width: 1750px)').matches){
          path = document.getElementById("path");
          pathLen =  path.getTotalLength() + (document.documentElement.scrollTop * 2);
        }else {
          path = document.getElementById("path");
          pathLen =  path.getTotalLength() + (document.documentElement.scrollTop * 2);
        }
  
        // var pathLen = path.getTotalLength();
  
        // Get the position of a point at <scrollPercentage> along the path.
        var pt = path.getPointAtLength(scrollPercentage * pathLen);
        // console.log(pt);
        var  scrollY = window.scrollY || window.pageYOffset;
        var  maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
  
        if (window.matchMedia('(max-width: 912px)').matches) {
          var  path = document.getElementById("path-mobile");
        } else {
          var  path = document.getElementById("path");
        }
        // Calculate distance along the path the car should be for the current scroll amount
        var  pathLen = path.getTotalLength();
        var  dist = pathLen * scrollY / maxScrollY;
        var  pos = path.getPointAtLength(dist);
        
  
        // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
        if (dist + 1 <= pathLen) {
          var  posAhead = path.getPointAtLength(dist + 1);
          var  angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
        } else {
          var  posBehind = path.getPointAtLength(dist - 1);
          var  angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
        }
    
        // Position the red dot at this point
        var dot = document.getElementById("dot");		  
        dot.setAttribute("transform", "translate("+ pt.x + "," + (pt.y-5) + ")");
  
        var dot2 = document.getElementById("dot2");		  
        dot2.setAttribute("transform", "translate("+ pt.x + "," + (pt.y-5) + ")");
  
  
        var dot3 = document.getElementById("dot3");		  
        dot3.setAttribute("transform", "translate("+ pt.x + "," + (pt.y-5) + ")");
  
        var dot4 = document.getElementById("dot4");		  
        dot4.setAttribute("transform", "translate("+ pt.x + "," + (pt.y-5) + ")");
      };
    
      //draw the line
      function drawLine(container, line) {
        var pathLength;
        // var pathLength = line.getTotalLength(),
        if (window.matchMedia('(max-width: 912px)').matches) {
  
          if (window.matchMedia('(min-height: 1024px)').matches) {
              pathLength = line.getTotalLength() + (document.documentElement.scrollTop * 0.1);
          }else{
            pathLength = line.getTotalLength() + (document.documentElement.scrollTop * 1.7);
          }
        }else if(window.matchMedia('(max-width: 1750px)').matches){
          pathLength = line.getTotalLength() + (document.documentElement.scrollTop * 2);
        }else{
          pathLength = line.getTotalLength() + (document.documentElement.scrollTop * 2);
        }
        
        maxScrollTop = $(document).height() - $(window).height(),
        percentDone = $(window).scrollTop() / maxScrollTop,
        length = percentDone * pathLength;
        line.style.strokeDasharray = [ length,pathLength].join(' ');
      }
    
  
  
  
  
  
  
        // Desktop and Mobile menu - scroll & active class
  
        $('#deskMenu .sticky-nav ul li a').on('click', function(event){
  
          $('#deskMenu .sticky-nav ul li a').removeClass('active');
          $(this).addClass('active');
  
          var id = "";
          if($(this).attr('id') === "who-we-are" || $(this).attr('id') === "featured-videos" || $(this).attr('id') === "whats-next-desk"){
            id = $(this).attr('id') + "-container"
          }else{
            id = $(this).attr('id') + "-text";
          }
  
         const elemTop = document.querySelector(`[class*=${id}]`).getBoundingClientRect().top + window.scrollY - 300;
  
          // console.log(typeof(elemTop))
    
          // console.log(elemTop)
          // window.scroll({
          //   top: elemTop,
          //   behavior: 'smooth'
          // });
    
    
          event.preventDefault();
          $('html, body').animate({scrollTop: elemTop}, 2000);
  
        })
  
  
        $('#mobMenu ul li a').on('click', function(event){
          event.preventDefault();
          $('#mobMenu ul li a').removeClass('active');
          $(this).addClass('active');
  
          if($(this).attr('id') === "who-we-are" || $(this).attr('id') === "featured-videos" ||  $(this).attr('id') === "whats-next-mob"){
            var idDiv = $(this).attr('id') + "-container";
            const elemTopMobDiv = $(`div.${idDiv}`).offset().top;
            $('html, body').animate({scrollTop: elemTopMobDiv}, 2000);
          }else{
            var id = $(this).attr('id') + "-text";
          
            const elemTopMob = document.querySelector(`[class*=${id}]`).getBoundingClientRect().top + window.scrollY - 200;
      
            $('html, body').animate({scrollTop: elemTopMob}, 2000);
          }
    
        })
  
        $.fn.isOnScreen = function(){
  
          var win = $(window);
      
          var viewport = {
              top : win.scrollTop() + 100,
              // left : win.scrollLeft()
          };
          // viewport.right = viewport.left + win.width();
          viewport.bottom = viewport.top + win.height();
      
          var bounds = this.offset();
  
          // console.log(bounds);
          // bounds.right = bounds.left + this.outerWidth();
          // bounds.bottom = bounds.top + this.outerHeight() / 1.2;
          bounds.bottom = bounds.top;
      
          // return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
          return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  
      
      };
  
  
  
      $(window).scroll(function() {
        document.getElementById("deskMenu").style.opacity = 0;
        if (window.matchMedia('(min-width: 912px)').matches) {
          if (window.scrollY > 350) {
            document.getElementById("deskMenu").style.opacity = 1;
          } else {
            document.getElementById("deskMenu").style.opacity = 0;
          }
        }
        $('.timepicker li a').removeClass('active');
  
        if (window.matchMedia('(max-width: 912px)').matches) {
          //  $('.timepicker li a').removeClass('active');
          $('.mobile .switch label').removeClass('animation');
        if($('text#intro-mob').isOnScreen() == true){
          $('#mobMenu ul li a#intro-mob').addClass('active');
        }else if($('text#chapter-one-mob').isOnScreen() == true){
          $('#mobMenu ul li a#chapter-one-mob').addClass('active');
        }else if($('text#chapter-two-mob').isOnScreen() == true){
          $('#mobMenu ul li a#chapter-two-mob').addClass('active');
        }else if($('text#chapter-three-mob').isOnScreen() == true){
          $('#mobMenu ul li a#chapter-three-mob').addClass('active');
        }else if($('text#chapter-four-mob').isOnScreen() == true){
          $('#mobMenu ul li a#chapter-four-mob').addClass('active');
        }else if($('text#chapter-five-mob').isOnScreen() == true){
          $('#mobMenu ul li a#chapter-five-mob').addClass('active');
        }else if($('text#chapter-six-mob').isOnScreen() == true){
          $('#mobMenu ul li a#chapter-six-mob').addClass('active');
        }else if($('.whats-next-mob-container').isOnScreen() == true){
          $('#mobMenu ul li a#whats-next-mob').addClass('active');
  
          if($(".private-btn").hasClass('active')){
            $('.mobile .switch label').addClass('animation');
          }else{
            $('.mobile .switch label').removeClass('animation');
          }
        }else if($('.featured-videos-container').isOnScreen() == true){
          $('#mobMenu ul li a#featured-videos').addClass('active');
        }else if($('.who-we-are-container').isOnScreen() == true){
          $('#mobMenu ul li a#who-we-are').addClass('active');
        }
        }else{
          $('.desktop .switch label').removeClass('animation');
        if($('text#intro-desk').isOnScreen() == true){
          $('#deskMenu ul li a#intro-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","10px");
          $('.menu-left-line').css("height","15px");
        }else if($('text#chapter-one-desk').isOnScreen() == true){
          $('#deskMenu ul li a#chapter-one-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","52px");
          $('.menu-left-line').css("height","57px");
        }else if($('text#chapter-two-desk').isOnScreen() == true){
          $('#deskMenu ul li a#chapter-two-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","93px");
          $('.menu-left-line').css("height","98px");
        }else if($('text#chapter-three-desk').isOnScreen() == true){
          $('#deskMenu ul li a#chapter-three-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","135px");
          $('.menu-left-line').css("height","140px");
        }else if($('text#chapter-four-desk').isOnScreen() == true){
          $('#deskMenu ul li a#chapter-four-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","172px");
          $('.menu-left-line').css("height","177px");
        }else if($('text#chapter-five-desk').isOnScreen() == true){
          $('#deskMenu ul li a#chapter-five-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","212px");
          $('.menu-left-line').css("height","217px");
        }else if($('text#chapter-six-desk').isOnScreen() == true){
          $('#deskMenu ul li a#chapter-six-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","250px");
          $('.menu-left-line').css("height","255px");
        }else if($('.whats-next-desk-container').isOnScreen() == true){
          $('#deskMenu ul li a#whats-next-desk').addClass('active');
          $(".menu-pulsing-circle").css("top","295px");
          $('.menu-left-line').css("height","300px");
          if($(".private-btn").hasClass('active')){
            $('.desktop .switch label').addClass('animation');
          }else{
            $('.desktop .switch label').removeClass('animation');
          }
          
        }else if($(".featured-videos-container").isOnScreen() == true){
          $('#deskMenu ul li a#featured-videos').addClass('active');
          $(".menu-pulsing-circle").css("top","335px");
          $('.menu-left-line').css("height","340px");
        }else if($(".who-we-are-container").isOnScreen() == true){
          $('#deskMenu ul li a#who-we-are').addClass('active');
          $(".menu-pulsing-circle").css("top","380px");
          $('.menu-left-line').css("height","380px");
        }
        }
     
      });
  
  
  
  
      // Whats Next Section GRID - start
  
      // Mobile
      var gridItemsListPrivateMobile = "";
      var gridItemsListGovernmentMobile = "";
      $.each(dataJsPrivate.whatsNextData, function (key, val){
        gridItemsListPrivateMobile += 
        '<div class="grid-item">'
          +'<div class="step-num">step '+ val.stepNum + '</div>'
          +'<div class="step-title">'+ val.stepTitle +'</div>'
          +'<a href="" class="view-levers-btn-mob" id="'+ val.category + '-' + val.id +'"> View Levers</a>'
          +'<div class="step-hover-wrapper">'
            +'<div class="step-hover" id="'+ val.category + '-' + val.id +'">'
              + '<div class="step-num" style="margin:0!important; color: #000!important">step '+ val.stepNum +'</div>'
              + '<div class="step-title" style="margin:0!important; color: #000!important">'+ val.stepTitle +'</div>'
              + '<div class="step-desc" style="color: #000!important; height: 120px!important;">'+ val.stepDesc +'</div>'
              + '<div class="ttl">Levers</div>'
              + '<ol>'+ val.lever1 + val.lever2 + val.lever3 +'</ol>'
            +'</div>'
          +'</div>'
        +'</div>';
  
        $('.whats-next-grid-private-mobile').html(gridItemsListPrivateMobile)
      });
  
  
      $.each(dataJsGovernment.whatsNextData, function (key, val){
        gridItemsListGovernmentMobile +=
        '<div class="grid-item">'
          +'<div class="step-num">step '+ val.stepNum + '</div>'
          +'<div class="step-title">'+ val.stepTitle +'</div>'
          +'<a href="" class="view-levers-btn-mob" id="'+ val.category + '-' + val.id +'"> View Levers</a>'
          +'<div class="step-hover-wrapper">'
            +'<div class="step-hover" id="'+ val.category + '-' + val.id +'">'
              + '<div class="step-num" style="margin:0!important; color: #000!important">step '+ val.stepNum +'</div>'
              + '<div class="step-title" style="margin:0!important;color: #000!important">'+ val.stepTitle +'</div>'
              + '<div class="step-desc" style="color: #000!important; height: 120px!important;">'+ val.stepDesc +'</div>'
              + '<div class="ttl">Levers</div>'
              + '<ol>'+ val.lever1 + val.lever2 + val.lever3 +'</ol>'
            +'</div>'
          +'</div>'
        +'</div>';
  
        $('.whats-next-grid-governments-mobile').html(gridItemsListGovernmentMobile)
      });
  
      // Desktop
      var gridItemsListPrivateDesktop = "";
      var gridItemsListGovernmentDesktop = "";
      $.each(dataJsPrivate.whatsNextData, function (key, val){
        gridItemsListPrivateDesktop += 
        '<div class="grid-item">'
          +'<div class="step-num">step '+ val.stepNum + '</div>'
          +'<div class="step-title">'+ val.stepTitle +'</div>'
          +'<div class="step-desc">'+ val.stepDesc +'</div>'
          +'<a href="javascript:void(0)" class="view-levers-btn" id="'+ val.category + '-' + val.id +'"> View Levers'
            +'<div class="step-hover" id="'+ val.category + '-' + val.id +'">'
              + '<div class="ttl">Levers</div>'
              + '<ol>'+ val.lever1 + val.lever2 + val.lever3 +'</ol>'
            +'</div>'
          +'</a>'
        +'</div>';
  
  
        $('.whats-next-grid-private-desktop').html(gridItemsListPrivateDesktop)
      });
  
  
      $.each(dataJsGovernment.whatsNextData, function (key, val){
        gridItemsListGovernmentDesktop += 
        '<div class="grid-item">'
          +'<div class="step-num">step '+ val.stepNum + '</div>'
          +'<div class="step-title">'+ val.stepTitle +'</div>'
          +'<div class="step-desc">'+ val.stepDesc +'</div>'
          +'<a href="javascript:void(0)" class="view-levers-btn" id="'+ val.category + '-' + val.id +'"> View Levers'
            +'<div class="step-hover" id="'+ val.category + '-' + val.id +'">'
              + '<div class="ttl">Levers</div>'
              + '<ol>'+ val.lever1 + val.lever2 + val.lever3 +'</ol>'
            +'</div>'
          +'</a>'
        +'</div>';
  
  
        $('.whats-next-grid-governments-desktop').html(gridItemsListGovernmentDesktop)
      });
      
    // Whats Next Section - end
      $('.view-levers-btn-mob').on('click', function(e){
        e.preventDefault();
  
        var sameId = $(this).attr('id');
        $(`div#${sameId}`).addClass('active');
  
        $(`div#${sameId}`).parent().append('<div class="overlay"></div>')
        $(`div#${sameId}`).parent().css({"opacity":"1", "visibility":"visible"});
  
        $(".overlay").on('click', function(e){
          e.preventDefault();
          $(`div#${sameId}`).parent().css({"opacity":"0", "visibility":"hidden" });
          $(`div#${sameId}`).removeClass('active');
    
        });
      });
  
  
     // Whats Next slider - buttons
     $(".governments-btn").on('click', function(){
      $(".private-btn").removeClass('active');
      $(this).addClass('active');
      
      // mobile
      $(".whats-next-grid-private-mobile").addClass('hidden');
      $(".whats-next-grid-governments-mobile").removeClass('hidden');
      $("input#switch-rounded-mob").prop('checked', true);
  
      
      // desktop
      $(".whats-next-grid-private-desktop").addClass('hidden');
      $(".whats-next-grid-governments-desktop").removeClass('hidden');
      $("input#switch-rounded").prop('checked', true);
      
    });
  
    $(".private-btn").on('click', function(){
      $(".governments-btn").removeClass('active');
      $(this).addClass('active');
      // desktop
      $(".whats-next-grid-private-desktop").removeClass('hidden');
      $(".whats-next-grid-governments-desktop").addClass('hidden');
      $("input#switch-rounded").prop('checked', false);
  
      // mobile
      $(".whats-next-grid-private-mobile").removeClass('hidden');
      $(".whats-next-grid-governments-mobile").addClass('hidden');
      $("input#switch-rounded-mob").prop('checked', false);
    });
  
  
  $('#switch-rounded').click(function(){
    if($(".private-btn").hasClass('active')){
      $(".private-btn").removeClass('active');
      $(".governments-btn").addClass('active');
  
      $(".whats-next-grid-private-desktop").addClass('hidden');
      $(".whats-next-grid-governments-desktop").removeClass('hidden');
  
      $("input#switch-rounded").prop('checked', true);
  
    }else if($(".governments-btn").hasClass('active')){
      $(".governments-btn").removeClass('active');
      $(".private-btn").addClass('active');
  
      $(".whats-next-grid-private-desktop").removeClass('hidden');
      $(".whats-next-grid-governments-desktop").addClass('hidden');
  
      $("input#switch-rounded").prop('checked', false);
    }
   })
  
   $('#switch-rounded-mob').click(function(){
    // e.preventDefault();
    if($(".private-btn").hasClass('active')){
      $(".private-btn").removeClass('active');
      $(".governments-btn").addClass('active');
  
      $(".whats-next-grid-private-mobile").addClass('hidden');
      $(".whats-next-grid-governments-mobile").removeClass('hidden');
  
      $("input#switch-rounded-mob").prop('checked', true);
    }else if($(".governments-btn").hasClass('active')){
      $(".governments-btn").removeClass('active');
      $(".private-btn").addClass('active');
  
      $(".whats-next-grid-private-mobile").removeClass('hidden');
      $(".whats-next-grid-governments-mobile").addClass('hidden');
  
      $("input#switch-rounded-mob").prop('checked', false);
    }
   })
  
  
  });
  
  