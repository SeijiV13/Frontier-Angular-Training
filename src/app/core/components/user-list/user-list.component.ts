import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() emitSelectedUser = new EventEmitter();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  getSelectedUser(){
    this.emitSelectedUser.emit(this.users[0]);
  }

  changeRoute(route, user: User) {
    this.userService.selectUser(user);
    this.router.navigate([route]);
  }

  deleteUser(user: User) {
     this.emitSelectedUser.emit({ user, action : 'delete' });
  }

}
