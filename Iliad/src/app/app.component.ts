import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import {Hero} from './model/hero'
import {MessageService} from "./util/service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class AppComponent {
  private heroesUrl = '/cHeroes';
  title = 'Iliad';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHero(id: number):Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
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
    this.messageService.add(`HeroService: ${message}`);
  }

}
