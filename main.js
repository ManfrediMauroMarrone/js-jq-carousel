
$(document).ready(function() {
  // intercetto li click sull'icona freccia

  // devo assegnare la classe active alle altre immagini
  // determino l'immagine corrente
  var currentImg = $('img.visible');

  $('.forward a').click(function() {

    currentImg.removeClass('visible');

    currentImg.next().addClass('visible')




  });

  $('.backward a').click(function(){

    currentImg.removeClass('visible');

    currentImg.prev().addClass('visible');
  });

});
