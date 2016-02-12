$(window).load( function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth:  100
    });
  $('a[rel=lightbox]').lightBox({
    // overlayBgColor: '#fff',
    // overlayOpacity: 0.6,
    fixedNavigation: false,
    imageLoading: '/images/lightbox-ico-loading.gif',
    imageBtnClose: '/images/lightbox-btn-close.gif',
    imageBtnPrev: '/images/lightbox-btn-prev.gif',
    imageBtnNext: '/images/lightbox-btn-next.gif',
    imageBlank: '/images/lightbox-blank.gif',
    containerResizeSpeed: 250,
    fixedNavigation: true
  });

    });

  

