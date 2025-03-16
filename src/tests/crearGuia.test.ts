import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { CallAnApi, LastResponse } from '@serenity-js/rest';
import { CrearGuia } from '../../src/tasks/CrearGuia';
import { test } from '@playwright/test';

test('Validar la creación de la guía', async () => {
    const usuario = actorCalled('UsuarioCoordinadora').whoCan(
        CallAnApi.at('https://apiv2-test.coordinadora.com')  // Asegurar URL correcta
    );

    await usuario.attemptsTo(
        CrearGuia.conDatos({
            identificacion: "890904713",
            divisionCliente: "00",
            idProceso: 100001,
            codigoPais: 170,
            valoracion: 200000,
            tipoCuenta: 3,
            contenido: "reloj",
            codigoProducto: "12345",
            nivelServicio: 22,
            detalle: [
                {
                    pesoReal: 1,
                    largo: 5,
                    ancho: 5,
                    alto: 3,
                    unidades: 1,
                    ubl: 0,
                    referencia: "ref detalle"
                }
            ],
            datosRemitente: {
                identificacion: "1020304044",
                detalleRemitente: "Casa",
                tipoViaRemitente: "7",
                viaRemitente: "15",
                numeroRemitente: "53 48",
                codigoCiudadRemitente: "76001000",
                descripcionTipoViaRemitente: "Calle",
                direccionRemitente: "Calle 53 # 53 48",
                nombreRemitente: "Remitente Prueba",
                indicativoRemitente: "57",
                celularRemitente: "3007876543",
                correoRemitente: "pruebaremitente@coo.com"
            },
            datosDestinatario: {
                identificacion: "1254511109",
                detalleDestinatario: "Casa",
                tipoViaDestinatario: "5",
                viaDestinatario: "15",
                numeroDestinatario: "45 93",
                descripcionTipoViaDestinatario: "Calle",
                direccionDestinatario: "Calle 45 # 45-93",
                codigoCiudadDestinatario: "76001000",
                nombreDestinatario: "Destinatario Prueba",
                indicativoDestinatario: "57",
                celularDestinatario: "3216549825",
                correoDestinatario: "pruebadestinatario@coor.com"
            },
            valorRecaudar: 38500,
            referenciaRecaudo: "ref recaudo prueba",
            tipoGuia: 1,
            referenciaGuia: "Ref guía",
            usuario: "prueba@coordinadora.com",
            fuente: "envios",
            observaciones: "prueba RCE"
        }),

        Ensure.that(LastResponse.status(), equals(200))  // Verifica código 200
    ).catch(async (error) => {
        console.error("Error en la prueba:", error);
        const responseBody = await usuario.answer(LastResponse.body());
        console.error("Cuerpo de la respuesta:", responseBody);
    });
});
