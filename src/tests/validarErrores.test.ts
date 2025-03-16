import { test, expect } from '@playwright/test';

test('Validar error en la API', async ({ request }) => {
    const response = await request.post('/guias/cm-guias-ms/guia', {
        data: {
            identificacion: '', // Valor incorrecto
            divisionCliente: '00',
            valoracion: '200000',
            tipoCuenta: 3,
            contenido: 'reloj',
            codigoProducto: '',
            nivelServicio: 22,
            detalle: [
                {
                    pesoReal: 1,
                    largo: 5,
                    ancho: 5,
                    alto: 3,
                    unidades: 1,
                    ubl: 0,
                    referencia: 'ref detalle'
                }
            ]
        }
    });

    console.log('Status:', response.status());
    console.log('Response:', await response.json());

    expect(response.status()).toBe(400); // Validar error esperado
});
