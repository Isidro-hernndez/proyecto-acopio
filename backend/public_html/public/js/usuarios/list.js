$(document).ready(function(){
	function datosFiltros(d){
        d.term_search = $.trim($("#search").val());
    }

	var tblUsuarios = $("#tblUsuarios").DataTable({
        searching: false,
        responsive: true,
        language: {
            processing: "Cargando contenido de la tabla...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Registros del _START_ al _END_ de _TOTAL_ registros",
            infoEmpty: "No se encontro la información solicitada",
            emptyTable: "No existen registros",
            paginate: {
                first:      "Primero",
                previous:   "Anterior",
                next:       "Siguiente",
                last:       "Último"
            }
        },
        processing: true,
        serverSide: true,
        ajax: {
            url: "listado/",
            type: "POST",
            data: datosFiltros
        },
        order: [[0, 'asc']],
        columns: [
            { name: "id", orderable: true, data: "id" },
            { name: "nombre", orderable: true, data: "nombre" },
            { name: "apaterno", orderable: true, data: "apaterno" },
            { name: "amaterno", orderable: true, data: "amaterno" },
            { name: "puesto", orderable: true, data: "puesto" },
            { name: "rol", orderable: true, data: "rol" },
            { name: "email", orderable: true, data: "email" },
            { name: "acciones", orderable: false, data: "acciones" }
        ],
        drawCallback: function( settings ) {

        }
    });

    $("#frmSearch").submit(function(event){
    	event.preventDefault();
    	tblUsuarios.draw();
    });
});