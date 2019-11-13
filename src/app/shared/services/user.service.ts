import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from '../models/User';
const BASE_URL ="http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUserSubject = new ReplaySubject<User>(1);

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

  updateUser(user: User): Observable<any> {
    return this.http.put(`${BASE_URL}/user/${user.id}`, user).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  deleteUser(id: User) {
    return this.http.delete(`${BASE_URL}/user/${id}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

}
