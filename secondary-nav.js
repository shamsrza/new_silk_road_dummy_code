
$(document).ready(function () {
    var sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll("#mobMenu ul li");
  
    window.onscroll = (e) => {
      e.preventDefault();
      var current = "";
      sections.forEach((section) => {
        // const sectionTop = section.offsetTop;
        const sectionTop = section.offsetTop;
        // console.log(section.offsetTop);
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLi.forEach((li) => {
        li.classList.remove("active");
        // console.log(current);
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
  
      navLi.forEach((li) => {
        if (li.classList.contains(current)) {
          var myScrollPos =
            $("#mobMenu ul li.active").offset().left +
            $("#mobMenu ul li.active").outerWidth(true) +
            $("#mobMenu").scrollLeft() -
            $("#mobMenu").width();
  
            console.log(myScrollPos);
          $("#mobMenu").scrollLeft(myScrollPos);
        }
      });
    };
  
  
    //center nax scroll 
    jQuery.fn.scrollleft = function (elem, speed) {
      jQuery(this).animate(
        {
          scrollLeft:
            jQuery(this).scrollLeft() -
            jQuery(this).offset().left +
            jQuery(elem).offset().left,
        },
        speed == null ? 3000 : speed
      );
      return this;
    };
  
  
  
  });