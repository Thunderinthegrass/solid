console.log("привет");
const newsSlider = new Swiper(".header__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  // effect: "fade",
  // loop: "infinite",
});

let swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows : true,
    scale: 0.9
  },
 loop: true
});

function popupProducts() {
  const btns = document.querySelectorAll(".products__name");
  const modalOverlay = document.querySelector(".modal-overlay ");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtn = document.querySelector(".modal__close-btn");
  const close = document.querySelectorAll(".close");

  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      document.body.classList.add('ov-hidden');
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("modal--visible");
        modalOverlay.classList.add("modal-overlay--visible");
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    // console.log(e.target);
    document.body.classList.remove('ov-hidden');
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
  });
}
popupProducts();

function contactHover() {
  let btn = document.querySelectorAll('.contact__btn');
  let title = document.querySelectorAll('.contact__title');
  let icon = document.querySelectorAll('.contact__icon');
  let iconHover = document.querySelectorAll('.contact__icon-hover');

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', () => {
      title[i].classList.add('hover');
      icon[i].classList.add('hover');
      iconHover[i].classList.add('hover');
    })
    btn[i].addEventListener('mouseout', () => {
      title[i].classList.remove('hover');
      icon[i].classList.remove('hover');
      iconHover[i].classList.remove('hover');
    })
  }
}
contactHover();

function mobileMenu() {
  let menuBtn = document.querySelector(".nav-mobile-btn");
  let headerNav = document.querySelector(".header__nav");
  let headerNavItem = document.querySelectorAll('.header__nav-item');
  let contactsLink = document.querySelectorAll('.contacts__link');
  let navRequestBtn = headerNav.querySelector('.request-btn');

  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    headerNav.classList.toggle("active");
    console.log(e.target.tagName)
  });

  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('ov-hidden');
  })

  headerNavItem.forEach((elem) => {
    elem.addEventListener('click', () => {
      headerNav.classList.toggle("active");
      menuBtn.classList.toggle("active");
      document.body.classList.remove('ov-hidden');
    })
  })

  navRequestBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    headerNav.classList.toggle("active");
  });
}
mobileMenu();

function scrollToLink() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
scrollToLink();

// function popupForm() {
//   const btns = document.querySelectorAll(".modal-btn");
//   const modalOverlay = document.querySelector(".modal-overlay ");
//   const modals = document.querySelectorAll(".modal");
//   const modalCloseBtn = document.querySelector(".modal__close-btn");
//   const close = document.querySelectorAll(".close");

//   btns.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       let path = e.currentTarget.getAttribute("data-path");

//       modals.forEach((el) => {
//         el.classList.remove("modal--visible");
//       });

//       document
//         .querySelector(`[data-target="${path}"]`)
//         .classList.add("modal--visible");
//       modalOverlay.classList.add("modal-overlay--visible");
//     });
//   });

//   modalOverlay.addEventListener("click", (e) => {
//     // console.log(e.target);

//     close.forEach((elem) => {
//       if (e.target == modalOverlay || e.target == elem) {
//         modalOverlay.classList.remove("modal-overlay--visible");
//         modals.forEach((el) => {
//           el.classList.remove("modal--visible");
//         });
//       }
//     })
//   });
// }
// popupForm();


// function moreBtn() {
//   let btn = document.querySelector('.members__more-btn');
//   let membersItem = document.querySelectorAll('.members__item');
//   let span = btn.querySelector('span')

//   if (document.documentElement.clientWidth < 607){
//     btn.addEventListener('click', () => {
//       membersItem.forEach((elem, index) => {
//         if (index > 7 && index < 12) {
//           elem.classList.toggle('d-none');
//         }
//       })
//     })
  
//   }

//   btn.addEventListener('click', () => {
//     membersItem.forEach((elem, index) => {
//       if (index > 11) {
//         elem.classList.toggle('d-none');
//       }
//     }) 

//     span.classList.toggle('after-rotate');

//     if (span.classList.contains('after-rotate')) {
//       span.innerHTML = 'Скрыть';
//     }
//     else {
//       span.innerHTML = 'Больше';
//     }
//   })

// }

// let main = document.querySelector('.main');

// if (main) {
//   moreBtn();
// }

// function mobileMembers() {
//   let membersItem = document.querySelectorAll('.members__item');

//   if (document.documentElement.clientWidth < 607) {
//     membersItem.forEach((elem, index) => {
//       if (index > 7 && index < 12) {
//         elem.classList.toggle('d-none');
//       }
//     })
//   }
// }
// mobileMembers();


// function tabs() {

//   let tabItem = document.querySelectorAll('.map__info');
//   let tabNavItem = document.querySelectorAll('.map__dot');
//   let closeBtn = document.querySelectorAll('.close-info-btn');
//   let closeClass = document.querySelectorAll('.close-class');

//   closeBtn.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//       tabItem[index].classList.remove('tab--active');
//       tabNavItem[index].classList.remove('tabs-navigation__item--active');
//     })
//   })

//   function tab(tabItem, tabNavItem) {
//     tabNavItem.forEach((elem, index) => {
//       elem.addEventListener('click', (e) => {
//         for (let i = 0; i < tabNavItem.length; i++) {
//           tabNavItem[i].classList.remove('tabs-navigation__item--active');
//           e.target.classList.add('tabs-navigation__item--active');
//           tabItem[i].classList.remove('tab--active');
//         }
//         tabItem[index].classList.add('tab--active');
//         // console.log('ggg')
//       })
//     })
//   }
  
//   tab(tabItem, tabNavItem);

// }
// tabs();


// function joinForm() {
//   const form = document.querySelector('.join-form');
//   const telSelector = form.querySelector('input[type="tel"]');
//   const inputMask = new Inputmask('+7 (999) 999-99-99');
//   inputMask.mask(telSelector);

//   new window.JustValidate('.join-form', {
//     rules: {
//       tel: {
//         required: true,
//         function: () => {
//           const phone = telSelector.inputmask.unmaskedvalue();
//           return Number(phone) && phone.length === 10;
//         }
//       }
//     },
//     submitHandler: function(thisForm) {

//     }
//   })
// }
// joinForm();

// function loginForm() {
//   const form = document.querySelector('.registration-form');
//   const inputMask = new Inputmask('+7 (999) 999-99-99');

//   new window.JustValidate('.registration-form', {
//     rules: {
      
//     },
//     submitHandler: function(thisForm) {

//     }
//   })
// }
// loginForm();

// function registrationForm() {
//   const form = document.querySelector('.login-form');
//   const inputMask = new Inputmask('+7 (999) 999-99-99');

//   new window.JustValidate('.login-form', {
//     rules: {
      
//     },
//     submitHandler: function(thisForm) {

//     }
//   })
// }
// registrationForm();



