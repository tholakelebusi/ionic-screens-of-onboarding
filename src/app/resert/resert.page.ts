import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';

@Component({
  selector: 'app-resert',
  templateUrl: './resert.page.html',
  styleUrls: ['./resert.page.scss'],
})
export class ResertPage implements OnInit {

  constructor(private authService : AuthenticateService) { }

  ngOnInit(): void {
  }

   onSubmit(form) {
   
this.authService.resetPassword(form);


}

  forgotPassword(email) {
    this.authService.ForgotPassword(email);
  }

}
