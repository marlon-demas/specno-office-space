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
import { FirebaseModule } from './core/modules/firebase.module';
import { IonicStorageModule } from '@ionic/storage-angular';
//#endregion

//#region Components
import { AppComponent } from './app.component';
//#endregion

//#region Misc
import { getPageAnimation } from './core/consts/animations.const';
import * as CordovaSQLLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';
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
    FirebaseModule,
    IonicStorageModule.forRoot({
      driverOrder: [CordovaSQLLiteDriver._driver, Drivers.IndexedDB],
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
