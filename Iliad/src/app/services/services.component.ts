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
  private heroesUrl = 'http://localhost:8080/cHeroes';

  getHero():Observable<Hero>{
    const url = `${this.heroesUrl}/1`;
    console.log(`service get the request url: ${url}`);
    // var h1 = this.http.get("http://localhost:8080/cHeroes/1").subscribe(data => console.log("testing ......"));
    // // var test = "https://www.baidu.com/";
    // // this.http.get("http://localhost:8080/cHeroes/1").subscribe(
    // //   date => {
    // //     console.log("testing ......");
    // //   }
    // // );
    // console.log(h1.toString());
    return  this.http.get<Hero>("http://localhost:8080/cHeroes/1");
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
