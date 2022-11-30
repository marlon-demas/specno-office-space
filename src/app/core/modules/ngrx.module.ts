import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers, State } from '../ngrx';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule],
})
export class NgRxModule { }
