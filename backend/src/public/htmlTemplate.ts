export const htmlTemplate = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RESTful artifact - [NAME]</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: start;
            height: 100vh;
            margin: 2rem;
            /*background-color: #ffffff; /* Color de fondo para visualizar mejor los bordes */
        }
        table {
            border-collapse: collapse;
            width: 80%; /* Puedes ajustar el ancho según lo necesites */
            max-width: 600px; /* Limita el ancho máximo */
        }
        th, td {
            /* border: 1px solid #ddd; */
            padding: 8px;
            text-align: center;
        }
        thead, tfoot {
            /* background-color: #dddddd; */
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Artefacto : [tupuesto-api]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <th>Status : OK</th>
            </tr>
            <tr>
                <td>Servicio intermediario entre plataforma web y base de datos</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Tupuesto.cl</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
`