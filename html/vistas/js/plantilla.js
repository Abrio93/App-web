//?=================================
//*=         MENU SIDEBAR          =
//?===============================*/

// $('.sidebar-menu').tree()

//?=================================
//*=          DATATABLES           =
//?===============================*/

$(".tablas").DataTable({
    "pageLength": 8, // Muestra 5 registros por defecto
    "lengthMenu": [5, 8, 10, 20, 25, 50, 100], // Opciones para el usuario
    "language": {
        
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });

    //?=================================
    //*=            ICHECK             =
    //?===============================*/

    //? iCheck para los checkbox y los radio inputs
    // $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
    //     checkboxClass: 'icheckbox_minimal-blue',
    //     radioClass   : 'iradio_minimal-blue'
    // })