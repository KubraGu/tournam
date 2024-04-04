import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Méthode pour créer un nouvel utilisateur
  createUser(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:4200/api/user', userData);
  }


}
