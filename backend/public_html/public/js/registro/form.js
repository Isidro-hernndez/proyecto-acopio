$(document).ready(function(){
	var frmRegistro = $("#frmRegistro").validate({
		errorClass: 'text-danger',
		errorElement: 'p',
		highlight : function(element, errorClass){
			$(element).parent().addClass('has-error');
		},
		unhighlight: function(element, errorClass){
			$(element).parent().removeClass('has-error');
		}
	});

	var frmRegistro2 = $("#frmRegistro2").validate({
		errorClass: 'text-danger',
		errorElement: 'p',
		highlight : function(element, errorClass){
			$(element).parent().addClass('has-error');
		},
		unhighlight: function(element, errorClass){
			$(element).parent().removeClass('has-error');
		}
	});

	if($("img.portada").length > 0){
		var biggestHeight = $("img.portada").height() + 81;
		$(".page-wrap").css('min-height', biggestHeight+'px');
	}

	$(".btnChangeFrm").click(function(event){
		event.preventDefault();

		var id = $.trim($(this).attr('href'));

		if(id == "#oldRegister"){
			$("#newRegister").slideUp(function(){
				$("#oldRegister").slideDown();
			});
		}else if(id == "#newRegister"){
			$("#oldRegister").slideUp(function(){
				$("#newRegister").slideDown();
			});
		}
	});

	$("#estado").change(function(){
		var id = $.trim($(this).val());

		if(id != ""){
			$.ajax({
				url: '../estados/municipios/'+id,
				type: 'POST',
				dataType: "json",
				cache: false,
				encoding: "UTF-8",
				success: function(data){
					$("#ciudad").html('<option value="">-- Selecciona una opción --</option>');

					if(data.status == 200){
						$.each(data.municipios, function(index, value){
							$("#ciudad").append('<option value="'+value.nombre+'">'+value.nombre+'</option>');
						});
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					$("#ciudad").html('<option value="">-- Selecciona una opción --</option>');
				}
			});
		}else{
			$("#ciudad").html('<option value="">-- Selecciona una opción --</option>');
		}
	});
});