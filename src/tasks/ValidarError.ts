import { Task } from '@serenity-js/core';
import { Send, PostRequest } from '@serenity-js/rest';

export const ValidarError = {
    conDatos: (datos: any) =>
        Task.where(`#actor intenta validar errores en la creación de la guía`,
            Send.a(PostRequest.to('/guias/cm-guias-ms/guia') // Ajusta el endpoint
                .with({
                    headers: { 'Content-Type': 'application/json' },
                    body: datos
                })
            )
        ),
};
