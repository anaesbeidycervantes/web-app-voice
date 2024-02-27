// Verifica si el navegador soporta el reconocimiento de voz
if ('webkitSpeechRecognition' in window) {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        document.getElementById('voiceResult').innerHTML = '<p>Orden detectada: ' + transcript + '</p>';
    };

    recognition.onerror = function(event) {
        console.error('Error en el reconocimiento de voz: ' + event.error);
    };
} else {
    alert('El reconocimiento de voz no es compatible con tu navegador.');
}

function startVoiceRecognition() {
    recognition.start();
}
