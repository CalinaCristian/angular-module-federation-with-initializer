import {
  APP_INITIALIZER,
  Injector,
  Provider,
} from '@angular/core';

import { AppStateFacade } from './app-state.facade';

export function initializer(
    appState: AppStateFacade,
) {
    return async () => {
        await appState.initialize().toPromise();
    };
}

export const REMOTE_INITIALIZER: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [
        AppStateFacade,
        Injector,
    ],
    multi: true,
};
