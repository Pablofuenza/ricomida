
// DETECCIÓN DEL DOM
$(function () {
    console.log('EL DOM SE CARGÓ');

    // FUNCIONALIDAD TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip();



    // FUNCIONALIDAD CAROUSEL
    $('.carousel').carousel({

        interval: 5000,

      });

    // EVENTO CLICK PARA ENVIAR ALERTA DE QUE EL CORREO FUE ENVIADO CORRECTAMENTE
    $('#enviarCorreo').click(function() {

      alert('El correo fué enviado correctamente')

    });

    // IMPLEMENTANDO SELECTORES DE ETIQUETA CON EL MÉTODO ON, Y EL EVENTO DBCLICK PARA PINTAR LOS TITULOS COLOR ROJO AL HACER DOBLE CLICK
    $('h4').on('dblclick', function(){

      $('h4').css("color", "red");
      
    });

    $('h5').on('dblclick', function(){

      $('h5').css("color", "red");
      
    });
    

    // IMPLEMENTANDO SELECTORES DE CLASE Y MÉTODO FADETOGGLE PARA ESCONDER LOS TEXTOS AL CLICKEAR EL TÍTULO DE CUALQUIER CARD
    var hijos = $('.card-body').children();
    console.log('muestra los hijos -->', hijos);

    var title1 = hijos.eq(0);
    var title2 = hijos.eq(3);
    var title3 = hijos.eq(6);

    var texto1 = hijos.eq(1)
    var texto2 = hijos.eq(4)
    var texto3 = hijos.eq(7)

    console.log('title1 -->', title1);
    console.log('title2 -->', title2);
    console.log('title3 -->', title3);

    title1.click(function(event) {
      console.log('ESTE ES EL EVENTO CLICK');
      texto1.fadeToggle('fast');
    
    });

    title2.click(function(event) {
      console.log('ESTE ES EL EVENTO CLICK');
      texto2.fadeToggle('fast');
    
    });
    
    title3.click(function(event) {
      console.log('ESTE ES EL EVENTO CLICK');
      texto3.fadeToggle('fast');
    
    });

});

