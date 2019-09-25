import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, ReplaySubject } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'; 
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser = new ReplaySubject<User>(1) ;
  constructor(private http: HttpClient) { }

  selectUser(user: User) {
    this.selectedUser.next(user);
  }

  getSelectedUser() {
    return this.selectedUser.asObservable();
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${BASE_URL}/user`).pipe(
      map((user: User[]) => {
        return user;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`${BASE_URL}/user/${user.id}`, user).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(`${BASE_URL}/user/${user.id}`).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
