
  // jQuery(document).on('hover','#SiteHeader', function(){
  //   debugger
  //   jQuery('.logo__image-link--other').toggleClass('active');
  // })
  jQuery( "#SiteHeader" ).hover(function() {
  jQuery('.logo, #NavStandard').toggleClass('active');
});


 jQuery( ".grandparent" ).hover(function() {
  jQuery(this).toggleClass('is-visible');
   jQuery(this).attr('aria-expanded','true');
});

