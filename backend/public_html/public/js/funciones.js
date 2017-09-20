// config time
Date.prototype.getYearCS = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
    return yyyy +"-"+ (mm[1]?mm:"0"+mm[0]) +"-"+ (dd[1]?dd:"0"+dd[0]); // padding
};

// number format
Number.prototype.formatMoney = function(c, d, t){
    var n = this, 
        c = isNaN(c = Math.abs(c)) ? 2 : c, 
        d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, 
        s = n < 0 ? "-" : "", 
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function showloading(){
	$("body").addClass("loaded-body");
	$("#loader-wrapper").addClass("in");
}

function hideloading(){
	$("body").removeClass("loaded-body");
	$("#loader-wrapper").removeClass("in");
}

function showalert(idContent, msg, estatus){
    idContent = idContent === undefined ? "#alertMsg" : idContent;
    msg = msg === undefined ? "Este es un mensaje de prueba" : msg;
    estatus = estatus === undefined ? "info" : estatus;
    var idAlert = Math.floor(Math.random() * 1000000000001);

	$(idContent).append('<div id="alert-'+idAlert+'" class="alert alert-'+estatus+'" role="alert">'+msg+'</div>').show();
    $('#alert-'+idAlert).slideDown();

	setTimeout(function(){
		$('#alert-'+idAlert).slideUp(function(){
			$(this).remove('');
		});
	}, 5000);
}

$(document).ready(function(){
    $('.fechahora').datetimepicker({
        format: 'YYYY-MM-DD H:mm:ss'
    });

	$('.fecha').datetimepicker({
        format: 'YYYY-MM-DD'
    });

    $('.fechaLimit').datetimepicker({
        format: 'YYYY-MM-DD',
        maxDate: new Date()
    });

    $('.fechaYear').datetimepicker({
        format: 'YYYY-MM-DD',
        viewMode: 'years'
    });

    $('.fechaYearInvert').datetimepicker({
        format: 'DD/MM/YYYY',
        viewMode: 'years',
        maxDate: new Date()
    });

    $('.hora').datetimepicker({
        format: 'LT',
        maxDate: new Date()
    });

    $(".btn-submenu").on("click", function(){
        if($("#menu").hasClass("in")){
            $("#menu").removeClass("in");
            $("body").removeClass("in");
        }else{
            $("#menu").addClass("in");
            $("body").addClass("in");
        }
    });

    $(document).on("click", "#contentMoneyBtn", function(){
        if($(this).parent().hasClass("in")){
            $(this).parent().removeClass("in");
        }else{
            $(this).parent().addClass("in");
        }
    });

    if($("#frmMoneda").length > 0){
        var frmMoneda = $("#frmMoneda").validate({
            errorClass: 'text-danger',
            errorElement: 'p',
            submitHandler: function(){
                $.ajax({
                    url: $("#frmMoneda").attr("action"),
                    type: $("#frmMoneda").attr("method"),
                    dataType: "json",
                    data: $("#frmMoneda").serialize(),
                    cache: false,
                    encoding: "UTF-8",
                    beforeSend: function () {
                        showloading();
                    },
                    success: function(data){
                        hideloading();
                        if(data.status == 200){
                            showalert("#alertMoneda", data.msg, "success");
                        }else{
                            showalert("#alertMoneda", data.msg, "danger");
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        hideloading();

                        showalert("#alertMoneda", "Error en el servidor", "danger");
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
    }

    $(".dropdown-menu-iuv").click(function(event){
        event.preventDefault();
        
        var spanElement = $(this).find("span"),
            subMenu = $.trim($(this).attr("data-target"));

        if(spanElement.hasClass('glyphicon-chevron-down')){
            spanElement.removeClass('glyphicon-chevron-down');
            spanElement.addClass('glyphicon-chevron-up');
        }else{
            spanElement.removeClass('glyphicon-chevron-up');
            spanElement.addClass('glyphicon-chevron-down');
        }

        $(subMenu).toggleClass('open');
    });

    $("#menuBtn").on("click", function(){
        if($("body").hasClass("in")){
            $("body").removeClass("in");

            $("#menuBtn").html('<span class="glyphicon glyphicon-chevron-right"></span>');
        }else{
            $("body").addClass("in");

            $("#menuBtn").html('<span class="glyphicon glyphicon-chevron-left"></span>');
        }
    });

    $(".fechaentrevista").datetimepicker({
        format: 'YYYY-MM-DD',
        minDate: new moment().add(2, 'day'),
        maxDate: new Date("09/08/2017"),
        daysOfWeekDisabled: [0, 6]
    });

    $(".textEditor").each(function(){
        var limit = parseInt($.trim($(this).attr("data-limit")));
        $(this).ckeditor({
            extraPlugins: 'wordcount,notification',
            removePlugins: 'elementspath',
            language: 'es',
            toolbarGroups: [
                { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                { name: 'forms', groups: [ 'forms' ] },
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                { name: 'links', groups: [ 'links' ] },
                { name: 'insert', groups: [ 'insert' ] },
                { name: 'styles', groups: [ 'styles' ] },
                { name: 'colors', groups: [ 'colors' ] },
                { name: 'tools', groups: [ 'tools' ] },
                { name: 'others', groups: [ 'others' ] },
                { name: 'about', groups: [ 'about' ] }
            ],
            removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,CreateDiv,Language,Anchor,Flash,Image,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,ShowBlocks,About',
            height: 200,
            toolbarCanCollapse: true,
            wordcount: {
                showParagraphs: false,
                showWordCount: true,
                showCharCount: false,
                countSpacesAsChars: false,
                countHTML: false,
                maxWordCount: limit,
                maxCharCount: -1
            }
        });
    });

    $(".limit_words").on('keyup', function() {
        var words = ($.trim($(this).val()).match(/\S+/g) == null) ? 0 : $.trim($(this).val()).match(/\S+/g).length,
            limit = parseInt($.trim($(this).attr("data-limit"))),
            display = $.trim($(this).attr("data-display"));

        if (words > limit) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, limit).join(" ");
            // Add a space at the end to make sure more typing creates new words
            $(this).val(trimmed + " ");
        }else{
            // $('#display_count').text(words);
            $(display).text(words);
        }
    });
});