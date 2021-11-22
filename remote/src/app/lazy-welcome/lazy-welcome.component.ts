import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppStateFacade } from '../app-state.facade';

@Component({
  selector: 'app-lazy-welcome',
  templateUrl: './lazy-welcome.component.html',
  styleUrls: ['./lazy-welcome.component.scss']
})
export class LazyWelcomeComponent implements AfterViewInit {

  constructor(
    public appState: AppStateFacade,
    private _snackBar: MatSnackBar,
  ) { }

  ngAfterViewInit(): void {
    try {
      this.appState.importantMethod();
    }
    catch {
      this._snackBar.open('Error, app is not initialized !!', 'X', {
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  }
}
