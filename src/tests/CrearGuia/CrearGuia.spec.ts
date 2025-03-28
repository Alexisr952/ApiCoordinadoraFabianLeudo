import { test, expect, request } from '@playwright/test';

test('Crear una guía en Coordinadora', async () => {
    const apiContext = await request.newContext({
        baseURL: 'https://apiv2-test.coordinadora.com',
    });

    const datosPrueba = {
        "identificacion": "890904713",
        "divisionCliente": "00",
        "idProceso": 100001,
        "codigoPais": 170,
        "valoracion": "200000",
        "tipoCuenta": 3,
        "contenido": "reloj",
        "codigoProducto": "",
        "nivelServicio": 22,
        "detalle": [
            {
                "pesoReal": 1,
                "largo": 5,
                "ancho": 5,
                "alto": 3,
                "unidades": 1,
                "ubl": 0,
                "referencia": "ref detalle"
            }
        ],
        "datosRemitente": {
            "identificacion": "1020304044",
            "detalleRemitente": "Casa",
            "tipoViaRemitente": "7",
            "viaRemitente": "15",
            "numeroRemitente": "53 48",
            "codigoCiudadRemitente": "76001000",
            "descripcionTipoViaRemitente": "Calle",
            "direccionRemitente": "Calle 53 # 53 48",
            "nombreRemitente": "Remitente Prueba",
            "indicativoRemitente": "57",
            "celularRemitente": "3007876543",
            "correoRemitente": "pruebaremitente@coo.com"
        },
        "datosDestinatario": {
            "identificacion": "1254511109",
            "detalleDestinatario": "Casa",
            "tipoViaDestinatario": "5",
            "viaDestinatario": "15",
            "numeroDestinatario": "45 93",
            "descripcionTipoViaDestinatario": "Calle",
            "direccionDestinatario": "calle 45 93",
            "codigoCiudadDestinatario": "76001000",
            "nombreDestinatario": "Destinatario Prueba",
            "indicativoDestinatario": "57",
            "celularDestinatario": "3216549825",
            "correoDestinatario": "pruebadestinatario@coor.com"
        },
        "valorRecaudar": "38500",
        "referenciaRecaudo": "ref recaudo prueba",
        "tipoGuia": 1,
        "referenciaGuia": "Ref guía",
        "usuario": "prueba@coordinaora.com",
        "fuente": "envios",
        "observaciones": "prueba RCE"
    };

    const response = await apiContext.post('/guias/cm-guias-ms/guia', {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: datosPrueba,
    });

    // Logs para inspeccionar la respuesta
    console.log('Status:', response.status());
    console.log('Response:', await response.text());

    // Validar el código de respuesta
    expect([200, 201]).toContain(response.status());
});
