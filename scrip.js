const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var experience = document.getElementById('experience').value;
  var foodQuality = document.getElementById('food-quality').value;
  var service = document.getElementById('service').value;
  var atmosphere = document.getElementById('atmosphere').value;
  var recommendation = document.querySelector('input[name="recommendation"]:checked').value;
  var comments = document.getElementById('comments').value;

  var body = 'Nombre: ' + name + '\n';
  body += 'Email: ' + email + '\n';
  body += 'Experiencia general: ' + experience + '\n';
  body += 'Calidad de la comida: ' + foodQuality + '\n';
  body += 'Servicio: ' + service + '\n';
  body += 'Atmósfera: ' + atmosphere + '\n';
  body += '¿Recomendaría?: ' + recommendation + '\n';
  body += 'Comentarios adicionales: ' + comments;

  const msg = {
    to: 'digitalcommunity3@gmail.com', // Reemplaza con tu dirección de correo electrónico
    from: 'bryan_matute@yahoo.com', // Reemplaza con la dirección de correo electrónico remitente
    subject: 'Respuestas de la encuesta',
    text: body
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Correo enviado exitosamente');
      // Aquí puedes agregar lógica adicional después de enviar el correo
    })
    .catch(error => {
      console.error('Error al enviar el correo:', error);
      // Aquí puedes manejar errores o mostrar mensajes de error al usuario
    });
});
