$(document).ready(function(){
	var frmUsuario = $("#frmUsuario").validate({
		errorClass: 'text-danger',
		errorElement: 'p',
		submitHandler: function(){
			var formFile = document.forms.namedItem("frmUsuario"),
                data = new FormData(formFile);

			$.ajax({
				url: $("#frmUsuario").attr("action"),
				type: $("#frmUsuario").attr("method"),
				dataType: "json",
				data: data,
				cache: false,
				encoding: "UTF-8",
				processData: false,
                contentType: false,
				beforeSend: function () {
					showloading();
	            },
				success: function(data){
					if(data.status == 200){
						window.location.href = '../';
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