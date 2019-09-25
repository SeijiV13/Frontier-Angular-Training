import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersList: Observable<User[]>;
  constructor() { }

  ngOnInit() {
  }
}
