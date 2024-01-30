
window.onload = function() {
	
	var Usuario = document.getElementById('Usuario');
	Usuario.addEventListener("input", campoUsuario);

    var Nombre = document.getElementById('Nombre');
	Nombre.addEventListener("input", campoNombre);

    var contraseña = document.getElementById('contraseña');
	contraseña.addEventListener("input", campoContraseña);
	
	var repcontraseña = document.getElementById('rep-contraseña');
	repcontraseña.addEventListener("input", camporepContraseña);
	
	var Correo = document.getElementById('Correo');
	Correo.addEventListener("input", campoCorreo);
	
	var Telefono = document.getElementById('Telefono');
	Telefono.addEventListener("input", campoTelefono);

}

function campoUsuario() {
	var usuarioUsuario = document.getElementById('Usuario').value;
	
	if (usuarioUsuario) {
		document.getElementById('usu_error').innerHTML = " ";
		document.getElementById('Usuario').style.outline = "1px solid #000";
	}
}

function campoNombre() {
	var usuNombre = document.getElementById('Nombre').value;
	
	if (usuNombre) {
		document.getElementById('nom_error').innerHTML = " ";
		document.getElementById('Nombre').style.outline = "1px solid #000";
	}
}


function campoContraseña() {
	var usuContraseña= document.getElementById('Contraseña').value;
	
	if (usuContraseña) {
		document.getElementById('contra_error').innerHTML = " ";
		document.getElementById('Contrseña').style.outline = "1px solid #000";
	}
}

function camporepContraseña() {
	var usurepContraseña= document.getElementById('rep-contraseña').value;
	
	if (usurepContraseña) {
		document.getElementById('rep-contraseña_error').innerHTML = " ";
		document.getElementById('rep-contraseña').style.outline = "1px solid #000";
	}
}

function campoCorreo() {
	var usuCorreo = document.getElementById('correo').value;
	
	if (usuCorreo) {
		document.getElementById('correo_error').innerHTML = " ";
		document.getElementById('correo').style.outline = "1px solid #000";
	}
}

function campoTelefono() {
	var usuTelefono = document.getElementById('Telefono').value;
	
	if (usuTelefono) {
		document.getElementById('telef_error').innerHTML = " ";
		document.getElementById('Telefono').style.outline = "1px solid #000";
	}
}


function validacion() {
	var expUsuario = /^[a-zA-Z0-9_/;
	var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
	var usuarioNombre = document.getElementById('nombre').value;
	var usuarioCorreo = document.getElementById('correo').value;
	var usuarioAsunto = document.getElementById('asunto').value;
	var usuarioMensaje = document.getElementById('mensaje').value;
	var nombreError = document.getElementById('nombre_error');
	var correoError = document.getElementById('correo_error');
	var asuntoError = document.getElementById('asunto_error');
	var mensajeError = document.getElementById('mensaje_error');
	var campoNombre = document.getElementById('nombre');
	var campoCorreo = document.getElementById('correo');
	var campoAsunto = document.getElementById('asunto');
	var campoMensaje = document.getElementById('mensaje');
	
	if (!usuarioUsuario) {
		var mensajeErrorUsuario = "El usuario debe de tener de 4 a 16 digitos ";
		usuarioError.innerHTML = mensajeErrorUsuario;
		campoUsuario.style.outline = "2px solid #f00";
		return false;
	} else if (!expUsuario.test(usuarioNombre)) {
		var mensajeInvalidoNombre = "Su Nombre Completo es Invalido!";
		nombreError.innerHTML = mensajeInvalidoNombre;
		campoNombre.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioCorreo) {
		var mensajeErrorCorreo = "Su Correo Electronico es Requerido!";
		correoError.innerHTML = mensajeErrorCorreo;
		campoCorreo.style.outline = "2px solid #f00";
		return false;
	} else if (!expCorreo.test(usuarioCorreo)) {
		var mensajeInvalidoCorreo = "Su Correo Electronico es Invalido!";
		correoError.innerHTML = mensajeInvalidoCorreo;
		campoCorreo.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioAsunto) {
		var mensajeErrorAsunto = "El Tema del Asunto es Requerido!";
		asuntoError.innerHTML = mensajeErrorAsunto;
		campoAsunto.style.outline = "2px solid #f00";
		return false;
	} else if (!isNaN(usuarioAsunto)) {
		var mensajeNumerosAsunto = "No se permite Numeros en el Asunto!";
		asuntoError.innerHTML = mensajeNumerosAsunto;
		campoAsunto.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioMensaje) {
		var mensajeErrorMensaje = "Por favor escriba su Mensaje!";
		mensajeError.innerHTML = mensajeErrorMensaje;
		campoMensaje.style.outline = "2px solid #f00";
		return false;
	} else if (usuarioMensaje.length >= 255) {
		mensajeLargo = "Su Mensaje es demasiado Largo!";
		mensajeError.innerHTML = mensajeLargo;
		campoMensaje.style.outline = "2px solid #f00";
		return false;
	} 
}