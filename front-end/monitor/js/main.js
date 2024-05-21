
let respuesta = document.getElementById('respuesta');
function callApiRequest() {
    axios
    .get('https://18.171.151.90/iot-car-control/back-end/apis/getRegistro.php')
  .then(function (response) {
    // handle success
    console.log(response);

let respuestaServidor =
 response.data== 'w'?'adelante': 
response.data=='s'?'atras':
 response.data== 'a'?'izquierda':
 response.data=='d'?'derecha': 'detener';


    console.log(respuestaServidor);



    respuesta.innerHTML = "Respuesta: <strong> " +response.data +  "</strong>";
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    
}

function miFuncion() {
    console.log("¡Hola! Esta función se ejecutará cada dos minutos.");
    // Aquí puedes colocar el código que quieres que se ejecute cada dos minutos
  }

  // Ejecuta la función cada dos minutos (120,000 milisegundos)
  setInterval(callApiRequest, 2000);
