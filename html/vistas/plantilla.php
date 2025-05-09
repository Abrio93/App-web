<?php

session_start();

?>

<!DOCTYPE html>
<html lang="es"> <!--begin::Head-->

<head>

    <?php
    //? COMIENZO DEL DOCUMENTO YA QUE EL HEAD DE LA APP Y DEL LOGIN SON DISTINTOS
    include('modulos/comienzo.php');

    if (isset($_SESSION["sesion_iniciada"]) && $_SESSION["sesion_iniciada"] == "SI") {

        //? CABECERA
        include('modulos/cabecera.php');

        //? MENU
        include('modulos/menu.php');

        //? CONTENIDO DEL WRAPPER
        if (isset($_GET['ruta'])) {
            if (
                $_GET['ruta'] == 'inicio' ||
                $_GET['ruta'] == 'usuarios' ||
                $_GET['ruta'] == 'salir'
            ) {
                include('modulos/' . $_GET['ruta'] . '.php');
            } else {
                include('modulos/error404.php');
            }
        } else {
            include('modulos/inicio.php');
        }

        //? FOOTER
        include('modulos/footer.php');
    ?>
        <script src="vistas/js/plantilla.js"></script>
        <script src="vistas/js/usuarios.js"></script>
        </body><!--end::Body-->

</html>
<?php
    } else {
        include('modulos/login.php');
    }
?>