import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Store, Select } from '@ngxs/store';
import { GetListOfUsers } from '../../actions/user.action';
import { UserStateModel, UserState } from '../../states/user.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(UserState.getListOfUsers) getListOfUser$: Observable<User[]>;
  usersList: Observable<User[]>;
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.usersList = this.getListOfUser$;
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(new GetListOfUsers()).subscribe();
  }

  createUser() {
    this.router.navigate(['/create']);
  }
}
