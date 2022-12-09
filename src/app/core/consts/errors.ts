import { Action } from "@ngrx/store";
import { AuthErrorCodes } from "firebase/auth";

export type ErrorAction = Action & ErrorActionProps;
export type ErrorActionProps = {
  error?: any;
  toast?: {
    message: string;
    buttonText?: string;
    color: 'danger';
    position?: 'top' | 'bottom' | 'middle';
  };
};

export const OptionalErrorActionProps = (props: ErrorActionProps = {}) => props;

export const FirebaseErrors = {
  getAuthError(errorCode: string) {
    switch (errorCode) {
      case AuthErrorCodes.INVALID_PASSWORD:
      case AuthErrorCodes.INVALID_EMAIL:
        return "Your email or password is incorrect."
      case AuthErrorCodes.EMAIL_EXISTS:
        return "Email address is already in use by an existing user."
      case AuthErrorCodes.NETWORK_REQUEST_FAILED:
        return "Please check your internet connection and try again."
      case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
        return "Too many incorrect attempts have been made. Please try again in 1 minute."
      case AuthErrorCodes.USER_DISABLED:
        return "This user account has been disabled."
      case AuthErrorCodes.CREDENTIAL_TOO_OLD_LOGIN_AGAIN:
        return "This operation is sensitive and requires recent authentication. Log in again before retrying this request."
      case AuthErrorCodes.TIMEOUT:
        return "The action took too long. Please check your network connection and try again."
      case AuthErrorCodes.POPUP_BLOCKED:
        return "The login popup has been blocked. Please allow popups to continue."
      case AuthErrorCodes.INVALID_OOB_CODE:
        return "This link is invalid. Please request a new link."
      default: return "Oops! Something went wrong. Please try again"
    }
  }
}
