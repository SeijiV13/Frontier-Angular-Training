import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersList: Observable<User[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersList = this.userService.getUsers();
  }

  execAction(object) {
    if (object.action === 'delete') {
      this.userService.deleteUser(object.user).subscribe((data) =>{
        this.getUsers();
      });
    }

  }
}
