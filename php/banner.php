<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <link rel="shortcut icon" href="img/favicon.png">
</head>

<body>
    <header class="header">
        <div class="logo">
            <a href="index.php"><img src="img/logo_transparent.png" alt="Logo de la marca"></a>
        </div>
        <input type="checkbox" id="menu-toggle" class="menu-toggle">
        <label for="menu-toggle" class="menu">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav class="nav-links">
            <ul>
                <li><a href="html/inicio.html" target="contenedor">Inicio</a></li>
                <li><a href="html/compra.html" target="contenedor">Compra</a></li>
                <li><a href="html/arriendo.html" target="contenedor">Arriendo</a></li>
                <li><a href="html/login.html" class="cta" target="contenedor">
                        <span>Iniciar Sesion</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a></li>
            </ul>
        </nav>
    </header>

    <section class="contenido" id="contenido">
        <iframe id="contenedor" class="contenedor" name="contenedor" src="" width="100%" height="655px">

        </iframe>
    </section>

</body>


</html>