import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from '../models/User';
const BASE_URL ="http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUserSubject = new BehaviorSubject<User>();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
     return this.http.get(`${BASE_URL}/user`).pipe(
       map((data: User[]) => {
         return data;
       },
       catchError((error) => {
         return throwError(error);
       })
       )
     );
  }

  createUser(user: User): Observable<any> {
     return this.http.post(`${BASE_URL}/user`, user).pipe(
       map((data: any) => {
         return data;
       })
     )
  }

}
