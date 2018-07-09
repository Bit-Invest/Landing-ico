function sliders() {
    var owl = $('.owl_1');
    owl.owlCarousel({

        margin: 10,
        nav: true,
        loop: true,
        navText: [],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                mouseDrag: true
            },

            // breakpoint from 768 up
            1300: {
                items: 3,
                mouseDrag: false
            }
        }

    });


    var owl = $('.owl_2');
    owl.owlCarousel({

        margin: 15,
        nav: true,
        loop: true,
        navText: [],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 5,
                mouseDrag: true
            },

            // breakpoint from 768 up
            1300: {
                items: 10,
                mouseDrag: false
            }
        }

    });

    var owl = $('.owl_3');
    owl.owlCarousel({

        margin: 15,
        nav: true,
        loop: true,
        navText: [],
        items: 1,
        responsiveClass: true
    });


    var owl = $('.owl_4');
    owl.owlCarousel({

        margin: 45,
        nav: true,
        loop: true,
        navText: [],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2,
                mouseDrag: true
            },

            // breakpoint from 768 up
            1300: {
                items: 3,
                mouseDrag: false
            }
        }

    });


    var owl = $('.owl_5');
    owl.owlCarousel({

        margin: 45,
        nav: true,
        loop: true,
        navText: [],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },

            // breakpoint from 768 up
            1300: {
                items: 3

            }
        }

    });


    var owl = $('.owl_6');
    owl.owlCarousel({

        margin: 45,
        nav: true,
        loop: true,
        navText: [],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 3
            },

            // breakpoint from 768 up
            1300: {
                items: 4

            }
        }

    });

    var owl = $('.owl_7');
    owl.owlCarousel({

        margin: 45,
        nav: true,
        loop: true,
        navText: [],
        autoWidth: true,
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },

            // breakpoint from 768 up
            1300: {
                items: 2

            }
        }

    });


    var owl = $('.owl_8');
    owl.owlCarousel({

        margin: 45,
        nav: true,
        loop: true,
        navText: [],
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 3
            },

            // breakpoint from 768 up
            1300: {
                items: 4

            }
        }

    });
}