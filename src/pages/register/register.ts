import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  async register(user: User) {
    try {
      let userAuth = await this.userProvider.register(user)
      user.id = userAuth.user.uid
      console.log(user)
    } catch (error) {
      console.error(error)
    }
  }
}
