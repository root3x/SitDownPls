document.addEventListener('DOMContentLoaded', function () {

const searchCategory = document.querySelector('.search__sort')
const choicesCategory = new Choices(searchCategory, {
  searchEnabled: false,
  choices: [
    {
      value: 'sofa',
      label: 'Диваны'
    },
    {
      value: 'armchair',
      label: 'Кресла'
    },
    {
      value: 'pouf',
      label: 'Пуфы'
    },
    {
      value: 'bed',
      label: 'Кровати'
    },
    {
      value: 'pedestal',
      label: 'Тумбы'
    },
    {
      value: 'commode',
      label: 'Комоды'
    },
    {
      value: 'chair',
      label: 'Стулья'
    },
    {
      value: 'table',
      label: 'Столы'
    },
    {
      value: 'accessory',
      label: 'Аксессуары'
    }
  ],
  itemSelectText: '',
  shouldSort: false,
  silent: true
});

const country = document.querySelector('.header__top-select')
const choicesCountry = new Choices(country, {
  searchEnabled: false,
  choices: [
    {
      value: 'Moscow',
      label: 'Москва',
      selected: true,
    },
    {
      value: 'Kazan',
      label: 'Казань'
    },
    {
      value: 'Ufa',
      label: 'Уфа'
    },
    {
      value: 'Perm',
      label: 'Пермь'
    }
  ],
  itemSelectText: '',
  shouldSort: false,
  silent: true
});

//* burger
const burger = document.querySelector('.mainnav__burger')
const mainMenu = document.querySelector('.mainnav__list')

burger.classList.add('unToggled')

burger.addEventListener('click', function() {
  burger.classList.toggle('toggled')
  burger.classList.toggle('unToggled')
  mainMenu.classList.toggle('active')
})


//* price ranger
const rangeInput = document.querySelectorAll('.price-ranger__input-range'),
      priceInput = document.querySelectorAll('.price-ranger__input'),
      range      = document.querySelector('.price-ranger__progress');

let priceGap = 1000;

priceInput.forEach(input => {
  input.addEventListener('input', e => {
    let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

    if ( (maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
      if (e.target.classList.contains('price-min')){
        rangeInput[0].value = minPrice;
        range.style.left = ((minPrice / rangeInput[0].max) * 100) + '%';
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
      }
    }
  })
})

rangeInput.forEach(input => {
  input.addEventListener('input', e =>{
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

    if ((maxVal - minVal) < priceGap) {
      if (e.target.classList.contains('range-min')) {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = ((minVal / rangeInput[0].max) * 100) + '%';
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
    }
  })
})


//* hero slider
const heroSwiper = new Swiper('.hero__slider', {
  loop: true,
  speed: 700,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__bullets',
    bulletActiveClass: 'hero__bullets--active',
    type: 'bullets',
    clickable: true,
  },
  slideActiveClass: 'hero__slide--active',
  preloadImages: true,
  lazy: true,
})


//* sale slider
const saleSwiper = new Swiper('.sale__slider', {
  // loop: true,
  speed: 700,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  // autoplay: {
  //   delay: 9000,
  //   disableOnInteraction: false
  // },
  navigation: {
    nextEl: '.btn-circle--next',
    prevEl: '.btn-circle--prev',
    disabledClass: 'btn-circle--disabled'
  },
  slideActiveClass: 'sale__slide--active',
  preloadImages: false,
  lazy: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
})

//* similar slider
const similarSwiper = new Swiper('.similar__slider', {
  // loop: true,
  speed: 700,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,
  navigation: {
    nextEl: '.btn-circle--next',
    prevEl: '.btn-circle--prev',
    disabledClass: 'btn-circle--disabled'
  },
  slideActiveClass: 'similar__slide--active',
  preloadImages: false,
  lazy: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1025: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  }
})

// * product card slider
// function thumbProduct(){
  const productThumbs = new Swiper('.slider-thumbs', {
    speed: 700,
    spaceBetween: 38,
    slidesPerView: 2.5,
    freeMode: true,
    initialSlide: 1,
    direction: 'horizontal',
    obeserver: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideActiveClass: 'slider-thumbs__slide--active',
    preloadImages: true,
    lazy: true,
    breakpoints: {
      576: {
        direction: 'vertical',
        slidesPerView: 4,
      },
      993: {
        direction: 'horizontal',
        slidesPerView: 4,
      },
    }
  })
// }
// thumbProduct()

const productSwiper = new Swiper('.slider-big', {
  loop: true,
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  slideActiveClass: 'slider-big__slide--active',
  preloadImages: true,
  lazy: true,
  thumbs: {
    swiper: productThumbs
  }
})

//* helpful slider
const helpfulSwiper = new Swiper('.helpful__slider', {
  // loop: true,
  speed: 700,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.btn-circle--next',
    prevEl: '.btn-circle--prev',
    disabledClass: 'btn-circle--disabled'
  },
  slideActiveClass: 'helpful__slide--active',
  preloadImages: false,
  lazy: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
    }
  }
})


//* show more
if (window.innerWidth >= 1351){
  $(".invisible").slice(0, 2).css("display", "flex");
  $(".invisible").slice(2, 6).hide();
} else{
  $(".invisible").slice(0, 6).hide();
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1351 && $(".invisible").is(":hidden")){
    $(".invisible").slice(0, 2).css("display", "flex");
    $(".invisible:hidden").slice().hide();
  } else {
    $(".invisible").slice(0, 2).css("display", "flex");
    $(".invisible:hidden").slice().hide();
  }
})


$(".toprating__loadmore").on("click", function(e){
  e.preventDefault();
  $('.toprating__wrapper').addClass('visibled')
  $(".invisible:hidden").slice(0, 4).css("display", "flex");
  if($(".invisible:hidden").length == 0) {
    $(".toprating__loadmore").hide();
  }
});





//* tooltip

tippy('#tooltip-1', {
  content: '<p class="tooltip">Реплицированные с зарубежных источников, исследования формируют глобальную сеть.</p>',
  allowHTML: true,
  theme: 'myGrey',
  arrow: true,
  delay: 300,
  animation: 'scale',
  hideOnClick: 'toggle',
});


//* validate
// $(document).on('click', '.callback__btn', function() {
//   var validateForm = $(document).find('.callback__form');
//   validateForm.validate({
//       rules: {
//           name: {
//               required: true,
//               minlength: 2
//           },
//           email: {
//               required: true,
//               email: true
//           },
//           phone: {
//             required: true,
//             phone: true,
//             maxlength: 10
//         }
//       },
//       messages: {
//           name: {
//               required: "Введите Ваше Имя",
//               minlength: "Имя должно быть более 2-х символов"
//           },
//           email: {
//             required: "Введите Email",
//             email: "Некорректно введен Email"
//           },
//           phone: {
//               required: "Введите Ваш телефон",
//               email: "Некорректно введен Email"
//           }
//       },
//       submitHandler: function(form) {
//           form.submit();
//       },
//       errorPlacement: function(error, element) {
//           var item = element.parents('.callback__field');
//           item.append(error);
//       }
//   });

//   validateForm.submit();
// });



//* mask
$(function(){
  $("#cal-phone").mask("+7(999) 999-9999");
});


//* validate form
$(".form").validate({
  rules:{
     name:{
       required: true,
       minlength: 2,
       maxlength: 20,
     },
     phone:{
       required: true,
      //  minlength: 10,
      //  maxlength: 11,
     },
     email:{
       required: true,
     },
  },
  messages:{
    name:{
      required: "Введите ваше имя.",
      minlength: "Введите хотя бы 2 символа",
      maxlength: "Максимальное число символов - 20",
  },
    phone:{
      required: "Введите телеофн",
      minlength: "Введите корректный телефон",
    },
    email:{
      required: "Введите Email",
      email: "Введите корректный email"
    }
  },
  submitHandler: function(form){
    // form.submit();
    $("#modal-form").removeClass('modal-overlay--active');
    $('#modal-form .modal-window').removeClass('modal-window--active');
    $("#modal-thanks").addClass('modal-overlay--active');
    $('#modal-thanks .modal-window').addClass('modal-window--active');
    // $('#callback__btn').click(function () {
      // $('#modal-thanks').addClass('modal-overlay--active');
      // $('#modal-thanks .modal-window').addClass('modal-window--active');
      $('body').addClass('hidden');
    // });
  }
});


// modal - catalog
$(function () {
  $('#modal-call').click(function () {
    $('#modal-form').addClass('modal-overlay--active');
    $('#modal-form .modal-window').addClass('modal-window--active');
    $('body').addClass('hidden');
  });

  $('.modal-window__close').click(function () {
    $('.modal-overlay').removeClass('modal-overlay--active');
    $('.modal-window').removeClass('modal-window--active');
    $('body').removeClass('hidden');
    replace()
  });

  $('.modal-overlay').mouseup(function (e) {
    let modalContent = $(".modal-window");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal-overlay--active');
      $('.modal-window').removeClass('modal-window--active');
      $('body').removeClass('hidden');
      replace()
    }
  });
});

//* modal slider
const sliderModalClose = document.querySelector('.modal-overlay')
const slideModalWindow = document.querySelector('#modal-slider .modal-window')
const slideModal = document.querySelector('#modal-slider')
const sliderBig = document.querySelector('.slider-big')
const sliderThubs = document.querySelector('.slider-thumbs')
const cardWrapper = document.querySelector('.product-card__wrapper')

function replace() {
  if (slideModal.classList.contains('modal-overlay--active')){
    slideModalWindow.insertAdjacentElement('beforeend', sliderBig)
    slideModalWindow.insertAdjacentElement('beforeend', sliderThubs)
    sliderThubs.classList.add('slider-thumbs-moved')

    thumbsModal()

  } else {
    cardWrapper.prepend(sliderThubs)
    cardWrapper.prepend(sliderBig)
  }
}

function thumbsModal(){
  const productThumbs2 = new Swiper('.slider-thumbs-moved', {
    // loop: true,
    speed: 400,
    spaceBetween: 38,
    slidesPerView: 1,
    freeMode: false,
    initialSlide: 1,
    direction: 'horizontal',
    obeserver: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.btn-circle--next',
      prevEl: '.btn-circle--prev',
      disabledClass: 'btn-circle--disabled'
    },
    slideActiveClass: 'slider-thumbs__slide--active',
    preloadImages: true,
    lazy: true,
    breakpoints: {
      // 480: {
      //   slidesPerView: 2,
      //   slidesPerGroup: 2
      // },
      576: {
        slidesPerView: 2,
        spaceBetween: 38,
      },
      768: {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 38,
      },
      993: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 78,
        freeMode: false,
      },
      1025: {
        slidesPerView: 4,
      }
    }
  })
}

sliderBig.addEventListener('click', function() {

  slideModal.classList.add('modal-overlay--active')
  slideModalWindow.classList.add('modal-window--active')
  document.querySelector('body').classList.add('hidden')

  replace()

})




//* dropdown catalog
const catDropBtn = document.querySelectorAll('.csidebar__subtitle')
const catDropDown = document.querySelectorAll('.csidebar .dropdown')

for ( let i = 0; i < catDropBtn.length; i++) {
  catDropBtn.forEach(el => {
    if (el != catDropBtn) {
      el.classList.remove('active')
    }
  })
  catDropDown.forEach(el => {
    if (el != catDropDown) {
      el.classList.remove('active')
    }
  })
  catDropBtn[i].addEventListener('click', function() {
    catDropBtn[i].classList.toggle('active')
    catDropDown[i].classList.toggle('active')
  })
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.csidebar .dropdown') && !e.target.closest('.csidebar__subtitle')){
      catDropBtn[i].classList.remove('active')
      catDropDown[i].classList.remove('active')
    }
  })
}


//* breadcrumbs
// $('a').on('click', function() {
//   var $this = $(this),
//       $bc = $('<div class="breadcrumbs__item"></div>');

//   $this.parents('li').each(function(n, li) {
//       var $a = $(li).children('a').clone();
//       $bc.prepend(' / ', $a);
//   });
//     $('.breadcrumbs__list').html( $bc.prepend('<a href="/" class="link link--light">Главная</a>') );
//     // return false;
// })



//pagination
  const perPage1 = 9  // < 768
  const perPage2 = 6  // > 768
  const paginationWrapper = $('.pagination')
  const allElements = $(".cards-wrapper .card")
  const allCards = allElements.length
  let pages1 = Math.ceil(allCards / perPage1)
  let pages2 = Math.ceil(allCards / perPage2)


  if (window.innerWidth >= 768){
    allElements.slice().hide();
    allElements.slice(0, perPage1).css("display", "flex");
    for (let i = 0; i < pages1; i++){
      paginationWrapper.append('<button class="btn --outline pagination__btn" data-page="' + Math.ceil(i + 1) + '">' + Math.ceil(i + 1) + '</button>')
      $('.pagination__btn[data-page="1"').addClass('pagination__btn--active')
    }
  } else {
    allElements.slice().hide();
    allElements.slice(0, perPage2).css("display", "flex");
    for (let i = 0; i < pages2; i++){
      paginationWrapper.append('<button class="btn --outline pagination__btn" data-page="' + Math.ceil(i + 1) + '">' + Math.ceil(i + 1) + '</button>')
      $('.pagination__btn[data-page="1"').addClass('pagination__btn--active')
    }
  }

  $(window).resize(function() {
    let btnPages = $('.pagination__btn').length
    if (window.innerWidth >= 768){
      allElements.slice().hide();
      allElements.slice(0, perPage1).css("display", "flex");
      if (btnPages !== pages1) {
        paginationWrapper.children().remove()
        for (let i = 0; i < pages1; i++){
          paginationWrapper.append('<button class="btn --outline pagination__btn" data-page="' + Math.ceil(i + 1) + '">' + Math.ceil(i + 1) + '</button>')
          $('.pagination__btn[data-page="1"').addClass('pagination__btn--active')
        }
      }
    } else {
      allElements.slice().hide();
      allElements.slice(0, perPage2).css("display", "flex");
      if (btnPages !== pages2){
        paginationWrapper.children().remove()
        for (let i = 0; i < pages2; i++){
          paginationWrapper.append('<button class="btn --outline pagination__btn" data-page="' + Math.ceil(i + 1) + '">' + Math.ceil(i + 1) + '</button>')
          $('.pagination__btn[data-page="1"').addClass('pagination__btn--active')
        }
      }
    }
  })

  paginationWrapper.on('click', '.pagination__btn', function() {
    let dataPage = $(this).attr('data-page')
    allElements.slice().hide();
    if (window.innerWidth >= 768){
      allElements.slice((perPage1 * dataPage - perPage1), (perPage1 * dataPage)).css("display", "flex");
    } else {
      allElements.slice((perPage2 * dataPage - perPage2), (perPage2 * dataPage)).css("display", "flex");
    }
    $('html, body').animate({
      scrollTop: $(".catalog__content").offset().top
    }, 300);
    $('.pagination__btn').removeClass('pagination__btn--active')
    $(this).addClass('pagination__btn--active')
  })


})
