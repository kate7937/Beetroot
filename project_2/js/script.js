let burger = document.querySelector('.burger');
let header = document.querySelector('header');
burger.addEventListener('click', function () {
  header.classList.toggle('active');
});
window.addEventListener(`scroll`, function () {
  if (window.scrollY > 108) {
    header.classList.add(`header_sticky`);
  } else {
    header.classList.remove(`header_sticky`);
  };
});

const headerSlider = new Swiper('.first_slider', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.first_slider-pagination',
      clickable: true,
    },
  });

const newsSlider = new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      885: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    pagination: {
      el: '.news-slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.news-slider-prev',
      prevEl: '.news-slider-next',
    },
  });

  Fancybox.bind("[data-fancybox]", {
    loop: true,
    zoom: true,
  });

  $('.items').readmore({
    speed: 75,
    collapsedHeight: 440 ,
    moreLink: '<a class="more" href="#">see more</a>',
    lessLink: '<a class="more" href="#">Close</a>',
  });

  function initMap() {
    const myLatLng = {lat: 40.6686, lng: -73.8999};
    const map = new google.maps.Map(document.getElementById("map"),{
      zoom: 14,
      center: myLatLng,
      mapId: '2f084b4895741534',
    });
    new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Monticello",
      icon: {
        url:"img/pin.png"
      },
    });
  }
window.initMap = initMap; 

let anchor = document.querySelectorAll(`a[href^="#"]`);
anchor.forEach(link => {
  link.addEventListener(`click`, function(e){
    e.preventDefault();
    let href = this.getAttribute(`href`).substring(1);
    let scrollTarget = document.getElementById(href);
    let topOffset = 60;
    let elementPosition = scrollTarget.getBoundingClientRect().top;
    let offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: `smooth`
    });
  });
});

let sections = document.querySelectorAll(`section`);
let links = document.querySelectorAll(`header nav a`);
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute(`id`);
    if (top > offset && top < offset + height) {
      links.forEach (link => {
        link.classList.remove(`active`);
        document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`active`);
      });
    };
  });
};

$(document).ready(function(){
  $(".myform").validate({
    rules: {
      name: {
        required: true,
        minlenth: 3,
      },
      email: {
        required: true,
        email: true,
        minlenth: 5,
      },
    }
  });
});
