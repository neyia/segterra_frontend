window.addEventListener('load', () => {
    
    const checkinSlider = new Swiper('.table-swiper', {
        navigation: {
            nextEl: '.table-arrow-next',
            prevEl: '.table-arrow-prev'
        },
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        breakpoints: {
            630: {
                slidesPerView: 1
            },
            820: {
                slidesPerView: 2
            },
            1170: {
                slidesPerView: 3
            }
        },
    });
    
});