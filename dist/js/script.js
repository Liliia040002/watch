$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/icons/left.svg"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 992 ,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]

      });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs__item_active)', function() {
      $(this)
        .addClass('catalog__tabs__item_active').siblings().removeClass('catalog__tabs__item_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
     });

     
     function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

//modal

    $('[data-modal=consultation]').on ('click', function () {
      $('.overlay, #consultation').fadeIn('medium');
    });
    $('.close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    $('.catalog-item__btn').on('click', function () {
      $('.overlay, #order').fadeIn('medium');
    });

    $('.catalog-item__btn').each(function(i) {
      $(this).on('click', function() {
        $('#order .consultation__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('medium');
      })

    });


    function error(item) {
      $(item).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
  
        messages: {
          name: "Пожалуйста введите свое имя",
          phone: "Введите свой номер телефона",
          email: {
            required: "Введите коректный адрес",
            email: "Ваш адрес должен выглядеть так name@domain.com"
          }
        }
      });
    };
    error('#consultation__form');
    error('#consultation form');
    error('#order form');

    // $('#consultation__form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       email: true
    //     }
    //   },

    //   messages: {
    //     name: "Пожалуйста введите свое имя",
    //     phone: "Введите свой номер телефона",
    //     email: {
    //       required: "Введите коректный адрес",
    //       email: "Ваш адрес должен выглядеть так name@domain.com"
    //     }
    //   }
    // });
    // $('#consultation form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       email: true
    //     }
    //   },

    //   messages: {
    //     name: "Пожалуйста введите свое имя",
    //     phone: "Введите свой номер телефона",
    //     email: {
    //       required: "Введите коректный адрес",
    //       email: "Ваш адрес должен выглядеть так name@domain.com"
    //     }
    //   }
    // });
    // $('#order form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       email: true
    //     }
    //   },

    //   messages: {
    //     name: "Пожалуйста введите свое имя",
    //     phone: "Введите свой номер телефона",
    //     email: {
    //       required: "Введите коректный адрес",
    //       email: "Ваш адрес должен выглядеть так name@domain.com"
    //     }
    //   }
    // });
    
  $('input[name=phone]').mask("+38 (999) 999-9999");


  //  $('form').submit(function (e) {
  //   e.preventDefault();

  //   if (!$(this).valid()) {
  //     return;
  //   }

  //   $.ajax({
  //     type: "POST",
  //     url: "mailer/smart.php",
  //     data: $(this).serialize()
  //   }).done(function() {
  //     $(this).find("input").val("");



  //     $('form').trigger('reset');
  //   });
  //   return false;
  //  });

//   $('form').submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find("input").val("");
//         $('#consultation, #order').fadeOut();
//         $('.overlay, #thanks').fadeIn('slow');

//         $('form').trigger('reset');
//     });
//     return false;
// });

// scroll pageup

$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href=#up]").click(function() {
  const _href = $(this).attr('href');
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

new WOW().init();

});