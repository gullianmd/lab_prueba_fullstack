# INSTRUCCIONES

El proyecto consta de 3 servicios :

1. Base de datos
2. Backend
3. Frontend

No necesitan de ninguna configuracion adicional. lo único que usted debe hacer es ejecutar el siguiente comando:

`docker-compose up -d`

y luego ir al sitio web:

> http://localhost:3000

### Backend

Las rutas implementadas son las siguientes

* localhost:3250/login
* localhost:3250/sets
* localhost:3250/sets/{set_id}/cards
* localhost:3250/cards/{card_id}

Lo unico diferente es la ruta de login, la que permite obtener un JWT para utilizar las rutas. Como medida de seguridad.

las variables de entorno son las siguientes

```
NODE_ENV=development
PORT=3250
DB_HOST=db
DB=adm_test
DB_USR=ash
DB_PWD=root
DB_PORT=5432
SECRET_KEY=superSecretKey
ALLOWED_USER=apiUsr
ALLOWED_PWD=apiPwd
```

ALLOWED_USER y ALLOWED_PWD corresponde a un usuario por defecto para autenticarse (solo para la prueba)

SECRET_KEY : Un valor para generar JWT

### Frontend

Utiliza las siguientes variables de entorno

```
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_BACKEND_API_URL=http://backend:3250
NEXT_PUBLIC_BACKEND_USR=apiUsr
NEXT_PUBLIC_BACKEND_PWD=apiPwd
```

Todas estas son para comunicarse con el backend
