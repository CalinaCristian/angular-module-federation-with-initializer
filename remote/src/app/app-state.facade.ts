import {
  Injectable,
  Injector,
} from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AppStateFacade {
    name = 'Marcel';
    importantMethod!: () => void;

    private _isInitialized = false;

    constructor(
        private _injector: Injector,
    ) { }

    public initialize() {
        if (this._isInitialized) { return of(true); }

        this.name = 'Cristi';

        this.importantMethod = () => { return 'Important result' }

        return of(true).pipe(
            delay(5000)
        )
    }
}