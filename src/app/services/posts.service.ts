import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  apiUrl= environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts():Observable<any> { return this.http.get<any[]>( this.apiUrl + 'posts') }
  getPostById(id:string ):Observable<any> { return this.http.get<any>( this.apiUrl + 'posts/' + id )}
  
}
