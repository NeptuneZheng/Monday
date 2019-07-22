import {OnInit, Injectable} from '@angular/core';
import {MessageService} from "../util/service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Hero} from "../model/hero";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HeroService implements OnInit {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  ngOnInit() {
  }
}
