import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, IonicModule],
  declarations: [AuthComponent, GettingStartedComponent]
})
export class AuthModule { }
