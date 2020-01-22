// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
var url;
(function () {
    "use strict";
    var _variables = new Variables();
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    $("#enlaceCaptura").click(function () {
        url = $('#enlaceWeb').val();
        _variables.setUrl(url);
        $('#iframe').attr('src', Variables.urlApp);
        $.mobile.navigate("#pageApp");
    });

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
        //var parentElement = document.getElementById('deviceready');
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
        var enlaceParticipacion = document.getElementById('contenedor');
        enlaceParticipacion.setAttribute('style', 'display:block;');

        window.location.replace('./appIni.html');
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    //var myVar = setInterval(myTimer, 1000);
    //function myTimer() {
    //    var d = new Date();
    //    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    //    window.location.replace('./appIni.html');
    //}

})();

