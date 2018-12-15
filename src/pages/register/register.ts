import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';
import { ProfileProvider } from '../../providers/profile/profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private user: User
  private registerForm: FormGroup
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private profileProvider: ProfileProvider, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])]
    })
  }

  async register() {
    // Check input validation
    if (this.registerForm.valid) {
      // Validation success
      try {
        this.user = new User("",this.registerForm.controls.email.value, this.registerForm.controls.password.value, new Profile(this.registerForm.controls.username.value,this.registerForm.controls.firstname.value,this.registerForm.controls.lastname.value))
        let userAuth = await this.userProvider.create(this.user)
        this.user.id = userAuth.user.uid
        await this.profileProvider.create(this.user)
        console.log(this.user)
      } catch (error) {
        console.error(error)
      }
    } else {
      // Validation fail
      console.log('All inputs must be filled')
    }
  }
}
