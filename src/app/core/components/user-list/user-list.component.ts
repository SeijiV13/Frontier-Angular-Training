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
  @Input() users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  changeRoute(route, user: User) {
    this.userService.selectedUserSubject.next(user);
    this.router.navigate([route]);
  }


}
