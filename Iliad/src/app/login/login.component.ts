import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../services/service.login.component";
import {Hero} from "../model/hero";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  checkoutForm;

  constructor(
    private loginService: LoginService,
  ){
    this.checkoutForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(){
    console.warn('Your login info has been submitted', this.checkoutForm.value);
    this.getHero();
    this.checkoutForm.patchValue({
      name: 'success'
    })
  }

  getHero():Observable<Hero>{
    console.log("get the request start");
    var tmp = this.loginService.login();
    tmp.forEach(next => console.log(next));
    console.log("get the request finish: ");

    return tmp
  }

}
