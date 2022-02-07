

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





$(".callback__form").validate({
  rules:{
     name:{
       required: true,
       minlength: 2,
       maxlength: 20,
     },
     phone:{
      //  required: true,
       minlength: 10,
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
  }
});


//* mask
$(function(){
  $("#cal-phone").mask("+7(999) 999-9999");
});


//* modal thanks
// $('.callback__form').submit(function(e) {
//   e.preventDefault();
//   this.submit();
//   $('#exampleModal').arcticmodal();
//   // return false;
// });

