$(document).ready(function() {


  $('#nav-toggle').click(function(){
    $(this).toggleClass('active');
    $('.top_menu').toggleClass('active');
  });


  var owl = $('.owl_1');
  owl.owlCarousel({
  
  margin: 10,
  nav: true,
  loop: true,
  navText: [],
  items: 1
  });

  var owl = $('.owl_2');
  owl.owlCarousel({
  
  margin: 10,
  nav: true,
  loop: true,
  navText: [],
  items: 1
  });

  var owl = $('.owl_3');
  owl.owlCarousel({
  
  margin: 10,
  nav: true,
  loop: true,
  navText: [],
  items: 1
  });

  var owl = $('.owl_4');
  owl.owlCarousel({
  
  margin: 10,
  nav: true,
  loop: true,
  navText: [],
  items: 1
  });

  var owl = $('.owl_5');
  owl.owlCarousel({
  
  margin: 10,
  nav: true,
  loop: true,
  navText: [],
  items: 1
  });

});

