$(document).ready(function() {

	var frmForgotPass = $("#frmForgotPass").validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: "Ingresa tu email",
				email: "Ingresa un email valido"
			}
		},
		errorClass: 'text-danger',
		errorElement: 'p',
		submitHandler: function(){
			$.ajax({
				url: $("#frmForgotPass").attr("action"),
				type: $("#frmForgotPass").attr("method"),
				dataType: "json",
				data: $("#frmForgotPass").serialize(),
				cache: false,
				encoding: "UTF-8",
				beforeSend: function () {
					showloading();
                },
				success: function(data){
					hideloading();
					if(data.status == 200){
						$('#frmForgotPass')[0].reset();
        				frmForgotPass.resetForm();

						showalert("#alertMsg", data.msg, "success");

						setTimeout(function(){
							window.location.href = URL_APP;
						}, 5000);
					}else{
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