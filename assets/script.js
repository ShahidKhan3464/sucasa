var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        767: {
            slidesPerView: 2,

        },
        1050: {
            slidesPerView: 3,

        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});