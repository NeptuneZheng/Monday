import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from './model/hero'
import {HeroService} from "./services/services.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'Iliad';
  checkoutForm;

  constructor(
    private heroService: HeroService,
    private formBuilder: FormBuilder
  ){
    this.checkoutForm = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  onSubmit(loginData){
    console.warn('Your login info has been submitted', loginData);
  }

  getHero():Observable<Hero>{
    console.log("get the request start");
    var tmp = this.heroService.getHero();
    tmp.forEach(next => console.log(next));
    console.log("get the request finish: ");

    return tmp
  }
}
