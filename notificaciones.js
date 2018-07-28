var messaging = firebase.messaging();

messaging.requestPermission()
.then(function() {
	console.log('Se han aceptado las notificaciones');
})
.then(function(token){
	if (token) {
		guardaToken(token)
	}else {
		anularToken();
	}
}) 

.catch(function(err) {
	mensajeFeedback();
	console.log('No se ha recibido permiso/ token:', err)
});