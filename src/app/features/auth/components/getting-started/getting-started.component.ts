import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PATHS } from '../../../../core/consts/paths.const';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent {

  constructor(private navController: NavController) { }

  handleRouteToRegister() {
    this.navController.navigateForward(PATHS.auth.Register._Path)
  }

  handleRouteToHome() {
    // TODO: Route to home page
  }

}
