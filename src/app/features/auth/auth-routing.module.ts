import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PATHS } from '../../core/consts/paths.const';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

const routes: Routes = [
  // #region Features
  {
    path: PATHS.auth.GettingStarted._RelativePath,
    component: GettingStartedComponent
  },
  {
    path: PATHS.auth.Login._RelativePath,
    component: LoginComponent
  },
  {
    path: PATHS.auth.Register._RelativePath,
    component: RegisterComponent
  },
  {
    path: PATHS.auth.ForgotPassword._RelativePath,
    component: ForgetPasswordComponent
  },
  // #endregion
  //#region Redirects
  {
    path: '',
    redirectTo: PATHS.auth.GettingStarted._RelativePath,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: PATHS.auth.GettingStarted._RelativePath,
    pathMatch: 'full',
  },
  //#endregion
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
