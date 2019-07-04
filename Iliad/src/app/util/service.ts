/**
 * Created by ZHENGNE on 7/4/2019.
 */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService{
  messages: string[] = [];

  add(message: string){
    this.messages.push(message)
  }

  clear(){
    this.messages = []
  }
}
