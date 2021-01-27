import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {Onbord} from '../onbord';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email
  password
  loggonInUser
  constructor(public authenticateService: AuthenticateService, public router: Router) { }

  ngOnInit() {
  }


  login() {
    this.authenticateService.signInUser(this.email, this.password)
    this.loggonInUser = this.authenticateService.signInUser
   

  }
}
