import { Task } from '@serenity-js/core';
import { CallAnApi, Send, PostRequest } from '@serenity-js/rest';

export const ValidarError = {
    conDatos: (datos: any) =>
        Task.where(`#actor valida errores en la creación de la guía`,
            Send.a(PostRequest.to('/guias/cm-guias-ms/guia')
                .with({
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                })
            )
        )
};
