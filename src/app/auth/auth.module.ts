import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: []
})

export class AuthModule {

}
