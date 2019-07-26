import {OnInit, Injectable} from '@angular/core';
import {MessageService} from "../util/service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Hero} from "../model/hero";
import {catchError, tap} from "rxjs/operators";
import {User} from "../model/user";

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

  login(usr: User): Observable<boolean>{
    const url = `${this.Url}/loginVerify`;
    console.log(`service get the request url: ${url} and params ${usr.name}` );
    // this.http.get(url).pipe();
    return this.http.post<boolean>(url,usr,httpOptions).pipe(
      tap(result => this.log('get server feedback of login' + result)),
      catchError(this.handleError<any>('getHeroes', null))
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
