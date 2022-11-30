import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from './core/consts/paths.const';

const routes: Routes = [
  //#region Features
  {
    path: PATHS.auth._RelativePath,
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },

  //#endregion
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PATHS.auth._RelativePath,
  },
  {
    path: '**',
    redirectTo: PATHS.auth._RelativePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
