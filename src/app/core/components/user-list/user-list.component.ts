import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Store } from '@ngxs/store';
import { SelectUser, DeleteUser } from '../../actions/user.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  constructor(private router: Router,
              private userService: UserService,
              private store: Store) { }

  ngOnInit() {
  }

  changeRoute(route, user: User) {
    this.store.dispatch(new SelectUser(user)).subscribe(() => {
      this.router.navigate([route]);
    });
  }

  deleteUser(id: string) {
    this.store.dispatch(new DeleteUser(id)).subscribe();
  }


}
