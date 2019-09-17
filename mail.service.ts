import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from '../manul/url';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor( private http:HttpClient) { }

  datasend(data)
  {
    return this.http.post(`${url}valid`,data);
  }
}
