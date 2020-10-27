
$(document).ready(function() {
  // intercetto li click sull'icona freccia

  // devo assegnare la classe active alle altre immagini
  // determino l'immagine corrente

  $('.forward a').click(function() {

    var currentImg = $('img.visible');

    currentImg.removeClass('visible');

    if(currentImg.next('img').length){

      currentImg.next('img').addClass('visible')

    } else {

      $('.main :first-child').addClass('visible')

    };

    var currentDot = $('span.active')

    // rimuovo active dal pallino

    currentDot.removeClass('active')
    // aggiungo active al pallino successivo

    if (currentDot.next('span').length) {
      currentDot.next('span').addClass('active')

    } else {
      $('.bullet :first-child').addclass('active')
    }


  });

  $('.backward a').click(function(){

    var currentImg = $('img.visible');

    currentImg.removeClass('visible');

    if (currentImg.prev('img').length) {

      currentImg.prev('img').addClass('visible');

    } else {

      $('.main img:last-of-type').addClass('visible');

    }

    var currentDot = $('span.active')

    // rimuovo active dal pallino

    currentDot.removeClass('active')
    // aggiungo active al pallino successivo
    if (currentDot.prev('span').length) {
      currentDot.prev('span').addClass('active')

    } else {
      $('.bullet span:last-of-type').addclass('active')
    }


  });

});
