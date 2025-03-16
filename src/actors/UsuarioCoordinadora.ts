import { actorCalled } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

// Exportamos la instancia del actor para que pueda ser usada en otros archivos
export const UsuarioCoordinadora = actorCalled('UsuarioCoordinadora').whoCan(
    CallAnApi.at('https://apiv2-test.coordinadora.com') // Verifica que la URL sea la correcta
);
