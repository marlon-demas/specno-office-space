import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { EmailRegex, PasswordRegex } from '../../../../core/consts/regex';
import { PATHS } from '../../../../core/consts/paths.const';
import { PRIVACY_POLICY_ROUTE } from '../../../../core/consts/external-routes';
import { PasswordValidator } from '../../../../core/consts/validators';
import { Store } from '@ngrx/store';
import { State } from '../../../../core/ngrx';
import { userActions } from "../../../../core/ngrx/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  EmailRegex = EmailRegex;
  PasswordRegex = PasswordRegex;
  get ConfirmPasswordRegex() {
    return new RegExp(this.password);
  }
  PasswordValidator = PasswordValidator;

  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    private navController: NavController,
    private inAppBrowser: InAppBrowser,
    private platform: Platform,
    private store: Store<State>
  ) { }

  handleRouteToLogin() {
    this.navController.navigateForward(PATHS.auth.Login._Path);
  }

  handleOpenPrivacyPolicy() {
    this.inAppBrowser.create(
      PRIVACY_POLICY_ROUTE,
      this.platform.is('ios') ? '_blank' : '_system',
      'location=no,footer=yes'
    );
  }

  handleSignUp() {
    this.store.dispatch(userActions.ReqRegisterWithEmail({ email: this.email, password: this.password }));
  }
}
