import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../models/user';

@Injectable()
export class ProfileProvider {

  constructor(private afStore: AngularFirestore) {
  }

  create(user: User) {
    return this.afStore.doc<any>(`profile/${user.id}`).set(user.profile)
  }

}
