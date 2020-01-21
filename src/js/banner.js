$('.banner').slick({
    accessibility: true,
    variableWidth: true,
    infinite: true,
    centerMode: true,
    pauseOnHover: false,
    autoplay: true,
    focusOnSelect: false,
    autoplaySpeed: 3500,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            autoplaySpeed: 2500,
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
      ]
});