import {OnInit, Injectable} from '@angular/core';
import {MessageService} from "../util/service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Hero} from "../model/hero";
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService implements OnInit {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  ngOnInit() {
  }
  private Url = 'http://localhost:8080/';

  login():Observable<Hero>{
    const url = `${this.Url}/1`;
    console.log(`service get the request url: ${url}`);
    return  this.http.get<Hero>("http://localhost:8080/cHeroes/1").pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero>('getHeroes', null))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`LoginService: ${message}`);
  }
}
