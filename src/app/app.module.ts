import { AngularFireStorageModule } from '@angular/fire/compat/storage';
//#region Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//#endregion

//#region Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//#endregion

//#region Modules
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
//#endregion

//#region Components
import { AppComponent } from './app.component';
//#endregion

//#region Misc
import { getPageAnimation } from './core/consts/animations.const';
import * as CordovaSQLLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core/ngrx/index';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgRxModule } from './core/modules/ngrx.module';
//#endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md',
      navAnimation: getPageAnimation,
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot({
      driverOrder: [CordovaSQLLiteDriver._driver, Drivers.IndexedDB],
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgRxModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule { }
