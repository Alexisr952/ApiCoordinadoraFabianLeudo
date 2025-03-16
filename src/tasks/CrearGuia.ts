import { Interaction } from '@serenity-js/core';
import { CallAnApi, Send, PostRequest, LastResponse } from '@serenity-js/rest';
import { Ensure, equals, not, property } from '@serenity-js/assertions';

export class CrearGuia extends Interaction {
    static conDatos(datos: object) {
        return new CrearGuia(datos);
    }

    constructor(private datos: object) {
        super(`#actor crea una guía con los datos proporcionados`);
    }

    performAs(actor): Promise<void> {
        return actor.attemptsTo(
            // Enviar la solicitud POST
            Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(this.datos)),

            // Validar que el estado de la respuesta sea 201 (creado)
            Ensure.that(LastResponse.status(), equals(200)),

            // Validar que la respuesta tiene la propiedad 'guia' y no está vacía
            Ensure.that(LastResponse.body(), property('guia', not(equals('')))),

            // Validar que el estado devuelto sea "creado"
            Ensure.that(LastResponse.body(), property('estado', equals('creado')))
        ).then(() => {
            // Log de la respuesta completa para depuración
            LastResponse.body().then(response => {
                console.log('✅ Guía creada correctamente:', response);
            });
        });
    }
}
