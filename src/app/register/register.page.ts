import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {Onbord} from '../onbord';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email
  password
  name
  surname
  age
  cellNo
  user: Onbord
  constructor(public authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }


  signUp() {

    this.user = new Onbord(this.name, this.surname, this.email,this.age,this.cellNo,this.password);
    console.log(this.user);
    this.authenticateService.signUpUser(this.user)
  }

}
