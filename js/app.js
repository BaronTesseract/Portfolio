$(function() {
/* Smoth Scroll */

let  scrollTop = $(window).scrollTop();

$(window).on("scroll", function() {
  scrollTop = $(this).scrollTop();

  if (scrollTop > 0) {
    $("#header").addClass("shadow");
  } else {
    $("#header").removeClass("shadow");
  }
});

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let blockId = $this.data("scroll");
  let blockOffset = $(blockId).offset().top;

  $("html, body").animate({
    scrollTop: blockOffset -120
  }, 300);

  $("[data-scroll]").removeClass("active");
  $this.toggleClass("active");
  $("#nav").removeClass("show");
});



/* Works Filter  */
let filter = $("[data-filter]");

filter.on("click", function(event) {
  event.preventDefault();

  let cat = $(this).data('filter');

  $('[data-cat]').each(function() {

    let workCat = $(this).data('cat');

    if(cat == 'all') {
      $(this).removeClass('display-none');
    } else {
      if(workCat != cat) {
        $(this).addClass('display-none');
      } else {
        $(this).removeClass('display-none');
      }
    };


  });
});




/* Modals */

let countOfOpenModals = 0;

let modalCall = $("[data-modal]");
let modalClose = $("[data-close]");

modalCall.on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data("modal");


  showModal(modalId);

  setTimeout(function() {
    $(modalId).css({
      opacity: 1
    });
  }, 100);

});


modalClose.on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents(".modal");

  $(modalParent).css({
    opacity: ""
  });
  closeModal(modalParent);
});

$(".modal").on("click", function(event) {
  let $this = $(this);

  $this.css({
    opacity: ""
  });

  closeModal($this);
});

$(".modal__dialog").on("click", function(event) {
  event.stopPropagation();
});





function showModal(modal) {
  $(modal).addClass("display-flex");

  countOfOpenModals ++;
  $("body").addClass("no-scroll");
};

function closeModal(modal) {
  countOfOpenModals--;

  setTimeout( function() {
    modal.removeClass("display-flex");
    if (countOfOpenModals == 0)
      $("body").removeClass("no-scroll");
  }, 200);
}

 


/* Slick https://kenwheeler.github.io/slick/ */

$("[data-slider='slick']").slick({
  infinity: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
})

$(".slickPrev").on("click", function(event) {
  event.preventDefault();

  let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
  currentSlider.slick("slickPrev");
});

$(".slickNext").on("click", function(event) {
  event.preventDefault();

  let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
  currentSlider.slick("slickNext");
});


/* Mobile Nav */

$("#navToggle").on("click", function(event) {
  event.preventDefault();

  $("#nav").toggleClass("show");
});

});