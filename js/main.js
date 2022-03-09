new WOW().init();

$(document).ready(function () {
  //////*Toggle  navBar Button
  $(".menu-toggle-menu").on("click", function () {
    $(this).toggleClass("active");
    $(".navs").toggleClass("active");
    $(".navs").toggleClass("animated");
  });
  //////*Toggle  navBar Button

  ///////////////////// Loading Page ////////////////


  /////// start reset width and height////////

  var wHeight = $(window).height();
  $(".block").height(wHeight);

  ///////end reset width and height////////

  /////////////////////////////// start links sync ///////////////////////////////

  var navLinks = $(".navbar .nav-links ul li a");

  navLinks.on("click", function (e) {
    e.preventDefault();

    $("html,body").animate(
      {
        scrollTop: $($(this).data("scroll")).offset().top,
      },
      800
    );
  });

  ////////////********************send message Button in About Section=********************///////////////
  $('#send_mess').on("click", function (e) {
      e.preventDefault();

      $("html,body").animate(
        {
          scrollTop: $(".contact").offset().top,
        },
        800
      );
  });

  $(".scroll-arrow  a").on("click", function (e) {
    e.preventDefault();

    $("html,body").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      800
    );
  });

  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() >=
      $($(".navbar .nav-links ul li a").data("scroll")).offset().top
    ) {
      $(".navbar .nav-links ul li > span").removeClass("active");
      $(".scroll-Sync").each(function () {
        var id = $(this).attr("id");
        $(
          '.navbar .nav-links ul li a[ data-scroll = "' + "#" + id + '"]'
        ).addClass("active");
      });
    }
  });

  /////////////////////////////// end links sync ///////////////////////////////

  $(".porto-list ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === ".all") {
      $(".shuffle-img img").css("opacity", "1");
    } else {
      $(".shuffle-img img").css("opacity", "0.1");
      $($(this).data("class")).css("opacity", "1");
    }
  });

  /////////************ bollets ************////////////
  $(".bollets ul li").on("click", function () {
    $(this)
      .css("border", "2px solid #fd4d4d")
      .siblings()
      .css("border", "2px solid #9c9c9c");
    $($(this).data("class")).fadeIn().siblings().fadeOut();
  });
  /////////************ bollets ************////////////

  /********* start slider **********/
  var slickFunc = () => {
    if ($(window).innerWidth() > 1200) {
      $(".blog-item").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        focusOnSelect: false,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
      });
    } else if ($(window).innerWidth() < 1200 && $(window).innerWidth() > 800) {
      $(".blog-item").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        focusOnSelect: false,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
      });
    } else if ($(window).innerWidth() < 800) {
      $(".blog-item").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
      });
    }
  };
  slickFunc();
/********* end slider **********/


/********* start go to top  **********/
$(window).on("scroll", function(){
  if ($(window).scrollTop() >= 700) {
    $(".go_top_btn").css('display', 'block');
  }else {
    $(".go_top_btn").css("display", "none");
  }
})

$(".go_top_btn").click(() => {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    800
  );
})
/********* end go to top **********/
});