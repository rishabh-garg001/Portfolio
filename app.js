// Smooth scrolling
$('a.nav-link').on('click', function (e) {
  if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;
      $('html, body').animate(
          {
              scrollTop: $(hash).offset().top - 70
          },
          800
      );
  }
});

// Close responsive navbar on click
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
