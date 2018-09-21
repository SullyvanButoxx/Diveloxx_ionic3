import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@Injectable()
export class UserProvider {

  constructor(private afAuth: AngularFireAuth) {
  }

  register(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
  }
}
