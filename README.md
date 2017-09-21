# proyecto-acopio
Sistema de recolección de información de centros de acopio


## Pasos para ejecutar API

1.- Instalar Apache o alguna herramienta que te permita montar un servidor local con Apache (MAMP, XAMPP, WAMP, entreo otros).

2.- Instalar [postgresql](https://www.postgresql.org/) 

3.- Apuntar el virtual host hacia la carpeta backend/public_html/

4.- Importar la bd "acopiobd" con el siguiente comando
	
	$ pg_dump -U username -s acopiodb < acopiodb.dmp

	Nota: recuerda cambiar username por el nombre de usuario que se genero al instalar postgresql

5.- Podra acceder desde el navegador a una dirección similiar a esta (http://localhost/) donde vera una pantalla de bienvenida, verifica desde que puerto se esta conectado Apache

## Pasos para el cliente