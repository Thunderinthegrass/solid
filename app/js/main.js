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
});

let swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 200,
    modifier: 1,
    slideShadows : true,
    scale: 0.9
  },
 loop: true
});

function popupProducts() {
  const btns = document.querySelectorAll(".popup-path");
  const modalOverlay = document.querySelector(".modal-overlay ");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtn = document.querySelector(".modal-close-btn");
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
    document.body.classList.remove('ov-hidden');
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
  });

  modalCloseBtn.addEventListener("click", (e) => {
    document.body.classList.remove('ov-hidden');

    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
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

function dropdownBtn() {
  let btn = document.querySelector('.dropdown-btn');
  let item = document.querySelectorAll('.language__item');

  setTimeout(() => {
    item.forEach((elem) => {
      if (elem.classList.contains('language__img_active')) {
        elem.classList.toggle('d-none');
      }
    })
  },1000)

  btn.addEventListener('click', () => {
    btn.classList.toggle('rotate');
    item.forEach((elem) => {
      if (elem.classList.contains('language__img_active') == false) {
        elem.classList.toggle('d-none');
      }
    })
  })
}
dropdownBtn();


