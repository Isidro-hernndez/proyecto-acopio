$(document).ready(function() {
	var frmRestePass = $("#frmRestePass").validate({
		rules: {
			password: {
				required: true
			},
			passwordconfirm: {
				required: true,
				equalTo: "#password"
			}
		},
		errorClass: 'text-danger',
		errorElement: 'p',
		submitHandler: function(){
			$.ajax({
				url: $("#frmRestePass").attr("action"),
				type: $("#frmRestePass").attr("method"),
				dataType: "json",
				data: $("#frmRestePass").serialize(),
				cache: false,
				encoding: "UTF-8",
				beforeSend: function () {
					showloading();
                },
				success: function(data){
					hideloading();
					if(data.status == 200){
						$("button[type='submit']").prop('disabled', true);
						
						showalert("#alertMsg", data.msg, "success");

						setTimeout(function(){
							window.location.href = URL_APP+'admin/';
						}, 3000);
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