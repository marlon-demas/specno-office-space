import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  registerWithEmail(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

}
