import { Ensure, equals } from '@serenity-js/assertions';
import { UsuarioCoordinadora } from '../../actors/UsuarioCoordinadora';
import { ValidarError } from '../../tasks/ValidarError';
import { LastResponse } from '@serenity-js/rest';
import { test } from '@playwright/test';

test('Validar error en la creación de la guía', async () => {
    await UsuarioCoordinadora.attemptsTo(
        ValidarError.conDatos({
            identificacion: '', // Campo vacío para forzar error
            divisionCliente: '00',
            valoracion: '200000',
            tipoCuenta: 3,
            contenido: 'reloj',
            codigoProducto: '',
            nivelServicio: 22,
            detalle: [{
                pesoReal: 1,
                largo: 5,
                ancho: 5,
                alto: 3,
                unidades: 1,
                ubl: 0,
                referencia: 'ref detalle'
            }]
        })
    );


    const statusCode = await LastResponse.status();
    console.log(`🔍 Código de respuesta recibido: ${statusCode}`);

    Ensure.that(statusCode, equals(400));
});
