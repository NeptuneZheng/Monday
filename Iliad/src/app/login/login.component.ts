import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../services/service.login.component";
import {Hero} from "../model/hero";
import {User} from "../model/user";
import {tap} from "rxjs/internal/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  checkoutForm;
  result: boolean;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ){

    this.checkoutForm = formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    console.warn('Your login info has been submitted', this.checkoutForm.value);
    this.getHero();
  }

  getHero(){
    console.log("get the request start");
    let user = new User(this.checkoutForm.value.name,this.checkoutForm.value.password);
    let tmp = this.loginService.login(user).forEach(next =>{this.result = next});
    console.log("get the request finish: ");

  }

}
