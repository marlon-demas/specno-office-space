import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { PATHS } from '../../../core/consts/paths.const';

@Component({
  selector: 'app-simple-page-layout',
  templateUrl: './simple-page-layout.component.html',
  styleUrls: ['./simple-page-layout.component.scss'],
})
export class SimplePageLayoutComponent {

  constructor(private navController: NavController) { }

  @Input() headerText?: string;
  @Input() hideBack?: boolean;

  PATHS = PATHS;

  handleBack() {
    this.navController.back();
  }

}

@NgModule({
  declarations: [SimplePageLayoutComponent],
  exports: [SimplePageLayoutComponent],
  imports: [CommonModule, IonicModule.forRoot()],
})
export class SimplePageLayoutModule { }
