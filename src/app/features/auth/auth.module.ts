import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';
import { SimplePageLayoutModule } from '../../shared/layouts/simple-page-layout/simple-page-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputModule } from '../../shared/components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, IonicModule, SimplePageLayoutModule, InputModule, FormsModule],
  declarations: [AuthComponent, GettingStartedComponent, RegisterComponent]
})
export class AuthModule { }
