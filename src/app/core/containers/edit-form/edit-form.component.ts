import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit, OnDestroy, AfterViewInit{
  selectedUser: User;
  userServiceSubscription: Subscription;
  @ViewChild('userForm', {static: true}) userFormComponent: UserFormComponent;
  constructor(
    private userService: UserService,
    private router: Router) {  }

  ngOnInit() {
    // this.getSelectedUser();
  }

  ngAfterViewInit() {
    this.getSelectedUser();
  }

  ngOnDestroy() {
    this.userServiceSubscription.unsubscribe();
  }


  getSelectedUser() {
    this.userServiceSubscription = this.userService.getSelectedUser().subscribe((user: User) => {
       this.userFormComponent.userForm.patchValue(user);
    });
  }

  clearForm() {
    this.userFormComponent.userForm.reset();
  }

  editUser() {
    this.userService.editUser(this.userFormComponent.userForm.getRawValue()).subscribe((data) => {
       this.router.navigate(['']);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

}
