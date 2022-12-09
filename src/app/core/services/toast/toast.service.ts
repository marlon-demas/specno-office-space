import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DEFAULT_TOAST_DURATION, DEFAULT_TOAST_BUTTON_ROLE, DEFAULT_TOAST_POSITION, DEFAULT_TOAST_COLOR } from '../../consts/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async show(
    message: string,
    buttonText?: string,
    color = DEFAULT_TOAST_COLOR,
    position = DEFAULT_TOAST_POSITION,
    duration = DEFAULT_TOAST_DURATION
  ) {
    const toast = await this.toastController.create({
      message,
      color,
      position,
      duration,
      buttons: [
        {
          text: buttonText,
          role: DEFAULT_TOAST_BUTTON_ROLE,
        }
      ]
    });
    toast.present();
    return toast;
  }
}
