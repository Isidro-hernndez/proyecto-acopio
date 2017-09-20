$(document).ready(function() {

	$("#frmLogin").validate({
		rules: {
			username: {
				required: true,
				email: true
			},
			password: {
				required: true
			}
		},
		messages: {
			username: {
				required: "Ingresa tu email",
				email: "Ingresa un email valido"
			},
			password: {
				required: "Ingresa tu contraseña"
			}
		},
		errorClass: 'text-danger',
		errorElement: 'p',
		submitHandler: function(){
			$.ajax({
				url: $("#frmLogin").attr("action"),
				type: $("#frmLogin").attr("method"),
				dataType: "json",
				data: $("#frmLogin").serialize(),
				cache: false,
				encoding: "UTF-8",
				beforeSend: function () {
					showloading();
                },
				success: function(data){
					if(data.status == 200){
						window.location.href = data.url;
					}else{
						hideloading();
						showalert("#alertMsg", data.msg, "danger");
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					hideloading();
					showalert("#alertMsg", "Error en el servidor", "danger");
				}
			});
		},
		highlight : function(element, errorClass){
			$(element).parent().addClass('has-error');
		},
		unhighlight: function(element, errorClass){
			$(element).parent().removeClass('has-error');
		}
	});
});