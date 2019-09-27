import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
   userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
   this.initializeForm();
   this.getSelectedUser();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: ['']
    });
  }

  getSelectedUser() {
    this.userService.selectedUserSubject.subscribe((data: User) => {
      console.log(data);
    })
  }

}
